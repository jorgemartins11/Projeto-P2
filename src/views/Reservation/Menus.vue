<template>
  <div class="home">
    <NavBar />
    <div
      class="container position-relative d-flex align-items-center justify-content-center"
    >
      <div class="d-flex justify-content-center">
        <div class="row">
          <div class="col-12">
            <router-link to="/table">
              <img
                src="../../assets/arrowUp.png"
                id="arrow"
                class="img-fluid"
                @click="setReservationMenu()"
              />
            </router-link>
          </div>
          <div class="col-12">
            <p id="chosing" class="p">Escolha o(s) Menú(s)</p>
          </div>
          <div class="col-12">
            <select id="sltMenu" v-model="reservationMenu">
              <option value="meat">Carne</option>
              <option value="fish">Peixe</option>
              <option value="vegetarian">Vegetariano</option>
            </select>
          </div>
          <div class="col-12">
            <router-link to="/observation">
              <img
                src="../../assets/arrowDown.png"
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
#chosing {
  margin-top: 10px;
  font-size: 30px;
  color: #2c3e50;
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
