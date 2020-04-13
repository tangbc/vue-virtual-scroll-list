<template>
  <div class="index">
    <github-corner />

    <h2 class="name">vue-virtual-scroll-list</h2>

    <div class="head">
      <img src="https://nodei.co/npm/vue-virtual-scroll-list.png?downloads=true&downloadRank=true&stars=true">
    </div>

    <h3 class="title">What's news in v2.0</h3>
    <ul>
      <li>Support header, footer slot, horizontal direction.</li>
      <li>Code structure is more reasonable and good maintainability.</li>
      <li>Abandoned v-for mode and variable mode, all condition unify into one mode.</li>
      <li>Don't have to care about each item size, in sometimes it's difficult to know that.</li>
    </ul>

    <h3 class="title">Todos</h3>
    <ul>
      <li>Improve calculate offset efficient.</li>
      <li>Support page scroll, table layout, unit test.</li>
      <li>......</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'index',

  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.name {
  margin: 1em 0;
}
.head {
  margin-bottom: 2em;
}
.title {
  margin: 1em 0;
}
</style>
