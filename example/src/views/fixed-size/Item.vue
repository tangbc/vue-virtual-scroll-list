<template>
  <div class="item-inner">
    <span># {{ index }}</span>
    <span>{{ name }}</span>
  </div>
</template>

<script>

export default {
  name: 'fix-size-item',

  props: {
    index: Number,
    name: String
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