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
    reservationTable: "",
    reservationMenu: ""
  },
  getters: {
    getAllUser: state => {
      return state.users
    },
    getUserByInput: state => input => {
      return state.users.find(user => user.username == input || user.email == input)
    },
    getLastId(state) {
      if (state.users.length > 0) {
        return state.users[state.users.length - 1].id + 1;
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
    }
  },
  mutations: {
    NEW_USER(state, payload){
      state.users.push(payload)
      localStorage.setItem("users", JSON.stringify(state.users))
    },
    SET_USERS(state,payload){
      state.users = payload.users
      localStorage.setItem("users", JSON.stringify(state.users))
    },
    SET_LOGGED_USER(state, payload){
      state.loggedUser = payload
      localStorage.setItem("loggedUser", JSON.stringify(state.loggedUser))
    },
    SET_RESERVATION_DATE(state, payload){
      state.reservationDate = payload.date
    },
    SET_RESERVATION_TABLE(state, payload){
      state.reservationTable = payload.table
    },
    SET_RESERVATION_MENU(state, payload){
      state.reservationMenu = payload.menu
    },
    NEW_RESERVATION(state, payload){
      state.reservations.push(payload)
      localStorage.setItem("reservations", JSON.stringify(state.reservations))
    }
  }
});
