import Vue from 'vue'
import Header from './Header.vue'
import GithubCorner from './Corner.vue'
import { reportPerformance } from './util'

export default function (App) {
  Vue.config.devtools = false
  Vue.config.productionTip = false

  Vue.component('Header', Header)
  Vue.component('GithubCorner', GithubCorner)

  window.app_init_time = Date.now()

  new Vue({
    mounted () {
      reportPerformance()
    },
    render: (h) => h(App)
  }).$mount('#app')
}
