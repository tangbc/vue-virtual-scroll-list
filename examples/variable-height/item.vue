<template>
    <div class="item" :style="style">
        <span>{{ title }}</span>
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
        /* height: 50px; */
        /* line-height: 50px; */
        padding-left: 20px;
        box-sizing: border-box;
        border-bottom: 1px solid #eee;
    }
</style>
