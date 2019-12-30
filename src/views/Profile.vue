<template>
  <div class="home">
    <NavBar />
    <div
      class="imgContainer position-relative d-flex align-items-center justify-content-center mt-5"
    >
      <div class="row">
        <div class="col-12 mb-5">
          <div class="col-12">
            <img src="../assets/andre.png" id="logo" alt class="img-fluid pt-5 mt-5" />
            <div class>
              <p class="name">André Lopes</p>
              <p class="email mb-3">9180544@esmad.ipp.pt</p>
            </div>
            <div class="btn-group btn-lg" role="group">
              <button type="button" class="btn btn-primary">
                <router-link to="/editProfile">
                  Editar Perfil
                </router-link>
              </button>
              <button type="button" id="settingButton" class="btn btn-link">
                <router-link to="/editProfile">
                  <img src="../assets/settings.png" id="setting"/>
                </router-link>
              </button>
            </div>
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
  right: 450px;
  bottom: 30px;
}

#setting{
  width: 30px;
  height: 30px;;
}

.btn{
  border: 1px solid #2c3e50;
}

.btn-group{
  
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
  width: 80%;
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
