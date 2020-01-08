import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PageNotFound from "../views/Error.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "landingPage",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue")
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
    component: () => import("../views/HomeAfterLogin.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/sobre",
    name: "sobre",
    component: () => import("../views/About.vue")
  },
  {
    path: "/contacts",
    name: "contacts",
    component: () => import("../views/Contacts.vue")
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/Profile.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/editProfile",
    name: "editProfile",
    component: () => import("../views/EditProfile.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/reserva",
    name: "reserva",
    component: () => import("../views/Reservation/Reservation.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/data",
    name: "data",
    component: () => import("../views/Reservation/Date.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/table",
    name: "table",
    component: () => import("../views/Reservation/Tables.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/menu",
    name: "menu",
    component: () => import("../views/Reservation/Menus.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/observation",
    name: "observation",
    component: () => import("../views/Reservation/Observations.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/homeAdmin",
    name: "HomeAdmin",
    component: () => import("../views/Admin/HomeAdmin.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/reservationsAdmin",
    name: "reservationsAdmin",
    component: () => import("../views/Admin/ReservationsAdmin.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/stockAdmin",
    name: "stockAdmin",
    component: () => import("../views/Admin/StockAdmin.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/usersAdmin",
    name: "usersAdmin",
    component: () => import("../views/Admin/UsersAdmin.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/reservationByDateAdmin",
    name: "reservationByDateAdmin",
    component: () => import("../views/Admin/ReservationByDate.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/reservationByUserAdmin",
    name: "reservationByUserAdmin",
    component: () => import("../views/Admin/ReservationByUser.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "*",
    name: "PageNotFound",
    component: PageNotFound
  }
];

const router = new VueRouter({
  routes
});

export default router;
