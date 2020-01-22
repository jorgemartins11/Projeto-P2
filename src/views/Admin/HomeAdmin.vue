<template>
  <div class="home">
    <nav class="navbar navbar-expand-lg navbar-custom fixed-top">
      <a class="navbar-brand pl-5" href="#">
        <router-link to="/homeAdmin">
          <img src="../../assets/logo.png" />
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
        <ul class="navbar-nav mx-auto text-center"></ul>
        <div class="dropdown mr-5">
          <button
            class="btn btn-secondary btn-lg dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img
              src="../../assets/profile_icon.png"
              class="mr-lg-5 pl-sm-5 pl-lg-0"
              width="30px"
              height="30px"
            />
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a @click="logOut()" class="router ml-3">Terminar Sessão</a>
          </div>
        </div>
      </div>
    </nav>

    <div class="row1">
      <div class="col-12 text-center users pb-2 pt-5">
        <img src="../../assets/admin.png" class="img-fluid mb-4 mt-5" />
        <h1 class="display-5">Área de Administração</h1>
      </div>
    </div>
    <div
      class="imgContainer position-relative d-flex align-items-center justify-content-center mb-5"
    >
      <div class="btn1 mr-lg-5 pl-sm-5 pl-lg-0">
        <router-link to="/reservationsAdmin">
          <img class="img" src="../../assets/logoBook.png" />
          <p class="p">RESERVAS</p>
          <br />
        </router-link>
      </div>
      <div class="btn2 mr-lg-5 pl-sm-5 pl-lg-0">
        <router-link to="/usersAdmin">
          <img class="img" src="../../assets/users2.png" />
          <p class="p mb-4">UTILIZADORES</p>
          <br />
        </router-link>
      </div>
      <div class="btn3 mr-lg-5 pl-sm-5 pl-lg-0">
        <router-link to="/stockAdmin">
          <img class="img" src="../../assets/stock.png" />
          <p class="p">GESTÃO DE STOCK</p>
          <br />
        </router-link>
      </div>
    </div>
    <div class="container-fluid Footer-custom pb-5 pt-3">
      <div class="row row-no-gutters" id="bottom-footer">
        <div class="col-xs-12 col-md-5 col-lg-4 text-center">
          <ul class="vertical-aligned small pt-5 mr-5">
            <a href="https://www.ipp.pt/" class="mr-5">
              <img src="../../assets/ipplogo-white.svg" />
            </a>
          </ul>
        </div>
        <div class="col-xs-12 col-md-2 col-lg-4 text-center">
          <ul class="list-unstyled list-inline pt-2">
            <a id="copyright" class="list-inline-item"
              >&copy; André Lopes, Gonçalo Moreira e Jorge Martins</a
            >
          </ul>
        </div>
        <div class="col-xs-12 col-md-5 col-lg-4 text-center pt-5">
          <a href="https://www.facebook.com/pporto.esht/" class="pl-2">
            <img src="../../assets/facebook.svg" />
          </a>
          <a href="https://twitter.com/politecnico" class="pl-2">
            <img src="../../assets/twitter.svg" />
          </a>
          <a href="https://www.instagram.com/esht_pporto/" class="pl-2">
            <img src="../../assets/instagram.svg" />
          </a>
          <a
            href="https://www.youtube.com/user/politecnicodoporto"
            class="pl-2"
          >
            <img src="../../assets/youtube.svg" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
  components: {},

  data: function() {
    return {
      user: {}
    };
  },

  computed: {
    getLoggedUser: "getLoggedUser"
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
@import url("https://fonts.googleapis.com/css?family=Muli&display=swap");
@import url(//db.onlinewebfonts.com/c/3ddbc782020026a9a930f7a134dce21d?family=Garamont+Amsterdam+Expert+BQ);

.Footer-custom {
  background-color: #2c3e50;
  font-family: "Muli", sans-serif;
  font-size: 1rem;
}

.dropdown-menu {
  background-color: #2c3e50;
  color: white;
}

.dropdown-toggle {
  background-color: #2c3e50;
  color: white;
}

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

.home {
  overflow-x: hidden;
}

.img-fluid {
  height: 150px;
}

.row1 {
  background-color: #2980b9;
  height: 350px;
  overflow-y: hidden;
  color: white;
}

.container {
  margin-left: auto;
  margin-right: auto;
  width: 1000px;
  position: absolute;
}

.btn1,
.btn2,
.btn3 {
  width: 500px;
  height: 600px;
  float: left;
  background-color: #2980b9;
  margin-top: 125px;
  margin-left: 40px;
  padding: 10px;
  border: 12px solid #2c3e50;
}

.img {
  width: 400px;
  height: 400px;
  margin-top: 50px;
  margin-bottom: 50px;
}

.img:hover {
  width: 410px;
  height: 410px;
  margin-top: 40px;
  margin-bottom: 50px;
}

p {
  height: 50px;
  color: white;
  font-size: 30px;
  position: relative;
}

a {
  text-decoration: none !important ;
  color: white !important;
}

a:hover {
  font-weight: bolder;
}

#copyright:hover {
  text-decoration: none !important ;
  color: white !important;
  font-weight: normal !important;
}

#copyright {
  margin-top: 40px;
}
</style>
