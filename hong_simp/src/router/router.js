import { createWebHistory, createRouter } from "vue-router";
import List from "../list/List.vue";
import SimpTable from "../list/SimpTable.vue";
import Home from "../list/Home.vue";
import ListInfo from "../list/ListInfo.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/list",
    component: List,
    // children : [
    //   {
    //     path: "info/:id",
    //     component: ListInfo,
    //   },
    // ]
  },
  {
    path: "/table",
    component: SimpTable,
  },
  {
    path: "/info/:id",
    component: ListInfo,
    name : "Info"
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 