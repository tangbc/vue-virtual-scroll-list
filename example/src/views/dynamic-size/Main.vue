<template>
  <div class="example">
    <github-corner />
    <introduction
      description="The size of each item is dynamic,
      you don't have to care about size, it will calculate automatic,
      but you have to make sure that there's an unique id for every array data."
    />

    <div class="example-content">
      <tab v-on:tab-change="onTabChange" />

      <div v-show="isShowView">
        <virtual-list class="list-dynamic scroll-touch"
          :data-key="'id'"
          :data-sources="items"
          :data-component="itemComponent"

          :estimate-size="80"
          :item-class="'list-item-dynamic'"
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
import getSentences from '../../common/sentences'
import genUniqueId from '../../common/gen-unique-id'
import { TAB_TYPE, DEFAULT_TAB } from '../../common/const'

const TOTAL_COUNT = 10000

const DataItems = []
let count = TOTAL_COUNT
while (count--) {
  const index = TOTAL_COUNT - count
  DataItems.push({
    index,
    name: Random.name(),
    id: genUniqueId(index),
    desc: getSentences()
  })
}

export default {
  name: 'dynamic-size',

  components: {
    codeblock: Code
  },

  data () {
    return {
      total: TOTAL_COUNT.toLocaleString(),
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
.list-dynamic {
  width: 100%;
  height: 500px;
  border: 2px solid;
  border-radius: 3px;
  overflow-y: auto;
  border-color: dimgray;

  .list-item-dynamic {
    display: flex;
    align-items: center;
    padding: 1em;
    border-bottom: 1px solid;
    border-color: lightgray;
  }
}
</style>
