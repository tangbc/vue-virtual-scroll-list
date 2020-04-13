export default () => {
  const hashValue = (location.hash || '').substr(2)
  if (hashValue) {
    return `https://github.com/tangbc/vue-virtual-scroll-list/tree/master/example/src/views/${hashValue}/Main.vue`
  } else {
    return `https://github.com/tangbc/vue-virtual-scroll-list`
  }
}
