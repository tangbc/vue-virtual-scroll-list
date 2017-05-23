import Vue from 'vue'
import _ from 'lodash'

const VirtualList = Vue.component('vue-virtual-scroll-list', {

	props: {
		size: {
			type: Number,
			required: true
		},
		remain: {
			type: Number,
			required: true
		},
		klass: {
			type: String,
			default: 'virtual-scroll-list'
		},
		onScroll: Function
	},

	computed: {
		computedRemain() {
			console.log('REMAIN', this.remain)
			return this.remain
		}
	},

	watch: {
		remain(){
			this.reset()
		}
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

	// an object helping to calculate
	initial: {
		start: 0, // start index
		end: 0, // end index
		total: 0, // all items count
		keeps: 0, // nums of item keeping in real dom
		viewHeight: 0, // container wrapper viewport height
		allPadding: 0, // all padding of not-render-yet doms
		paddingTop: 0 // container wrapper real padding-top
	},

	data() {
		return {
			length: 0
		}
	},

	methods: {
		handleScroll (e) {
			let scrollTop = this.$refs.container.scrollTop

			this.updateZone(scrollTop)

			if (this.onScroll) {
				this.onScroll(e, scrollTop)
			}
		},

		updateZone (offset) {
			let delta = this.$options.delta
			let overs = Math.floor(offset / this.size)

			if (!offset) {
				this.$emit('toTop')
			}

			// need moving items at lease one unit height
			// @todo: consider prolong the zone range size
			let start = overs ? overs : 0
			let end = overs ? (overs + delta.keeps) : delta.keeps

			// avoid overflow range
			if (overs + this.computedRemain >= delta.total) {
				end = delta.total
				start = delta.total - delta.keeps
				this.$emit('toBottom')
			}

			delta.end = end
			delta.start = start

			// call component to update items
			this.$forceUpdate()
		},

		filter (slots) {
			let delta = this.$options.delta
			let length = slots ? slots.length : 0

			delta.total = length
			delta.paddingTop = this.size * delta.start
			delta.allPadding = this.size * (length - delta.keeps)

			if(slots){
				return slots.filter((slot, index) => {
					return index >= delta.start && index <= delta.end
				})
			}else{
				return []
			}
		},

		reset(){
			let remains = this.computedRemain
			this.$options.delta = _.clone(this.$options.initial)
			let delta = this.$options.delta
			let benchs = Math.round(remains / 2)

			delta.end = remains + benchs
			delta.keeps = remains + benchs
			delta.viewHeight = this.size * remains
		}
	},

	beforeMount () {
		this.reset()
	},

	render (createElement) {
		let length = 0
		if(this.$slots.default){
			length = this.$slots.default.length
		}
		console.log('LENGTH', length, 'OLD', this.length)
		if(length !== this.length){
			this.length = length
			this.reset()
		}
		let showList = this.filter(this.$slots.default)
		let { viewHeight, paddingTop, allPadding } = this.$options.delta

		return createElement('div', {
			'ref': 'container',
			'class': this.klass,
			'style': {
				'overflow-y': 'auto',
				'height': viewHeight + 'px',
				'scrollTop': 0
			},
			'on': {
				'scroll': this.handleScroll
			}
		}, [
			createElement('div', {
				'style': {
					'padding-top': paddingTop + 'px',
					'padding-bottom': allPadding - paddingTop + 'px'
				}
			}, showList)
		])
	}
})

module.exports = VirtualList
