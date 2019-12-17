import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/login",
    name: "login",

    component: () => import("../views/Login.vue")
  },
  {
    path: "/register",
    name: "registo",

    component: () => import("../views/Register.vue")
  },
  {
    path: "/home",
    name: "home",

    component: () => import("../views/HomeAfterLogin.vue")
  },
  {
    path: "/sobre",
    name: "sobre",

    component: () => import("../views/About.vue")
  },
  {
    path: "/reserva",
    name: "reserva",

    component: () => import("../views/Reservation/Date.vue")
  },
  {
    path: "/contactos",
    name: "contactos",

    component: () => import("../views/Contacts.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
