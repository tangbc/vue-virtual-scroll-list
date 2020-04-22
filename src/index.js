/**
 * virtual list default component
 */

import Vue from 'vue'
import Virtual from './virtual'
import { Item, Slot } from './item'
import { VirtualProps } from './props'

const EVENT_TYPE = {
  ITEM: 'item_resize',
  SLOT: 'slot_resize'
}
const SLOT_TYPE = {
  HEADER: 'header', // string value also use for aria role attribute
  FOOTER: 'footer'
}

const VirtualList = Vue.component('virtual-list', {
  props: VirtualProps,

  data () {
    return {
      range: null
    }
  },

  watch: {
    dataSources (newValue, oldValue) {
      if (newValue.length !== oldValue.length) {
        this.virtual.updateParam('uniqueIds', this.getUniqueIdFromDataSources())
        this.virtual.handleDataSourcesChange()
      }
    },

    start (newValue) {
      this.scrollToIndex(newValue)
    },

    offset (newValue) {
      this.scrollToOffset(newValue)
    }
  },

  created () {
    this.isHorizontal = this.direction === 'horizontal'
    this.directionKey = this.isHorizontal ? 'scrollLeft' : 'scrollTop'

    this.installVirtual()

    // listen item size change
    this.$on(EVENT_TYPE.ITEM, this.onItemResized)

    // listen slot size change
    if (this.$slots.header || this.$slots.footer) {
      this.$on(EVENT_TYPE.SLOT, this.onSlotResized)
    }
  },

  // set back offset when awake from keep-alive
  activated () {
    this.scrollToOffset(this.virtual.offset)
  },

  mounted () {
    // set position
    if (this.start) {
      this.scrollToIndex(this.start)
    } else if (this.offset) {
      this.scrollToOffset(this.offset)
    }
  },

  beforeDestroy () {
    this.virtual.destroy()
  },

  methods: {
    // set current scroll position to a expectant offset
    scrollToOffset (offset) {
      const { root } = this.$refs
      if (root) {
        root[this.directionKey] = offset || 0
      }
    },

    // set current scroll position to a expectant index
    scrollToIndex (index) {
      // scroll to bottom
      if (index >= this.dataSources.length - 1) {
        this.scrollToBottom()
      } else {
        const offset = this.virtual.getOffset(index)
        this.scrollToOffset(offset)
      }
    },

    // set current scroll position to bottom
    scrollToBottom () {
      const { shepherd } = this.$refs
      if (shepherd) {
        shepherd.scrollIntoView(false)

        // check if it's really scrolled to the bottom
        // maybe list doesn't render and calculate to last range
        // so we need retry in next event loop until it really at bottom
        setTimeout(() => {
          if (this.getOffset() + this.getClientSize() < this.getScrollSize()) {
            this.scrollToBottom()
          }
        }, 3)
      }
    },

    // reset all state back to initial
    reset () {
      this.virtual.destroy()
      this.scrollToOffset(0)
      this.installVirtual()
    },

    // ----------- public method end -----------

    installVirtual () {
      this.virtual = new Virtual({
        size: this.size, // also could be a estimate value
        slotHeaderSize: 0,
        slotFooterSize: 0,
        keeps: this.keeps,
        buffer: Math.round(this.keeps / 3), // recommend for a third of keeps
        uniqueIds: this.getUniqueIdFromDataSources()
      }, this.onRangeChanged)

      // sync initial range
      this.range = this.virtual.getRange()
    },

    getUniqueIdFromDataSources () {
      return this.dataSources.map((dataSource) => dataSource[this.dataKey])
    },

    // return current scroll offset
    getOffset () {
      const { root } = this.$refs
      return root ? Math.ceil(root[this.directionKey]) : 0
    },

    // return client viewport size
    getClientSize () {
      const { root } = this.$refs
      return root ? root[this.isHorizontal ? 'clientWidth' : 'clientHeight'] : 0
    },

    // return all scroll size
    getScrollSize () {
      const { root } = this.$refs
      return root ? root[this.isHorizontal ? 'scrollWidth' : 'scrollHeight'] : 0
    },

    // event called when each item mounted or size changed
    onItemResized (id, size) {
      this.virtual.saveSize(id, size)
    },

    // event called when slot mounted or size changed
    onSlotResized (type, size, hasInit) {
      if (type === SLOT_TYPE.HEADER) {
        this.virtual.updateParam('slotHeaderSize', size)
      } else if (type === SLOT_TYPE.FOOTER) {
        this.virtual.updateParam('slotFooterSize', size)
      }

      if (hasInit) {
        this.virtual.handleSlotSizeChange()
      }
    },

    // here is the rerendering entry
    onRangeChanged (range) {
      this.range = range
    },

    onScroll (evt) {
      const offset = this.getOffset()
      const clientSize = this.getClientSize()
      const scrollSize = this.getScrollSize()

      // iOS scroll-spring-back behavior will make direction mistake
      if (offset + clientSize > scrollSize || !scrollSize) {
        return
      }

      this.virtual.handleScroll(offset)
      this.emitEvent(offset, clientSize, scrollSize, evt)
    },

    // emit event in special position
    emitEvent (offset, clientSize, scrollSize, evt) {
      const range = this.virtual.getRange()
      if (this.virtual.isFront() && !!this.dataSources.length && (offset - this.topThreshold <= 0)) {
        this.$emit('totop', evt, range)
      } else if (this.virtual.isBehind() && (offset + clientSize + this.bottomThreshold >= scrollSize)) {
        this.$emit('tobottom', evt, range)
      } else {
        this.$emit('scroll', evt, range)
      }
    },

    // get the real render slots based on range data
    // in-place patch strategy will try to reuse components as possible
    // so those components that are reused will not trigger lifecycle mounted
    getRenderSlots (h) {
      const slots = []
      const { start, end } = this.range
      const { dataSources, dataKey, itemClass, itemTag, isHorizontal, extraProps, dataComponent } = this
      for (let index = start; index <= end; index++) {
        const dataSource = dataSources[index]
        if (dataSource) {
          if (dataSource[dataKey]) {
            slots.push(h(Item, {
              class: itemClass,
              props: {
                tag: itemTag,
                event: EVENT_TYPE.ITEM,
                horizontal: isHorizontal,
                uniqueKey: dataSource[dataKey],
                source: dataSource,
                extraProps: extraProps,
                component: dataComponent
              }
            }))
          } else {
            console.warn(`Cannot get the data-key '${dataKey}' from data-sources.`)
          }
        } else {
          console.warn(`Cannot get the index '${index}' from data-sources.`)
        }
      }
      return slots
    }
  },

  // render function, a closer-to-the-compiler alternative to templates
  // https://vuejs.org/v2/guide/render-function.html#The-Data-Object-In-Depth
  render (h) {
    const { header, footer } = this.$slots
    const { padFront, padBehind } = this.range
    const { rootTag, headerClass, headerTag, wrapTag, wrapClass, footerClass, footerTag } = this
    const padding = this.isHorizontal ? `0px ${padBehind}px 0px ${padFront}px` : `${padFront}px 0px ${padBehind}px`

    return h(rootTag, {
      ref: 'root',
      on: {
        '&scroll': this.onScroll
      }
    }, [
      // header slot
      header ? h(Slot, {
        class: headerClass,
        props: {
          tag: headerTag,
          event: EVENT_TYPE.SLOT,
          uniqueKey: SLOT_TYPE.HEADER
        }
      }, header) : null,

      // main list
      h(wrapTag, {
        class: wrapClass,
        attrs: {
          role: 'group'
        },
        style: {
          padding: padding
        }
      }, this.getRenderSlots(h)),

      // footer slot
      footer ? h(Slot, {
        class: footerClass,
        props: {
          tag: footerTag,
          event: EVENT_TYPE.SLOT,
          uniqueKey: SLOT_TYPE.FOOTER
        }
      }, footer) : null,

      // an empty element use to scroll to bottom
      h('div', {
        ref: 'shepherd'
      })
    ])
  }
})

export default VirtualList
