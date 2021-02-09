import { createRouter, createWebHistory } from "vue-router"
import App from "@/components/templates/App"

export const routerHistory = createWebHistory()

export const route = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      name: "index",
      component: App,
    },
  ],
})
