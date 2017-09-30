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
            var keeps = this.remain + (this.bench || this.remain)

            this.delta = {
                start: start, // start index.
                end: start + keeps, // end index.
                keeps: keeps, // nums keeping in real dom.
                total: 0, // all items count, update in render filter.
                offset: 0, // cache scrollTop offset.
                direct: 'd', // cache scroll direction.
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
            start: function () {
                this.alter = 'start'
            },
            remain: function () {
                this.alter = 'remain'
            },
            bench: function () {
                this.alter = 'bench'
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

                if (delta.total > delta.keeps) {
                    this.updateZone(offset)
                }

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
                var bench = this.bench || this.remain

                // for better performance, if scroll pass items within now bench, do not update.
                if (!zone.overflow && (overs > delta.start) && (overs - delta.start <= bench)) {
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
            getVarOffset: function (index, nocache) {
                var delta = this.delta
                var cache = delta.varCache[index]

                if (cache && !nocache) {
                    return cache.offset
                }

                var offset = 0
                for (var i = 0; i < index; i++) {
                    var size = this.getVarSize(i, nocache)
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

            // return a variable size (height) from a given index.
            getVarSize: function (index, nocache) {
                var cache = this.delta.varCache[index]
                return (!nocache && cache && cache.size) || this.variable(index) || 0
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

            // the ONLY ONE public method, let the parent to update variable by index.
            updateVariable: function (index) {
                // update all the offfsets ahead of index.
                this.getVarOffset(index, true)
            },

            // avoid overflow range.
            isOverflow: function (start) {
                var delta = this.delta
                var overflow = (delta.total > delta.keeps && start + this.remain >= delta.total) || (start >= delta.total)
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

                index = parseInt(index, 10)
                index = index < 0 ? 0 : index

                var overflow = this.isOverflow(index)
                // if overflow range return the last zone.
                if (overflow) {
                    end = delta.total
                    start = Math.max(0, delta.total - delta.keeps)
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

        // update delta and zone when prorps change.
        beforeUpdate: function () {
            var delta = this.delta
            delta.keeps = this.remain + (this.bench || this.remain)

            var alterStart = this.alter === 'start'
            var oldStart = alterStart ? this.start : delta.start
            var zone = this.getZone(oldStart)

            // if changing start, update scroll position after update.
            if (alterStart) {
                this.$nextTick(this.setScrollTop.bind(this, this.variable
                    ? this.getVarOffset(zone.overflow ? delta.total : zone.start)
                    : zone.overflow ? delta.total * this.size : zone.start * this.size)
                )
            }

            // if points out difference, force update once again.
            if (oldStart !== zone.start || this.alter) {
                this.alter = ''
                delta.end = zone.end
                delta.start = zone.start
                this.$forceUpdate()
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
                    'height': this.size * this.remain + 'px'
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
