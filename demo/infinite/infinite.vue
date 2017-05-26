<template>
	<div>
		<VirtualList class="list" :size="50" :remain="6" v-on:toBottom="onBottom">
			<Item v-for="(udf, index) of items" :index="index" :key="index" />
		</VirtualList>
	</div>
</template>

<script>
	import Item from '../item.vue';
	import VirtualList from 'virtual-list';

	function getList (length) {
		return new Array(length);
	}

	export default {
		name: 'infinite-test',

		components: { Item, VirtualList },

		data () {
			return {
				items: getList(20)
			}
		},

		methods: {
			onBottom () {
				this.items = this.items.concat(getList(20));
			}
		}
	}
</script>

<style scoped>
	.list {
		border-radius: 3px;
		border: 1px solid #ddd;
		-webkit-overflow-scrolling: touch;
		overflow-scrolling: touch;
	}
</style>

