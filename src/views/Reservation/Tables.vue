<template>
  <div class="home position-relative">
    <NavBar />
    <div class="container d-flex align-items-center justify-content-center">
      <div class="row">
        <div class="col-12">
          <!-- Seta para cima -->
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
          <!-- Titulo -->
          <div class="col-12 pt-3">
            <p id="chosing" class="p">Escolha a Mesa</p>
          </div>
          <!-- Detalhes -->
          <div class="row justify-content-center pb-4 pt-4">
            <div class="pr-3">
              <label for="nPeople" class="pr-1">Número de pessoas:</label>
              <select id="sltNPeople" class="pr-1" v-model="nPeople">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>
            </div>
            <div class="pl-3">
              <label for="txtHour" class="pr-1">Hora de entrada e saída:</label>
              <select id="sltHour" class="pr-1" v-model="hour">
                <option value="12_13">12h-13h</option>
                <option value="13_14">13h-14h</option>
              </select>
            </div>
          </div>
          <!-- Escolha de mesa -->
          <div class="row">
            <div
              class="col-3 pl-5 pr-5 divTable"
              v-bind:style="divTableSelected4"
            >
              <img
                src="../../assets/table.png"
                @click="setSelectedNSeats(8)"
                class="table"
              />
              <p>8 Lugares</p>
            </div>
            <div
              class="col-3 pl-5 pr-5 divTable"
              v-bind:style="divTableSelected3"
            >
              <img
                src="../../assets/table.png"
                @click="setSelectedNSeats(6)"
                class="table"
              />
              <p>6 Lugares</p>
            </div>
            <div
              class="col-3 pl-5 pr-5 divTable"
              v-bind:style="divTableSelected2"
            >
              <img
                src="../../assets/table.png"
                @click="setSelectedNSeats(4)"
                class="table"
              />
              <p>4 Lugares</p>
            </div>
            <div
              class="col-3 pl-5 pr-5 divTable"
              v-bind:style="divTableSelected1"
            >
              <img
                src="../../assets/table.png"
                @click="setSelectedNSeats(2)"
                class="table"
              />
              <p>2 Lugares</p>
            </div>
          </div>
          <div class="row justify-content-center pt-5">
            <button
              type="button"
              class="btn btn-secondary"
              @click="setLocationSelected('wall')"
              v-bind:style="buttonLocation1"
            >
              Parede
            </button>
            <div class="pr-5 pl-5">
              <button
                type="button"
                class="btn btn-secondary"
                @click="setLocationSelected('middle')"
                v-bind:style="buttonLocation2"
              >
                Meio da Sala
              </button>
            </div>
            <button
              type="button"
              class="btn btn-secondary"
              @click="setLocationSelected('window')"
              v-bind:style="buttonLocation3"
            >
              Janela
            </button>
          </div>
          <!-- Seta para baixo -->
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
      nSeats: 0,
      divTableSelected1: {},
      divTableSelected2: {},
      divTableSelected3: {},
      divTableSelected4: {},
      nPeople: 1,
      hour: "12_13",
      location: "",
      buttonLocation1: {},
      buttonLocation2: {},
      buttonLocation3: {}
    };
  },
  methods: {
    setReservationTable() {
      this.$store.commit("SET_RESERVATION_TABLE", {
        table: this.nSeats + " " + this.location,
        nPeople: this.nPeople,
        hour: this.hour
      });
    },
    setSelectedNSeats(nSeats) {
      this.nSeats = nSeats;
      this.setStyleSelectedTable(nSeats / 2);
    },
    setStyleSelectedTable(n) {
      if (n == 1) {
        this.divTableSelected1 = {
          border: "1px solid",
          padding: "10px",
          "box-shadow": "5px 5px rgba(0, 0, 0, 0.2)",
          "border-radius": "10px"
        };
        this.divTableSelected2 = {};
        this.divTableSelected3 = {};
        this.divTableSelected4 = {};
      }
      if (n == 2) {
        this.divTableSelected2 = {
          border: "1px solid",
          padding: "10px",
          "box-shadow": "5px 5px rgba(0, 0, 0, 0.2)",
          "border-radius": "10px"
        };
        this.divTableSelected1 = {};
        this.divTableSelected3 = {};
        this.divTableSelected4 = {};
      }
      if (n == 3) {
        this.divTableSelected3 = {
          border: "1px solid",
          padding: "10px",
          "box-shadow": "5px 5px rgba(0, 0, 0, 0.2)",
          "border-radius": "10px"
        };
        this.divTableSelected1 = {};
        this.divTableSelected2 = {};
        this.divTableSelected4 = {};
      }
      if (n == 4) {
        this.divTableSelected4 = {
          border: "1px solid",
          padding: "10px",
          "box-shadow": "5px 5px rgba(0, 0, 0, 0.2)",
          "border-radius": "10px"
        };
        this.divTableSelected1 = {};
        this.divTableSelected2 = {};
        this.divTableSelected3 = {};
      }
    },
    setLocationSelected(locat) {
      this.location = locat;
      this.setStyleSelectedLocation(locat);
    },
    setStyleSelectedLocation(locat) {
      if (locat == "wall") {
        this.buttonLocation1 = {
          "background-color": "#2c3e50",
          color: "white"
        };
        this.buttonLocation2 = {};
        this.buttonLocation3 = {};
      }
      if (locat == "middle") {
        this.buttonLocation2 = {
          "background-color": "#2c3e50",
          color: "white"
        };
        this.buttonLocation1 = {};
        this.buttonLocation3 = {};
      }
      if (locat == "window") {
        this.buttonLocation3 = {
          "background-color": "#2c3e50",
          color: "white"
        };
        this.buttonLocation1 = {};
        this.buttonLocation2 = {};
      }
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

.table {
  width: 200px;
  height: auto;
}

p,
label {
  font-family: "Muli", sans-serif;
  font-size: 1.2rem;
}

.divTable {
  cursor: pointer;
}

select {
  border-radius: 10px;
}

button {
  border-radius: 10px;
  width: 8rem;
  background-color: transparent;
  color: #2c3e50;
}

.selected,
button:hover {
  background-color: #2c3e50;
  color: white;
}
</style>
