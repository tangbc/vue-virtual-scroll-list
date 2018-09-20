import Vue from 'vue'
import HorizontalFinite from './horizontalfinite.vue'

Vue.config.devtools = false
Vue.config.productionTip = false

new Vue({
    el: '#app',
    template: '<HorizontalFinite />',
    components: { HorizontalFinite }
})
