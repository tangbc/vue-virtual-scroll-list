<template>
  <div class="example">
    <Introduction description="The size of each item is dynamic." />

    <div class="example-content">
      <Tab v-on:tab-change="onTabChange"></Tab>

      <div v-show="isShowView">
        <VirtualList class="list-infinite"
          :size="70"
          :keeps="30"
          :item-class="'list-item-infinite'"

          :data-key="'id'"
          :data-sources="items"
          :data-component="itemComponent"

          v-on:tobottom="onScrollToBottom"
        />
      </div>

      <Code v-show="!isShowView"></Code>
    </div>
  </div>
</template>

<script>
import Item from './Item'
import Code from './Code'

import { Random } from '../../common/mock'
import genUniqueId from '../../common/gen-unique-id'
import { TAB_TYPE, DEFAULT_TAB } from '../../common/const'

const getPageData = (count, currentLength) => {
  const DataItems = []
  for (let i = 0; i < count; i++) {
    const index = currentLength + i
    DataItems.push({
      index,
      name: Random.name(),
      id: genUniqueId(index),
      desc: Random.paragraph(Random.integer(0, 2))
    })
  }
  return DataItems
}

const pageSize = 20

export default {
  name: 'infinite-loading',

  components: {
    Code
  },

  data () {
    return {
      items: getPageData(pageSize, 0),
      itemComponent: Item,
      isShowView: DEFAULT_TAB === TAB_TYPE.VIEW
    }
  },

  methods: {
    onTabChange (type) {
      this.isShowView = type === TAB_TYPE.VIEW
    },

    onScrollToBottom () {
      this.items = this.items.concat(getPageData(pageSize, this.items.length))
    }
  }
}
</script>

<style lang="less">
.list-infinite {
  width: 100%;
  height: 500px;
  border: 2px solid;
  border-radius: 3px;
  overflow-y: auto;
  border-color: dimgray;

  .list-item-infinite {
    display: flex;
    align-items: center;
    padding: 1em;
    border-bottom: 1px solid;
    border-color: lightgray;
  }
}
</style>
