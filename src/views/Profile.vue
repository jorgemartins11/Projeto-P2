<template>
  <div class="home">
    <NavBar />
    <div class="container">
      <div
        class="row d-flex align-items-center justify-content-center position-relative pt-5"
      >
        <div class="col-1">
          <img src="../assets/users3.png" class="float-right profileImg" />
        </div>
        <div class="col-4 text-left pt-3">
          <p><b>Nome: </b>{{ loggedUser.name }}</p>
          <p><b>Username: </b>{{ loggedUser.username }}</p>
          <p><b>Email: </b>{{ loggedUser.email }}</p>
        </div>
        <div
          class="col-6 d-flex align-items-right justify-content-end position-relative"
        >
          <b-button
            type="button"
            class="btn btn-primary align-self-end"
            v-b-modal.modal-1
          >
            Mudar Palavra-Passe
          </b-button>
          <b-modal
            id="modal-1"
            ref="modal-1"
            title="Mudar Palavra-Passe"
            hide-footer
          >
            <form @submit.prevent="changePassword()">
              <p>Palavra-Passe antiga: {{ oldPass }}</p>
              <div class="form-group">
                <label for="newPassword">Nova Palavra-Passe:</label>
                <input
                  type="password"
                  class="form-control"
                  id="newPassword"
                  v-model="newPass"
                />
              </div>
              <div class="form-group">
                <label for="newPasswordRepeat"
                  >Repetir Nova Palavra-Passe:</label
                >
                <input
                  type="password"
                  class="form-control"
                  id="newPasswordRepeat"
                  v-model="repeatNewPass"
                />
              </div>
              <button type="submit" class="btn btn-primary">Confirmar</button>
            </form>
          </b-modal>
        </div>
      </div>
      <div
        class="row d-flex align-items-center justify-content-center position-relative pt-5 pb-3"
      >
        <div class="col-6 text-right pr-5" :style="historySelected">
          <p
            class="viewReserves"
            @click="selectViewReserves('history'), showViewReserves()"
          >
            Histórico de Reservas
          </p>
        </div>
        <div class="col-6 text-left pl-5" :style="nextSelected">
          <p
            class="viewReserves"
            @click="selectViewReserves('next'), showViewReserves()"
          >
            Próximas Reservas
          </p>
        </div>
      </div>
      <div class="row pb-5" v-html="divSelected"></div>
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
  data: function() {
    return {
      loggedUser: {},
      historySelected: {
        "font-weight": "bold",
        "text-decoration": "underline #2980b9"
      },
      nextSelected: {},
      selected: "history",
      reservations: [],
      months: [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
      ],
      divSelected: "",
      oldPass: "",
      newPass: "",
      repeatNewPass: "",
      users: JSON.parse(localStorage.getItem("users"))
    };
  },
  created() {
    this.loggedUser = this.$store.getters.getLoggedUser;
    this.$store.commit("SET_RESERVATIONS", {
      reservations: JSON.parse(localStorage.getItem("reservations"))
    });
    this.reservations = this.$store.getters.getAllReservations;
    this.showViewReserves();
    this.oldPassword();
  },
  methods: {
    changePassword() {
      if (this.newPass == this.repeatNewPass) {
        this.loggedUser.password = this.newPass;
        for (const user of this.users) {
          if (user.id == this.loggedUser.id) {
            user.password = this.newPass;
            this.$store.commit("SET_USERS", {
              users: this.users
            });
          }
        }
      }
    },
    oldPassword() {
      for (let i = 0; i < this.loggedUser.password.length; i++) {
        this.oldPass += "*";
      }
    },
    selectViewReserves(input) {
      if (input == "history") {
        this.historySelected = {
          "font-weight": "bold",
          "text-decoration": "underline #2980b9"
        };
        this.nextSelected = {};
        this.selected = "history";
      } else if (input == "next") {
        this.nextSelected = {
          "font-weight": "bold",
          "text-decoration": "underline #2980b9"
        };
        this.historySelected = {};
        this.selected = "next";
      }
    },
    showViewReserves() {
      this.divSelected = "";
      if (this.selected == "history") {
        for (const reservation of this.reservations) {
          let monthName = reservation.date.split(" ")[1];
          let month = this.months.indexOf(monthName);
          let today = new Date();
          let x = today.getFullYear();
          let y = today.getMonth();
          let z = today.getDate();
          let todayDate = new Date(x, y, z);
          let date = new Date(
            reservation.date.split(" ")[2],
            month,
            reservation.date.split(" ")[0]
          );
          if (todayDate > date) {
            this.divSelected += `<div class="col-3 pb-3">
              <div class="card">
                <div class="card-body">
                  <p>
                    <b>${reservation.date}</b>
                  </p>
                  <p>${reservation.table.hour}</p>
                  <p>${reservation.menu.split(";")[0]}</p>
                  <p>${reservation.menu.split(";")[1]}</p>
                  <p>${reservation.menu.split(";")[2]}</p>
                </div>
              </div>
            </div>`;
          }
        }
      }
      if (this.selected == "next") {
        for (const reservation of this.reservations) {
          let monthName = reservation.date.split(" ")[1];
          let month = this.months.indexOf(monthName);
          let today = new Date();
          let x = today.getFullYear();
          let y = today.getMonth();
          let z = today.getDate();
          let todayDate = new Date(x, y, z);
          let date = new Date(
            reservation.date.split(" ")[2],
            month,
            reservation.date.split(" ")[0]
          );
          if (todayDate < date) {
            this.divSelected += `<div class="col-3 pb-3">
              <div class="card">
                <div class="card-body">
                  <p>
                    <b>${reservation.date}</b>
                  </p>
                  <p>${reservation.table.hour}</p>
                  <p>${reservation.menu.split(";")[0]}</p>
                  <p>${reservation.menu.split(";")[1]}</p>
                  <p>${reservation.menu.split(";")[2]}</p>
                </div>
              </div>
            </div>`;
          }
        }
      }
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Muli&display=swap");

.profileImg {
  width: 100px;
  height: 100px;
}

.btn {
  background-color: #2980b9;
  border: 0px #2980b9;
  border-radius: 10px;
  font-family: "Muli", sans-serif;
}

.btn:hover {
  background-color: #2c3e50;
  border: 0px #2980b9;
  border-radius: 10px;
}

.viewReserves {
  cursor: pointer;
}

.viewReserves:hover {
  font-weight: bold;
}

p {
  font-family: "Muli", sans-serif;
}

.card {
  border-radius: 15px;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.1);
}
</style>
