<template>
  <div class="home position-relative">
    <NavBar />
    <div class="container d-flex align-items-center justify-content-center">
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
            <p id="chosing" class="p">Observações</p>
          </div>
          <form>
            <p id="chosing" class="p">Observações</p>
            <textarea
              type="text"
              id="observacao"
              name="fname"
              class="textbox mb-4"
              maxlength="1000"
              placeholder="Caso queira avisar de alguma intolerância ou pretenda escrever qualquer indicação adicional que gostaria de acrescentar ao seu pedido, sinta-se livre de nos avisar através deste campo de observações..."
              v-model="reservationObservation"
            ></textarea
            ><br />
            <button
              type="submit"
              id="submitReservation"
              class="btn btn-primary btn-lg mr-2"
              @click="addReservation()"
            >
              Confirmar Reserva
            </button>
            <button
              type="submit"
              id="cancelReservation"
              class="btn btn-danger btn-lg ml-2"
            >
              Cancelar Reserva
            </button>
          </form>
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
      reservationDate: "",
      reservationTable: "",
      reservationMenu: "",
      reservationObservation: ""
    };
  },
  created() {
    this.reservationDate = this.$store.getters.getReservationDate;
    this.reservationTable = this.$store.getters.getReservationTable;
    this.reservationMenu = this.$store.getters.getReservationMenu;
  },
  methods: {
    addReservation() {
      if (
        this.reservationDate != "" &&
        this.reservationTable != "" &&
        this.reservationMenu != ""
      ) {
        if (confirm("Tem certeza que pretende fazer a reserva?")) {
          this.$store.commit("NEW_RESERVATION", {
            date: this.reservationDate,
            table: this.reservationTable,
            menu: this.reservationMenu,
            observation: this.reservationObservation
          });
        }
      } else {
        alert(
          "Por favor preencha todos os campos! (Campo de Observações não é obrigatório)"
        );
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

#info {
  font-size: 18px;
  color: #2c3e50;
}

img#arrow {
  height: 30px;
  width: 30px;
  margin-bottom: auto;
}

.textbox {
  width: 600px;
  height: 400px;
  resize: none;
  border: 3px solid #2c3e50;
  color: #2c3e50;
}

.textbox::placeholder {
  color: #2c3e50;
  font-size: 20px;
}

.btn {
  background-color: #2c3e50;
  border-color: black;
  opacity: 1;
}

#submitReservation:hover {
  border: 3px solid black !important;
  background-color: #007bff;
}

#cancelReservation:hover {
  border: 3px solid black !important;
  background-color: #dc3545;
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
