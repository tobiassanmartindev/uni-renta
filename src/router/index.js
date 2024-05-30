import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /* {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    }, */
    {
      path: '/',
      name: 'home',
      component: () => import('../layouts/HomeLayout.vue'),
      children: [
        { path: '', component: () => import('../views/HomeView.vue') },
        {
          path: '/about',
          component: () => import('../views/AboutView.vue')
        }
      ]
    }
  ]
})

export default router
