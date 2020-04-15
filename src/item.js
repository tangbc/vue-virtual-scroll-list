/**
 * item and slot component both use similar wrapper
 * we need to know their size change at any time.
 */

import Vue from 'vue'
import { ItemProps, SlotProps } from './props'

const Wrapper = {
  created () {
    this.hasInitial = false
    this.shapeKey = this.horizontal ? 'offsetWidth' : 'offsetHeight'
  },

  mounted () {
    // dispatch once at initial.
    this.dispatchSizeChange()

    if (typeof ResizeObserver !== 'undefined') {
      this.resizeObserver = new ResizeObserver(() => {
        // dispatch when size changed.
        if (this.hasInitial) {
          this.dispatchSizeChange()
        } else {
          this.hasInitial = true
        }
      })
      this.resizeObserver.observe(this.$el)
    }
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

    // tell parent current size identify by unqiue key.
    dispatchSizeChange () {
      this.$parent.$emit(this.event, this.uniqueKey, this.getCurrentSize(), this.hasInitial)
    }
  }
}

// wrapping for item.
export const Item = Vue.component('virtual-list-item', {
  mixins: [Wrapper],

  props: ItemProps,

  render (h) {
    return h(this.tag, {
      role: 'item'
    }, [h(this.component, {
      props: {
        ...this.extraProps,
        source: this.source
      }
    })])
  }
})

// wrapping for slot.
export const Slot = Vue.component('virtual-list-slot', {
  mixins: [Wrapper],

  props: SlotProps,

  render (h) {
    return h(this.tag, {
      attrs: {
        role: this.uniqueKey
      }
    }, this.$slots.default)
  }
})
