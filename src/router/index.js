import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Eventos from "../views/Eventos.vue";
import About from "../views/About.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import CreateEvent from "../views/Eventos/Create.vue";
import ReadEvent from "../views/Eventos/Read.vue";
import Missing from "../views/Missing.vue";
import Perfil from "../views/Perfil.vue";

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
    path: "/sobre",
    name: "sobre",
    component: About,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/eventos/novo",
    name: "evento-novo",
    component: CreateEvent,
  },
  {
    path: "/eventos/:id",
    name: "evento-read",
    component: ReadEvent,
  },
  {
    path: "/eventos/:id/editar",
    name: "evento-edit",
    component: CreateEvent,
  },
  {
    path: "/perfil",
    name: "perfil",
    component: Perfil,
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
  let isAuthenticated = require("../store").default.getters.isAuthenticated;
  if (
    !["login", "register", "eventos", "sobre"].includes(to.name) &&
    !isAuthenticated
  ) {
    // Bloqueia acesso ao site caso não se esteja autenticado.
    next({ name: "login" });
  } else if (to.name == "login" && isAuthenticated) {
    // Retorna a Home se já estiver autenticado.
    next({ name: "home" });
  } else next();
});

export default router;
