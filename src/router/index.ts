import { createWebHistory, createRouter } from "vue-router";
import EditComponent from "@/components/EditComponent.vue";
import ListComponent from "@/components/ListComponent.vue";
import UserComponent from "@/components/UserComponent.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: UserComponent,
  },
  {
    path: "/view",
    name: "view",
    component: ListComponent,
  },
  {
    path: "/edit",
    name: "edit",
    component: EditComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;