<template>
  <div class="home">
    <nav class="navbar navbar-expand-lg navbar-custom fixed-top">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mr-4" >
                <li class="nav-item ml-lg-5 mt-3 mr-1">
                    <router-link to="/Sobre">Sobre</router-link>
                </li>
                <li class="nav-item ml-lg-5 mt-3 mr-1">
                    <router-link to="/Reserva">Reservar Mesa</router-link>
                </li>
                <li class="nav-item ml-lg-5 mt-3 mr-1">
                    <router-link to="/Contacts">Contactos</router-link>
                </li>
            </ul>
            <img src="../assets/profile_icon.png" class="mr-4 lg-5 pl-sm-5 pl-lg-0  d-inline-block" width="30px" height="30px">
        </div>
    </nav>
    <div class="imgContainer position-relative d-flex align-items-center justify-content-center">
      <img src="../assets/background.jpg" id="bg" alt class="img-fluid" />
      <div class="barra d-flex justify-content-center">
        <div class="row">
          <div class="col-12">
            <img src="../assets/logo.png" id="logo" alt class="img-fluid pt-5 pb-3" />
            <hr />
            <p id="welcome" class="welcomeText pt-4 pb-3 ">
              Bem vindo!
            </p>
            <p class="welcomeText pb-4 mb-4 text-justify pl-lg-5 pr-lg-5 pl-5 pr-5">
              Este projeto foi realizado em prol
              da aprovação às disciplinas P2,
              PW1, BD e AMS, contando com a
              ajuda do professor José António
              sendo que o objetivo é implementar
              um website para o restaurante da
              Escola Superior de Hotelaria e
              Turismo que brevemente irá ser inaugurado.</p>
            <hr>
            <img src="../assets/ipplogo.png" id="logo" alt class="img-fluid mt-5 mb-5" />
            <small class="form-text mt-3">Escola Superior de Hotelaria e Turismo</small>
            <small class="form-text">Rua D. Sancho I, n.º 981</small>
            <small class="form-text">4480-876 Vila do Conde</small>
            <small class="form-text">Portugal</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.imgContainer {
  width: 100%;
  height: 100vh;
}

a {
  text-decoration: none !important ;
  color: white !important;
}

a:hover {
  text-decoration: none !important ;
  color: #2c3e50 !important;
}

#welcome {
  font-size: 30px
}

.barra {
  background-color: #2c3e50;
  height: 100%;
  width: 30rem;
  opacity: 0.75;
  top: 0;
  position: absolute;
}

img#logo {
  height: auto;
  width: 30%;
}

img#bg {
  position: fixed;
  height: 100%;
  width: 100%;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

hr{
  height: 1px;
  width: 20rem;
  background-color: white;
}

small {
  font-family: "Muli", sans-serif;
  font-size: 0.9rem;
  font-weight: bold;
  color: white;
  opacity: 1;
}

.form-control {
  background-color: #707070;
  border-color: #707070;
}

input::placeholder {
  color: white;
}

input:active {
  background-color: #707070;
}

input:focus {
  background-color: #707070;
  border: 1px solid black !important;
  box-shadow: unset;
}

.welcomeText {
  color: white;
}

</style>