<template>
  <div class="toolbar">
    <button @click="eventClickEmpty" class="button button-clear item">reload with empty</button>
    <span class="line">|</span>
    <button @click="eventClickFew" class="button button-clear item">reload with few</button>
    <span class="line">|</span>
    <button @click="eventClickPages" class="button button-clear item">reload with pages</button>
  </div>
</template>

<script>
import { LOAD_TYPES, setLoadType } from './util'

export default {
  name: 'tool-bar',

  methods: {
    eventClickEmpty () {
      setLoadType(LOAD_TYPES.EMPTY)
      this.reload()
    },

    eventClickPages () {
      setLoadType(LOAD_TYPES.PAGES)
      this.reload()
    },

    eventClickFew () {
      setLoadType(LOAD_TYPES.FEW)
      this.reload()
    },

    reload () {
      window.location.reload()
    }
  }
}
</script>

<style lang="less" scoped>
.toolbar {
  @media (max-width: 640px) {
    width: 100%;
    white-space: nowrap;
    overflow-x: auto;
  }
  .item {
    padding: 0;
  }
  .line {
    margin: 0 1em;
    font-size: 12px;
  }
}
</style>
