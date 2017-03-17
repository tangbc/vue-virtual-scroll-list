<template>
	<div class="user">
		<ul class="user-list">
			<li class="user-item indx">{{ item.indx }}</li>
			<li class="user-item name">{{ item.name }}</li>
			<li class="user-item urid">{{ item.urid }}</li>
			<li class="user-item date">{{ item.date }}</li>
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
	.user {
		height: 30px;
		line-height: 30px;
	}
	.user:nth-child(2n) {
		background: #efefef;
	}
	.user:nth-child(2n-1) {
		background: #d1e3f5;
	}
	.user-list {
		list-style: none;
	}
	.user-item {
		display: inline-block;
		text-align: center;
	}
	.indx {
		width: 50px;
	}
	.urid {
		width: 60px;
	}
	.name {
		width: 120px;
	}
	.date {
		width: 130px;
	}
</style>
