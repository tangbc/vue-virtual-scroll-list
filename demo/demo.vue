<template>
	<div>
		<VirtualList
			:itemHeight="30"
			:remainItems="10"
			v-on:toBottom="onBottom"
		>
			<Item v-for="item in items" :item="item" :key="$index" />
		</VirtualList>
	</div>
</template>

<script>
	import Item from './item.vue';
	import VirtualList from 'virtual-list';
	import { fetchData } from './request_mock';

	export default {
		name: 'apptest',

		components: { Item, VirtualList },

		watch: {
			items (list) {
				document.title = `Totoal: ${list.length}`;
			}
		},

		data () {
			return {
				items: fetchData(100)
			}
		},

		methods: {
			onBottom () {
				// let list = fetchData(20);
				// if (list.length) {
				// 	this.items = this.items.concat(list);
				// }
			}
		}
	}
</script>
