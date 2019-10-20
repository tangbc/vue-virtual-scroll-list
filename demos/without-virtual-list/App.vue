<template>
<div class="app">
  <div class="container">
    <Header
      :warning="true"
      title="without-virtual-list"
      :desciption="'Build ' + itemCount.toLocaleString() + ' full items.'"
    />
    <div class="main">
      <div class="list" :style="rootStyle">
        <div>
          <item
            v-for="item in items"
            :key="item.index"
            :index="item.index"
            :height="size"
            :info="item.info"
          />
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Item from '../common/Item.vue'
import { countStorage, getRandomUser } from '../common/util'

const remain = 6
const itemSize = 80
const itemCount = countStorage.get()

const itemList = []
for (let idx = 0; idx < itemCount; idx++) {
  itemList.push({
    index: idx,
    height: itemSize,
    info: getRandomUser()
  })
}

export default {
  name: 'App',

  components: {
    item: Item
  },

  data () {
    return {
      remain,
      itemCount,
      size: itemSize,
      items: itemList
    }
  },

  computed: {
    rootStyle () {
      return {
        display: 'block',
        'overflow-y': 'auto',
        height: this.remain * this.size + 'px'
      }
    }
  }
}
</script>

<style lang="less">
@import '../common/app.less';
</style>
