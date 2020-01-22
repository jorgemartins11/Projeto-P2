<template>
  <div class="home">
    <NavBar />
    <div
      class="imgContainer position-relative align-items-centre justify-content-center "
    >
      <div class="col-12">
        <div class="col-6 ml-5">
          <div id="map" class="google-map"></div>
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
  },
  data() {
    return {
      ola: "2"
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped>
.home {
  overflow-x: hidden;
  overflow-y: hidden;
}

.imgContainer {
  width: 100%;
  height: 100%;
}

#map {
  margin-top: 130px;
  height: 600px;
  width: 800px;
  background-color: #707070;
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
