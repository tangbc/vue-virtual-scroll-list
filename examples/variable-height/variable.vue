<template>
    <div>
        <div class="scrollToIndex">
            <span>Scroll to index: </span>
            <input type="text" v-model.number.lazy="startIndex">
            <small>Change and blur to set start index.</small>
        </div>

        <VirtualList :variable="getVariableHeight" :size="50" :remain="6" :start="startIndex" class="list">
            <Item
                v-for="(item, index) of items"
                :key="index"
                :title="item.title"
                :height="item.height"
            ></Item>
        </VirtualList>

        <div class="source">
            <a href="https://github.com/tangbc/vue-virtual-scroll-list/blob/master/examples/variable-height/variable.vue#L1">
                View this demo source code
            </a>
        </div>
    </div>
</template>

<script>
    import Item from './item.vue'
    import VirtualList from 'vue-virtual-scroll-list'
    import getItems from './getItems'

    export default {
        name: 'variable-test',

        components: { Item, VirtualList },

        data () {
            return {
                startIndex: 0,
                items: getItems(10000)
            }
        },

        methods: {
            getVariableHeight (index) {
                let target = this.items[index]
                return target && target.height
            }
        }
    }
</script>

<style>
    .list {
        min-width: 420px;
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
    .scrollToIndex, .changeHeight {
        padding-bottom: 20px;
        position: relative;
    }
    input {
        outline: none;
        padding: .4em .5em;
        width: 55px;
        height: 16px;
        border-radius: 3px;
        border: 1px solid;
        border-color: #dddddd;
        font-size: 16px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }
    input:focus {
        border-color: #6495ed;
    }
    small {
        color: #999;
    }
    @media (max-width: 640px) {
        small {
            display: none;
        }
    }
    select {
        height: 28px;
        margin-right: .8em;
        outline: none;
        background: #f8f8f8;
    }
    .changeBtn {
        position: relative;
        margin-left: .4em;
        padding: .4em .8em;
        height: 30px;
        vertical-align: top;
        border-radius: 3px;
        background: #f8f8f8;
        cursor: pointer;
        outline: none;
        border: 1px solid #ccc;
    }
    .changeBtn:active {
        background: #f3f3f3;
    }
</style>

