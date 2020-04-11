<template>
  <div class="introduction" v-html="description"></div>
</template>

<script>

export default {
  name: 'introduction',

  props: {
    description: {
      type: String
    }
  }
}
</script>

<style lang="less" scoped>
.introduction {
  font-size: 16px;
  padding: .5em 1em;
  border-radius: 3px;
  background-color: ghostwhite;
  @media (max-width: 640px) {
    display: none;
  }
}
</style>
