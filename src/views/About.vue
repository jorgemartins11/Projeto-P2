<template>
  <div class="home">
    <NavBar />
    <div class="imgContainer position-relative d-flex align-items-center justify-content-center">
      <div class="imgContainer position-relative d-flex align-items-center justify-content-center">
      <div class="barra d-flex justify-content-center">
        <div class="row">
          <div class="col-12">
            <br>
            <br>
            <p id="welcome" class="welcomeText mt-5">
              Equipa de Desenvolvimento
            </p>
            <div class="col-12">
              <img src="../assets/andre.png" id="logo" alt class="img-fluid pt-5 pb-3" />
              <img src="../assets/goncalo.png" id="logo" alt class="img-fluid pt-5 pb-3" />
              <img src="../assets/jorge.png" id="logo" alt class="img-fluid pt-5 pb-3" />
              <div class="d-flex justify-content-center mb-4">
                <p class="names mr-2 ml-2">André Lopes</p>
                <p class="names mr-2 ml-2">|</p>
                <p class="names mr-2 ml-2"> Gonçalo Moreira</p>
                <p class="names mr-2 ml-2">|</p>
                <p class="names mr-2 ml-2"> Jorge Martins</p>
              </div>
            </div>
            <hr>
            <p class="welcomeText pb-4 mb-4 mt-4 pt-4 text-justify pl-lg-5 pr-lg-5 pl-5 pr-5">
              Este projeto foi realizado em prol
              da aprovação às disciplinas P2,
              PW1, BD e AMS, contando com a
              ajuda do professor José António
              sendo que o objetivo é implementar
              um website para o restaurante da
              Escola Superior de Hotelaria e
              Turismo que brevemente irá ser inaugurado.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue"
import NavBar from "@/components/NavBar.vue"

export default {
  name: "about",
  components:{
    Footer,
    NavBar
  }
}
</script>

<style scoped>
.imgContainer {
  width: 100%;
  height: 100%;
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
  background-color: white;
  height: 100%;
  width: 30rem;
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
  background-color: #2c3e50;
}

small {
  font-family: "Muli", sans-serif;
  font-size: 0.9rem;
  font-weight: bold;
  color: #2c3e50;
  opacity: 1;
}

.form-control {
  background-color: #707070;
  border-color: #707070;
}


input:focus {
  background-color: #707070;
  border: 1px solid black !important;
  box-shadow: unset;
}

.welcomeText {
  color: #2c3e50;
}
</style>
