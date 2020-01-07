/* eslint-disable prettier/prettier */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    loggedUser: {}
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
    }
  }
});