<template>
	<div>
		<virtual-list
			:unit="30"
			:remain="10"
			:amount="20"
			v-on:bottom="onBottom"
		>
			<Item v-for="item in items" :item="item" :key="item.id" />
		</virtual-list>
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
				document.title = `Totoal: ${list.length}, Padding: ${(list.length - 10) * 30}`;
			}
		},

		data () {
			return {
				items: fetchData()
			}
		},

		methods: {
			onBottom () {
				console.log('REQUEST NEXT');
				this.items = this.items.concat(fetchData());
			}
		}
	}
</script>
