<template>
<div class="app">
  <GithubCorner path="/variable-height" />
  <div class="container">
    <Header title="variable-height"
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

        :variable="getVariableHeight"

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
import { countStorage, getRandomUser, getRandomHeight } from '../common/util'

const remain = 6
const itemSize = 80
const itemCount = countStorage.get()

const userInfoList = []
for (let i = 0; i < itemCount; i++) {
  userInfoList.push({
    info: getRandomUser(),
    vHeight: getRandomHeight()
  })
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
          variable: true,
          index: itemIndex,
          height: userInfoList[itemIndex].vHeight,
          info: userInfoList[itemIndex].info || {}
        }
      }
    },

    getVariableHeight (itemIndex) {
      return userInfoList[itemIndex].vHeight
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
</style>
