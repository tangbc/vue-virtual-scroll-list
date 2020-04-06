import Vue from 'vue'
import Item from './item'
import Virtual from './virtual'
import { defaultProps } from './props'

const VirtualList = Vue.component('virtual-list', {
  props: defaultProps,

  data () {
    return {
      range: null
    }
  },

  created () {
    this.isHorizontal = this.direction === 'horizontal'
    this.directionKey = this.isHorizontal ? 'scrollLeft' : 'scrollTop'

    this.virtual = new Virtual({
      keeps: this.keeps,
      disabled: this.disabled,
      estimateSize: this.estimateSize,
      buffer: Math.round(this.keeps / 3), // recommend for a third of keeps.
      uniqueIds: this.dataSources.map((dataSource) => dataSource[this.dataKey])
    }, this.onRangeChanged)

    // just for debug
    window.virtual = this.virtual

    // also need sync initial range first.
    this.range = this.virtual.getRange()
    // listen item size changing.
    this.$on('itemResized', this.onItemResized)
  },

  beforeDestroy () {
    this.virtual.destroy()
  },

  mounted () {
    // handling position set.
    if (this.start) {
      this.setScrollOffset(this.virtual.getOffset(this.start))
    } else if (this.offset) {
      this.setScrollOffset(this.offset)
    }
  },

  updated () {},

  methods: {
    onItemResized (id, size) {
      this.virtual.saveSize(id, size)
    },

    onRangeChanged (range) {
      this.range = range
    },

    onScroll () {
      const { root } = this.$refs
      if (!root) {
        return
      }

      const offset = root[this.directionKey]

      this.emitEvent(offset)
      this.virtual.handleScroll(offset)
    },

    // set current scroll position to a expectant offset.
    setScrollOffset (offset) {
      const { root } = this.$refs
      if (root) {
        root[this.directionKey] = offset || 0
      }
    },

    // emit event at special position.
    emitEvent (offset) {
      // ref element is definitely available here.
      const { root } = this.$refs
      const offsetShape = root[this.isHorizontal ? 'clientWidth' : 'clientHeight']
      const scrollShape = root[this.isHorizontal ? 'scrollWidth' : 'scrollHeight']

      // only non-empty & offset === 0 calls totop.
      if (!!this.dataSources.length && !offset) {
        this.$emit('totop')
      } else if (offset + offsetShape >= scrollShape) {
        this.$emit('tobottom')
      } else {
        this.$emit('onscroll', offset)
      }
    },

    // get the render slots based on start and end.
    getRenderSlots (h) {
      const slots = []
      const start = this.disabled ? 0 : this.range.start
      const end = this.disabled ? this.dataSources.length - 1 : this.range.end
      for (let index = start; index <= end; index++) {
        slots.push(h(Item, {
          class: this.itemClass,
          props: {
            tag: this.itemTag,
            horizontal: this.isHorizontal,
            key: this.dataSources[index][this.dataKey],
            source: this.dataSources[index],
            component: this.dataComponent
          }
        }))
      }
      return slots
    }
  },

  // render function, a closer-to-the-compiler alternative to templates.
  // https://vuejs.org/v2/guide/render-function.html#The-Data-Object-In-Depth
  render (h) {
    const padding = this.isHorizontal
      ? `0px ${this.range.padBehind}px 0px ${this.range.padFront}px`
      : `${this.range.padFront}px 0px ${this.range.padBehind}px`

    return h(this.rootTag, {
      ref: 'root',
      on: {
        '&scroll': this.onScroll
      }
    }, [
      h(this.wrapTag, {
        class: this.wrapClass,
        attrs: {
          role: 'group'
        },
        style: {
          margin: '0px',
          padding: padding
        }
      }, this.getRenderSlots(h))
    ])
  }
})

export default VirtualList
