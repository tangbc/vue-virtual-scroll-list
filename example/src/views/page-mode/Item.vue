<template>
  <div class="item-inner">
    <div class="head">
      <span># {{ source.index }}</span>
      <span>{{ source.name }}</span>
    </div>
    <div class="desc">{{ source.desc }}</div>
  </div>
</template>

<script>

export default {
  name: 'page-mode-item',

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
  span:first-child {
    margin-right: 1em;
  }
  .desc {
    padding-top: .5em;
    text-align: justify;
  }
}
</style>
