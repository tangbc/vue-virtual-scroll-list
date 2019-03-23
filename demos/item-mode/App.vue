<template>
<div class="app">
    <GithubCorner path="/item-mode" />
    <div class="container">
        <header>
            <h1>item-mode</h1>
            <p>Use vNode to build item list.</p>
        </header>
        <div class="main">
            <virtual-list class="list"
                :size="size"
                :remain="remain"

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
const itemSize = 80
const itemCount = 1000 * 100

export default {
    name: 'app',

    components: {
        'virtual-list': VirtualList
    },

    data () {
        return {
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
@import '../common/app.less';
</style>
