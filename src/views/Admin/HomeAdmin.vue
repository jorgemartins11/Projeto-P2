<template>
  <div class="home">
    <AdminNavBar />
    <div class="imgContainer position-relative d-flex align-items-center justify-content-center">
        <div class="btn1 mr-lg-5 pl-sm-5 pl-lg-0">
            <router-link to="/reservationsAdmin">
            <img src="../../assets/reservas.png" />
            <hr>
            <p class="p">Reservas</p>
            <br />
            </router-link>
        </div>
        <div class="btn2 mr-lg-5 pl-sm-5 pl-lg-0">
            <router-link to="/usersAdmin">
            <img src="../../assets/users.png" />
            <hr>
            <p class="p">Utilizadores</p>
            <br />
            </router-link>
        </div>
        <div class="btn3 mr-lg-5 pl-sm-5 pl-lg-0">
            <router-link to="/stockAdmin">
            <img src="../../assets/stock.png" />
            <hr>
            <p class="p">Gestão de Stock</p>
            <br />
            </router-link>
        </div>
    </div>
    <AdminFooter />
  </div>
</template>

<script>
import AdminFooter from "@/components/AdminFooter.vue";
import AdminNavBar from "@/components/AdminNavBar.vue";

export default {
  name: "about",
  components: {
    AdminFooter,
    AdminNavBar
  }
};
</script>

<style scoped>
.container{
    margin-left: auto;
    margin-right: auto;
    width: 1000px;
    position: absolute;
}

.btn1, .btn2, .btn3 {
    width: 600px;
    height: 600px;
    float:left;
    background-color: #707070;
    margin-top: 125px;
    margin-left: 40px;
    padding: 10px;
    border: 10px solid #2c3e50;
}

a {
  text-decoration: none !important ;
  color: white !important;
  font-size: 1.2rem;
}

a:hover {
  text-decoration: none !important ;
  color: #2c3e50 !important;
  font-size: 20px;
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
