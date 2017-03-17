import Vue from 'vue';
import Demo from './demo.vue';

Vue.use(Demo);

new Vue({
	el: '#app',
	template: '<Demo />',
	components: { Demo }
});
