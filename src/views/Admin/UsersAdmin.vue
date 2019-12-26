<template>
  <div class="home">
    <AdminNavBar />
    <div class="row">
      <div class="col-12 text-center users pb-5 pt-5">
        <img src="../../assets/users2.png" class="img-fluid mb-4 mt-5" />
        <h1 class="display-5">Utilizadores</h1>
      </div>
    </div>
    <div class="container-fluid users mt-3">
      <!-- FILTER -->
      <div class="container-fluid userFilter">
        <form class="form-inline">
          <div class="form-group mt-4">
            <label for="stlOrder" class="mr-3">Filtrar Por:</label>
            <select class="form-control" id="stlOrder">
              <option value="A-Z" selected>Ordem Alfabética Crescente</option>
              <option value="Z-A">Ordem Alfabética Decrescente</option>
            </select>
            <button type="button" class="btn btn-primary filterUsers ml-4">Filtrar</button>
            <button type="button" id="addUser" class="btn btn-primary filterUsers ml-5">Adicionar Utilizador</button>
          </div>
        </form>
      </div>
      <br />
      <br />
      <!-- TABLE -->
      <div class="row">
        <div class="col-12">
          <div class="table-responsive">
            <table class="table table-bordered usersTable">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Nome de Utilizador</th>
                  <th scope="col">Tipo de Conta</th>
                  <th scope="col">Mudar tipo de Conta</th>
                  <th scope="col">Bloquear</th>
                  <th scope="col">Eliminar</th>
                </tr>
              </thead>
              <tbody id="usersTableBody"></tbody>
            </table>
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
  background-color: #2980b9 !important;
}

.form-control {
  background-color: #2980b9;
}

.table {
  color: white;
}

.form-group{
    color: #2c3e50;
}

.btn {
  background-color:#2c3e50;
  border-color: #707070;
}

.btn:hover {
  border: 1px solid white !important;
  background-color: #007bff;
}

.form-control{
    background-color: #2c3e50;
    color: white;
}

.form-control:hover{
    background-color: #007bff;
    color: white;
}

#addUser{
    align-self: right;
}
</style>