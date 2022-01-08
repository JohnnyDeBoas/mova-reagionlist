import Vue from "vue";
import VueRouter from "vue-router";

import Layout from "../Layout/MainLayout";
import Home from "../views/Home.vue";
import Page2 from "../views/CounterInfo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    component: Layout,
    children: [
      {
        path: "",
        component: Home,
        children: [
          {
            name: "home",
            path: "/:region/",
            component: Home,
          },
        ],
      },
      {
        name: "Country",
        path: "/CountryInfo/:country",
        component: Page2,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
