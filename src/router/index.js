import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Eventos from "../views/Eventos.vue";
import Missing from "../views/Missing.vue";
import Perfil from "../views/Perfil.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/eventos",
        name: "Eventos",
        component: Eventos,
    },
    {
        path: "/perfil",
        name: "Perfil",
        component: Perfil,
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
    // WARNING: A rota abaixo deve sempre ser a última!
    {
        path: "/:pathMatch(.*)",
        name: "404",
        component: Missing,
    },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
