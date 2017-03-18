<template>
	<div>
		<virtual-list
			:unit="30"
			:remain="10"
			:amount="20"
			v-on:toBottom="onBottom"
		>
			<Item v-for="item in items" :item="item" :key="item.id" />
		</virtual-list>

		<!-- <Item v-for="item in items" :item="item" :key="item.id" /> -->
	</div>
</template>

<script>
	import 'virtual-list';
	import Item from './item.vue';
	import { fetchData } from './request_mock';

	export default {
		name: 'apptest',

		components: { Item },

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
				// let list = fetchData();
				// if (list.length) {
				// 	this.items = this.items.concat(list);
				// }
			}
		}
	}
</script>
