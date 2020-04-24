<template>
  <div class="example">
    <github-corner />
    <introduction description="Maintaining item component inner state is a trouble here, recommend to use only props data." />

    <div class="example-content">
      <tab v-on:tab-change="onTabChange" />

      <div class="selects" v-show="isShowView">{{ selectNames }}</div>

      <div v-show="isShowView">
        <virtual-list class="list-keep scroll-touch"
          :size="60"
          :keeps="30"
          :item-class="'list-item-keep'"

          :data-key="'id'"
          :data-sources="items"
          :data-component="itemComponent"
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

const TOTAL_COUNT = 1000

const DataItems = []
let count = TOTAL_COUNT
while (count--) {
  const index = TOTAL_COUNT - count
  DataItems.push({
    index,
    name: Random.name(),
    id: genUniqueId(index),
    checked: false
  })
}

export default {
  name: 'keep-state',

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

  computed: {
    selectNames () {
      return this.items.map((item) => {
        if (item.checked) {
          return item.name
        }
      }).filter((item) => !!item)
    }
  },

  created () {
    // detecting change checked value from item component event.
    this.$on('checkBoxValueChange', (id, value) => {
      const targetItem = this.items.find((item) => item.id === id)
      if (targetItem) {
        targetItem.checked = value
      }
    })
  },

  methods: {
    onTabChange (type) {
      this.isShowView = type === TAB_TYPE.VIEW
    }
  }
}
</script>

<style lang="less">
.selects {
  margin-bottom: 1em;
  font-size: 14px;
}
.list-keep {
  width: 100%;
  height: 500px;
  border: 2px solid;
  border-radius: 3px;
  overflow-y: auto;
  border-color: dimgray;

  .list-item-keep {
    display: flex;
    align-items: center;
    padding: 0 1em;
    height: 60px;
    border-bottom: 1px solid;
    border-color: lightgray;
  }
}
</style>
