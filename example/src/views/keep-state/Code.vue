<template>
  <div>
    <div class="title">This example source code please refer to:</div>
    <p><a v-bind:href="href" target="_blank">{{ href }}</a></p>

    <div>Here provide a common child-to-parent dispatch mixins code:</div>
    <code-high-light type="js" :code="mixin" />
  </div>
</template>

<script>
import getCodeUrl from '../../common/get-code-url'

const mixinCode =
`
export default {
  methods: {
    dispatch (componentName, eventName, ...rest) {
      let parent = this.$parent || this.$root
      let name = parent.$options.name

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent
        if (parent) {
          name = parent.$options.name
        }
      }

      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(rest))
      }
    }
  }
}
`

export default {
  name: 'keep-state-code',

  data () {
    return {
      href: '',
      mixin: mixinCode
    }
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

