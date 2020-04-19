<template>
  <div class="index">
    <github-corner />

    <h2 class="name">
      <a href="https://github.com/tangbc/vue-virtual-scroll-list">vue-virtual-scroll-list</a>
    </h2>

    <div class="head">
      <img alt="Travis CI Status" src="https://travis-ci.org/tangbc/vue-virtual-scroll-list.svg?branch=master"/>
      <!-- <img alt="Code Coverage" src="https://codecov.io/gh/tangbc/vue-virtual-scroll-list/branch/master/graph/badge.svg"/> -->
      <img alt="NPM downloads" src="https://img.shields.io/npm/dm/vue-virtual-scroll-list.svg">
      <img alt="NPM version" src="https://img.shields.io/npm/v/vue-virtual-scroll-list.svg"/>
      <img alt="Vue version" src="https://img.shields.io/badge/vue-%3E=2.3.0-brightgreen.svg"/>
      <img alt="Package quality" src="https://npm.packagequality.com/shield/vue-virtual-scroll-list.svg">
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
  img {
    margin-right: .5em;
  }
}
.title {
  margin: 1em 0;
}
ul {
  padding-left: .5em;
}
li {
  list-style-position: outside;
  margin-left: 1em;
}
</style>
