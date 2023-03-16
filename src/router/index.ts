import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.VITE_APP_BASE_API,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("@/views/Home/HomePage.vue")
    },
  ]
})

export default router
