<template>
  <div class="item-inner">
    <div class="head">
      <span class="index"># {{ index }}</span>
      <span class="name">{{ name }}</span>
    </div>
    <div class="desc">{{ desc }}</div>
  </div>
</template>

<script>

export default {
  name: 'InfiniteLoadingItem',

  props: {
    index: Number,
    name: String,
    desc: String
  }
}
</script>

<style lang="less" scoped>
.item-inner {
  .head {
    font-weight: 500;
  }
  .index {
    margin-right: 1em;
  }
  .name {
    margin-left: 1em;
  }
  .desc {
    text-align: justify;
  }
}
</style>