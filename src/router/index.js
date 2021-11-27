import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      { path: '/home', component: () => import('../pages/Home.vue') },
      { path: '/create', component: () => import('../pages/Create.vue') },
      { path: '/login', component: () => import('../pages/Login.vue') }
    ]
    
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
