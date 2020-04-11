import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VirtualList from '../../src/index'
import Introduction from './components/Introduction'
import CodeHighLight from './components/CodeHighLight'
import Corner from './components/Corner'
import Tab from './components/Tab'

Vue.component('virtual-list', VirtualList)
Vue.component(Introduction.name, Introduction)
Vue.component(CodeHighLight.name, CodeHighLight)
Vue.component(Corner.name, Corner)
Vue.component(Tab.name, Tab)

Vue.config.devtools = false
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
