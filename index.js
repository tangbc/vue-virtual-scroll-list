;(function (root, factory) {
    var namespace = 'VirtualScrollList'
    if (typeof exports === 'object' && typeof module === 'object') {
        module.exports = factory(namespace, require('vue'))
    } else if (typeof define === 'function' && define.amd) {
        define(['vue'], factory.bind(root, namespace))
    } else if (typeof exports === 'object') {
        exports[namespace] = factory(namespace, require('vue'))
    } else {
        root[namespace] = factory(namespace, root['Vue'])
    }
})(this, function (namespace, Vue2) {
    if (typeof Vue2 === 'object' && typeof Vue2.default === 'function') {
        Vue2 = Vue2.default
    }

    var _debounce = function (func, wait, immediate) {
        var timeout
        return function () {
            var context = this
            var args = arguments
            var later = function () {
                timeout = null
                if (!immediate) {
                    func.apply(context, args)
                }
            }
            var callNow = immediate && !timeout
            clearTimeout(timeout)
            timeout = setTimeout(later, wait)
            if (callNow) {
                func.apply(context, args)
            }
        }
    }

    return Vue2.component(namespace, {
        props: {
            size: { type: Number, required: true },
            remain: { type: Number, required: true },
            rtag: { type: String, default: 'div' },
            wtag: { type: String, default: 'div' },
            wclass: { type: String, default: '' },
            start: { type: Number, default: 0 },
            variable: Function,
            bench: Number,
            debounce: Number,
            totop: Function,
            tobottom: Function,
            onscroll: Function
        },

        created: function () {
            var start = this.start >= this.remain ? this.start : 0
            var height = this.size * this.remain
            var bench = this.bench || this.remain
            var keeps = this.remain + bench

            this.delta = {
                start: start, // start index.
                end: start + keeps, // end index.
                keeps: keeps, // nums keeping in real dom.
                bench: bench, // nums scroll pass should force update.
                total: 0, // all items count, update in render filter.
                offset: 0, // cache scrollTop offset.
                direct: 'd', // cache scroll direction.
                height: height, // container wrapper viewport height.
                fireTime: 0, // cache last event fire time avoid compact.
                paddingTop: 0, // container wrapper real padding-top.
                paddingBottom: 0, // container wrapper real padding-bottom.
                varCache: {}, // cache variable index height and padding offset.
                varAverSize: 0, // average/estimate item height before variable be calculated.
                varLastCalcIndex: 0 // last calculated variable height/offset index, always increase.
            }
        },

        mounted: function () {
            if (this.start) {
                var start = this.getZone(this.start).start
                this.setScrollTop(this.variable ? this.getVarOffset(start) : start * this.size)
            }
        },

        watch: {
            start: function (index) {
                var delta = this.delta
                var zone = this.getZone(index)

                var scrollTop = this.variable
                    ? this.getVarOffset(zone.overflow ? delta.total : zone.start)
                    : zone.overflow ? delta.total * this.size : zone.start * this.size

                delta.end = zone.end
                delta.start = zone.start >= this.remain ? zone.start : 0

                this.$forceUpdate()
                Vue2.nextTick(this.setScrollTop.bind(this, scrollTop))
            }
        },

        methods: {
            onScroll: function (e) {
                var delta = this.delta
                var offset = this.$refs.vsl.scrollTop

                delta.direct = delta.offset > offset ? 'u' : 'd'
                delta.offset = offset

                if (!offset && delta.total) {
                    this.triggerEvent('totop')
                }

                this.updateZone(offset)

                if (this.onscroll) {
                    this.onscroll(e, {
                        end: delta.end,
                        start: delta.start,
                        offset: offset
                    })
                }
            },

            // update render zone by moving offset.
            updateZone: function (offset) {
                var overs
                if (this.variable) {
                    overs = this.getVarOvers(offset)
                } else {
                    overs = Math.floor(offset / this.size)
                }

                var delta = this.delta
                var zone = this.getZone(overs)

                // for better performance, if scroll pass items within now bench, do not update.
                if (!zone.overflow && (overs > delta.start) && (overs - delta.start <= delta.bench)) {
                    return
                }

                delta.end = zone.end
                delta.start = zone.start
                this.$forceUpdate()
            },

            // return the scroll passed items count in variable height.
            getVarOvers: function (offset) {
                var delta = this.delta
                var low = 0
                var middle = 0
                var middleOffset = 0
                var high = delta.total

                while (low <= high) {
                    middle = low + Math.floor((high - low) / 2)
                    middleOffset = this.getVarOffset(middle)

                    // calculate the variable average size at first binary search.
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

            // get the variable height index scroll offset.
            getVarOffset: function (index) {
                var delta = this.delta
                var cache = delta.varCache[index]

                if (cache) {
                    return cache.offset
                }

                var offset = 0
                for (var i = 0; i < index; i++) {
                    var size = this.getVarSize(i)
                    delta.varCache[i] = {
                        size: size,
                        offset: offset
                    }
                    offset += size
                }

                delta.varLastCalcIndex = Math.max(delta.varLastCalcIndex, index)
                delta.varLastCalcIndex = Math.min(delta.varLastCalcIndex, delta.total - 1)

                return offset
            },

            // return a variable size (height) from a given index.
            getVarSize: function (index) {
                var cache = this.delta.varCache[index]
                return (cache && cache.size) || this.variable(index) || 0
            },

            // return the variable paddingTop base current zone.
            // @todo: if set a large `start` before variable was calculated,
            // here will also case too much offset calculate when list is very large,
            // consider use estimate paddingTop in this case just like `getVarPaddingBottom`.
            getVarPaddingTop: function () {
                return this.getVarOffset(this.delta.start)
            },

            // return the variable paddingBottom base current zone.
            getVarPaddingBottom: function () {
                var delta = this.delta
                if (delta.total - delta.end <= delta.keeps || delta.varLastCalcIndex === delta.total - 1) {
                    return this.getVarOffset(delta.total) - this.getVarOffset(delta.end)
                } else {
                    // if unreached last zone or uncalculate real behind offset
                    // return the estimate paddingBottom avoid too much calculate.
                    return (delta.total - delta.end) * (delta.varAverSize || this.size)
                }
            },

            // avoid overflow range.
            isOverflow: function (start) {
                var delta = this.delta
                var overflow = (delta.total - delta.keeps > 0) && (start + this.remain >= delta.total)
                if (overflow && delta.direct === 'd') {
                    this.triggerEvent('tobottom')
                }
                return overflow
            },

            // trigger a props event on parent.
            triggerEvent: function (event) {
                var now = +new Date()
                var delta = this.delta
                if (this[event] && now - delta.fireTime > 30) {
                    this[event]()
                    delta.fireTime = now
                }
            },

            // return the right zone info base on `start/index`.
            getZone: function (index) {
                var start, end
                var delta = this.delta

                index = parseInt(index, 10) || 0
                index = index >= delta.total ? (delta.total - 1) : (index < 0 ? 0 : index)

                var overflow = this.isOverflow(index)
                // if overflow range return the last zone.
                if (overflow) {
                    end = delta.total
                    start = delta.total - delta.keeps
                } else {
                    start = index
                    end = start + delta.keeps
                }

                return {
                    end: end,
                    start: start,
                    overflow: overflow
                }
            },

            // set manual scrollTop.
            setScrollTop: function (scrollTop) {
                this.$refs.vsl.scrollTop = scrollTop
            },

            // filter the shown items base on `start` and `end`.
            filter: function () {
                var delta = this.delta
                var slots = this.$slots.default

                if (!slots) {
                    slots = []
                    delta.start = 0
                }

                delta.total = slots.length

                var paddingTop, paddingBottom
                var hasPadding = slots.length > delta.keeps

                if (this.variable) {
                    paddingTop = hasPadding ? this.getVarPaddingTop() : 0
                    paddingBottom = hasPadding ? this.getVarPaddingBottom() : 0
                } else {
                    paddingTop = this.size * (hasPadding ? delta.start : 0)
                    paddingBottom = this.size * (hasPadding ? slots.length - delta.keeps : 0) - paddingTop
                }

                delta.paddingTop = paddingTop
                delta.paddingBottom = paddingBottom

                return slots.filter(function (slot, index) {
                    return index >= delta.start && index <= delta.end
                })
            }
        },

        render: function (h) {
            var list = this.filter()
            var delta = this.delta
            var dbc = this.debounce

            return h(this.rtag, {
                'ref': 'vsl',
                'style': {
                    'display': 'block',
                    'overflow-y': 'auto',
                    'height': delta.height + 'px'
                },
                'on': {
                    'scroll': dbc ? _debounce(this.onScroll.bind(this), dbc) : this.onScroll
                }
            }, [
                h(this.wtag, {
                    'style': {
                        'display': 'block',
                        'padding-top': delta.paddingTop + 'px',
                        'padding-bottom': delta.paddingBottom + 'px'
                    },
                    'class': this.wclass
                }, list)
            ])
        }
    })
})
