<template>
  <nav class="navbar navbar-expand-lg navbar-custom fixed-top">
    <a class="navbar-brand pl-5" href="#">
      <router-link to="/homeAdmin">
        <img src="../assets/logo.png" />
      </router-link>
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto text-center">
          <a class="list-inline-item pr-3">
            <router-link to="/ReservationsAdmin">Reservas</router-link>
          </a>
          <a class="list-inline-item pr-3">
            <router-link to="/UsersAdmin">Utilizadores</router-link>
          </a>
          <a class="list-inline-item pr-3">
            <router-link to="/StockAdmin">Gestão de Stock</router-link>
          </a>
        </ul>
    </div>
    <div class="dropdown mr-5">
      <button
        class="btn btn-secondary btn-lg dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      ><img
        src="../assets/profile_icon.png"
        class="mr-lg-5 pl-sm-5 pl-lg-0"
        width="30px"
        height="30px"
      /></button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a @click="logOut()" class="router ml-3">Terminar Sessão</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AdminNavBar",

  data: function() {
    return {
      user: {},
    }
  },

  computed: {
    getLoggedUser: "getLoggedUser",
  },

  created() {
    this.$store.commit("SET_USERS", {
      users: JSON.parse(localStorage.getItem("users"))
    });

    this.$store.commit(
      "SET_LOGGED_USER",
      JSON.parse(localStorage.getItem("loggedUser"))
    );

    this.user = this.getLoggedUser;
  },

  methods: {
    logOut() {
    localStorage.removeItem("loggedUser");
    this.$router.push({ name: "login" });
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Muli&display=swap");

.navbar-custom {
  background-color: #2c3e50;
  height: 80px;
  font-family: "Muli", sans-serif;
  font-size: 1rem;
}

.navbar-brand,
.nav-link {
  color: #ffffff;
}

.collapse {
  background-color: #2c3e50;
}

a {
  color: white;
}

a:hover {
  text-decoration: none !important ;
  color: white !important;
  font-weight: bolder;
}

.dropdown-menu{
  background-color: #2c3e50;
  color: white;
}

.dropdown-toggle{
  background-color: #2c3e50;
  color: white;
}
</style>