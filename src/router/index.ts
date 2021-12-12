import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/Home.vue"),
  },
  {
    path: "/auth:route(.*)",
    name: "Auth",
    component: () => import("../pages/Auth.vue"),
  },
  {
    path: "/gift",
    name: "Gift",
    component: () => import("../pages/Gift.vue"),
  },
  {
    path: "/redeem",
    name: "Redeem",
    component: () => import("../pages/Redeem.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
