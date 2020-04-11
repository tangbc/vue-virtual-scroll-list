<template>
  <div>
    <div class="title">This example source code please refer to:</div>
    <p><a v-bind:href="href" target="_blank">{{ href }}</a></p>
  </div>
</template>

<script>
import getCodeUrl from '../../common/get-code-url'

export default {
  name: 'keep-state-code',

  data () {
    return { href: '' }
  },

  mounted () {
    this.href = getCodeUrl()
  }
}
</script>

<style lang="less" scoped>
.title {
  margin: 3em 0 2em 0;
}
</style>

