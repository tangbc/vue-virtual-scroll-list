<template>
    <div>
        <VirtualList :size="50" :remain="6" class="list">
            <Item v-for="(udf, index) of items" :index="index" :key="index" />
        </VirtualList>
    </div>
</template>

<script>
    import Item from '../item.vue'
    import VirtualList from 'virtual-list'

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
    .list {
        border-radius: 3px;
        border: 1px solid #ddd;
        -webkit-overflow-scrolling: touch;
        overflow-scrolling: touch;
    }
</style>

