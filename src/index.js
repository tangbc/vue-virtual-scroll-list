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
    'dataSources.length' () {
      this.virtual.updateParam('uniqueIds', this.getUniqueIdFromDataSources())
      this.virtual.handleDataSourcesChange()
    },

    keeps (newValue) {
      this.virtual.updateParam('keeps', newValue)
      this.virtual.handleSlotSizeChange()
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

    // in page mode we bind scroll event to document
    if (this.pageMode) {
      this.updatePageModeFront()

      document.addEventListener('scroll', this.onScroll, {
        passive: false
      })
    }
  },

  beforeDestroy () {
    this.virtual.destroy()
    if (this.pageMode) {
      document.removeEventListener('scroll', this.onScroll)
    }
  },

  methods: {
    // get item size by id
    getSize (id) {
      return this.virtual.sizes.get(id)
    },

    // get the total number of stored (rendered) items
    getSizes () {
      return this.virtual.sizes.size
    },

    // return current scroll offset
    getOffset () {
      if (this.pageMode) {
        return document.documentElement[this.directionKey] || document.body[this.directionKey]
      } else {
        const { root } = this.$refs
        return root ? Math.ceil(root[this.directionKey]) : 0
      }
    },

    // return client viewport size
    getClientSize () {
      const key = this.isHorizontal ? 'clientWidth' : 'clientHeight'
      if (this.pageMode) {
        return document.documentElement[key] || document.body[key]
      } else {
        const { root } = this.$refs
        return root ? Math.ceil(root[key]) : 0
      }
    },

    // return all scroll size
    getScrollSize () {
      const key = this.isHorizontal ? 'scrollWidth' : 'scrollHeight'
      if (this.pageMode) {
        return document.documentElement[key] || document.body[key]
      } else {
        const { root } = this.$refs
        return root ? Math.ceil(root[key]) : 0
      }
    },

    // set current scroll position to a expectant offset
    scrollToOffset (offset) {
      if (this.pageMode) {
        document.body[this.directionKey] = offset
        document.documentElement[this.directionKey] = offset
      } else {
        const { root } = this.$refs
        if (root) {
          root[this.directionKey] = offset
        }
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
        const offset = shepherd[this.isHorizontal ? 'offsetLeft' : 'offsetTop']
        this.scrollToOffset(offset)

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

    // when using page mode we need update slot header size manually
    // taking root offset relative to the browser as slot header size
    updatePageModeFront () {
      const { root } = this.$refs
      if (root) {
        const rect = root.getBoundingClientRect()
        const { defaultView } = root.ownerDocument
        const offsetFront = this.isHorizontal ? (rect.left + defaultView.pageXOffset) : (rect.top + defaultView.pageYOffset)
        this.virtual.updateParam('slotHeaderSize', offsetFront)
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
        slotHeaderSize: 0,
        slotFooterSize: 0,
        keeps: this.keeps,
        estimateSize: this.estimateSize,
        buffer: Math.round(this.keeps / 3), // recommend for a third of keeps
        uniqueIds: this.getUniqueIdFromDataSources()
      }, this.onRangeChanged)

      // sync initial range
      this.range = this.virtual.getRange()
    },

    getUniqueIdFromDataSources () {
      const { dataKey } = this
      return this.dataSources.map((dataSource) => typeof dataKey === 'function' ? dataKey(dataSource) : dataSource[dataKey])
    },

    // event called when each item mounted or size changed
    onItemResized (id, size) {
      this.virtual.saveSize(id, size)
      this.$emit('resized', id, size)
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
      if (offset < 0 || (offset + clientSize > scrollSize + 1) || !scrollSize) {
        return
      }

      this.virtual.handleScroll(offset)
      this.emitEvent(offset, clientSize, scrollSize, evt)
    },

    // emit event in special position
    emitEvent (offset, clientSize, scrollSize, evt) {
      this.$emit('scroll', evt, this.virtual.getRange())

      if (this.virtual.isFront() && !!this.dataSources.length && (offset - this.topThreshold <= 0)) {
        this.$emit('totop')
      } else if (this.virtual.isBehind() && (offset + clientSize + this.bottomThreshold >= scrollSize)) {
        this.$emit('tobottom')
      }
    },

    // get the real render slots based on range data
    // in-place patch strategy will try to reuse components as possible
    // so those components that are reused will not trigger lifecycle mounted
    getRenderSlots (h) {
      const slots = []
      const { start, end } = this.range
      const { dataSources, dataKey, itemClass, itemTag, itemStyle, isHorizontal, extraProps, dataComponent, itemScopedSlots } = this
      for (let index = start; index <= end; index++) {
        const dataSource = dataSources[index]
        if (dataSource) {
          const uniqueKey = typeof dataKey === 'function' ? dataKey(dataSource) : dataSource[dataKey]
          if (typeof uniqueKey === 'string' || typeof uniqueKey === 'number') {
            slots.push(h(Item, {
              props: {
                index,
                tag: itemTag,
                event: EVENT_TYPE.ITEM,
                horizontal: isHorizontal,
                uniqueKey: uniqueKey,
                source: dataSource,
                extraProps: extraProps,
                component: dataComponent,
                scopedSlots: itemScopedSlots
              },
              style: itemStyle,
              class: `${itemClass}${this.itemClassAdd ? ' ' + this.itemClassAdd(index) : ''}`
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
    const { isHorizontal, pageMode, rootTag, wrapTag, wrapClass, wrapStyle, headerTag, headerClass, headerStyle, footerTag, footerClass, footerStyle } = this
    const paddingStyle = { padding: isHorizontal ? `0px ${padBehind}px 0px ${padFront}px` : `${padFront}px 0px ${padBehind}px` }
    const wrapperStyle = wrapStyle ? Object.assign({}, wrapStyle, paddingStyle) : paddingStyle

    return h(rootTag, {
      ref: 'root',
      on: {
        '&scroll': !pageMode && this.onScroll
      }
    }, [
      // header slot
      header ? h(Slot, {
        class: headerClass,
        style: headerStyle,
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
        style: wrapperStyle
      }, this.getRenderSlots(h)),

      // footer slot
      footer ? h(Slot, {
        class: footerClass,
        style: footerStyle,
        props: {
          tag: footerTag,
          event: EVENT_TYPE.SLOT,
          uniqueKey: SLOT_TYPE.FOOTER
        }
      }, footer) : null,

      // an empty element use to scroll to bottom
      h('div', {
        ref: 'shepherd',
        style: {
          width: isHorizontal ? '0px' : '100%',
          height: isHorizontal ? '100%' : '0px'
        }
      })
    ])
  }
})

export default VirtualList
