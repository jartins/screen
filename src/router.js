import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import Maps from "@/views/Maps.vue";
import forepage from "@/views/forepage.vue";
import Btninnerlougo from "@/views/Btninnerlougo.vue";
import Sudoku from "@/views/Sudoku.vue";
import shreeted from "@/views/shreeted.vue";
import kepotimefull from "@/views/kepotimefull.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/maps",
      name: "Maps",
      component: Maps
    },
    {
      path: "/forepage",
      name: "forepage",
      component: forepage
    },
    {
      path: "/sudoku",
      name: "Sudoku",
      component: Sudoku
    },
    {
      path: "/Btninnerlougo",
      name: "Btninnerlougo",
      component: Btninnerlougo
    },
    {
      path: "/shreeted",
      name: "shreeted",
      component: shreeted
    },
    {
      path: "/kepotimefull",
      name: "kepotimefull",
      component: kepotimefull
    },
  ]
});
