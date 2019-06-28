<template>
<div class="app">
    <GithubCorner path="/scroll-element" />
    <div ref="main" class="container">
        <Header title="scroll-element"
            :desciption="'Build ' + itemCount.toLocaleString() + ' items.'"
            :start-index="start"
            :on-data-change="onHeaderDataChange"
        />
        <div class="main">
            <virtual-list class="list"
                :size="size"
                :remain="remain"
                :bench="30"
                :start="start"
                :scrollelement="scrollelement"

                :item="item"
                :itemcount="itemCount"
                :itemprops="getItemProps"
            />
        </div>
    </div>
</div>
</template>

<script>
import Item from '../common/Item.vue'
import VirtualList from 'vue-virtual-scroll-list'
import { countStorage, getRandomUser } from '../common/util'

const remain = 14
const itemSize = 80
const itemCount = countStorage.get()

let userInfoList = []
for (let i = 0; i < itemCount; i++) {
    userInfoList.push(getRandomUser())
}

export default {
    name: 'App',

    components: {
        'virtual-list': VirtualList
    },

    data () {
        return {
            remain,
            start: 0,
            size: itemSize,
            item: Item,
            itemCount: itemCount,
            scrollelement: null
        }
    },

    mounted () {
        this.scrollelement = this.$refs.main
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
        }
    }
}
</script>

<style lang="less">
@import '../common/app.less';

.app {
  height: 100%;
}

.container {
  display: flex;
  flex-direction: column;

  height: 100%;

  overflow: auto;
}

</style>
