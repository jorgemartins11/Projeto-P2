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
          <router-link to="/reservationsAdmin">Reservas</router-link>
        </a>
        <a class="list-inline-item pr-3">
          <router-link to="/usersAdmin">Utilizadores</router-link>
        </a>
        <a class="list-inline-item pr-3">
          <router-link to="/menusAdmin">Menus</router-link>
        </a>
      </ul>
      <div class="dropdown mr-5">
        <a @click="logOut()" class="router ml-3">Terminar Sessão</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AdminNavBar",
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
  cursor: pointer;
}

a:hover {
  text-decoration: none !important ;
  color: white !important;
  font-weight: bolder;
}

.dropdown-menu {
  background-color: #2c3e50;
  color: white;
}

.dropdown-toggle {
  background-color: #2c3e50;
  color: white;
}
</style>
