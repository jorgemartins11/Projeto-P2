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
      <router-link to="/profile">
        <img
          src="../assets/profile_icon.png"
          class="mr-lg-5 pl-sm-5 pl-lg-0"
          width="30px"
          height="30px"
        />
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AdminNavBar"
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
</style>