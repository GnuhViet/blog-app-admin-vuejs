import { createWebHistory, createRouter } from "vue-router";
import EditComponent from "@/components/EditComponent.vue";
import ListUserComponent from "@/components/ListUserComponent.vue";
import UserComponent from "@/components/UserComponent.vue";
import ListArticle from "@/components/ListArticle.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: UserComponent,
  },
  {
    path: "/view",
    name: "view",
    component: ListUserComponent,
  },
  {
    path: "/edit",
    name: "edit",
    component: EditComponent,
  },
  {
    path: "/ListArticle",
    name: "ListArticle",
    component: ListArticle,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;