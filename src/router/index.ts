import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component : () => import('../views/HomePage.vue')
  },
  {
    path : '/newsDetails',
    name : 'newsDetails',
    component : () => import('../views/NewDetail.vue')
  },
  {
    path : '/login',
    name : 'login',
    component : () => import('../views/LoginPage.vue') 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
