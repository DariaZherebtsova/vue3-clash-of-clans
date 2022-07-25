import {
  createRouter,
  createWebHistory,
  createWebHashHistory
} from 'vue-router'

const routerHistory = createWebHashHistory()

import HomePage from './pages/home'
import AboutPage from './pages/about'
import NotFoundPage from './pages/notFound'
import ItemPage from './pages/itemAlias'

import items from '@/seeders/items';

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/:itemAlias',
      name: 'itemAlias',
      component: ItemPage,
    },
    {
      path: '/404',
      name: '404',
      component: NotFoundPage
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name === 'itemAlias') {
    const alias = to.params.itemAlias;
    const item = items.find( el => el.alias === alias);
    if (!item) {
      next({ name: '404' })
    }
    next()
  }
  else next()
})

export default router
