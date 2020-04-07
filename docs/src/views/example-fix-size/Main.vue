<template>
  <div class="example">
    <Introduction description="Every item's size is equal." />

    <div class="example-content">
      <Tab v-on:tab-change="onTabChange"></Tab>
      <div class="view" v-show="isShowView">
        <VirtualList class="list"
          :keeps="30"
          :estimate-size="60"
          :item-class="'list-item'"

          :data-key="'id'"
          :data-sources="items"
          :data-component="itemComponent"
        />
      </div>

      <div class="code" v-show="!isShowView">
        <CodeHighLight type="html" :code="html" />
        <CodeHighLight type="js" :code="js" />
      </div>
    </div>
  </div>
</template>

<script>
import Item from './Item'
import { Random } from '../../common/mock'
import genUniqueId from '../../common/gen-unique-id'
import { TOTAL_COUNT, TAB_TYPE } from '../../common/const'

import { html, js } from './code'

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

  data () {
    return {
      items: DataUsers,
      itemComponent: Item,
      isShowView: true,
      html,
      js
    }
  },

  methods: {
    onTabChange (type) {
      console.log(type)
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
