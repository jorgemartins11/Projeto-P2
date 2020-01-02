<template>
  <div class="home">
    <NavBar />
    <div class="imgContainer mt-5">
      <div class="row mt-2">
        <div class="col-12">
          <form class="md-form">
            <div class="file-field">
              <div class="mb-3 mt-5">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Missing_avatar.svg/1024px-Missing_avatar.svg.png"
                  class="rounded-circle z-depth-1-half avatar-pic"
                  alt="example placeholder avatar"
                  id="profilePic"
                />
              </div>
              <div class="d-flex justify-content-center">
                <div class="btn btn-mdb-color btn-rounded float-left">
                  <span class="span">Escolha a sua fotografia de Perfil...</span>
                  <br>
                  <input type="file" id="avatar" accept="image/*" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="row">
        <div class="col-6 position-relative d-flex align-items-center justify-content-center">
          <form>
            <div class="form-group pt-5">
              <input
                type="text"
                class="form-control"
                id="exampleInputName"
                placeholder="Nome Próprio"
                required
              />
            </div>
            <div class="form-group pt-1">
              <input
                type="text"
                class="form-control"
                id="exampleInputUsername"
                placeholder="Nome de Utilizador"
                required
              />
            </div>
            <div class="form-group pt-1">
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email"
                required
              />
            </div>
            <div class="form-group pt-1">
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Palavra-Passe"
                required
              />
            </div>
            <div class="form-group pt-1">
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword2"
                placeholder="Repetir Palavra-Passe"
                required
              />
            </div>
            <div class="form-group pt-1">
              <input
                class="form-control"
                id="exampleInputBirthDate"
                placeholder="Data de Nascimento"
                onfocus="(this.type='date')"
                required
              />
            </div>
          </form>
        </div>
        <div class="col-6 flex-column align-items-center justify-content-center">
          
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <button type="button" id="save" class="btn btn-success mb-3">Guardar Alterações</button>
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

// const vm = new Vue; {
//   methods:{
//     profilepic: function changeProfilePic(){
//       var profilePic = document.getElementById("#profilePic")
//       var avatar = document.getElementById("#avatar")

//       if (avatar.value == "") {
//         profilePic.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Missing_avatar.svg/1024px-Missing_avatar.svg.png"
//       }
//       else{
//         profilePic.src = avatar.value
//       }
//     }
//   }
// }
</script>

<style scoped>
.imgContainer {
  width: 100%;
  height: 100%;
}

.home{
  overflow-x:hidden;
}

.avatar-pic {
  width: 150px;
  background-color: #2c3e50;
}

#save{
  background-color: #2c3e50;
  color: white;
  border: 1px solid #2c3e50
}

#save:hover{
  background-color: #93C700;
  color: #2c3e50;
  border: 2px solid #2c3e50;
  font-weight: bolder;
}

a {
  text-decoration: none !important ;
  color: white !important;
}

a:hover {
  text-decoration: none !important ;
  color: #2c3e50 !important;
}

p {
  font-size: 18px;
}

#welcome {
  font-size: 30px;
}

.barra {
  background-color: white;
  height: 100%;
  width: 30rem;
  top: 0;
  left: 300px;
  position: absolute;
}

.custom-file {
  height: auto;
  width: 60%;
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
  background-color: #2c3e50;
  border-color: #2c3e50;
  color: white;
  width: 500px;
}

#avatar {
  background-color: #2c3e50;
  border-color: #2c3e50;
    border: 1px solid #2c3e50;
  color: white;
}

input:focus {
  background-color: #2c3e50;
  border: 1px solid black !important;
  box-shadow: unset;
}

input::placeholder {
  color: white;
}

.welcomeText {
  color: #2c3e50;
}
</style>
