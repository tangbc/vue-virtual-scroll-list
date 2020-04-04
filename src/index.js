import Vue from 'vue'
import Item from './item'
import Virtual from './virtual'
import { defaultProps } from './props'

const VirtualList = Vue.component('virtual-list', {
  props: defaultProps,

  data () {
    return {
      range: {}
    }
  },

  created () {
    this.virtual = new Virtual({
      buffer: 0,
      keeps: this.keeps,
      disabled: this.disabled,
      estimateSize: this.estimateSize,
      uniqueIds: this.dataSources.map((dataSource) => dataSource[this.dataKey])
    }, this.onRangeChange)

    this.range = this.virtual.getRange()

    // just for debug
    window.virtual = this.virtual

    this.$on('itemResized', this.onItemResized)
  },

  beforeDestroy () {
    this.virtual.destroy()
  },

  mounted () {
    // console.log(this)
  },

  updated () {
    // console.log('xx updated')
  },

  methods: {
    onItemResized (itemId, itemSize) {
      // console.log('onItemResized', itemId, itemSize)
      this.virtual.saveSize(itemId, itemSize)
    },

    onRangeChange (range) {
      this.range = range
    },

    onScroll () {
      const { rootEl } = this.$refs
      this.virtual.handleScroll(rootEl.scrollTop)
    },

    getRenderSlots (h) {
      const slots = []
      const start = this.disabled ? 0 : this.range.start
      const end = this.disabled ? this.dataSources.length - 1 : this.range.end
      for (let index = start; index <= end; index++) {
        slots.push(h(Item, {
          class: this.itemClass,
          props: {
            tag: this.itemTag,
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
    return h(this.rootTag, {
      ref: 'rootEl',
      on: {
        '&scroll': this.onScroll
      }
    }, [
      h(this.wrapTag, {
        class: this.wrapClass,
        style: {
          margin: '0px',
          padding: `${this.range.padFront}px 0px ${this.range.padBehind}px`
        }
      }, this.getRenderSlots(h))
    ])
  }
})

export default VirtualList
