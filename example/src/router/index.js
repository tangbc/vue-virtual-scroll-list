import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index/Main.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/example-fix-size',
    name: 'Example-fix-size',
    component: () => import(/* webpackChunkName: "example-fix-size" */ '../views/example-fix-size/Main.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
