<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">documentation</router-link>
      <router-link to="/fixed-size">fixed size</router-link>
      <router-link to="/dynamic-size">dynamic size</router-link>
      <router-link to="/horizontal">horizontal</router-link>
      <router-link to="/infinite-loading">infinite loading</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
body {
  font-size: 18px;
}

#app {
  padding: 0 2em;
  width: 776px;
}

#nav {
  padding: 1em 0;
  a {
    margin-right: 2em;
  }
  .router-link-exact-active,
  .router-link-exact-active:hover {
    color: inherit;
    cursor: default;
    border-bottom: 1px solid;
    border-color: #606c76;
  }
}

.example-content {
  margin-top: 1em;
  background-color: #fff;
}
code {
  background-color: gold !important;
}
</style>