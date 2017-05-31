import Vue from 'vue'
import InfiniteDemo from './infinite.vue'

Vue.config.devtools = false
Vue.config.productionTip = false

new Vue({
    el: '#app',
    template: '<InfiniteDemo />',
    components: { InfiniteDemo }
})
