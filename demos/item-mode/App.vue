<template>
<div class="app">
    <div class="container">
        <header>
            <h1>item-mode</h1>
            <p>Use this mode can save a considerable amount of memory and performance.</p>
        </header>
        <div class="main">
            <virtual-list class="list"
                :size="size"
                :remain="remain"
                :bench="bench"
                :item="item"
                :itemcount="itemCount"
                :itemprops="getItemProps"
            >
            </virtual-list>
        </div>
    </div>
</div>
</template>

<script>
import Item from '../common/Item.vue'
import VirtualList from 'vue-virtual-scroll-list'
import { getRandomUser } from '../common/util'

const remain = 6
const bench = remain
const itemSize = 80
const itemCount = 1000 * 100

export default {
    name: 'app',

    components: {
        'virtual-list': VirtualList
    },

    data () {
        return {
            bench,
            remain,
            size: itemSize,
            item: Item,
            itemCount: itemCount
        }
    },

    methods: {
        getItemProps (itemIndex) {
            return {
                key: itemIndex,
                props: {
                    height: itemSize,
                    index: itemIndex,
                    info: getRandomUser()
                }
            }
        }
    }
}
</script>

<style lang="less">
@import '../common/base.less';
</style>
