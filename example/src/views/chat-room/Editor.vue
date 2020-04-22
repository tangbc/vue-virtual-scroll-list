<template>
  <div class="editor">
    <div class="rich" contenteditable="true"></div>
  </div>
</template>

<script>
export default {
  name: 'editor'
}
</script>

<style lang="less" scoped>
.editor {
  padding: 1em;
  border: 2px solid;
  border-color: dimgray;
  border-top: 1px solid;
}
.rich {
  outline: none;
}
</style>
