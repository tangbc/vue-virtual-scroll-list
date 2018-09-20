<template>
    <div class="item">Item # {{ index }}</div>
</template>

<script>
    export default {
        props: {
            index: Number
        }
    }
</script>

<style>
    .item {
        width: 100px;
        height: 300px;
        line-height: 50px;
        border-bottom: 1px solid #eee;
    }
</style>
