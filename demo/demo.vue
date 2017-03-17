<template>
	<div>
		<virtual-list
			:unit="30"
			:remain="10"
			:pageCounts="20"
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

		data () {
			return {
				items: fetchData()
			}
		},

		methods: {
			onBottom () {
				this.items = this.items.concat(fetchData());
			}
		}
	}
</script>
