<template>
  <div class="home position-relative">
    <NavBar />
    <div class="container d-flex align-items-center justify-content-center">
      <div class="row">
        <div class="col-12">
          <div class="position-relative pt-5">
            <router-link to="/date" class="text-center">
              <img
                src="../../assets/arrowUp.png"
                id="arrow"
                alt
                class="img-fluid"
                @click="setReservationTable()"
              />
            </router-link>
          </div>
          <div class="col-12 pt-5">
            <p id="chosing" class="p">Escolha a Mesa</p>
          </div>
          <div class="col-12">
            <select id="sltTable" v-model="reservationTable">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
          </div>
          <div class="position-relative pt-5">
            <router-link to="/menu" class="text-center">
              <img
                src="../../assets/arrowDown.png"
                id="arrow"
                alt
                class="img-fluid"
                @click="setReservationTable()"
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
      reservationTable: ""
    };
  },
  methods: {
    setReservationTable() {
      this.$store.commit("SET_RESERVATION_TABLE", {
        table: this.reservationTable
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
