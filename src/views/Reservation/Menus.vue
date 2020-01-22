<template>
  <div class="home position-relative">
    <NavBar />
    <div class="container d-flex align-items-center justify-content-center">
      <div class="d-flex justify-content-center">
        <div class="row">
          <div class="col-12">
            <div class="position-relative pt-5">
              <router-link to="/table" class="text-center">
                <img
                  src="../../assets/arrowUp.png"
                  id="arrow"
                  alt
                  class="img-fluid"
                  @click="setReservationMenu()"
                />
              </router-link>
            </div>
            <div class="col-12 pt-5">
              <p id="chosing" class="p">Escolha o(s) Menú(s)</p>
            </div>
            <div class="col-12">
              <select id="sltMenu" v-model="reservationMenu">
                <option value="meat">Carne</option>
                <option value="fish">Peixe</option>
                <option value="vegetarian">Vegetariano</option>
              </select>
            </div>
            <div class="position-relative pt-5">
              <router-link to="/observation" class="text-center">
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
  font-family: "Muli", sans-serif;
  font-size: 2rem;
  font-weight: bold;
  color: #2c3e50;
}

img#arrow {
  height: 30px;
  width: 30px;
  margin-bottom: auto;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}
</style>
