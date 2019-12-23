import Vue from "vue";

new Vue({
  el: "#app",
  data: {
    id: 0,
    name: "",
    username: "",
    email: "",
    password: "",
    birthDate: "",
    userType: "",
    accounts: []
  },

  created() {
    //regista um listener quando o browser ou o separador é fechado
    window.addEventListener("unload", this.saveStorage);

    //recupera os dados da local storage (se existirem)
    if (localStorage.getItem("accounts")) {
      this.accounts = JSON.parse(localStorage.getItem("accounts"));
    }
  },

  methods: {
    //criar uma conta
    addTask() {
      //condiçao para avaliar se uma conta ja existe no array accounts
      if (!this.accounts.some(task => task.name === this.name)) {
        this.accounts.push({
          id: this.getLastId() + 1,
          name: this.name,
          username: this.username,
          email: this.email,
          password: this.password,
          birthDate: this.birthDate,
          userType: this.userType
        });
      } else {
        alert("Conta já adicionada!");
        this.username = "";
      }
    },

    //devove o ultimo id da conta
    getLastId() {
      if (this.accounts.length) {
        return this.accounts[this.accounts.length - 1].id;
      } else {
        return 0;
      }
    },

    //guardar na local storage do browser as contas
    saveStorage() {
      localStorage.setItem("accounts", JSON.stringify(this.accounts));
    }
  }
});
