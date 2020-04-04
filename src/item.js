import Vue from 'vue'
import { ItemProps } from './props'

const SUPPORT_RESIZEOBSERVER = typeof ResizeObserver !== 'undefined'

export default Vue.component('virtual-list-item', {
  props: ItemProps,

  created () {
    this.hasInitial = false
  },

  mounted () {
    // dispatch once at initial.
    this.dispatchToParent('itemResized')

    if (SUPPORT_RESIZEOBSERVER) {
      this.resizeObserver = new ResizeObserver(() => {
        // dispatch when size changed.
        if (this.hasInitial) {
          this.dispatchToParent('itemResized')
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
      return this.$el ? this.$el.offsetHeight : 0
    },

    // tell parent current size identify by unqiue key.
    dispatchToParent (event) {
      this.$parent.$emit(event, this.key, this.getCurrentSize())
    }
  },

  render (h) {
    return h(this.tag, null, [h(this.component, {
      props: this.source
    })])
  }
})
