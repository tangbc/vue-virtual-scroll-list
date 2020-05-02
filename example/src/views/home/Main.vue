<template>
  <div class="example">
    <github-corner />

    <h2 class="name">
      vue-virtual-scroll-list
    </h2>

    <div class="desc">⚡️ A vue component support big amount data list with high scroll performance.</div>

    <div class="icons">
      <span class="btn">
        <github-button href="https://github.com/tangbc/vue-virtual-scroll-list/issues" data-color-scheme="no-preference: dark; light: dark; dark: dark;" data-size="large" data-show-count="true" aria-label="Issue tangbc/vue-virtual-scroll-list on GitHub">Issue</github-button>
      </span>
      <span class="btn">
        <github-button href="https://github.com/tangbc/vue-virtual-scroll-list" data-color-scheme="no-preference: dark; light: dark; dark: dark;" data-size="large" data-show-count="true" aria-label="Star tangbc/vue-virtual-scroll-list on GitHub">Star</github-button>
      </span>
      <span class="btn">
        <github-button href="https://github.com/tangbc/vue-virtual-scroll-list/fork" data-color-scheme="no-preference: dark; light: dark; dark: dark;" data-size="large" data-show-count="true" aria-label="Fork tangbc/vue-virtual-scroll-list on GitHub">Fork</github-button>
      </span>
      <span class="btn">
        <github-button href="https://github.com/tangbc/vue-virtual-scroll-list/subscription" data-color-scheme="no-preference: dark; light: dark; dark: dark;" data-size="large" data-show-count="true" aria-label="Watch tangbc/vue-virtual-scroll-list on GitHub">Watch</github-button>
      </span>
    </div>

    <!-- <div class="head">
      <img alt="NPM downloads" src="https://img.shields.io/npm/dm/vue-virtual-scroll-list.svg">
      <img alt="NPM version" src="https://img.shields.io/npm/v/vue-virtual-scroll-list.svg"/>
      <img alt="Package quality" src="https://npm.packagequality.com/shield/vue-virtual-scroll-list.svg">
    </div> -->

    <h3 class="title">What's news in v2.0</h3>
    <ul>
      <li>Support header, footer slot, horizontal direction.</li>
      <li>Code structure is more reasonable and good maintainability.</li>
      <li>Abandoned v-for mode and variable mode, all condition unify into one mode.</li>
      <li>Don't have to care about each item size, in sometimes it's difficult to know that.</li>
    </ul>

    <h3 class="title">Contributions</h3>
    <div>Welcome to improve this component with any issue, pull request or code review. ✋</div>
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
  margin-top: 1em;
}
.desc {
  padding-bottom: 3em;
}
.icons {
  padding-bottom: 1em;
  .btn {
    margin-right: 1em;
  }
}
.head {
  margin-bottom: 3em;
  img {
    margin-right: .5em;
    width: auto;
    height: 24px;
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
