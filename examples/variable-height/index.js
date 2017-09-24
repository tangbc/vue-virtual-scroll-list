import Vue from 'vue'
import VariableDemo from './variable.vue'

Vue.config.devtools = false
Vue.config.productionTip = false

new Vue({
    el: '#app',
    template: '<VariableDemo />',
    components: { VariableDemo }
})
