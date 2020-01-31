<template>
  <div class="home">
    <NavBar />
    <div
      class="container position-relative d-flex align-items-center justify-content-center"
    >
      <div class="d-flex justify-content-center">
        <div class="row">
          <div class="col-12">
            <br />
            <br />
            <p id="title" class="mt-5">
              Equipa de Desenvolvimento
            </p>
            <div class="col-12">
              <img
                src="../assets/andre.png"
                class="img-fluid imgDevelopers andre pt-5 pb-3"
              />
              <img
                src="../assets/goncalo.png"
                class="img-fluid imgDevelopers pt-5 pb-3 pr-4 pl-4"
              />
              <img
                src="../assets/jorge.png"
                class="img-fluid imgDevelopers pt-5 pb-3"
              />
              <div class="d-flex justify-content-center mb-4">
                <p class="names andre mr-2 ml-2">André Lopes</p>
                <p class="names mr-2 ml-2">|</p>
                <p class="names mr-2 ml-2">Gonçalo Moreira</p>
                <p class="names mr-2 ml-2">|</p>
                <p class="names mr-2 ml-2">Jorge Martins</p>
              </div>
            </div>
            <hr />
            <p
              class="barra pb-4 mb-4 mt-4 pt-4 text-justify pl-lg-5 pr-lg-5 pl-5 pr-5"
            >
              Este projeto foi realizado em prol da aprovação às disciplinas P2,
              PW1, BD e AMS, contando com a ajuda do professor José António
              sendo que o objetivo é implementar um website para o restaurante
              da Escola Superior de Hotelaria e Turismo que brevemente irá ser
              inaugurado.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer class="fixed-bottom" />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "about",
  components: {
    Footer,
    NavBar
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Muli&display=swap");

#title {
  font-family: "Muli", sans-serif;
  font-size: 30px;
  font-weight: bold;
  color: #2c3e50;
}

.barra {
  width: 35rem;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

hr {
  height: 1px;
  width: 20rem;
  background-color: #2c3e50;
}

p {
  font-family: "Muli", sans-serif;
}

p:not(.names) {
  font-size: 14pt;
}

.andre {
  filter: grayscale(100%);
  text-decoration: line-through;
  transition: all 2s;
}

.andre:hover {
  filter: grayscale(0%);
}
</style>
