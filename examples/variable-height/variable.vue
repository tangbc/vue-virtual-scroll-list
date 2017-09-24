<template>
    <div>
        <VirtualList :variable="getVariableHeight" :size="50" :remain="6" class="list">
            <Item
                v-for="(item, index) of items"
                :key="index"
                :title="item.title"
                :height="item.height"
            ></Item>
        </VirtualList>
        <div class="source">
            <a href="https://github.com/tangbc/vue-virtual-scroll-list/blob/master/examples/variable-height/variable-height.vue#L1">
                View this demo source code
            </a>
        </div>
    </div>
</template>

<script>
    import Item from './item.vue'
    import VirtualList from 'vue-virtual-scroll-list'

    import getItems from './getItems'

    const items = getItems(1000)

    export default {
        name: 'variable-test',

        components: { Item, VirtualList },

        data () {
            return {
                items: items
            }
        },

        methods: {
            getVariableHeight (index) {
                let targetItem = this.items[index]
                return targetItem && targetItem.height || 50
            }
        }
    }
</script>

<style>
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
    @media (max-width: 640px) {
        small {
            display: none;
        }
    }
</style>

