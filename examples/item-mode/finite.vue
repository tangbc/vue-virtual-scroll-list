<template>
    <div>
        <div class="op">
            <div class="op-item"><label>count:</label><input type="text" v-model.number.lazy="count"></div>
            <div class="op-item"><label>start: </label><input type="text" v-model.number.lazy="start"></div>
            <div class="op-item"><label>remain: </label><input type="text" v-model.number.lazy="remain"></div>
            <!-- <div class="op-item"><label>size: </label><input type="text" v-model.number.lazy="size"></div> -->
            <div class="op-item"><label>bench: </label><input type="text" v-model.number.lazy="bench"></div>
        </div>
        <VirtualList class="list"
            :size="50"
            :remain="remain"
            :bench="bench"
            :start="start"
            :items="items"
            :item="itemComponent"
            :itemprop="itemBinding"
        ></VirtualList>
        <!-- <div class="source">
            <a href="https://github.com/tangbc/vue-virtual-scroll-list/blob/master/examples/finite/finite.vue#L1">
                View this demo source code
            </a>
        </div> -->
    </div>
</template>

<script>
    import Item from './item.vue'
    import VirtualList from 'vue-virtual-scroll-list'

    function getList (count) {
        return new Array(count)
    }

    var INIT_COUNT = 1000

    export default {
        name: 'finite-test-item-mode',

        components: { Item, VirtualList },

        data () {
            return {
                count: INIT_COUNT,
                start: 0,
                remain: 6,
                bench: 6,
                items: getList(INIT_COUNT),
                itemComponent: Item,
            }
        },

        watch: {
            count: function (val) {
                this.items = getList(Math.max(parseInt(val, 10), 0))
            }
        },

        methods: {
            // simple variable test
            // variableHeight() {
            //     return 45;
            // },

            itemBinding (idx) {
                const item = this.items[idx]
                return {
                    key: item,
                    props: {
                        index: idx
                    }
                };

                // return {
                //     key: item.id,
                //     props: {
                //         index: item.num,
                //     },
                //     nativeOn: {
                //         dblclick: (...args) => {
                //             console.log(idx, 'dblclick');
                //         }
                //     }
                // }
            }
        }
    }
</script>

<style>
    .scrollToIndex {
        padding-bottom: 20px;
    }
    .op {
        padding-bottom: 1em;
    }
    .op-item {
        padding: .2em 0;
    }
    label {
        display: inline-block;
        width: 100px;
        padding-right: 1em;
        text-align: right;
    }
    input {
        outline: none;
        padding: .5em;
        width: 80px;
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

