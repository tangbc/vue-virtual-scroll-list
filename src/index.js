(function (root, factory) {
  const namespace = 'VirtualList'
  /* istanbul ignore next */
  if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = factory(namespace, require('vue'))
  } else if (typeof define === 'function' && define.amd) {
    define(['vue'], factory.bind(root, namespace))
  } else if (typeof exports === 'object') {
    exports[namespace] = factory(namespace, require('vue'))
  } else {
    root[namespace] = factory(namespace, root.Vue)
  }
})(this, function (namespace, Vue) {
  /* istanbul ignore next */
  if (typeof Vue === 'object' && typeof Vue.default === 'function') {
    Vue = Vue.default
  }

  /* istanbul ignore next */
  const _debounce = (func, wait, immediate) => {
    let timeout
    return function () {
      const context = this
      const args = arguments
      const later = function () {
        timeout = null
        if (!immediate) {
          func.apply(context, args)
        }
      }
      const callNow = immediate && !timeout
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
      if (callNow) {
        func.apply(context, args)
      }
    }
  }

  return Vue.component(namespace, {
    props: {
      size: {
        type: Number,
        required: true
      },
      remain: {
        type: Number,
        required: true
      },
      rtag: {
        type: String,
        default: 'div'
      },
      wtag: {
        type: String,
        default: 'div'
      },
      wclass: {
        type: String,
        default: ''
      },
      pagemode: {
        type: Boolean,
        default: false
      },
      scrollelement: {
        type: typeof window === 'undefined' ? Object : HTMLElement,
        default: null
      },
      start: {
        type: Number,
        default: 0
      },
      offset: {
        type: Number,
        default: 0
      },
      variable: {
        type: [Function, Boolean],
        default: false
      },
      bench: {
        type: Number,
        default: 0 // also equal to remain
      },
      debounce: {
        type: Number,
        default: 0
      },
      totop: {
        type: [Function, Boolean],
        default: false
      },
      tobottom: {
        type: [Function, Boolean],
        default: false
      },
      onscroll: {
        type: [Function, Boolean], // Boolean disables default behavior
        default: false
      },
      istable: {
        type: Boolean,
        default: false
      },
      item: {
        type: [Function, Object],
        default: null
      },
      itemcount: {
        type: Number,
        default: 0
      },
      itemprops: {
        type: Function,
        /* istanbul ignore next */
        default () {}
      }
    },

    // use changeProp to identify the prop change.
    watch: {
      size () {
        this.changeProp = 'size'
      },
      remain () {
        this.changeProp = 'remain'
      },
      bench () {
        this.changeProp = 'bench'
        this.itemModeForceRender()
      },
      start () {
        this.changeProp = 'start'
        this.itemModeForceRender()
      },
      offset () {
        this.changeProp = 'offset'
        this.itemModeForceRender()
      },
      itemcount () {
        this.changeProp = 'itemcount'
        this.itemModeForceRender()
      },
      scrollelement (newScrollelement, oldScrollelement) {
        if (this.pagemode) {
          return
        }
        if (oldScrollelement) {
          this.removeScrollListener(oldScrollelement)
        }
        if (newScrollelement) {
          this.addScrollListener(newScrollelement)
        }
      }
    },

    created () {
      const start = this.start >= this.remain ? this.start : 0
      const keeps = this.remain + (this.bench || this.remain)

      const delta = Object.create(null)

      delta.direction = '' // current scroll direction, D: down, U: up.
      delta.scrollTop = 0 // current scroll top, use to direction.
      delta.start = start // start index.
      delta.end = start + keeps - 1 // end index.
      delta.keeps = keeps // nums keeping in real dom.
      delta.total = 0 // all items count, update in filter.
      delta.offsetAll = 0 // cache all the scrollable offset.
      delta.paddingTop = 0 // container wrapper real padding-top.
      delta.paddingBottom = 0 // container wrapper real padding-bottom.
      delta.varCache = {} // object to cache variable index height and scroll offset.
      delta.varAverSize = 0 // average/estimate item height before variable be calculated.
      delta.varLastCalcIndex = 0 // last calculated variable height/offset index, always increase.

      this.delta = delta
    },

    mounted () {
      if (this.pagemode) {
        this.addScrollListener(window)
      } else if (this.scrollelement) {
        this.addScrollListener(this.scrollelement)
      }

      if (this.start) {
        const start = this.getZone(this.start).start
        this.setScrollTop(this.variable ? this.getVarOffset(start) : start * this.size)
      } else if (this.offset) {
        this.setScrollTop(this.offset)
      }
    },

    beforeDestroy () {
      if (this.pagemode) {
        this.removeScrollListener(window)
      } else if (this.scrollelement) {
        this.removeScrollListener(this.scrollelement)
      }
    },

    // check if delta should update when props change.
    beforeUpdate () {
      const delta = this.delta
      delta.keeps = this.remain + (this.bench || this.remain)

      const calcstart = this.changeProp === 'start' ? this.start : delta.start
      const zone = this.getZone(calcstart)

      // if start, size or offset change, update scroll position.
      if (this.changeProp && ['start', 'size', 'offset'].includes(this.changeProp)) {
        const scrollTop = this.changeProp === 'offset'
          ? this.offset : this.variable
            ? this.getVarOffset(zone.isLast ? delta.total : zone.start)
            : zone.isLast && (delta.total - calcstart <= this.remain)
              ? delta.total * this.size : calcstart * this.size

        this.$nextTick(this.setScrollTop.bind(this, scrollTop))
      }

      // if points out difference, force update once again.
      if (
        this.changeProp ||
        delta.end !== zone.end ||
        calcstart !== zone.start
      ) {
        this.changeProp = ''
        delta.end = zone.end
        delta.start = zone.start
        this.forceRender()
      }
    },

    methods: {
      // add pagemode/scrollelement scroll event listener
      addScrollListener (element) {
        this.scrollHandler = this.debounce ? _debounce(this.onScroll.bind(this), this.debounce) : this.onScroll
        element.addEventListener('scroll', this.scrollHandler, false)
      },

      // remove pagemode/scrollelement scroll event listener
      removeScrollListener (element) {
        element.removeEventListener('scroll', this.scrollHandler, false)
      },

      onScroll (event) {
        const delta = this.delta
        const vsl = this.$refs.vsl
        let offset

        if (this.pagemode) {
          const elemRect = this.$el.getBoundingClientRect()
          offset = -elemRect.top
        } else if (this.scrollelement) {
          const scrollelementRect = this.scrollelement.getBoundingClientRect()
          const elemRect = this.$el.getBoundingClientRect()
          offset = scrollelementRect.top - elemRect.top
        } else {
          offset = (vsl.$el || vsl).scrollTop || 0
        }

        delta.direction = offset > delta.scrollTop ? 'D' : 'U'
        delta.scrollTop = offset

        if (delta.total > delta.keeps) {
          this.updateZone(offset)
        } else {
          delta.end = delta.total - 1
        }

        const offsetAll = delta.offsetAll
        if (this.onscroll) {
          const param = Object.create(null)
          param.offset = offset
          param.offsetAll = offsetAll
          param.start = delta.start
          param.end = delta.end
          this.onscroll(event, param)
        }

        if (!offset && delta.total) {
          this.fireEvent('totop')
        }

        if (offset >= offsetAll) {
          this.fireEvent('tobottom')
        }
      },

      // update render zone by scroll offset.
      updateZone (offset) {
        const delta = this.delta
        let overs = this.variable
          ? this.getVarOvers(offset)
          : Math.floor(offset / this.size)

        // if scroll up, we'd better decrease it's numbers.
        if (delta.direction === 'U') {
          overs = overs - this.remain + 1
        }

        const zone = this.getZone(overs)
        const bench = this.bench || this.remain

        // for better performance, if scroll passes items within the bench, do not update.
        // and if it's close to the last item, render next zone immediately.
        const shouldRenderNextZone = Math.abs(overs - delta.start - bench) === 1
        if (
          !shouldRenderNextZone &&
          (overs - delta.start <= bench) &&
          !zone.isLast && (overs > delta.start)
        ) {
          return
        }

        // make sure forceRender calls as less as possible.
        if (
          shouldRenderNextZone ||
          zone.start !== delta.start ||
          zone.end !== delta.end
        ) {
          delta.end = zone.end
          delta.start = zone.start
          this.forceRender()
        }
      },

      // return the right zone info based on `start/index`.
      getZone (index) {
        let start
        const delta = this.delta

        index = parseInt(index, 10)
        index = Math.max(0, index)

        const lastStart = delta.total - delta.keeps
        const isLast = (index <= delta.total && index >= lastStart) || (index > delta.total)

        if (isLast) {
          start = Math.max(0, lastStart)
        } else {
          start = index
        }

        return {
          end: start + delta.keeps - 1,
          start,
          isLast
        }
      },

      // public method, force render ui list if needed.
      // call this before the next rerender to get better performance.
      forceRender () {
        window.requestAnimationFrame(() => {
          this.$forceUpdate()
        })
      },

      // force render ui if using item-mode.
      itemModeForceRender () {
        if (this.item) {
          this.forceRender()
        }
      },

      // return the scroll of passed items count in variable.
      getVarOvers (offset) {
        let low = 0
        let middle = 0
        let middleOffset = 0
        const delta = this.delta
        let high = delta.total

        while (low <= high) {
          middle = low + Math.floor((high - low) / 2)
          middleOffset = this.getVarOffset(middle)

          // calculate the average variable height at first binary search.
          if (!delta.varAverSize) {
            delta.varAverSize = Math.floor(middleOffset / middle)
          }

          if (middleOffset === offset) {
            return middle
          } else if (middleOffset < offset) {
            low = middle + 1
          } else if (middleOffset > offset) {
            high = middle - 1
          }
        }

        return low > 0 ? --low : 0
      },

      // return a variable scroll offset from given index.
      getVarOffset (index, nocache) {
        const delta = this.delta
        const cache = delta.varCache[index]

        if (!nocache && cache) {
          return cache.offset
        }

        let offset = 0
        for (let i = 0; i < index; i++) {
          const size = this.getVarSize(i, nocache)
          delta.varCache[i] = {
            size: size,
            offset: offset
          }
          offset += size
        }

        delta.varLastCalcIndex = Math.max(delta.varLastCalcIndex, index - 1)
        delta.varLastCalcIndex = Math.min(delta.varLastCalcIndex, delta.total - 1)

        return offset
      },

      // return a variable size (height) from given index.
      getVarSize (index, nocache) {
        const cache = this.delta.varCache[index]
        if (!nocache && cache) {
          return cache.size
        }

        if (typeof this.variable === 'function') {
          return this.variable(index) || 0
        } else {
          // when using item, it can only get current components height,
          // need to be enhanced, or consider using variable-function instead
          const slot = this.item
            ? (this.$children[index] ? this.$children[index].$vnode : null)
            : this.$slots.default[index]

          const style = slot && slot.data && slot.data.style
          if (style && style.height) {
            const shm = style.height.match(/^(.*)px$/)
            return (shm && +shm[1]) || 0
          }
        }
        return 0
      },

      // return the variable paddingTop based on current zone.
      // @todo: if set a large `start` before variable was calculated,
      // here will also case too much offset calculate when list is very large,
      // consider use estimate paddingTop in this case just like `getVarPaddingBottom`.
      getVarPaddingTop () {
        return this.getVarOffset(this.delta.start)
      },

      // return the variable paddingBottom based on the current zone.
      getVarPaddingBottom () {
        const delta = this.delta
        const last = delta.total - 1
        if (delta.total - delta.end <= delta.keeps || delta.varLastCalcIndex === last) {
          return this.getVarOffset(last) - this.getVarOffset(delta.end)
        } else {
          // if unreached last zone or uncalculated real behind offset
          // return the estimate paddingBottom and avoid too much calculations.
          return (delta.total - delta.end) * (delta.varAverSize || this.size)
        }
      },

      // return the variable all heights use to judge reach bottom.
      getVarAllHeight () {
        const delta = this.delta
        if (delta.total - delta.end <= delta.keeps || delta.varLastCalcIndex === delta.total - 1) {
          return this.getVarOffset(delta.total)
        } else {
          return this.getVarOffset(delta.start) + (delta.total - delta.end) * (delta.varAverSize || this.size)
        }
      },

      // public method, allow the parent update variable by index.
      updateVariable (index) {
        // clear/update all the offsets and heights ahead of index.
        this.getVarOffset(index, true)
      },

      // trigger a props event on parent.
      fireEvent (event) {
        if (this[event]) {
          this[event]()
        }
      },

      // set manual scroll top.
      setScrollTop (scrollTop) {
        if (this.pagemode) {
          window.scrollTo(0, scrollTop)
        } else if (this.scrollelement) {
          this.scrollelement.scrollTo(0, scrollTop)
        } else {
          const vsl = this.$refs.vsl
          if (vsl) {
            (vsl.$el || vsl).scrollTop = scrollTop
          }
        }
      },

      // filter the shown items based on `start` and `end`.
      filter (h) {
        const delta = this.delta
        const slots = this.$slots.default || []

        // item-mode should be decided from items prop.
        if (this.item || this.$scopedSlots.item) {
          delta.total = this.itemcount
          if (delta.keeps > delta.total) {
            delta.end = delta.total - 1
          }
        } else {
          if (!slots.length) {
            delta.start = 0
          }
          delta.total = slots.length
        }

        let paddingTop, paddingBottom, allHeight
        const hasPadding = delta.total > delta.keeps

        if (this.variable) {
          allHeight = this.getVarAllHeight()
          paddingTop = hasPadding ? this.getVarPaddingTop() : 0
          paddingBottom = hasPadding ? this.getVarPaddingBottom() : 0
        } else {
          allHeight = this.size * delta.total
          paddingTop = this.size * (hasPadding ? delta.start : 0)
          paddingBottom = this.size * (hasPadding ? delta.total - delta.keeps : 0) - paddingTop
        }

        if (paddingBottom < this.size) {
          paddingBottom = 0
        }

        delta.paddingTop = paddingTop
        delta.paddingBottom = paddingBottom
        delta.offsetAll = allHeight - this.size * this.remain

        const renders = []
        for (let i = delta.start; i < delta.total && i <= Math.ceil(delta.end); i++) {
          let slot = null
          if (this.$scopedSlots.item) {
            slot = this.$scopedSlots.item(i)
          } else if (this.item) {
            slot = h(this.item, this.itemprops(i))
          } else {
            slot = slots[i]
          }
          renders.push(slot)
        }

        return renders
      }
    },

    render (h) {
      const dbc = this.debounce
      let list = this.filter(h)
      const { paddingTop, paddingBottom } = this.delta

      const istable = this.istable
      const wtag = istable ? 'div' : this.wtag
      const rtag = istable ? 'div' : this.rtag
      if (istable) {
        list = [h('table', [h('tbody', list)])]
      }
      const renderList = h(wtag, {
        style: {
          display: 'block',
          'padding-top': paddingTop + 'px',
          'padding-bottom': paddingBottom + 'px',
        },
        class: this.wclass,
        attrs: {
          role: 'group'
        }
      }, list)

      // page mode just render list, no wrapper.
      if (this.pagemode || this.scrollelement) {
        return renderList
      }

      return h(rtag, {
        ref: 'vsl',
        style: {
          display: 'block',
          'overflow-y': this.size >= this.remain ? 'auto' : 'initial',
          height: this.size * this.remain + 'px'
        },
        on: {
          '&scroll': dbc ? _debounce(this.onScroll.bind(this), dbc) : this.onScroll
        }
      }, [
        renderList
      ])
    }
  })
})
