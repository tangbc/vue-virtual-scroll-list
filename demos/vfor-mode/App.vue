<template>
<div class="app">
    <GithubCorner path="/vfor-mode" />
    <div class="container">
        <header>
            <h1>vfor-mode</h1>
            <p>Use v-for to build list.</p>
        </header>
        <div class="main">
            <virtual-list class="list"
                :size="size"
                :remain="remain"
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
const itemSize = 80
const itemCount = 1000 * 10

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
            remain,
            size: itemSize,
            items: itemList
        }
    }
}
</script>

<style lang="less">
@import '../common/app.less';
</style>
