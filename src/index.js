import Vue from 'vue';
import { throttle } from './util';

Vue.component('virtual-list', {

	props: {
		unit: {
			type: Number,
			required: true
		},
		remain: {
			type: Number,
			required: true
		},
		amount: {
			type: Number,
			required: true
		}
	},

	// an object helping to calculate
	delta: {
		// scroll
		direct: '',
		last_top: 0,
		page_type: '',
		// data
		total: 0,
		joints: 0,
		start_index: 0,
		// style
		view_height: 0,
		all_padding: 0,
		padding_top: 0,
		bench_padding: 0
	},

	methods: {
		onScroll: throttle(function () {
			let delta = this.$options.delta;
			let scrollTop = this.$refs.container.scrollTop;
			let listHeight = this.$refs.listbox.offsetHeight;

			this.saveDirect(scrollTop);

			// scroll to top
			if (scrollTop === 0) {
				this.$emit('toTop');
			}

			// scroll to bottom
			let paddingBottom = delta.all_padding - delta.padding_top;
			if (listHeight <= scrollTop + delta.view_height + paddingBottom) {
				this.showNext();
			}

			if (delta.direct === 'UP' && scrollTop < delta.padding_top) {
				this.showPrev();
			}
		}, 10, true, true),

		saveDirect (scrollTop) {
			let delta = this.$options.delta;

			if (!delta.last_top) {
				delta.last_top = scrollTop;
			} else {
				delta.direct = delta.last_top > scrollTop ? 'UP' : 'DOWN';
				delta.last_top = scrollTop;
			}
		},

		showNext () {
			let delta = this.$options.delta;

			delta.page_type = 'NEXT';
			if (delta.total - delta.start_index <= this.amount) {
				this.$emit('toBottom');
			} else {
				delta.start_index = delta.start_index + this.amount;
				this.$forceUpdate();
			}
		},

		showPrev () {
			this.$options.delta.page_type = 'PREV';
			this.$forceUpdate();
			this.$emit('toPrev');
		},

		filter (items) {
			let length = items.length;
			let delta = this.$options.delta;
			let nowStartIndex, udf, list = [];

			if (!delta.total) {
				delta.total = length;
			}

			if (delta.page_type === 'PREV') {
				// already the first page
				if (delta.start_index === 0) {
					list = items.slice(0, this.amount);
				} else {
					list = items.filter((item, index) => {
						if (index === delta.start_index - this.amount) {
							nowStartIndex = index;
						}

						return index >= (delta.start_index - this.amount)
							&& index < delta.start_index;
					});

					if (nowStartIndex !== udf) {
						delta.start_index = nowStartIndex;
					}
				}

				delta.padding_top = delta.start_index * this.unit;
			} else {
				// flipping next or first render

				// virtual list has no any increase
				// just flip to next page from start index
				if (length === delta.total) {
					list = items.filter((item, index) => {
						return index >= delta.start_index
							&& index < delta.start_index + this.amount;
					});
				} else {
					list = items.filter((item, index) => {
						if (index === delta.start_index + this.amount) {
							nowStartIndex = index;
						}

						return index >= (delta.start_index + this.amount)
							&& index < (delta.start_index + this.amount * 2);
					});

					if (nowStartIndex !== udf) {
						delta.start_index = nowStartIndex;
					}

					// save virtual list new length
					delta.total = length;
				}

				// all padding pixel, include top and bottom
				// except amount and calculate when component update
				delta.all_padding = (length - this.amount) * this.unit;
				// padding-top piexl
				delta.padding_top = delta.start_index * this.unit;
			}

			return list;
		}
	},

	beforeMount () {
		this.$options.delta.view_height = this.remain * this.unit;
	},

	mounted () {
		let delta = this.$options.delta;
		delta.joints = Math.ceil(this.remain / 2);
		delta.bench_padding = delta.joints * this.unit;
	},

	beforeUpdate () {},

	updated () {
		let delta = this.$options.delta;
		window.requestAnimationFrame(() => {
			this.$refs.container.scrollTop = delta.padding_top + delta.bench_padding;
		});
	},

	render (createElement) {
		let delta = this.$options.delta;
		let showList = this.filter(this.$slots.default);

		return createElement('div', {
			'ref': 'container',
			'class': 'virtual-list',
			'style': {
				'overflow-y': 'auto',
				'height': delta.view_height + 'px'
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
						'padding-top': delta.padding_top + 'px',
						'padding-bottom': (delta.all_padding - delta.padding_top) + 'px'
					}
				}, showList)
			])
		]);
	}
});
