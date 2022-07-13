import { createRouter, createWebHashHistory } from "vue-router";
import LocalMusic from "../views/LocalMusic.vue";

const routes = [
  {
    path: "/",
    name: "LocalMusic",
    component: LocalMusic,
  },
  {
    path: "/recentlyPlayed",
    name: "RecentlyPlayed",
    component: () =>
      import(/* webpackChunkName: "discover" */ "../views/RecentlyPlayed.vue"),
  },
  {
    path: "/discover",
    name: "Discover",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "discover" */ "../views/Discover.vue"),
  },
  {
    path: "/setting",
    name: "Setting",
    component: () =>
      import(/* webpackChunkName: "setting" */ "../views/Setting.vue"),
  },
  {
    path: "/information",
    name: "Information",
    component: () =>
      import(/* webpackChunkName: "information" */ "../views/Information.vue"),
  },
  {
    path: "/indexdb",
    name: "IndexDB",
    component: () =>
      import(/* webpackChunkName: "indexdb" */ "../views/IndexDB.vue"),
  },
  {
    path: "/dexie",
    name: "Dexie",
    component: () =>
      import(/* webpackChunkName: "dexie" */ "../views/Dexie.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
