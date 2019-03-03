import Vue from 'vue'
import FiniteDemo from './finite.vue'

Vue.config.devtools = false
Vue.config.productionTip = false

new Vue({
    el: '#app',
    template: '<FiniteDemo />',
    components: { FiniteDemo }
})
