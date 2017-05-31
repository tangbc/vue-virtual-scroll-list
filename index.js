(function (root, moduleName, factory) {
    if (typeof exports === 'object' && typeof module === 'object') {
        module.exports = factory(require('vue'))
    } else if (typeof define === 'function' && define.amd) {
        define(['vue'], factory)
    } else if (typeof exports === 'object') {
        exports[moduleName] = factory(require('vue'))
    } else {
        root[moduleName] = factory(root['Vue'])
    }
})(this, 'VirutalScrollList', function (Vue2) {
    'use strict'

    return Vue2.component('vue-virtual-scroll-list', {
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
            onScroll: Function
        },

        // an object helping to calculate
        delta: {
            start: 0, // start index
            end: 0, // end index
            total: 0, // all items count
            keeps: 0, // nums of item keeping in real dom
            viewHeight: 0, // container wrapper viewport height
            allPadding: 0, // all padding of not-render-yet doms
            paddingTop: 0 // container wrapper real padding-top
        },

        methods: {
            handleScroll: function (e) {
                var scrollTop = this.$refs.container.scrollTop

                this.updateZone(scrollTop)

                if (this.onScroll) {
                    this.onScroll(e, scrollTop)
                }
            },

            updateZone: function (offset) {
                var delta = this.$options.delta
                var overs = Math.floor(offset / this.size)

                if (!offset) {
                    this.$emit('toTop')
                }

                // need moving items at lease one unit height
                // @todo: consider prolong the zone range size
                var start = overs ? overs : 0
                var end = overs ? (overs + delta.keeps) : delta.keeps

                // avoid overflow range
                if (overs + this.remain >= delta.total) {
                    end = delta.total
                    start = delta.total - delta.keeps
                    this.$emit('toBottom')
                }

                delta.end = end
                delta.start = start

                // call component to update shown items
                this.$forceUpdate()
            },

            filter: function (slots) {
                var delta = this.$options.delta

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

            delta.end = remains + benchs
            delta.keeps = remains + benchs
            delta.viewHeight = this.size * remains
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
