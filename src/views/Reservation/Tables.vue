<template>
  <div class="home">
    <NavBar />
    <div
      class="container position-relative d-flex align-items-center justify-content-center"
    >
      <div class="d-flex justify-content-center">
        <div class="row">
          <div class="col-12">
            <router-link to="/data">
              <img
                src="../../assets/arrowUp.png"
                id="arrow"
                class="img-fluid"
                @click="setReservationTable()"
              />
            </router-link>
          </div>
          <div class="col-12">
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
          <div class="col-12">
            <router-link to="/menu">
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
  margin-top: 10px;
  font-size: 30px;
  color: #2c3e50;
}

.imgContainer {
  width: 100%;
  height: 100vh;
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
