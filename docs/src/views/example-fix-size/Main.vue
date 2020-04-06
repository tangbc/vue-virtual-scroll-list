<template>
  <div class="example">
    <Introduction description="example here" />

    <div class="example-content">
      <VirtualList class="list"
        :keeps="30"
        :estimate-size="60"
        :item-class="'list-item'"

        :data-key="'id'"
        :data-sources="items"
        :data-component="itemComponent"
      />
    </div>
  </div>
</template>

<script>
import Item from './Item'
import { Random } from '../../common/mock'
import { TOTAL_COUNT } from '../../common/config'
import genUniqueId from '../../common/gen-unique-id'

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
      itemComponent: Item
    }
  }
}
</script>

<style lang="less">
.list {
  width: 100%;
  height: 500px;
  border: 2px solid;
  border-radius: 5px;
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
