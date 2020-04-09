export default () => {
  const hashValue = (location.hash || '').substr(2)
  return `https://github.com/tangbc/vue-virtual-scroll-list/tree/master/example/views/${hashValue}/Main.vue`
}
