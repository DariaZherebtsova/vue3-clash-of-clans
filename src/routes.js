import {createRouter, createWebHistory, createWebHashHistory} from "vue-router";

const routerHistory = createWebHashHistory();

import HomePage from "./pages/home";
import AboutPage from "./pages/about";

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/about",
      component: AboutPage,
    },
  ],
});

export default routers;
