<template>
  <pre v-if="!!code" v-bind:class="type" v-html="encode(code)"></pre>
</template>

<script>
export default {
  name: 'CodeHightLight',

  props: {
    type: {
      type: String,
      required: true
    },
    code: {
      type: String,
      required: true
    }
  },

  mounted () {
    if (typeof window.hljs !== 'undefined') {
      window.hljs.highlightBlock(this.$el)
    }
  },

  methods: {
    encode (code) {
      if (this.type === 'html') {
        code = code.replace(/</g, '&lt;')
        code = code.replace(/>/g, '&gt;')
      }
      // remove first new line gen by ``.
      code = code.replace(/\s/, '')
      return code
    }
  }
}
</script>

<style lang="less" scoped>
pre {
  border: none;
  padding: 1em;
  font-size: 14px;
  border-radius: 3px;
  font-family: Consolas, Monaco, "Andale Mono", "Lucida Console", monospace;
}
</style>
