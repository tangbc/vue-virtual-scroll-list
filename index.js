(function (root, factory) {
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
            variable: [Array, Function],
            bench: Number,
            debounce: Number,
            totop: Function,
            tobottom: Function,
            onscroll: Function
        },

        created: function () {
            var slots = this.$slots.default
            var bench = this.bench || this.remain

            // An object helping to calculate.
            this.delta = {
                // Start index.
                start: this.start >= this.remain ? this.start : 0,
                // End index.
                end: this.start + this.remain + bench,
                // All items count.
                total: slots && slots.length || 0,
                // Nums keeping in real dom.
                keeps: this.remain + bench,
                // Nums scroll pass should force update.
                bench: bench,
                // Store scrollTop.
                scrollTop: 0,
                // Store scroll direction.
                scrollDirect: 'd',
                // Container wrapper viewport height.
                viewHeight: this.size * this.remain,
                // Container wrapper real padding-top.
                paddingTop: 0,
                // Container wrapper real padding-bottom.
                paddingBottom: 0,
                // Last event fire timestamp avoid compact fire.
                fireTime: 0,
                // Data to store variable index height.
                varHeight: {},
                // Data to store variable index ahead padding.
                varPadding: {}
            }
        },

        mounted: function () {
            if (this.start && this.validStart(this.start)) {
                this.setScrollTop(this.start * this.size)
            }
        },

        watch: {
            start: function (index) {
                if (!this.validStart(index)) {
                    return
                }

                var delta = this.delta
                var start, end, scrollTop

                if (this.isOverflow(index)) {
                    var zone = this.getLastZone()
                    end = zone.end
                    start = zone.start
                    scrollTop = delta.total * this.size
                } else {
                    start = index
                    end = start + delta.keeps
                    scrollTop = start * this.size
                }

                delta.end = end
                delta.start = start >= this.remain ? start : 0

                this.$forceUpdate()
                Vue2.nextTick(this.setScrollTop.bind(this, scrollTop))
            }
        },

        methods: {
            handleScroll: function (e) {
                var scrollTop = this.$refs.container.scrollTop

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

                delta.scrollDirect = delta.scrollTop > offset ? 'u' : 'd'
                delta.scrollTop = offset

                var overs
                if (this.variable) {
                    overs = this.getVarOvers(offset)
                } else {
                    overs = Math.floor(offset / this.size)
                }

                // Calculate the start and end by moving items.
                var start = overs || 0
                var end = overs ? (overs + delta.keeps) : delta.keeps

                var isOver = this.isOverflow(start)
                if (isOver) {
                    var zone = this.getLastZone()
                    end = zone.end
                    start = zone.start
                }

                // For better performance, if scroll pass items within now bench, do not update.
                if (!isOver && (overs > delta.start) && (overs - delta.start <= delta.bench)) {
                    return
                }

                delta.end = end
                delta.start = start

                // Call component to update shown items.
                this.$forceUpdate()
            },

            // return the scroll passed items count in variable height.
            getVarOvers: function (offset) {
                var delta = this.delta
                var low = 0
                var high = delta.total

                var middle = 0
                var middlePadding = 0
                while (low <= high) {
                    middle = low + Math.floor((high - low) / 2)
                    middlePadding = this.getVarPadding(middle)

                    if (middlePadding === offset) {
                        return middle
                    } else if (middlePadding < offset) {
                        low = middle + 1
                    } else if (middlePadding > offset) {
                        high = middle - 1
                    }
                }

                return low > 0 ? --low : 0
            },

            // get the index ahead padding when variable height.
            getVarPadding: function (index) {
                var delta = this.delta
                if (index in delta.varPadding) {
                    return delta.varPadding[index]
                }

                var i = index
                var padding = 0
                while (i--) {
                    padding += this.getVarHeight(i)
                }

                delta.varPadding[index] = padding
                return padding
            },

            // return a variable height from a given index.
            getVarHeight: function (index) {
                var delta = this.delta
                if (index in delta.varHeight) {
                    return delta.varHeight[index]
                }

                var height = 0
                if (typeof this.variable === 'function') {
                    height = this.variable(index)
                } else if (this.variable instanceof Array) {
                    height = this.variable[index]
                }

                delta.varHeight[index] = height
                return height
            },

            // Avoid overflow range.
            isOverflow: function (start) {
                var delta = this.delta
                var overflow = (delta.total - delta.keeps > 0) && (start + this.remain >= delta.total)
                if (overflow && delta.scrollDirect === 'd') {
                    this.fireEvent('tobottom')
                }
                return overflow
            },

            // Fire a props event to parent.
            fireEvent: function (event) {
                var now = +new Date()
                var delta = this.delta
                if (this[event] && now - delta.fireTime > 30) {
                    delta.fireTime = now
                    this[event](delta.start, delta.end)
                }
            },

            // Check if given start is valid.
            validStart: function (start) {
                return start === parseInt(start, 10) && (start >= 0 && start < this.delta.total)
            },

            // If overflow range return the last zone.
            getLastZone: function () {
                return {
                    end: this.delta.total,
                    start: this.delta.total - this.delta.keeps
                }
            },

            // Set manual scrollTop
            setScrollTop: function (scrollTop) {
                this.$refs.container.scrollTop = scrollTop
            },

            // Filter the shown items base on start and end.
            filter: function (slots) {
                var delta = this.delta

                if (!slots) {
                    slots = []
                    delta.start = 0
                }

                delta.total = slots.length

                var paddingTop, paddingBottom
                var hasPadding = slots.length > delta.keeps

                if (this.variable) {
                    paddingTop = hasPadding ? this.getVarPadding(delta.start) : 0
                    paddingBottom = hasPadding ? this.getVarPadding(delta.total) - this.getVarPadding(delta.end) : 0
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
            var showList = this.filter(this.$slots.default)
            var delta = this.delta
            var dbc = this.debounce

            return h(this.rtag, {
                'ref': 'container',
                'style': {
                    'display': 'block',
                    'overflow-y': 'auto',
                    'height': delta.viewHeight + 'px'
                },
                'on': {
                    'scroll': dbc ? _debounce(this.handleScroll.bind(this), dbc) : this.handleScroll
                }
            }, [
                h(this.wtag, {
                    'style': {
                        'display': 'block',
                        'padding-top': delta.paddingTop + 'px',
                        'padding-bottom': delta.paddingBottom + 'px'
                    },
                    'class': this.wclass
                }, showList)
            ])
        }
    })
})
