<template>
  <div class="item-inner" v-bind:style="{width: size + 'px'}">
    <div class="index"># {{ index }}</div>
    <div class="size">{{ size }}</div>
  </div>
</template>

<script>

export default {
  name: 'HorizontalItem',

  props: {
    index: {
      type: Number
    },
    name: {
      type: String
    },
    size: {
      type: Number
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