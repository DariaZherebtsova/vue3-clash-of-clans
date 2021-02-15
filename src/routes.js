import {
  createRouter,
  createWebHashHistory,
  createWebHistory
} from 'vue-router'

import Home from './pages/home.vue'
import About from './pages/about.vue'

// const routerHistory = createWebHistory();
const routerHistory = createWebHashHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    }
  ]
})

export default router
