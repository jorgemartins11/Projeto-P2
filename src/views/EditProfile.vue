<template>
  <div class="home">
    <NavBar />
    <div class="imgContainer position-relative d-flex align-items-center justify-content-center">
      <div class="barra d-flex justify-content-center mt-5">
        <div class="row">
          <div class="col-12">
            <img src="../assets/andre.png" id="logo" alt="" class="img-fluid pt-5">
            <p class="name">André Lopes</p>
            <p class="email mb-3">9180544@esmad.ipp.pt</p>
            <p class="edit">Editar Perfil</p>
            <form>
              <div class="form-group pt-1">
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

img#logo {
  height: auto;
  width:40%;
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
  background-color: #2c3e50;
  border-color: #2c3e50;
}


input:focus {
  background-color: #2c3e50;
  border: 1px solid black !important;
  box-shadow: unset;
}

.welcomeText {
  color: #2c3e50;
}
</style>
