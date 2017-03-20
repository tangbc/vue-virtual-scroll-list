import Vue from 'vue';

const VirtualList = Vue.component('vue-virtual-scroll-list', {

	props: {
		itemHeight: {
			type: Number,
			required: true
		},
		remainItems: {
			type: Number,
			required: true
		}
	},

	// an object helping to calculate
	delta: {
		start: 0, // start index
		end: 0, // end index
		keeps: 0, // nums of item keeping in real dom
		total: 0, // all items count
		viewHeight: 0, // viewport height
		allPadding: 0, // all padding of not-render-yet doms
		paddingTop: 0 // container real padding-top
	},

	methods: {
		onScroll () {
			this.updateZone(this.$refs.container.scrollTop);
		},

		updateZone (offset) {
			let delta = this.$options.delta;
			let overs = Math.floor(offset / this.itemHeight);

			// need moving items at lease one unit height
			// @todo: consider prolong the zone range size
			let start = overs ? overs : 0;
			let end = overs ? (overs + delta.keeps) : delta.keeps;

			if (overs + this.remainItems >= delta.total) {
				end = delta.total;
				start = delta.total - delta.keeps;
			}

			delta.end = end;
			delta.start = start;

			// call component to update items
			this.$forceUpdate();
		},

		filter (items) {
			let delta = this.$options.delta;

			delta.total = items.length;
			delta.paddingTop = this.itemHeight * delta.start;
			delta.allPadding = this.itemHeight * (items.length - delta.keeps);

			return items.filter((item, index) => {
				return index >= delta.start && index <= delta.end;
			});
		}
	},

	beforeMount () {
		let remains = this.remainItems;
		let delta = this.$options.delta;
		let bench = Math.ceil(remains / 2);

		delta.end = remains + bench;
		delta.keeps = remains + bench;
		delta.viewHeight = this.itemHeight * remains;
	},

	render (createElement) {
		let showList = this.filter(this.$slots.default);
		let { viewHeight, paddingTop, allPadding } = this.$options.delta;

		return createElement('div', {
			'ref': 'container',
			'class': 'virtual-list',
			'style': {
				'overflow-y': 'auto',
				'height': viewHeight + 'px'
			},
			'on': {
				'scroll': this.onScroll
			}
		}, [
			createElement('div', {
				'ref': 'listbox',
				'class': 'virtual-list-box',
			}, [
				createElement('div', {
					'class': 'virtual-list-box-padding',
					'style': {
						'padding-top': paddingTop + 'px',
						'padding-bottom': (allPadding - paddingTop) + 'px'
					}
				}, showList)
			])
		]);
	}
});

export default VirtualList;
