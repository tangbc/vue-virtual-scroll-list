(function (root, ns, factory) {
    if (typeof exports === 'object' && typeof module === 'object') {
        module.exports = factory(require('vue'))
    } else if (typeof define === 'function' && define.amd) {
        define(['vue'], factory)
    } else if (typeof exports === 'object') {
        exports[ns] = factory(require('vue'))
    } else {
        root[ns] = factory(root['Vue'])
    }
})(this, 'VirutalScrollList', function (Vue2) {
    if (typeof Vue2 === 'object' && typeof Vue2.default === 'function') {
        Vue2 = Vue2.default
    }

    var innerns = 'vue-virtual-scroll-list'

    return Vue2.component(innerns, {
        props: {
            size: { type: Number, required: true },
            remain: { type: Number, required: true },
            rtag: { type: String, default: 'div' },
            rtagClass: { type: String, default: '' },
            wtag: { type: String, default: 'div' },
            wtagClass: { type: String, default: '' },
            start: { type: Number, default: 0 },
            totop: Function,
            tobottom: Function,
            onscroll: Function
        },

        created: function () {
            // An object helping to calculate.
            this.delta = {
                start: 0, // Start index.
                end: 0, // End index.
                total: 0, // All items count.
                keeps: 0, // Nums keeping in real dom.
                benchs: 0, // Nums scroll pass should force update.
                scrollTop: 0, // Store scrollTop.
                scrollDirect: 'd', // Scroll direction.
                viewHeight: 0, // Container wrapper viewport height.
                allPadding: 0, // All padding of not-render-yet doms.
                paddingTop: 0, // Container wrapper real padding-top.
                timeStamp: 0 // Last event fire timestamp avoid compact fire.
            }
        },

        watch: {
            start: function (index) {
                var delta = this.delta

                if (!this.validStart(index)) {
                    return
                }

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
                var overs = Math.floor(offset / this.size)

                if (!offset && delta.total) {
                    this.fireEvent('totop')
                }

                delta.scrollDirect = delta.scrollTop > offset ? 'u' : 'd'
                delta.scrollTop = offset

                // Calculate the start and end by moving items.
                var start = overs || 0
                var end = overs ? (overs + delta.keeps) : delta.keeps

                if (this.isOverflow(start)) {
                    var zone = this.getLastZone()
                    end = zone.end
                    start = zone.start
                }

                // If scroll pass items within now benchs, do not update.
                if (overs > delta.start && overs - delta.start <= delta.benchs) {
                    return
                }

                delta.end = end
                delta.start = start

                // Call component to update shown items.
                this.$forceUpdate()
            },

            // Avoid overflow range.
            isOverflow: function (start) {
                var delta = this.delta
                var overflow = delta.total - delta.keeps > 0 && (start + this.remain >= delta.total)
                if (overflow && delta.scrollDirect === 'd') {
                    this.fireEvent('tobottom')
                }
                return overflow
            },

            // Fire a props event to parent.
            fireEvent: function (event) {
                var now = +new Date()
                if (this[event] && now - this.delta.timeStamp > 30) {
                    this[event]()
                    this.delta.timeStamp = now
                }
            },

            // Check if given start is valid.
            validStart: function (start) {
                let valid = 1
                if (start !== parseInt(start, 10)) {
                    valid = 0
                    console.warn(innerns + ': start ' + start + ' is not an integer.')
                }
                if (start < 0 || start > this.delta.total - 1) {
                    valid = 0
                    console.warn(innerns + ': start ' + start + ' is an overflow index.')
                }
                return !!valid
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
                delta.paddingTop = this.size * delta.start
                delta.allPadding = this.size * (slots.length - delta.keeps)

                return slots.filter(function (slot, index) {
                    return index >= delta.start && index <= delta.end
                })
            }
        },

        beforeMount: function () {
            var delta = this.delta
            var remain = this.remain
            var benchs = Math.round(remain / 2)

            delta.benchs = benchs
            delta.keeps = remain + benchs
            delta.viewHeight = this.size * remain
            delta.start = this.start >= remain ? this.start : 0
            delta.end = this.start + remain + benchs
        },

        mounted: function () {
            if (this.validStart(this.start)) {
                this.setScrollTop(this.start * this.size)
            }
        },

        render: function (createElement) {
            var showList = this.filter(this.$slots.default)
            var delta = this.delta

            return createElement(this.rtag, {
                'ref': 'container',
                'style': {
                    'display': 'block',
                    'overflow-y': 'auto',
                    'height': delta.viewHeight + 'px'
                },
                'on': {
                    'scroll': this.handleScroll
                },
                'class': this.rtagClass
            }, [
                createElement(this.wtag, {
                    'style': {
                        'display': 'block',
                        'padding-top': delta.paddingTop + 'px',
                        'padding-bottom': delta.allPadding - delta.paddingTop + 'px'
                    },
                    'class': this.wtagClass
                }, showList)
            ])
        }
    })
})
