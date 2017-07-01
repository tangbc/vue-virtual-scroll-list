<template>
    <div>
        <div class="scrollToIndex">
            <span>Scroll to index</span>
            <input type="text" v-model.number.lazy="startIndex">
            <small>Change and blur to set startIndex.</small>
        </div>
        <VirtualList :size="50" :remain="6" class="list" :start="startIndex">
            <Item v-for="(udf, index) of items" :index="index" :key="index"></Item>
        </VirtualList>
        <div class="source">
            <a href="https://github.com/tangbc/vue-virtual-scroll-list/blob/master/examples/finite/finite.vue#L1">View this demo source code</a>
        </div>
    </div>
</template>

<script>
    import Item from './item.vue'
    import VirtualList from 'virtual-list'

    export default {
        name: 'finite-test',

        components: { Item, VirtualList },

        data () {
            return {
                startIndex: 0,
                items: new Array(100000)
            }
        }
    }
</script>

<style scoped>
    .scrollToIndex {
        padding-bottom: 20px;
    }
    input {
        outline: none;
        padding: .4em .5em;
        width: 55px;
        margin: 0 .8em;
        border-radius: 3px;
        border: 1px solid;
        border-color: #dddddd;
        font-size: 16px;
    }
    input:focus {
        border-color: #6495ed;
    }
    small {
        color: #999;
    }
    .list {
        background: #fff;
        border-radius: 3px;
        border: 1px solid #ddd;
        -webkit-overflow-scrolling: touch;
        overflow-scrolling: touch;
    }
    .source {
        text-align: center;
        padding-top: 20px;
    }
    .source a {
        color: #999;
        text-decoration: none;
        font-weight: 100;
    }
</style>

