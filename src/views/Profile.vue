<template>
  <div class="home">
    <NavBar />
    <div class="container">
      <div class="row my-auto mt-3">
        <div class="col-6">
          <div class="d-inline-block my-auto mr-4 pb-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Missing_avatar.svg/1024px-Missing_avatar.svg.png"
              id="logo"
              class="img-fluid pb-5 mt-4"
            />
          </div>
            <div class="d-inline-block">
              <p class="name">Gonçalo e Jorge</p>
              <p class="email">9180216@esmad.ipp.pt</p>
            </div>
        </div>
        <div class="col-6 d-flex align-items-center justify-content-center pb-5">
          <div class="btn-group" role="group">
            <button type="button" class="btn btn-primary">
              <router-link to="/editProfile">Editar Perfil</router-link>
            </button>
            <button type="button" id="settingButton" class="btn btn-link">
              <router-link to="/editProfile">
                <img src="../assets/settings.png" id="setting" />
              </router-link>
            </button>
          </div>
        </div>
      </div>
      <div class="row text-center mt-3">
        <div class="d-inline-block col-4 text-right">
          <button type="button" class="names col-4 text-right">Histórico de Reservas</button>
        </div>
        <div class="d-inline-block col-4 text-center">
          <button type="button" class="names col-4 text-center">Próximas Refeições</button>
        </div>
        <div class="d-inline-block col-4 text-left">
          <button type="button" class="names col-4 text-left">Avaliações Realizadas</button>
        </div>
      </div>
      <div class="row text-center mt-4">
        <div class="bg col-12"></div>
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
  data: function() {
    return {
      name: "",
      username: "",
      email: "",
      birthDate: "",
      loggedUser: {}
    };
  }
  // created(){
  //   if (JSON.parse(localStorage.getItem("users"))) {
  //     this.$store.commit("SET_USERS", {
  //       users: JSON.parse(localStorage.getItem("users"))
  //     })
  //   }
  // },
  // methods:{
  //   showUserProfileData() {
  //     if (localStorage.getItem("users")) {
  //       users = JSON.parse(localStorage.getItem("users"))
  //     }
  //     let id = ""
  //     if (sessionStorage.getItem('loggedUserId')) {
  //       id = JSON.parse(sessionStorage.getItem("loggedUserId"))
  //     }
  //     for (const user of users) {
  //       if (user._id == id) {
  //         document.querySelector('#txtUsername').value = user._username
  //         document.querySelector('#txtPassword').value = user._password
  //         document.querySelector('#txtDescription').value = user._description
  //         document.querySelector('.avatar').src = user._avatar
  //         document.querySelector('#currentPhoto').src = user._avatar
  //       }
  //     }
  //   }
  // }
};
</script>

<style scoped>
.home {
  overflow-x: hidden;
}

.names {
  background-color: transparent;
  border: none;
  color: #2c3e50;
  font-size: 14px;
  font-weight: bolder;
}

.names:hover {
  background-color: transparent;
  border: none;
  color: #2c3e50;
  font-weight: bolder;
  text-decoration: underline;
  text-decoration-color: #2c3e50;
}

#setting {
  width: 30px;
  height: 30px;
}

.btn {
  border: 1px solid #2c3e50;
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
  width: 110px;
  background-color: transparent;
}

button:focus {
  outline: 0;
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

.bar {
  text-align: center;
}
</style>
