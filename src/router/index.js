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
    name: "homeLoged",

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

    component: () => import("../views/Reservation/Reservation.vue")
  },
  {
    path: "/contacts",
    name: "contacts",

    component: () => import("../views/Contacts.vue")
  },
  {
    path: "/profile",
    name: "profile",

    component: () => import("../views/Profile.vue")
  },
  {
    path: "/editProfile",
    name: "editProfile",

    component: () => import("../views/EditProfile.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
