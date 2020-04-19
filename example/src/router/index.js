import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/home/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Index
  },
  {
    path: '/fixed-size',
    name: 'fixed-size',
    component: () => import(/* webpackChunkName: "fixed-size" */ '../views/fixed-size/Main.vue')
  },
  {
    path: '/dynamic-size',
    name: 'dynamic-size',
    component: () => import(/* webpackChunkName: "dynamic-size" */ '../views/dynamic-size/Main.vue')
  },
  {
    path: '/horizontal',
    name: 'horizontal',
    component: () => import(/* webpackChunkName: "horizontal" */ '../views/horizontal/Main.vue')
  },
  {
    path: '/infinite-loading',
    name: 'infinite-loading',
    component: () => import(/* webpackChunkName: "infinite-loading" */ '../views/infinite-loading/Main.vue')
  },
  {
    path: '/keep-state',
    name: 'keep-state',
    component: () => import(/* webpackChunkName: "keep-state" */ '../views/keep-state/Main.vue')
  }
]

// just for development, if you want to run this project in your local
// please copy a any example and rename it as dev in example/src/views folder
if (process.env.NODE_ENV === 'development') {
  routes.push({
    path: '/dev',
    name: 'dev',
    component: () => import(/* webpackChunkName: "dev" */ '../views/dev/Main.vue')
  })
}

const router = new VueRouter({
  routes
})

export default router
