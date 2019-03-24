<template>
<div class="app">
    <GithubCorner path="/item-mode" />
    <div class="container">
        <Header
            title="item-mode"
            :desciption="'Build ' + itemCount.toLocaleString() + ' items.'"
            :startIndex="start"
            :onDataChange="onHeaderDataChange"
        ></Header>
        <div class="main">
            <virtual-list class="list"
                :size="size"
                :remain="remain"
                :start="start"

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

let userInfoList = []
for (let i = 0; i < itemCount; i++) {
    userInfoList.push(getRandomUser())
}

export default {
    name: 'app',

    components: {
        'virtual-list': VirtualList
    },

    data () {
        return {
            remain,
            start: 0,
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
                    info: userInfoList[itemIndex] || {}
                }
            }
        },

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
