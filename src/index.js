import Vue from 'vue';
import { throttle } from './util';

// some data help to calculate
let delta = {
	// about scroll
	direct: '',
	last_top: 0,
	page_type: '',

	// about data
	total: 0,
	joints: 0,
	start_index: 0,

	// about style
	view_height: 0,
	all_padding: 0,
	padding_top: 0,
	bench_padding: 0
};

// save scroll direct and last scroll position
const saveDirect = (scrollTop) => {
	if (!delta.last_top) {
		delta.last_top = scrollTop;
	} else {
		delta.direct = delta.last_top > scrollTop ? 'UP' : 'DOWN';
		delta.last_top = scrollTop;
	}
};

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
		pageCounts: {
			type: Number,
			required: true
		}
	},

	methods: {
		onScroll: throttle(function () {
			let scrollTop = this.$refs.container.scrollTop;
			let listHeight = this.$refs.listbox.offsetHeight;

			saveDirect(scrollTop);

			// scroll to top
			if (scrollTop === 0) {
				this.$emit('top');
			}

			// scroll to bottom
			let paddingBottom = delta.all_padding - delta.padding_top;
			if (listHeight <= scrollTop + delta.view_height + paddingBottom) {
				this.showNext();
			}

			if (delta.direct === 'UP' && scrollTop < delta.padding_top) {
				this.showPrev();
			}
		}, 16, true, true),

		showNext () {
			delta.page_type = 'NEXT';
			this.$emit('bottom');
		},

		showPrev () {
			delta.page_type = 'PREV';
			this.$forceUpdate();
			this.$emit('prev');
		},

		filter (items) {
			let length = items.length;
			let nowStartIndex, udf, list = [];

			if (!delta.total) {
				delta.total = length;
			}

			if (delta.page_type === 'PREV') {
				// already the first page
				if (delta.start_index === 0) {
					list = items.slice(0, this.pageCounts);
				} else {
					list = items.filter((item, index) => {
						if (index === delta.start_index - this.pageCounts) {
							nowStartIndex = index;
						}

						return index >= (delta.start_index - this.pageCounts)
							&& index < delta.start_index;
					});

					if (nowStartIndex !== udf) {
						delta.start_index = nowStartIndex;
					}

					delta.padding_top = delta.start_index * this.unit;
				}
			} else {
				// virtual list has no any increase
				if (length === delta.total) {
					list = items;
				} else {
					list = items.filter((item, index) => {
						if (index === delta.start_index + this.pageCounts) {
							nowStartIndex = index;
						}

						return index >= (delta.start_index + this.pageCounts)
							&& index < (delta.start_index + this.pageCounts * 2);
					});

					if (nowStartIndex !== udf) {
						delta.start_index = nowStartIndex;
					}

					// item counts of all virtual list
					delta.total = length;
					// all padding pixel, except remain in viewport items
					delta.all_padding = (length - this.remain) * this.unit;
					// padding-top piexl
					delta.padding_top = delta.start_index * this.unit;
				}
			}

			return list;
		}
	},

	beforeMount () {
		delta.view_height = this.remain * this.unit;
	},

	mounted () {
		delta.joints = Math.ceil(this.remain / 2);
		delta.bench_padding = delta.joints * this.unit;
	},

	beforeUpdate () {},

	updated () {
		window.requestAnimationFrame(() => {
			this.$refs.container.scrollTop = delta.padding_top + delta.bench_padding;
		});
	},

	render (createElement) {
		let slots = this.$slots.default;
		let showList = this.filter(slots);

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
