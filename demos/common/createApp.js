import Vue from 'vue'
import GithubCorner from '../common/Corner.vue'

export default function (App) {
    Vue.config.devtools = false
    Vue.config.productionTip = false

    Vue.component('GithubCorner', GithubCorner)

    new Vue({
        render: (h) => h(App)
    }).$mount('#app')
}
