/* eslint-disable prettier/prettier */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    loggedUser: {},
    reservations: [],
    reservationDate: "",
    reservationTable: {},
    reservationMenu: "",
    reservationObservation: "",
    products: [],
    dishes: []
  },
  getters: {
    getAllUser: state => {
      return state.users
    },
    getFilteredUsers: state => input => {
      if (input != "") {
        return state.users.filter(user => user.username.includes(input.toLowerCase()))
      }
      return state.users
    },
    getOrderedUsersAZ: state => {
      return state.users.sort(function (a, b) {
        if (a.username < b.username) {
          return -1;
        }
        if (a.username > b.username) {
          return 1;
        }
        return 0;
      })
    },
    getOrderedUsersZA: state => {
      return state.users.sort(function (a, b) {
        if (a.username > b.username) {
          return -1;
        }
        if (a.username < b.username) {
          return 1;
        }
        return 0;
      })
    },
    getUserByInput: state => input => {
      return state.users.find(user => user.username == input || user.email == input)
    },
    getAllUserBesidesDeleted: state => id => {
      return state.users.filter(user => user.id != id)
    },
    getLastId: state => {
      if (state.users.length > 0) {
        return state.users.length + 1;
      }
      return 1;
    },
    getUserToLogin: state => (usernameOrEmail, password) => {
      return state.users.find(
        user =>
        (user.username === usernameOrEmail || user.email === usernameOrEmail) &&
        user.password === password
      );
    },
    getLoggedUser: state => {
      return state.loggedUser;
    },
    getReservationDate: state => {
      return state.reservationDate
    },
    getReservationTable: state => {
      return state.reservationTable
    },
    getReservationMenu: state => {
      return state.reservationMenu
    },
    getReservationObservation: state => {
      return state.reservationObservation
    },
    getAllProducts: state => {
      return state.products
    },
    getProductByInput: state => input => {
      return state.products.find(product => product.name == input)
    },
    getLastProductId: state => {
      return state.products.length + 1
    },
    getOrderedProductsAZ: state => {
      return state.products.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      })
    },
    getOrderedProductsZA: state => {
      return state.products.sort(function (a, b) {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
        return 0;
      })
    },
    getFilteredProducts: state => input => {
      if (input != "") {
        return state.products.filter(product => product.name.toLowerCase().includes(input.toLowerCase()))
      }
      return state.products
    },
    getAllDishes: state => {
      return state.dishes
    },
    getOrderedDishesAZ: state => {
      return state.dishes.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      })
    },
    getOrderedDishesZA: state => {
      return state.dishes.sort(function (a, b) {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
        return 0;
      })
    },
    getDishByInput: state => input => {
      return state.dishes.find(dish => dish.name == input)
    },
    getLastDishId: state => {
      return state.dishes.length + 1
    },
    getFilteredDishes: state => input => {
      if (input != "") {
        return state.dishes.filter(dish => dish.name.toLowerCase().includes(input.toLowerCase()))
      }
      return state.dishes
    },
    getAllDishesBesidesDeleted: state => id => {
      return state.dishes.filter(dish => dish.id != id)
    }
  },
  mutations: {
    NEW_USER(state, payload) {
      state.users.push(payload)
      localStorage.setItem("users", JSON.stringify(state.users))
    },
    SET_USERS(state, payload) {
      state.users = payload.users
      localStorage.setItem("users", JSON.stringify(state.users))
    },
    SET_LOGGED_USER(state, payload) {
      state.loggedUser = payload
      localStorage.setItem("loggedUser", JSON.stringify(state.loggedUser))
    },
    SET_RESERVATION_DATE(state, payload) {
      state.reservationDate = payload.date
    },
    SET_RESERVATION_TABLE(state, payload) {
      state.reservationTable = payload
    },
    SET_RESERVATION_MENU(state, payload) {
      state.reservationMenu = payload.menu
    },
    SET_RESERVATION_OBSERVATION(state, payload) {
      state.reservationObservation = payload.observation
    },
    NEW_RESERVATION(state, payload) {
      state.reservations.push(payload)
      localStorage.setItem("reservations", JSON.stringify(state.reservations))
    },
    NEW_PRODUCT(state,payload) {
      state.products.push(payload)
      localStorage.setItem("products", JSON.stringify(state.products))
    },
    SET_PRODUCTS(state, payload) {
      state.products = payload.products
      localStorage.setItem("products", JSON.stringify(state.products))
    },
    SET_DISHES(state, payload) {
      state.dishes = payload.dishes
      localStorage.setItem("dishes", JSON.stringify(state.dishes))
    },
    NEW_DISH(state, payload) {
      state.dishes.push(payload)
      localStorage.setItem("dishes", JSON.stringify(state.dishes))
    }
  }
});