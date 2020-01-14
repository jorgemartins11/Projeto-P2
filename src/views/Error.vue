<template>
  <div class="home">
    <NavBar />
    <div
      class="imgContainer position-relative d-flex align-items-center justify-content-center"
    >
      <img src="../assets/404.jpg" id="bg" alt class="img-fluid" />
      <div class="barra d-flex justify-content-center">
        <div class="row">
          <div class="col-12">
            <router-link to="/home">
              <button id="erro" class="btn btn-lg">Página Principal</button>
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
  font-size: 30px;
}

.btn {
  background-color: #2c3e50;
  border-color: #2c3e50;
  color: white;
  margin-top: 645px;
}

.btn:hover {
  border: 1px solid white !important;
  background-color: #707070;
  color: white;
  text-decoration: none !important ;
}

.barra {
  background-color: transparent;
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
  height: 850px;
  width: 100%;
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
