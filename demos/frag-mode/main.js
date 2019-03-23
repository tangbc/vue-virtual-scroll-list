import Vue from 'vue'
import App from './App.vue'

Vue.config.devtools = false
Vue.config.productionTip = false

new Vue({
    render: (h) => h(App)
}).$mount('#app')
