import Vue from 'vue'
import Header from './Header.vue'
import GithubCorner from './Corner.vue'

export default function (App) {
    Vue.config.devtools = false
    Vue.config.productionTip = false

    Vue.component('Header', Header)
    Vue.component('GithubCorner', GithubCorner)

    new Vue({
        render: (h) => h(App)
    }).$mount('#app')
}
