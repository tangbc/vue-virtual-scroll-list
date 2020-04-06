<template>
  <div class="item-inner">
    <span># {{ index }}</span>
    <span>{{ name }}</span>
  </div>
</template>

<script>

export default {
  name: 'FixSizeItem',

  props: {
    name: {
      type: String
    },
    index: {
      type: Number
    }
  }
}
</script>

<style lang="less" scoped>
.item-inner {
  span:first-child {
    margin-right: 1em;
  }
}
</style>