/* eslint-disable prettier/prettier */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
<<<<<<< HEAD
=======
  //STATE
>>>>>>> e50ffc09afe5db219c9fced728132f3fcff24a62
  state: {
    users: [],
    loggedUser: {}
  },
<<<<<<< HEAD
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
=======

  //MUTATIONS
  mutations: {
    ADD_USER(state, payload) {
      if (!state.users.some(account => account.email === payload.email)) {
        if (payload.password != payload.repeatedPassword) {
          alert("As Palavras-Passe não correspondem!");
        }
        else{
          state.users.push({
            id: payload.id,
            name: payload.name,
            username: payload.username,
            email: payload.email,
            password: payload.password,
            repeatedPassword: payload.repeatedPassword,
            birthDate: payload.birthDate,
            userType: payload.userType
          })
        }
      }
      else{
        alert("Já existe uma conta associada a esse email... Tente de novo.")
>>>>>>> e50ffc09afe5db219c9fced728132f3fcff24a62
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
<<<<<<< HEAD
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
=======

  //GETTERS
  getters: {}
});
>>>>>>> e50ffc09afe5db219c9fced728132f3fcff24a62
