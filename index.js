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
            var slots = this.$slots.default
            var total = (slots && slots.length) || 0

            this.delta = {
                start: start, // start index.
                end: start + keeps, // end index.
                total: total, // all items count.
                keeps: keeps, // nums keeping in real dom.
                bench: bench, // nums scroll pass should force update.
                offset: 0, // cache scrollTop offset.
                direct: 'd', // cache scroll direction.
                height: height, // container wrapper viewport height.
                fireTime: 0, // cache last event fire time avoid compact.
                paddingTop: 0, // container wrapper real padding-top.
                paddingBottom: 0, // container wrapper real padding-bottom.
                varCache: {}, // cache variable index height and padding offset.
                averageSize: 0, // average/estimate item height before variable be calculated.
                lastCalcIndex: 0 // last calculated variable height/offset index, always increase.
            }
        },

        mounted: function () {
            if (this.start && this.validStart(this.start)) {
                this.setScrollTop(this.variable ? this.getVarOffset(this.start) : this.start * this.size)
            }
        },

        watch: {
            start: function (index) {
                if (!this.validStart(index)) {
                    return
                }

                var delta = this.delta
                var start, end, scrollTop
                var isOver = this.isOverflow(index)
                if (isOver) {
                    var zone = this.getLastZone()
                    end = zone.end
                    start = zone.start
                    scrollTop = delta.total * this.size
                } else {
                    start = index
                    end = start + delta.keeps
                    scrollTop = start * this.size
                }

                if (this.variable) {
                    scrollTop = this.getVarOffset(isOver ? delta.total : start)
                }

                delta.end = end
                delta.start = start >= this.remain ? start : 0

                this.$forceUpdate()
                Vue2.nextTick(this.setScrollTop.bind(this, scrollTop))
            }
        },

        methods: {
            onScroll: function (e) {
                var scrollTop = this.$refs.vsl.scrollTop

                this.updateZone(scrollTop)

                if (this.onscroll) {
                    this.onscroll(e, scrollTop)
                }
            },

            updateZone: function (offset) {
                var delta = this.delta

                if (!offset && delta.total) {
                    this.fireEvent('totop')
                }

                delta.direct = delta.offset > offset ? 'u' : 'd'
                delta.offset = offset

                var overs
                if (this.variable) {
                    overs = this.getVarOvers(offset)
                } else {
                    overs = Math.floor(offset / this.size)
                }

                // calculate the start and end by moving items.
                var start = overs || 0
                var end = overs ? (overs + delta.keeps) : delta.keeps

                var isOver = this.isOverflow(start)
                if (isOver) {
                    var zone = this.getLastZone()
                    end = zone.end
                    start = zone.start
                }

                // for better performance, if scroll pass items within now bench, do not update.
                if (!isOver && (overs > delta.start) && (overs - delta.start <= delta.bench)) {
                    return
                }

                delta.end = end
                delta.start = start
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

                    // calculate the averageSize at first binary search.
                    if (!delta.averageSize) {
                        delta.averageSize = Math.floor(middleOffset / middle)
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

                delta.lastCalcIndex = Math.max(delta.lastCalcIndex, index)
                delta.lastCalcIndex = Math.min(delta.lastCalcIndex, delta.total - 1)

                return offset
            },

            // return a variable size (height) from a given index.
            getVarSize: function (index) {
                var cache = this.delta.varCache[index]
                return (cache && cache.size) || this.variable(index) || 0
            },

            // return the paddingBottom when variable height base current zone.
            getVarPaddingBottom () {
                var delta = this.delta
                if (delta.total - delta.end <= delta.keeps || delta.lastCalcIndex === delta.total - 1) {
                    return this.getVarOffset(delta.total) - this.getVarOffset(delta.end)
                } else {
                    // if unreached last zone or uncalculate real behind offset
                    // return the estimate paddingBottom avoid too much calculate.
                    return (delta.total - delta.end) * (delta.averageSize || this.size)
                }
            },

            // avoid overflow range.
            isOverflow: function (start) {
                var delta = this.delta
                var overflow = (delta.total - delta.keeps > 0) && (start + this.remain >= delta.total)
                if (overflow && delta.direct === 'd') {
                    this.fireEvent('tobottom')
                }
                return overflow
            },

            // if overflow range return the last zone.
            getLastZone: function () {
                return {
                    end: this.delta.total,
                    start: this.delta.total - this.delta.keeps
                }
            },

            // fire a props event to parent.
            fireEvent: function (event) {
                var now = +new Date()
                var delta = this.delta
                if (this[event] && now - delta.fireTime > 30) {
                    delta.fireTime = now
                    this[event](delta.start, delta.end)
                }
            },

            // check if given start is valid.
            validStart: function (start) {
                return start === parseInt(start, 10) && (start >= 0 && start < this.delta.total)
            },

            // set manual scrollTop.
            setScrollTop: function (scrollTop) {
                this.$refs.vsl.scrollTop = scrollTop
            },

            // filter the shown items base on start and end.
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
                    paddingTop = hasPadding ? this.getVarOffset(delta.start) : 0
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
