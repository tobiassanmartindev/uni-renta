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
      component: () => import('../layouts/HomeLayout.vue'),
      children: [
        { path: '', name: 'HomeView', component: () => import('../views/HomeView.vue') },
        {
          path: '/about',
          name: 'AboutView',
          component: () => import('../views/AboutView.vue')
        },
        {
          name: 'AlquileresView',
          path: '/alquileres',
          component: () => import('../views/AlquileresView.vue')
        }
        // Properties
      ]
    }
  ]
})

export default router
