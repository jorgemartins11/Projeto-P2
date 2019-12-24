<template>
  <div class="home">
    <nav class="navbar navbar-expand-lg navbar-custom fixed-top">
      <a class="navbar-brand pl-5" href="#">
        <router-link to="/home">
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
        <ul class="navbar-nav mx-auto text-center">
        </ul>
        <router-link to="/profile">
          <img
            src="../../assets/profile_icon.png"
            class="mr-lg-5 pl-sm-5 pl-lg-0"
            width="30px"
            height="30px"
          />
        </router-link>
      </div>
    </nav>
    <div class="imgContainer position-relative d-flex align-items-center justify-content-center">
      <div class="btn1 mr-lg-5 pl-sm-5 pl-lg-0">
        <router-link to="/reservationsAdmin">
          <img src="../../assets/reservas.png" />
          <hr />
          <p class="p">Reservas</p>
          <br />
        </router-link>
      </div>
      <div class="btn2 mr-lg-5 pl-sm-5 pl-lg-0">
        <router-link to="/usersAdmin">
          <img src="../../assets/users.png" />
          <hr />
          <p class="p">Utilizadores</p>
          <br />
        </router-link>
      </div>
      <div class="btn3 mr-lg-5 pl-sm-5 pl-lg-0">
        <router-link to="/stockAdmin">
          <img src="../../assets/stock.png" />
          <hr />
          <p class="p">Gestão de Stock</p>
          <br />
        </router-link>
      </div>
    </div>
    <div class="container-fluid Footer-custom fixed-bottom pb-3 pt-3">
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
            <a
              id="copyright"
              class="list-inline-item"
            >&copy; André Lopes, Gonçalo Moreira e Jorge Martins</a>
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
          <a href="https://www.youtube.com/user/politecnicodoporto" class="pl-2">
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
  components: {}
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Muli&display=swap");
@import url("https://fonts.googleapis.com/css?family=Muli&display=swap");

.Footer-custom {
  background-color: #2c3e50;
  font-family: "Muli", sans-serif;
  font-size: 1rem;
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

.container {
  margin-left: auto;
  margin-right: auto;
  width: 1000px;
  position: absolute;
}

.btn1,
.btn2,
.btn3 {
  width: 600px;
  height: 600px;
  float: left;
  background-color: #707070;
  margin-top: 125px;
  margin-left: 40px;
  padding: 10px;
  border: 10px solid #2c3e50;
}

a {
  text-decoration: none !important ;
  color: white !important;
  font-size: 1.2rem;
}

a:hover {
  text-decoration: none !important ;
  color: #2c3e50 !important;
  font-weight: bolder;
}

#copyright:hover{
  text-decoration: none !important ;
  color: white !important;
  font-weight:normal !important;
}

#copyright{
 margin-top: 40px;
}
</style>
