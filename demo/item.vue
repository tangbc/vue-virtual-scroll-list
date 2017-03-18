<template>
	<div class="list-item">
		<ul class="list-item-box">
			<li class="index">{{ item.index }}</li>
			<li class="name">{{ item.name }}</li>
			<li class="date">{{ item.date }}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: {
			item: Object
		}
	}
</script>

<style scoped>
	.list-item {
		height: 30px;
		line-height: 30px;
	}
	/*.list-item:nth-child(2n) {
		background: #efefef;
	}
	.list-item:nth-child(2n-1) {
		background: #d1e3f5;
	}*/
	.list-item-box {
		list-style: none;
	}
	.list-item-box li {
		display: inline-block;
	}
	.index {
		width: 50px;
		font-weight: bold;
		text-align: center;
	}
	.name {
		width: 180px;
		padding-left: 20px;
		text-align: left;
	}
	.date {
		width: 120px;
		text-align: right;
	}
</style>
