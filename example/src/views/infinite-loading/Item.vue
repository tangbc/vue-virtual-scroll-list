<template>
  <div class="item-inner">
    <div class="head">
      <span class="index"># {{ source.index }}</span>
      <span class="name">{{ source.name }}</span>
    </div>
    <div class="desc">{{ source.desc }}</div>
  </div>
</template>

<script>

export default {
  name: 'infinite-loading-item',

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
    padding-top: .5em;
    text-align: justify;
  }
}
</style>