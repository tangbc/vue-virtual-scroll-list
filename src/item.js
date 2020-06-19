/**
 * item and slot component both use similar wrapper
 * we need to know their size change at any time
 */

import Vue from 'vue'
import { ItemProps, SlotProps } from './props'

const Wrapper = {
  created () {
    this.shapeKey = this.horizontal ? 'offsetWidth' : 'offsetHeight'
  },

  mounted () {
    if (typeof ResizeObserver !== 'undefined') {
      this.resizeObserver = new ResizeObserver(() => {
        this.dispatchSizeChange()
      })
      this.resizeObserver.observe(this.$el)
    }
  },

  // since componet will be reused, so disptach when updated
  updated () {
    this.dispatchSizeChange()
  },

  beforeDestroy () {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect()
      this.resizeObserver = null
    }
  },

  methods: {
    getCurrentSize () {
      return this.$el ? this.$el[this.shapeKey] : 0
    },

    // tell parent current size identify by unqiue key
    dispatchSizeChange () {
      this.$parent.$emit(this.event, this.uniqueKey, this.getCurrentSize(), this.hasInitial)
    }
  }
}

// wrapping for item
export const Item = Vue.component('virtual-list-item', {
  mixins: [Wrapper],

  props: ItemProps,

  render (h) {
    const { tag, component, extraProps = {}, index, scopedSlots = {}, uniqueKey } = this
    extraProps.source = this.source
    extraProps.index = index

    return h(tag, {
      key: uniqueKey,
      attrs: {
        role: 'listitem'
      }
    }, [h(component, {
      props: extraProps,
      scopedSlots: scopedSlots
    })])
  }
})

// wrapping for slot
export const Slot = Vue.component('virtual-list-slot', {
  mixins: [Wrapper],

  props: SlotProps,

  render (h) {
    const { tag, uniqueKey } = this

    return h(tag, {
      key: uniqueKey,
      attrs: {
        role: uniqueKey
      }
    }, this.$slots.default)
  }
})
