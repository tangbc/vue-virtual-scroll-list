<template>
<div class="app">
    <GithubCorner path="/vfor-mode" />
    <div class="container">
        <Header
            title="vfor-mode with wai-aria"
            :desciption="'Build ' + items.length.toLocaleString() + ' items.'"
            :startIndex="start"
            :onDataChange="onHeaderDataChange"
        ></Header>
        <div class="main">
            <virtual-list class="list"
                role="list"
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
                    role="list-item"
                    :aria-posinset="item.index"
                    :aria-setsize="setSize"
                />
            </virtual-list>
            <p>
                Added accessibility support. Virtual list given a 
                <a href="https://www.w3.org/TR/wai-aria-1.1/#list">role of 'list'</a>
                Each list item is given a role of 'list-item' and its position in the list set with
                the aria-posinset state. The size of the list is set with aria-setsize.
                Assitive techonologies should be able to report the size of the list and
                were in the list is currently displayed.
                
             </p>   
        </div>
    </div>
</div>
</template>

<script>
import Item from '../common/Item.vue'
import VirtualList from 'vue-virtual-scroll-list'
import { countStorage, getRandomUser } from '../common/util'

const remain = 6
const itemSize = 80
const itemCount = countStorage.get()

let itemList = []
for (let idx = 0; idx < itemCount; idx++) {
    itemList.push({
        index: idx,
        height: itemSize,
        info: getRandomUser()
    })
}
console.log('array size', itemCount);
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
            items: itemList,
            setSize: itemCount
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
