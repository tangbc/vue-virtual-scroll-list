<template>
  <div class="introduction">
    {{ description }}
  </div>
</template>

<script>

export default {
  name: 'Introduction',

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
  border-radius: 5px;
  background-color: papayawhip;
}
</style>
