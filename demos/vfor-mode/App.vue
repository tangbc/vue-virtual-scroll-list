<template>
<div class="app">
    <GithubCorner path="/vfor-mode" />
    <div class="container">
        <Header
            title="vfor-mode"
            :desciption="'Build ' + items.length.toLocaleString() + ' items.'"
            :startIndex="start"
            :onDataChange="onHeaderDataChange"
        ></Header>
        <div class="main">
            <virtual-list class="list"
                :size="size"
                :remain="remain"
                :start="start"
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
            remain,
            start: 0,
            size: itemSize,
            items: itemList
        }
    },

    methods: {
        onHeaderDataChange (type, value) {
            if (type === 'start') {
                this.start = value
            }
        },
    }
}
</script>

<style lang="less">
@import '../common/app.less';
</style>
