<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">home</router-link>
      <router-link to="/fixed-size">fixed size</router-link>
      <router-link to="/dynamic-size">dynamic size</router-link>
      <router-link to="/horizontal">horizontal</router-link>
      <router-link to="/infinite-loading">infinite loading</router-link>
      <router-link to="/keep-state">keep state</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
body {
  font-size: 18px;
}

#app {
  margin: 0 auto;
  padding: 0 2em;
  width: 776px;
  @media (max-width: 640px) {
    padding: 3px;
    width: 100%;
  }
}

#nav {
  padding: 1em 0;
  @media (max-width: 640px) {
    padding: 0;
  }
  a {
    margin-right: 1.5em;
    margin-bottom: .5em;
    display: inline-block;
    @media (max-width: 640px) {
      margin-bottom: 0;
      margin-right: 1em;
    }
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

.scroll-touch {
  -webkit-overflow-scrolling: touch;
}

code {
  background-color: pink !important;
}
</style>