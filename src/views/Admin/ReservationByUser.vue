<template>
  <div class="home">
    <AdminNavBar />
    <div class="row">
      <div class="col-12 text-center users pb-5 pt-5">
        <img src="../../assets/users3.png" class="img-fluid mb-4 mt-5" />
        <h1 class="display-5">Reservas por Utilizador</h1>
      </div>
    </div>
    <div
      class="imgContainer position-relative d-flex align-items-center justify-content-center mt-4"
    >
      <div class="col-12">
        <div class="card mb-5 ml-5" style="width: 18rem;">
          <img src="../../assets/users3.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">aclopes2000</h5>
            <p class="card-text d-flex justify-content-left">Data:</p>
            <p class="card-text d-flex justify-content-left">Hora:</p>
            <button
              type="button"
              class="btn btn-info mb-2"
              data-toggle="modal"
              data-target="#myModal"
            >
              Ver mais
            </button>
            <div class="">
              <button type="button" id="check" class="btn btn-primary mr-4">
                Confirmar
              </button>
              <button type="button" id="cancel" class="btn btn-primary">
                Cancelar
              </button>
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
  }
};
</script>

<style scoped>
div {
  overflow-x: hidden;
}

.img-fluid {
  height: 150px;
}

.card {
  background-color: #2980b9;
  color: white;
}

.row {
  background-color: #2980b9;
  height: 350px;
  overflow-y: hidden;
  color: white;
}

.rowSpecial {
  background-color: #2c3e50;
  height: 20px;
}

.container-fluid {
  background-color: #2980b9;
}

.form-control {
  background-color: #2980b9;
}

.table {
  color: white;
}

.form-group {
  color: #2c3e50;
}

.btn {
  background-color: #2c3e50;
  border-color: #707070;
}

.btn:hover {
  border: 1px solid white !important;
  background-color: #007bff;
}

#check:hover {
  border: 1px solid white !important;
  background-color: #007bff;
}

#cancel:hover {
  border: 1px solid white !important;
  background-color: #dc3545;
}

.form-control {
  background-color: #2c3e50;
  color: white;
}

.form-control:hover {
  background-color: #707070;
  color: white;
}

.text {
  max-width: 200px;
  resize: none;
  background-color: #2c3e50;
  max-lines: 1;
  color: white;
  border: 2px solid #707070;
}

.text::placeholder {
  color: white;
}

.filter {
  color: #2c3e50;
  font-size: 20px;
}
</style>
