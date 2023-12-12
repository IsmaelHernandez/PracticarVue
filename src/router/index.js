import { createRouter, createWebHistory } from "vue-router";
import TemplateComponent from "@/layout/TemplateComponent.vue";

const routes = [
  {
    path: "/",
    component: TemplateComponent,
    children: [
      {
        path: "/circle",
        name: "circle",
        component: () => import("@/components/circle/Circle.vue"),
      },
      {
        path: "/form",
        name: "form",
        component: () => import("@/components/form/FormComponent.vue"),
      },
      {
        path: "/listUser",
        name: "list",
        component: () => import("@/components/list/ListComponent.vue"),
      },
      {
        path: "/pokedex",
        name: "pokedex",
        component: () => import("@/components/pokedex/view/Pokedex.vue"),
      },
      {
        path: "/counter",
        name: "counter",
        component: () => import("@/components/counter/Counter.vue"),
      },
      {
        path: "/person",
        name: "person",
        component: () => import("@/components/person/Person.vue"),
      },
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/components/dashboard/Dashboard.vue"),
      },
      {
        path: '/sass-component',
        name: 'sass-component',
        component: () => import("@/components/componentSass/SassComponent.vue"),
      },
      {
        path: '/grid-component',
        name: 'grid-component',
        component: () => import("@/components/componentSass/gridComponent.vue"),
      },
    ]
  }
  
  
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
