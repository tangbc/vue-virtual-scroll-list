<template>
  <div class="example">
    <github-corner />
    <introduction description="Set <code>direction</code> as <code>horizontal</code>, and also can use <code>wrap-class</code>, <code>item-class</code> to help you layout items in horizontal." />

    <div class="example-content">
      <tab v-on:tab-change="onTabChange" />

      <div v-show="isShowView">
        <virtual-list class="list-horizontal scroll-touch"
          :data-key="'id'"
          :data-sources="items"
          :data-component="itemComponent"

          :estimate-size="110"
          :direction="'horizontal'"
          :wrap-class="'wrapper'"
          :item-class="'list-item-horizontal'"
        />
      </div>

      <codeblock v-show="!isShowView" />
    </div>
  </div>
</template>

<script>
import Item from './Item'
import Code from './Code'

import { Random } from '../../common/mock'
import genUniqueId from '../../common/gen-unique-id'
import { TAB_TYPE, DEFAULT_TAB } from '../../common/const'

const TOTAL_COUNT = 10000
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
    codeblock: Code
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
  display: flex; // when using scrollToBottom()

  .wrapper {
    display: flex;
    flex-direction: row;
  }

  .list-item-horizontal {
    border-right: 1px solid #dfdfdf;
  }
}
</style>
