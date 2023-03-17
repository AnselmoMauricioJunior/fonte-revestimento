import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/obras',
    name: 'obras',
    component: () => import('../views/ObrasView.vue')
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: () => import('../views/SobreView.vue')
  },
  {
    path: '/contato',
    name: 'contato',
    component: () => import('../views/ContatoView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
