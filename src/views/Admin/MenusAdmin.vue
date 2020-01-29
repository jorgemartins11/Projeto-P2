<template>
  <div class="home">
    <NavBar />
    <div class="row divBlue">
      <div class="col-12 text-center pt-5">
        <img
          src="../../assets/admin.png"
          class="img-fluid adminImg pb-4 pt-5 mt-1"
        />
        <h1 class="title pb-1">Área de Administração</h1>
      </div>
    </div>
    <div
      class="Container position-relative d-flex align-items-center justify-content-center pb-5"
    >
      <div class="row pt-5 mt-5 mb-5">
        <div
          class="col-md-6 position-relative d-flex align-items-center justify-content-center pb-5"
        >
          <div
            class="divBtn position-relative d-flex align-items-center justify-content-center"
          >
            <router-link to="/dishesAdmin">
              <img class="img img-fluid pt-5" src="../../assets/menus.png" />
              <p class="p pt-5">Pratos</p>
              <br />
            </router-link>
          </div>
        </div>
        <div
          class="col-md-6 position-relative d-flex align-items-center justify-content-center pb-5"
        >
          <div
            class="divBtn position-relative d-flex align-items-center justify-content-center"
          >
            <router-link to="/stockAdmin">
              <img class="img img-fluid pt-5" src="../../assets/stock.png" />
              <p class="p pt-5">Stock</p>
              <br />
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/AdminFooter.vue";
import NavBar from "@/components/AdminNavBar.vue";

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

.home {
  overflow-x: hidden;
}

.adminImg {
  width: 100px;
  height: auto;
}

.divBlue {
  background-color: #2980b9;
  color: white;
}

.title {
  font-family: "Muli", sans-serif;
  font-size: 2rem;
}

.divBtn {
  width: 300px;
  height: 350px;
  border-radius: 10px;
  background-color: #2980b9;
  border: 7px solid #2c3e50;
  transition: all 1s;
}

.img {
  width: 150px;
  height: auto;
}

p {
  font-family: "Muli", sans-serif;
  color: white;
  font-size: 30px;
}

a {
  text-decoration: none !important ;
  color: white !important;
}

.divBtn:hover {
  box-shadow: 8px 8px rgba(0, 0, 0, 0.15);
  border-radius: 30px;
}

.divBtn:hover a {
  font-weight: bolder;
}

.divBtn:hover img {
  width: 160px;
  height: auto;
}

#copyright:hover {
  text-decoration: none !important ;
  color: white !important;
  font-weight: normal !important;
}

#copyright {
  margin-top: 40px;
}
</style>
