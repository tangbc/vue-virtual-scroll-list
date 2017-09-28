<template>
    <div class="item" :style="style">
        <span>{{ title }}</span>
        <i class="px">{{ height }}px</i>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            height: Number
        },

        computed: {
            style () {
                return {
                    'height': this.height + 'px',
                    'line-height': this.height + 'px'
                }
            }
        }
    }
</script>

<style>
    .item {
        position: relative;
        padding-left: 20px;
        box-sizing: border-box;
        border-bottom: 1px solid #eee;
    }
    .px {
        position: absolute;
        right: 20px;
        font-size: 12px;
        color: #ccc;
    }
</style>
