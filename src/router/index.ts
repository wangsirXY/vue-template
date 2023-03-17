import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home/HomePage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.VITE_APP_BASE_API,
  routes,
});

export default router;
