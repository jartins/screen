import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import Maps from "@/views/Maps.vue";
import forepage from "@/views/forepage.vue";
import Btninnerlougo from "@/views/Btninnerlougo.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/maps",
      name: "maps",
      component: Maps
    },
    {
      path: "/forepage",
      name: "forepage",
      component: forepage
    },
    {
      path: "/Btninnerlougo",
      name: "Btninnerlougo",
      component: Btninnerlougo
    }
  ]
});
