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
            wtag: { type: String, default: 'div' },
            start: { type: Number, default: 0 },
            totop: Function,
            tobottom: Function,
            onscroll: Function
        },

        // An object helping to calculate.
        delta: {
            start: 0, // Start index.
            end: 0, // End index.
            total: 0, // All items count.
            keeps: 0, // Nums of item keeping in real dom.
            viewHeight: 0, // Container wrapper viewport height.
            allPadding: 0, // All padding of not-render-yet doms.
            paddingTop: 0, // Container wrapper real padding-top.
            scrollTop: 0, // Store scrollTop.
            scrollDirect: 'd', // Scroll direction.
            fireTime: 0 // Store last event time avoiding compact fire.
        },

        watch: {
            start: function (index) {
                var delta = this.$options.delta

                if (index !== parseInt(index, 10)) {
                    return console.warn(innerns + ': start ' + index + ' is not integer.')
                }
                if (index < 0 || index > delta.total - 1) {
                    return console.warn(innerns + ': start ' + index + ' is overflow.')
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
                var delta = this.$options.delta
                var overs = Math.floor(offset / this.size)

                if (!offset && delta.total) {
                    this.fireEvent('totop')
                }

                delta.scrollDirect = delta.scrollTop > offset ? 'u' : 'd'
                delta.scrollTop = offset

                // Need moving items at lease one unit height.
                // @todo: consider prolong the zone range size.
                var start = overs || 0
                var end = overs ? (overs + delta.keeps) : delta.keeps

                if (this.isOverflow(start)) {
                    var zone = this.getLastZone()
                    end = zone.end
                    start = zone.start
                }

                delta.end = end
                delta.start = start

                // Call component to update shown items.
                this.$forceUpdate()
            },

            // Avoid overflow range.
            isOverflow: function (start) {
                var delta = this.$options.delta
                var overflow = delta.total - delta.keeps > 0 && (start + this.remain >= delta.total)
                if (overflow && delta.scrollDirect === 'd') {
                    this.fireEvent('tobottom')
                }
                return overflow
            },

            // Fire a props event to parent.
            fireEvent: function (event) {
                var cb = this[event]
                var now = +new Date()
                var delta = this.$options.delta
                if (cb && (now - delta.fireTime > 35)) {
                    cb()
                    delta.fireTime = now
                }
            },

            // If overflow range return the last zone.
            getLastZone: function () {
                var delta = this.$options.delta
                return {
                    end: delta.total,
                    start: delta.total - delta.keeps
                }
            },

            // Set manual scrollTop
            setScrollTop: function (scrollTop) {
                this.$refs.container.scrollTop = scrollTop
            },

            filter: function (slots) {
                var delta = this.$options.delta

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
            var remains = this.remain
            var delta = this.$options.delta
            var benchs = Math.round(remains / 2)

            delta.start = this.start >= remains ? this.start : 0
            delta.end = this.start + remains + benchs
            delta.keeps = remains + benchs
            delta.viewHeight = this.size * remains
        },

        mounted: function () {
            this.setScrollTop(this.start * this.size)
        },

        render: function (createElement) {
            var showList = this.filter(this.$slots.default)
            var delta = this.$options.delta

            return createElement(this.rtag, {
                'ref': 'container',
                'style': {
                    'display': 'block',
                    'overflow-y': 'auto',
                    'height': delta.viewHeight + 'px'
                },
                'on': {
                    'scroll': this.handleScroll
                }
            }, [
                createElement(this.wtag, {
                    'style': {
                        'display': 'block',
                        'padding-top': delta.paddingTop + 'px',
                        'padding-bottom': delta.allPadding - delta.paddingTop + 'px'
                    }
                }, showList)
            ])
        }
    })
})
