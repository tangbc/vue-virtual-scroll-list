<template>
	<div>
		<VirtualList
			:size="40"
			:remain="8"
		>
			<Item v-for="(udf, index) of items" :index="index" :key="index" />
		</VirtualList>
	</div>
</template>

<script>
	import Item from '../item.vue';
	import VirtualList from 'virtual-list';

	export default {
		name: 'finite-test',

		components: { Item, VirtualList },

		data () {
			return {
				items: new Array(100000)
			}
		}
	}
</script>

<style scoped>
	.virtual-list {
		border-radius: 3px;
		border: 1px solid #ddd;
	}
</style>

