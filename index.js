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
    var onlyValues = (values) => (str) => values.indexOf(str) !== -1

    return Vue2.component(namespace, {
        props: {
            size: { type: Number, required: true },
            remain: { type: Number, required: true },
            rtag: { type: String, default: 'div' },
            wtag: { type: String, default: 'div' },
            wclass: { type: String, default: '' },
            start: { type: Number, default: 0 },
            offset: { type: Number, default: 0 },
            variable: [Function, Boolean],
            bench: Number,
            debounce: Number,
            totop: Function,
            tobottom: Function,
            toleft: Function,
            toright: Function,
            onscroll: Function,
            scrolldirection: {
                type: String,
                default: 'vertically',
                validator: onlyValues(['vertically', 'horizontal'])
            }
        },

        created: function () {
            var start = this.start >= this.remain ? this.start : 0
            var keeps = this.remain + (this.bench || this.remain)

            this.delta = {
                start: start, // start index.
                end: start + keeps - 1, // end index.
                keeps: keeps, // nums keeping in real dom.
                total: 0, // all items count, update in filter.
                offsetAll: 0, // cache all the scrollable offset.
                paddingTop: 0, // container wrapper real padding-top.
                paddingBottom: 0, // container wrapper real padding-bottom.
                varCache: {}, // object to cache variable index height and scroll offset.
                varAverSize: 0, // average/estimate item height before variable be calculated.
                varLastCalcIndex: 0, // last calculated variable height/offset index, always increase.
                paddingLeft: 0, // container wrapper real padding-left,Use only when the scroll direction is horizontal.
                paddingRight: 0 // container wrapper real padding-right,Use only when the scroll direction is horizontal.
            }
        },

        watch: {
            size: function () {
                this.alter = 'size'
            },
            remain: function () {
                this.alter = 'remain'
            },
            bench: function () {
                this.alter = 'bench'
            },
            start: function () {
                this.alter = 'start'
            },
            offset: function () {
                this.alter = 'offset'
            }
        },

        methods: {
            onScroll: function (e) {
                var delta = this.delta
                var offset
                if (this.scrolldirection === 'vertically') {
                    offset = (this.$refs.vsl && this.$refs.vsl.scrollTop) || 0
                } else if (this.scrolldirection === 'horizontal') {
                    offset = (this.$refs.vsl && this.$refs.vsl.scrollLeft) || 0
                }

                if (delta.total > delta.keeps) {
                    this.updateZone(offset)
                } else {
                    delta.end = delta.total - 1
                }

                var offsetAll = delta.offsetAll
                if (this.onscroll) {
                    this.onscroll(e, {
                        offset: offset,
                        offsetAll: offsetAll,
                        start: delta.start,
                        end: delta.end
                    })
                }

                if (!offset && delta.total) {
                    var startEvent = this.scrolldirection === 'vertically' ? 'totop' : 'toleft'
                    this.triggerEvent(startEvent)
                }

                if (offset >= offsetAll) {
                    var endEvent = this.scrolldirection === 'vertically' ? 'tobottom' : 'toright'
                    this.triggerEvent(endEvent)
                }
            },

            // update render zone by scroll offset.
            updateZone: function (offset) {
                var overs = this.variable
                    ? this.getVarOvers(offset)
                    : Math.floor(offset / this.size)

                var delta = this.delta
                var zone = this.getZone(overs)
                var bench = this.bench || this.remain

                // for better performance, if scroll pass items within now bench, do not update.
                if (!zone.isLast && (overs > delta.start) && (overs - delta.start <= bench)) {
                    return
                }

                delta.end = zone.end
                delta.start = zone.start
                this.$forceUpdate()
            },

            // return the scroll passed items count in variable.
            getVarOvers: function (offset) {
                var low = 0
                var middle = 0
                var middleOffset = 0
                var delta = this.delta
                var high = delta.total

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
            getVarOffset: function (index, nocache) {
                var delta = this.delta
                var cache = delta.varCache[index]

                if (!nocache && cache) {
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

            // return a variable size (height) from given index.
            getVarSize: function (index, nocache) {
                var cache = this.delta.varCache[index]
                if (!nocache && cache) {
                    return cache.size
                }

                if (typeof this.variable === 'function') {
                    return this.variable(index) || 0
                } else {
                    var slot = this.$slots.default[index]
                    var style = slot && slot.data && slot.data.style
                    var shm
                    if (this.scrolldirection === 'vertically') {
                        if (style && style.height) {
                            shm = style.height.match(/^(.*)px$/)
                            return (shm && +shm[1]) || 0
                        }
                    } else if (this.scrolldirection === 'horizontal') {
                        if (style && style.width) {
                            shm = style.width.match(/^(.*)px$/)
                            return (shm && +shm[1]) || 0
                        }
                    }
                }
                return 0
            },

            // return the variable paddingTop(paddingLeft when scroll direction is horizontal) base current zone.
            // @todo: if set a large `start` before variable was calculated,
            // here will also case too much offset calculate when list is very large,
            // consider use estimate paddingTop in this case just like `getVarPaddingBottom`.
            getVarPaddingStart: function () {
                return this.getVarOffset(this.delta.start)
            },

            // return the variable paddingBottom(paddingRight when scroll direction is horizontal) base current zone.
            getVarPaddingEnd: function () {
                var delta = this.delta
                var last = delta.total - 1
                if (delta.total - delta.end <= delta.keeps || delta.varLastCalcIndex === last) {
                    return this.getVarOffset(last) - this.getVarOffset(delta.end)
                } else {
                    // if unreached last zone or uncalculate real behind offset
                    // return the estimate paddingBottom avoid too much calculate.
                    return (delta.total - delta.end) * (delta.varAverSize || this.size)
                }
            },

            // retun the variable all heights(widths when scroll direction is horizontal) use to judge reach bottom.
            getVarAllSize: function () {
                var delta = this.delta
                if (delta.total - delta.end <= delta.keeps || delta.varLastCalcIndex === delta.total - 1) {
                    return this.getVarOffset(delta.total)
                } else {
                    return this.getVarOffset(delta.start) + (delta.total - delta.end) * (delta.varAverSize || this.size)
                }
            },

            // the ONLY ONE public method, allow the parent update variable by index.
            updateVariable: function (index) {
                // clear/update all the offfsets and heights ahead of index.
                this.getVarOffset(index, true)
            },

            // return the right zone info base on `start/index`.
            getZone: function (index) {
                var start, end
                var delta = this.delta

                index = parseInt(index, 10)
                index = Math.max(0, index)

                var lastStart = delta.total - delta.keeps
                var isLast = (index <= delta.total && index >= lastStart) || (index > delta.total)
                if (isLast) {
                    end = delta.total - 1
                    start = Math.max(0, lastStart)
                } else {
                    start = index
                    end = start + delta.keeps - 1
                }

                return {
                    end: end,
                    start: start,
                    isLast: isLast
                }
            },

            // trigger a props event on parent.
            triggerEvent: function (event) {
                if (this[event]) {
                    this[event]()
                }
            },

            // set manual scroll top.
            setScroll: function (scroll) {
                var vsl = this.$refs.vsl
                if (vsl) {
                    if (this.scrolldirection === 'vertically') {
                        vsl.scrollTop = scroll
                    } else if (this.scrolldirection === 'horizontal') {
                        vsl.scrollLeft = scroll
                    }
                }
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

                var paddingStart, paddingEnd, allSize
                var hasPadding = delta.total > delta.keeps

                if (this.variable) {
                    allSize = this.getVarAllSize()
                    paddingStart = hasPadding ? this.getVarPaddingStart() : 0
                    paddingEnd = hasPadding ? this.getVarPaddingEnd() : 0
                } else {
                    allSize = this.size * delta.total
                    paddingStart = this.size * (hasPadding ? delta.start : 0)
                    paddingEnd = this.size * (hasPadding ? delta.total - delta.keeps : 0) - paddingStart
                }
                if (this.scrolldirection === 'vertically') {
                    delta.paddingTop = paddingStart
                    delta.paddingBottom = paddingEnd
                } else if (this.scrolldirection === 'horizontal') {
                    delta.paddingLeft = paddingStart
                    delta.paddingRight = paddingEnd
                }
                delta.offsetAll = allSize - this.size * this.remain

                var targets = []
                for (var i = delta.start; i <= Math.ceil(delta.end); i++) {
                    if (this.scrolldirection === 'horizontal' && slots[i]) {
                        slots[i].data.style = Object.assign({}, {
                            flexShrink: 0
                        }, slots[i].data.style)
                    }
                    targets.push(slots[i])
                }
                return targets
            }
        },

        mounted: function () {
            if (this.start) {
                var start = this.getZone(this.start).start
                this.setScroll(this.variable ? this.getVarOffset(start) : start * this.size)
            } else if (this.offset) {
                this.setScroll(this.offset)
            }
        },

        // check if delta should update when prorps change.
        beforeUpdate: function () {
            var delta = this.delta
            delta.keeps = this.remain + (this.bench || this.remain)

            var calcstart = this.alter === 'start' ? this.start : delta.start
            var zone = this.getZone(calcstart)

            // if start, size or offset change, update scroll position.
            if (~['start', 'size', 'offset'].indexOf(this.alter)) {
                this.$nextTick(this.setScroll.bind(this, this.alter === 'offset'
                    ? this.offset : this.variable
                        ? this.getVarOffset(zone.isLast ? delta.total : zone.start)
                        : zone.isLast && (delta.total - calcstart <= this.remain)
                            ? delta.total * this.size : calcstart * this.size)
                )
            }

            // if points out difference, force update once again.
            if (calcstart !== zone.start || delta.end !== zone.end || this.alter) {
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
            var rtagStyle = {
                'display': 'block',
                'overflow-y': 'auto'
            }
            var wtagStyle
            if (this.scrolldirection === 'vertically') {
                rtagStyle.height = this.size * this.remain + 'px'
                wtagStyle = {
                    'display': 'block',
                    'padding-top': delta.paddingTop + 'px',
                    'padding-bottom': delta.paddingBottom + 'px'
                }
            } else {
                rtagStyle.width = this.size * this.remain + 'px'
                wtagStyle = {
                    'display': 'flex',
                    'padding-left': delta.paddingLeft + 'px',
                    'padding-right': delta.paddingRight + 'px'
                }
            }

            return h(this.rtag, {
                'ref': 'vsl',
                'style': rtagStyle,
                'on': {
                    '&scroll': dbc ? _debounce(this.onScroll.bind(this), dbc) : this.onScroll
                }
            }, [
                h(this.wtag, {
                    'style': wtagStyle,
                    'class': this.wclass
                }, list)
            ])
        }
    })
})
