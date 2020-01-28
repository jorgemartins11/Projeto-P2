<template>
  <div class="home">
    <AdminNavBar />
    <div class="row divBlue">
      <div class="col-12 text-center pt-5">
        <img src="../../assets/users2.png" class="img-fluid pb-4 pt-5 mt-1" />
        <h1 class="title pb-1">Utilizadores</h1>
      </div>
    </div>
    <div class="container-fluid pt-5 pb-5">
      <div class="row divBlue">
        <div class="col-12">
          <form class="form-inline mb-4 mt-4">
            <div
              class="col-4 position-relative d-flex align-items-center justify-content-center d-inline-block"
            >
              <button
                type="button"
                class="btn resizeElement"
                v-html="order"
                @click="orderUsers()"
              ></button>
            </div>
            <div
              class="col-4 position-relative d-flex align-items-center justify-content-center"
            >
              <div class="form-group">
                <input
                  type="text"
                  class="text"
                  rows="1"
                  cols="25"
                  placeholder="Nome de Utilizador..."
                  maxlength="20"
                  v-model="txtUserName"
                />
              </div>
            </div>
            <div
              class="col-4 position-relative d-flex align-items-center justify-content-center"
            >
              <b-button class="resizeElement" v-b-modal.modal-1
                >Adiconar Utilizador</b-button
              >
              <b-modal id="modal-1" title="Adicionar Utilizador" hide-footer>
                <form @submit.prevent="addNewUser()">
                  <div class="form-group">
                    <label for="txtName">Nome Próprio:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="txtName"
                      v-model="txtName"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="txtUsername">Nome Utilizador:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="txtUsername"
                      v-model="txtusername"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="txtEmail">Email:</label>
                    <input
                      type="email"
                      class="form-control"
                      id="txtEmail"
                      v-model="txtEmail"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="txtPassword">Password:</label>
                    <input
                      type="password"
                      class="form-control"
                      id="txtPassword"
                      v-model="txtPassword"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="txtPasswordRepeat">Repetir Password:</label>
                    <input
                      type="password"
                      class="form-control"
                      id="txtPasswordRepeat"
                      v-model="txtPasswordRepeat"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="birthDate">Data de Nascimento:</label>
                    <input
                      class="form-control"
                      id="birthDate"
                      name="birthDate"
                      onfocus="(this.type='date')"
                      v-model="birthDate"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="userType">Tipo de Utilizador:</label>
                    <select
                      class="browser-default custom-select"
                      id="userType"
                      name="userType"
                      v-model="userType"
                      required
                    >
                      <option value="Admin">Admin</option>
                      <option value="Aluno">Aluno</option>
                      <option value="Professor">Professor</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </form>
              </b-modal>
            </div>
          </form>
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
                      <th scope="col">Bloqueado</th>
                      <th scope="col">Mudar tipo de Conta</th>
                      <th scope="col">Bloquear</th>
                      <th scope="col">Eliminar</th>
                    </tr>
                  </thead>
                  <tbody
                    id="usersTableBody"
                    v-for="user of filteredUsers"
                    :key="user.id"
                  >
                    <td scope="row">{{ user.id }}</td>
                    <td>{{ user.username }}</td>
                    <td>{{ user.userType }}</td>
                    <td>{{ user.blocked }}</td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-success"
                        @click="changeUserType(user.id)"
                        v-if="user.username != 'admin'"
                      >
                        Mudar
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-warning"
                        @click="blockUser(user.id)"
                        v-if="user.username != 'admin'"
                      >
                        Bloquear
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-danger"
                        @click="deleteUser(user.id)"
                        v-if="user.username != 'admin'"
                      >
                        Eliminar
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
      users: [],
      txtUserName: "",
      order: "A-Z",
      searchUserType: "Aluno",
      txtName: "",
      txtusername: "",
      txtEmail: "",
      txtPassword: "",
      txtPasswordRepeat: "",
      birthDate: "",
      userType: ""
    };
  },
  created() {
    this.$store.commit("SET_USERS", {
      users: JSON.parse(localStorage.getItem("users"))
    });
    this.users = this.$store.getters.getAllUser;
  },
  methods: {
    orderUsers() {
      if (this.order == "A-Z") {
        this.users = this.$store.getters.getOrderedUsersAZ;
        this.order = "Z-A";
      } else {
        this.users = this.$store.getters.getOrderedUsersZA;
        this.order = "A-Z";
      }
    },
    changeUserType(id) {
      for (const user of this.users) {
        if (user.id == id) {
          if (user.userType == "Aluno") {
            user.userType = "Professor";
            this.$store.commit("SET_USERS", { users: this.users });
            break;
          } else if (user.userType == "Professor") {
            user.userType = "Outro";
            this.$store.commit("SET_USERS", { users: this.users });
            break;
          } else if (user.userType == "Outro") {
            user.userType = "Admin";
            this.$store.commit("SET_USERS", { users: this.users });
            break;
          } else if (user.userType == "Admin") {
            user.userType = "Aluno";
            this.$store.commit("SET_USERS", { users: this.users });
            break;
          }
        }
      }
    },
    blockUser(id) {
      for (const user of this.users) {
        if (user.id == id) {
          if (user.blocked == false) {
            user.blocked = true;
            this.$store.commit("SET_USERS", { users: this.users });
            break;
          }
          if (user.blocked == true) {
            user.blocked = false;
            this.$store.commit("SET_USERS", { users: this.users });
            break;
          }
        }
      }
    },
    deleteUser(id) {
      for (const user of this.users) {
        if (user.id == id && confirm("Deseja eliminar este utilizador?")) {
          this.users = this.$store.getters.getAllUserBesidesDeleted(id);
          this.$store.commit("SET_USERS", { users: this.users });
        }
      }
    },
    addNewUser() {
      this.$store.commit("SET_USERS", {
        users: JSON.parse(localStorage.getItem("users"))
      });
      if (
        !this.$store.getters.getUserByInput(this.txtEmail) &&
        this.checkPasswords()
      ) {
        alert(this.$store.getters.getLastId);
        if (!this.$store.getters.getUserByInput(this.txtusername)) {
          this.$store.commit("NEW_USER", {
            id: this.$store.getters.getLastId,
            name: this.txtName,
            username: this.txtusername,
            email: this.txtEmail,
            password: this.txtPassword,
            birthDate: this.birthDate,
            userType: this.userType,
            blocked: false
          });
          alert("Conta criada com sucesso!");
        } else {
          alert(
            "Username indisponível! Já se encontra uma conta registada com este username"
          );
        }
      } else if (this.checkPasswords()) {
        alert("Já existe uma conta registada com o email introduzido!");
      }
    },
    checkPasswords() {
      if (this.txtPassword == this.txtPasswordRepeat) {
        return true;
      } else {
        alert("Palavras passe não coincidem!");
        return false;
      }
    }
  },
  computed: {
    filteredUsers() {
      return this.$store.getters.getFilteredUsers(this.txtUserName);
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
