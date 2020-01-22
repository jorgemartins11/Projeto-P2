<template>
  <div class="home">
    <NavBar />
    <div
      class="imgContainer position-relative d-flex align-items-center justify-content-center"
    >
      <img src="../../assets/polvo.jpg" id="bg" alt class="img-fluid" />
      <div class="d-flex justify-content-center">
        <div class="row">
          <div class="col-12">
            <p id="reservationText" class="reservationText pt-5 pb-5">
              Reservar Mesa
            </p>
            <router-link to="/data">
              <img
                src="../../assets/seta.png"
                id="arrow"
                alt
                class="img-fluid"
              />
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <Footer />
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
@font-face {
  font-family: Amsterdam;
  src: url(../../fonts/Amsterdam.ttf);
}
.imgContainer {
  width: 100%;
  height: 100vh;
}

.barra {
  background-color: transparent;
  height: 100%;
  width: 30rem;
  opacity: 1;
  top: 0;
  position: absolute;
}

#reservationText {
  color: white;
  font-size: 50px;
  font-family: Amsterdam;
  letter-spacing: 0.2rem;
}

img#bg {
  position: fixed;
  height: 100%;
  width: 100%;
  filter: brightness(75%);
}

img#arrow {
  height: 60px;
  width: 60px;
  margin-bottom: auto;
  margin-top: 100px;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}
</style>
