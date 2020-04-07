<template>
  <div class="example">
    <Introduction description="The size of each item is dynamic." />

    <div class="example-content">
      <Tab v-on:tab-change="onTabChange"></Tab>

      <div v-show="isShowView">
        <VirtualList class="list-horizontal"
          :size="110"
          :keeps="30"
          :direction="'horizontal'"
          :wrap-class="'wrapper'"
          :item-class="'list-item-horizontal'"

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
import { TOTAL_COUNT, TAB_TYPE, DEFAULT_TAB } from '../../common/const'

const sizes = [60, 80, 100, 150, 180]

const DataItems = []
let count = TOTAL_COUNT
while (count--) {
  const index = TOTAL_COUNT - count
  DataItems.push({
    index,
    id: genUniqueId(index),
    size: Random.pick(sizes)
  })
}

export default {
  name: 'horizontal',

  components: {
    Code
  },

  data () {
    return {
      items: DataItems,
      itemComponent: Item,
      isShowView: DEFAULT_TAB === TAB_TYPE.VIEW
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
.list-horizontal {
  width: 100%;
  border: 2px solid;
  border-radius: 3px;
  overflow-x: auto;
  border-color: dimgray;

  .wrapper {
    display: flex;
    flex-direction: row;
  }

  .list-item-horizontal {
    border-right: 1px solid #dfdfdf;
  }
}
</style>
