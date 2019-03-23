<template>
<div class="app">
    <div class="container">
        <header>
            <h1>frag-mode</h1>
            <p></p>
        </header>
        <div class="main">
            <virtual-list class="list"
                :size="size"
                :remain="remain"
                :bench="bench"
            >
                <item
                    v-for="item in items"
                    v-bind:key="item.index"
                    :index="item.index"
                    :height="size"
                    :info="item.info"
                />
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

let itemList = []
for (let idx = 0; idx < itemCount; idx++) {
    itemList.push({
        index: idx,
        height: itemSize,
        info: getRandomUser()
    })
}

export default {
    name: 'app',

    components: {
        'item': Item,
        'virtual-list': VirtualList
    },

    data () {
        return {
            bench,
            remain,
            size: itemSize,
            items: itemList
        }
    },

    methods: {
        getItemProps (itemIndex) {
            const props = {
                height: itemSize,
                index: itemIndex,
                ...getRandomUser()
            }
            return {
                props
            }
        }
    }
}
</script>

<style lang="less">
@import '../common/base.less';
</style>
