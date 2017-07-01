<template>
    <div>
        <div class="counter">
            <span class="times">Request times: {{ times }}</span>
            <span class="count">Items count: ({{ times }} + 1) × 20 = {{ items.length }}</span>
        </div>
        <div class="listWrap">
            <VirtualList class="list"
                :size="50"
                :remain="6"
                :totop="toTop"
                :tobottom="toBottom"
            >
                <Item v-for="(udf, index) of items" :index="index" :key="index"></Item>
            </VirtualList>
            <Loading class="list-loading" :loading="loading"></Loading>
        </div>
        <div class="source">
            <a href="https://github.com/tangbc/vue-virtual-scroll-list/blob/master/examples/infinite/infinite.vue#L1">View this demo source code</a>
        </div>
    </div>
</template>

<script>
    import Item from './item.vue'
    import Loading from './loading.vue'
    import VirtualList from 'virtual-list'

    function getList (length) {
        return new Array(length)
    }

    export default {
        name: 'infinite-test',

        components: { Item, VirtualList, Loading },

        data () {
            return {
                times: 0,
                loading: false,
                items: getList(20)
            }
        },

        methods: {
            toTop () {
                console.log('At top now.')
            },

            toBottom () {
                this.loading = true
                console.log('At bottom now.')

                setTimeout(() => {
                    this.times++
                    this.loading = false
                    this.items = this.items.concat(getList(20))
                }, 2017)
            }
        }
    }
</script>

<style scoped>
    .counter {
        position: relative;
        padding-bottom: 20px;
    }
    .count {
        position: absolute;
        right: 0;
    }
    .listWrap {
        position: relative;
    }
    .list-loading {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
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

