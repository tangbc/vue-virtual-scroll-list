<template>
  <div class="item-inner" v-bind:style="{width: source.size + 'px'}">
    <div class="index"># {{ source.index }}</div>
    <div class="size">{{ source.size }}</div>
  </div>
</template>

<script>

export default {
  name: 'horizontal-item',

  props: {
    source: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
.item-inner {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2em 0;
  .index {
    width: 100%;
    text-align: center;
  }
  .size {
    text-align: right;
    color: darkgray;
    font-size: 16px;
  }
}
</style>