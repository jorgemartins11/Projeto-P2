<template>
  <div class="home">
    <div
      class="imgContainer position-relative d-flex align-items-center justify-content-center"
    >
      <img src="../assets/background.jpg" id="bg" alt class="img-fluid" />
      <div class="barra d-flex justify-content-center">
        <div class="row">
          <div class="col-12">
            <router-link to="/">
              <img
                src="../assets/logo.png"
                id="logo"
                alt
                class="img-fluid pt-5 pb-5"
              />
            </router-link>
            <hr />
            <form @submit.prevent="registerVerifications()">
              <div class="form-group pt-5">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputName"
                  name="name"
                  placeholder="Nome Próprio"
                  required
                  v-model="name"
                />
              </div>
              <div class="form-group pt-1">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputUsername"
                  name="username"
                  placeholder="Nome de Utilizador"
                  required
                  v-model="username"
                />
              </div>
              <div class="form-group pt-1">
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  name="email"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  required
                  v-model="email"
                />
              </div>
              <div class="form-group pt-1">
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  name="pwd1"
                  placeholder="Palavra-Passe"
                  required
                  v-model="password"
                />
              </div>
              <div class="form-group pt-1">
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword2"
                  name="pwd2"
                  placeholder="Repetir Palavra-Passe"
                  required
                  v-model="repeatedPassword"
                />
              </div>
              <div class="form-group pt-1">
                <input
                  class="form-control"
                  id="exampleInputBirthDate"
                  name="birthDate"
                  placeholder="Data de Nascimento"
                  onfocus="(this.type='date')"
                  required
                  v-model="birthDate"
                />
              </div>
              <div class="form-group pt-1">
                <select
                  class="browser-default custom-select"
                  id="exampleInputUserType"
                  name="userType"
                  required
                  v-model="userType"
                >
                  <option value select disabled>Tipo de Utilizador</option>
                  <option value="aluno">Aluno</option>
                  <option value="docente">Docente</option>
                  <option value="funcionario">Funcionário</option>
                </select>
              </div>
              <button id="criarConta" class="btn btn-primary btn-lg mt-4 mb-1">
                Criar Conta
              </button>
              <div>
                <router-link to="/login">
                  <button
                    id="login"
                    class="btn btn-primary btn-lg mt-4 mb-5 mr-1"
                  >
                    Login
                  </button>
                </router-link>
                <button
                  id="disabled"
                  class="btn btn-disabled btn-lg mt-4 mb-5 ml-1"
                  disabled
                >
                  Registar
                </button>
              </div>
            </form>
            <hr />
            <div class="eshtInfo pt-5">
              <img
                src="../assets/ipplogo.png"
                id="logo"
                alt
                class="img-fluid mt-5 mb-4"
              />
              <small class="form-text mt-3"
                >Escola Superior de Hotelaria e Turismo</small
              >
              <small class="form-text">Rua D. Sancho I, n.º 981</small>
              <small class="form-text">4480-876 Vila do Conde</small>
              <small class="form-text mb-3">Portugal</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      users: [],
      name: "",
      username: "",
      email: "",
      password: "",
      repeatedPassword: "",
      birthDate: "",
      userType: "",
      photo: "",
      blocked: false
    };
  },
  created() {
    this.users = this.$store.state.users;
  },
  methods: {
    registerVerifications() {
      if (
        !this.$store.getters.getUserByInput(this.email) &&
        this.checkPasswords()
      ) {
        if (!this.$store.getters.getUserByInput(this.username)) {
          this.$store.commit("NEW_USER", {
            id: this.$store.getters.getLastId,
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password,
            birthDate: this.birthDate,
            userType: this.userType,
            photo: this.photo,
            blocked: this.blocked
          });
          this.emptyForm();
          alert("Conta criada com sucesso!");
          this.$router.push({
            name: "login"
          });
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
      if (this.password == this.repeatedPassword) {
        return true;
      } else {
        alert("Palavras passe não coincidem!");
        return false;
      }
    },
    emptyForm() {
      this.name = "";
      this.username = "";
      this.email = "";
      this.password = "";
      this.repeatedPassword = "";
      this.birthDate = "";
      this.userType = "";
    }
  }
};
</script>

<style scoped>
.imgContainer {
  width: 100%;
  height: 100vh;
}

.barra {
  background-color: #2c3e50;
  height: auto;
  width: 30rem;
  opacity: 0.75;
  top: 0;
  position: absolute;
}

img#logo {
  height: auto;
  width: 50%;
}

img#bg {
  position: fixed;
  height: 100%;
  width: 100%;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

hr {
  height: 1px;
  width: 20rem;
  background-color: white;
}

small {
  font-family: "Muli", sans-serif;
  font-size: 0.9rem;
  font-weight: bold;
  color: white;
  opacity: 1;
}

.form-control {
  background-color: #707070;
  border-color: #707070;
  color: white;
}

.browser-default {
  background-color: #707070;
  border-color: #707070;
  color: white;
}

input::placeholder {
  color: white;
}

input:active {
  background-color: #707070;
}

input:focus {
  background-color: #707070;
  border: 1px solid black !important;
  box-shadow: unset;
}

.btn {
  background-color: #707070;
  border-color: #707070;
}

.btn-disabled {
  border-color: white;
  color: #707070;
  background-color: white;
}

#login:hover {
  border: 1px solid white !important;
  background-color: #007bff;
}

#criarConta:hover {
  border: 1px solid white !important;
  background-color: #007bff;
}
</style>
