import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import Maps from "@/views/Maps.vue";
import Sudoku from "@/views/Sudoku.vue";

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
      path: "/sudoku",
      name: "Sudoku",
      component: Sudoku
    }
  ]
});
