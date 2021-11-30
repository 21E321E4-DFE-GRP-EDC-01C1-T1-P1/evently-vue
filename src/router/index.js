import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Eventos from "../views/Eventos.vue";
import About from "../views/About.vue";
import Login from "../views/Login.vue";
import Missing from "../views/Missing.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/eventos",
    name: "eventos",
    component: Eventos,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  // WARNING: As rotas abaixo devem sempre ser as últimas!
  {
    path: "/:pathMatch(.*)",
    redirect: "/not-found",
  },
  {
    path: "/not-found",
    name: "not-found",
    component: Missing,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

/* eslint-disable */
// GUARDS
router.beforeResolve((to, from, next) => {
  let isAuthenticated = require('../store').default.getters.isAuthenticated;
  if (to.name !== "login" && !isAuthenticated) next({ name: "login" });
  else if (to.name == "login" && isAuthenticated) next({ name: "home" });
  else next();
});

export default router;
