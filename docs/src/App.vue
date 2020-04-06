<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">documentation</router-link>
      <router-link to="/example-fix-size">example fix size</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
body {
  font-size: 18px;
}

#app {
  padding: 1em 2em;
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
    font-weight: 500;
    cursor: default;
    text-decoration: underline;
  }
}

.example-content {
  margin-top: 2em;
  background-color: #fff;
}
</style>