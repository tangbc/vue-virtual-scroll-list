<template>
<div class="app">
  <GithubCorner path="/page-mode" />
  <div class="container">
    <Header title="page-mode"
      :desciption="'Build ' + itemCount.toLocaleString() + ' items.'"
      :start-index="start"
      :on-data-change="onHeaderDataChange"
    />
    <div class="main">
      <virtual-list class="list"
        :size="size"
        :remain="remain"
        :start="start"
        :pagemode="true"
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

const remain = 17
const itemSize = 80
const itemCount = countStorage.get()

const userInfoList = []
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
    }
  }
}
</script>

<style lang="less">
@import '../common/app.less';
html,body {
  overflow: inherit;
}
.main {
  margin-bottom: 500px;
}
</style>
