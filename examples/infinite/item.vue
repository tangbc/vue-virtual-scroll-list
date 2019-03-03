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
        height: 50px;
        line-height: 50px;
        padding-left: 20px;
        border-bottom: 1px solid #eee;
        box-sizing: border-box;
    }
</style>
