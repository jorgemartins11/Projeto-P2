<template>
  <div class="home">
    <NavBar />
    <div
      class="imgContainer position-relative d-flex align-items-center justify-content-center"
    >
      <img src="../../assets/polvo.jpg" id="bg" alt class="img-fluid" />
      <div class="barra d-flex justify-content-center">
        <div class="row">
          <div class="col-12">
            <router-link to="/table">
              <img
                src="../../assets/arrow.png"
                id="arrow"
                alt
                class="img-fluid"
                @click="setReservationMenu()"
              />
            </router-link>
            <p id="Chosing3" class="p">Escolha o(s) Menú(s)</p>
            <select id="sltMenu" v-model="reservationMenu">
              <option value="meat">Carne</option>
              <option value="fish">Peixe</option>
              <option value="vegetarian">Vegetariano</option>
            </select>
            <router-link to="/observation">
              <img
                src="../../assets/arrow2.png"
                id="arrow"
                alt
                class="img-fluid"
                @click="setReservationMenu()"
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
  },
  data() {
    return {
      reservationMenu: ""
    };
  },
  methods: {
    setReservationMenu() {
      this.$store.commit("SET_RESERVATION_MENU", {
        menu: this.reservationMenu
      });
    }
  }
};
</script>

<style scoped>
#Chosing3 {
  margin-top: 10px;
  font-size: 30px;
  color: #2c3e50;
}

.imgContainer {
  width: 100%;
  height: 100vh;
}

.barra {
  background-color: white;
  opacity: 0.8;
  height: 100%;
  width: 70rem;
  top: 0;
  position: absolute;
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
