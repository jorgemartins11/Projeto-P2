<template>
  <div class="home">
    <AdminNavBar />
    <div class="row divBlue">
      <div class="col-12 text-center pt-5">
        <img src="../../assets/logoBook.png" class="img-fluid pb-4 pt-5 mt-1" />
        <h1 class="title pb-1">Reservas</h1>
      </div>
    </div>
    <div class="container-fluid pt-5 pb-5">
      <div class="row divBlue">
        <div class="col-12">
          <form class="form-inline mb-4 mt-4">
            <div
              class="col-12 position-relative d-flex align-items-center justify-content-center"
            >
              <div class="form-group">
                <input
                  type="text"
                  class="text"
                  rows="1"
                  cols="25"
                  placeholder="Data da reserva.."
                  maxlength="20"
                  v-model="reserveDate"
                />
              </div>
            </div>
          </form>
          <!-- TABLE -->
          <div class="row">
            <div class="col-12">
              <div class="table-responsive">
                <table class="table table-bordered usersTable">
                  <thead>
                    <tr>
                      <th scope="col">ID Reserva</th>
                      <th scope="col">ID Utilizador</th>
                      <th scope="col">Data</th>
                      <th scope="col">Mesa</th>
                      <th scope="col">Menu</th>
                      <th scope="col">Observação</th>
                      <th scope="col">Eliminar</th>
                    </tr>
                  </thead>
                  <tbody
                    id="usersTableBody"
                    v-for="reservation of filteredReservations"
                    :key="reservation.id"
                  >
                    <td scope="row">{{ reservation.id }}</td>
                    <td>{{ reservation.idUser }}</td>
                    <td>{{ reservation.date }}</td>
                    <td>{{ reservation.table }}</td>
                    <td>{{ reservation.menu }}</td>
                    <td>{{ reservation.observation }}</td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-danger"
                        @click="deleteReservation(reservation.id)"
                      >
                        -
                      </button>
                    </td>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
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
  },
  data() {
    return {
      reservations: [],
      order: "A-Z",
      reserveDate: ""
    };
  },
  created() {
    this.$store.commit("SET_RESERVATIONS", {
      reservations: JSON.parse(localStorage.getItem("reservations"))
    });
    this.reservations = this.$store.getters.getAllReservations;
  },
  methods: {
    deleteReservation(id) {
      this.reservations = this.$store.getters.getAllReservationsBesidesDeleted(
        id
      );
      this.$store.commit("SET_RESERVATIONS", {
        reservations: this.reservations
      });
    }
  },
  computed: {
    filteredReservations() {
      return this.$store.getters.getFilteredReservations(this.reserveDate);
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Muli&display=swap");

.home {
  overflow-x: hidden;
}

.title {
  font-family: "Muli", sans-serif;
  font-size: 2rem;
}

.img-fluid {
  width: 100px;
  height: auto;
}

.divBlue {
  background-color: #2980b9;
  overflow-y: hidden;
  color: white;
}

.table {
  color: white;
}

.form-group {
  color: #2c3e50;
}

.text {
  max-width: 200px;
  height: 35px;
  resize: none;
  background-color: #2c3e50;
  max-lines: 1;
  color: white;
  border-radius: 10px;
  border: 1px solid white !important;
}

.text::placeholder {
  color: white;
}

.resizeElement:hover {
  border: 1px solid white !important;
  background-color: #007bff;
}

.resizeElement {
  background-color: #2c3e50;
  color: white;
  height: 35px;
  border-radius: 10px;
  border: 1px solid white !important;
}

.filter {
  font-family: "Muli", sans-serif;
  color: white;
  font-size: 20px;
}
</style>
