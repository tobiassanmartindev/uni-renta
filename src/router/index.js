import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    /* {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    }, */
    {
      path: '/',
      component: () => import('../layouts/HomeLayout.vue'),
      children: [
        { path: '', component: () => import('../views/HomeView.vue') },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        },
        {
          name: 'alquileres',
          path: '/alquileres',
          component: () => import('../views/AlquileresView.vue')
        }
        // Properties
      ]
    }
  ]
})

export default router
