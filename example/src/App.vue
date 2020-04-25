<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">home</router-link>
      <router-link to="/fixed-size">fixed size</router-link>
      <router-link to="/dynamic-size">dynamic size</router-link>
      <router-link to="/horizontal">horizontal</router-link>
      <router-link to="/infinite-loading">infinite loading</router-link>
      <router-link to="/keep-state">keep state</router-link>
      <router-link to="/chat-room">chat room</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
body {
  font-size: 18px;
}

#app {
  @media (max-width: 640px) {
    padding: 3px;
    width: 100%;
  }
}

#nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #9b4cca;
  color: #fff;
  height: 40px;
  line-height: 40px;
  padding-left: 2em;
  @media (max-width: 640px) {
    padding: 0;
    overflow-x: auto;
    white-space: nowrap;
    position: relative;
    background-color: unset;
    color: unset;
    height: unset;
    line-height: unset;
    padding-left: unset;
  }
  a {
    margin-right: 1.5em;
    margin-bottom: .5em;
    display: inline-block;
    color: #fff;
    @media (max-width: 640px) {
      margin-bottom: 0;
      margin-right: 1em;
      color: #9b4dca;
    }
  }
  .router-link-exact-active,
  .router-link-exact-active:hover {
    color: inherit;
    cursor: default;
    text-decoration: underline;
    @media (max-width: 640px) {
      border-bottom: 1px solid;
      border-color: #606c76;
      text-decoration: none;
    }

  }
}

.example {
  margin: 0 auto;
  padding: 0 2em;
  width: 776px;
  padding-top: 3em;
  @media (max-width: 640px) {
    margin: unset;
    padding: unset;
    width: unset;
    padding-top: unset;
  }
}
.example-content {
  margin-top: 1em;
  background-color: #fff;
}

.scroll-touch {
  -webkit-overflow-scrolling: touch;
   /* width */
  &::-webkit-scrollbar {
    width: 8px;
  }
  /* Track */
  &::-webkit-scrollbar-track {
    background: #f4f4f4;
  }
  /* Handle */
  &::-webkit-scrollbar-thumb {
    border-radius: 0px;
    background: rgba(0, 0, 0, 0.12);
  }
  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #b2b2b2;
  }
}

code {
  background-color: pink !important;
}
</style>