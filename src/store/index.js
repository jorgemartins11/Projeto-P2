/* eslint-disable prettier/prettier */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {
    ADD_USER(state, payload) {
      if (!state.accounts.some(account => account.email === payload.email)) {
        if (payload.password != payload.repeatedPassword) {
          alert("As Palavras-Passe não correspondem!");
        }
        else{
          state.accounts.push({
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
      }
    }
  },
  getters: {}
});
