<template>
  <div class="example">
    <Introduction description="Every item's size is equal." />

    <div class="example-content">
      <Tab v-on:tab-change="onTabChange"></Tab>

      <div v-show="isShowView">
        <VirtualList class="list"
          :size="60"
          :keeps="30"
          :item-class="'list-item'"

          :data-key="'id'"
          :data-sources="items"
          :data-component="itemComponent"
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
import { TOTAL_COUNT, TAB_TYPE } from '../../common/const'

const DataUsers = []
let count = TOTAL_COUNT
while (count--) {
  const index = TOTAL_COUNT - count
  DataUsers.push({
    index,
    name: Random.name(),
    id: genUniqueId(index),
  })
}

export default {
  name: 'Example-fix-size',

  components: {
    Code
  },

  data () {
    return {
      items: DataUsers,
      itemComponent: Item,
      isShowView: true,
    }
  },

  methods: {
    onTabChange (type) {
      this.isShowView = type === TAB_TYPE.VIEW
    }
  }
}
</script>

<style lang="less">
.list {
  width: 100%;
  height: 500px;
  border: 2px solid;
  border-radius: 3px;
  overflow-y: auto;
  border-color: dimgray;

  .list-item {
    display: flex;
    align-items: center;
    padding: 0 1em;
    height: 60px;
    border-bottom: 1px solid;
    border-color: lightgray;
  }
}
</style>
