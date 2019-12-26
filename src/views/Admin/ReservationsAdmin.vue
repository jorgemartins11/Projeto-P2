<template>
  <div class="home">
    <AdminNavBar />
    <div class="row1">
      <div class="col-12 text-center users pb-5 pt-5">
        <img src="../../assets/logoBook.png" class="img-fluid mb-4 mt-5" />
        <h1 class="display-5">Reservas</h1>
      </div>
    </div>
    <div class="imgContainer position-relative d-flex align-items-center justify-content-center mt-4">
      <div class="btn1 mr-lg-5 pl-sm-5 pl-lg-0 mt-5 mb-5">
        <router-link to="/reservationByDateAdmin">
          <img class="img" src="../../assets/calendar.png" />
          <p class="p">Escolher Reservas por Data...</p>
          <br />
        </router-link>
      </div>
      <div class="btn2 mr-lg-5 pl-sm-5 pl-lg-0 mt-5 mb-5">
        <router-link to="/reservationByUserAdmin">
          <img class="img" src="../../assets/users3.png" />
          <p class="p">Escolher Reservas por Utilizador...</p>
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

.home{
    overflow-x: hidden;
}

.img-fluid {
  height: 150px;
}

.row1 {
  background-color: #2980b9;
  height: 350px;
  overflow-y: hidden;
  color: white;
}

.container {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

.btn1,
.btn2 {
  width: 500px;
  height: 600px;
  float: left;
  background-color:#2980B9;
  margin-top: 125px;
  margin-left: 40px;
  padding: 10px;
  border: 12px solid #2c3e50;
  overflow-y: hidden;
}

.img{
    width: 400px;
    height: 400px;
    margin-top: 50px;
    margin-bottom: 50px;
}

.img:hover{
    width: 410px;
    height: 410px;
    margin-top: 40px;
    margin-bottom: 50px;
}

p{
  height: 50px;
  color: white;
  font-size: 25px;
  position: relative;
}

p:hover{
  height: 50px;
  color: white;
  font-size: 28px;
}

a {
  text-decoration: none !important ;
  color: white !important;
  font-size: 1.2rem;
}

a:hover {
  font-weight: bolder;
}
</style>