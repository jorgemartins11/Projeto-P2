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
            <form @submit.prevent="loginVerifications()">
              <div class="form-group pt-5">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email ou Username"
                  required
                  v-model="usernameOrEmail"
                />
              </div>
              <div class="form-group pt-1">
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Palavra-Passe"
                  required
                  v-model="password"
                />
              </div>
              <button
                type="submit"
                id="entrar"
                class="btn btn-primary btn-lg mt-4 mb-1"
              >
                Entrar
              </button>
              <small class="form-text text-muted"
                >Recuperar Palavra-Passe...</small
              >
              <div>
                <button class="btn btn-disabled mt-4 mb-5 btn-lg mr-1" disabled>
                  Login
                </button>
                <router-link to="/register">
                  <button
                    id="register"
                    class="btn btn-primary mt-4 mb-5 btn-lg ml-1"
                  >
                    Registar
                  </button>
                </router-link>
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
//import { log } from 'util';
export default {
  data: function() {
    return {
      usernameOrEmail: "",
      password: "",
      loggedUser: {}
    };
  },
  created() {
    if (JSON.parse(localStorage.getItem("users"))) {
      this.$store.commit("SET_USERS", {
        users: JSON.parse(localStorage.getItem("users"))
      });
    } else {
      this.$store.commit("SET_USERS", {
        users: [
          {
            id: 1,
            name: "Admin",
            username: "admin",
            email: "admin@admin",
            password: "admin",
            birthDate: "",
            userType: "Admin",
            blocked: false
          },
          {
            id: 2,
            name: "Jorge Martins",
            username: "jojo",
            email: "9180266@esmad.ipp.pt",
            password: "123",
            birthDate: "2000-05-11",
            userType: "Aluno",
            blocked: false
          },
          {
            id: 3,
            name: "André Lopes",
            username: "andrelopes",
            email: "9180544@esmad.ipp.pt",
            password: "123",
            birthDate: "2000-08-05",
            userType: "Aluno",
            blocked: false
          },
          {
            id: 4,
            name: "Gonçalo Moreira",
            username: "goncalomoreira",
            email: "9180216@esmad.ipp.pt",
            password: "123",
            birthDate: "",
            userType: "Aluno",
            blocked: false
          }
        ]
      });
    }
    if (JSON.parse(localStorage.getItem("products"))) {
      this.$store.commit("SET_PRODUCTS", {
        products: JSON.parse(localStorage.getItem("products"))
      });
    } else {
      this.$store.commit("SET_PRODUCTS", {
        products: [
          {
            id: 1,
            name: "Lombo de Porco",
            category: "Carne Vermelha",
            quantity: 7000,
            minQuantity: 1000,
            quantType: "g"
          },
          {
            id: 2,
            name: "Vinho Branco",
            category: "Bebida",
            quantity: 3000,
            minQuantity: 1000,
            quantType: "ml"
          },
          {
            id: 3,
            name: "Azeite",
            category: "Condimento",
            quantity: 2000,
            minQuantity: 500,
            quantType: "ml"
          },
          {
            id: 4,
            name: "Dentes de Alho",
            category: "Condimento",
            quantity: 50,
            minQuantity: 10,
            quantType: "unid."
          },
          {
            id: 5,
            name: "Folhas de Louro",
            category: "Condimento",
            quantity: 50,
            minQuantity: 10,
            quantType: "unid."
          },
          {
            id: 6,
            name: "Massa de Pimentão",
            category: "Condimento",
            quantity: 5000,
            minQuantity: 1000,
            quantType: "g"
          },
          {
            id: 7,
            name: "Sal",
            category: "Condimento",
            quantity: 5000,
            minQuantity: 1000,
            quantType: "g"
          },
          {
            id: 8,
            name: "Banha de Porco",
            category: "Condimento",
            quantity: 5000,
            minQuantity: 1000,
            quantType: "g"
          }
        ]
      });
    }
    if (JSON.parse(localStorage.getItem("dishes"))) {
      this.$store.commit("SET_DISHES", {
        dishes: JSON.parse(localStorage.getItem("dishes"))
      });
    } else {
      this.$store.commit("SET_DISHES", {
        dishes: [
          {
            id: 1,
            name: "Lombo de Porco Assado",
            category: "Carne",
            nPeople: 4,
            image:
              "https://portalrbv.com.br/cacanjure/wp-content/uploads/sites/2/2019/12/9166725s1280h960.jpg",
            ingredients: [1, 2, 3, 4, 5, 6, 7, 8]
          },
          {
            id: 2,
            name: "Salmão Assado",
            category: "Peixe",
            nPeople: 4,
            image:
              "https://www.receitas-sem-fronteiras.com/media/filesalmao_crop.jpg/rh/salmao-assado.jpg",
            ingredients: [1, 2, 3, 4, 5, 6, 7, 8]
          },
          {
            id: 3,
            name: "Couscous",
            category: "Vegetariano",
            nPeople: 4,
            image:
              "https://www.jessicagavin.com/wp-content/uploads/2019/03/mediterranean-couscous-salad-2-1200.jpg",
            ingredients: [1, 2, 3, 4, 5, 6, 7, 8]
          }
        ]
      });
    }
  },
  methods: {
    loginVerifications() {
      if (this.$store.getters.getUserByInput(this.usernameOrEmail)) {
        if (
          !this.$store.getters.getUserToLogin(
            this.usernameOrEmail,
            this.password
          )
        ) {
          alert("Email/Username ou password errada!");
        } else {
          this.loggedUser = this.$store.getters.getUserByInput(
            this.usernameOrEmail
          );
          this.$store.commit("SET_LOGGED_USER", this.loggedUser);

          if (this.loggedUser.blocked == false) {
            if (this.loggedUser.userType === "Admin") {
              this.$router.push({ name: "HomeAdmin" });
            } else {
              alert("Login Efetuado com sucesso!");
              this.emptyForm();
              this.$router.push({ name: "homeLoged" });
            }
          } else {
            alert("Utilizador Bloqueado!");
          }
        }
      } else {
        alert("Credênciais inválidas!");
      }
    },
    emptyForm() {
      this.usernameOrEmail = "";
      this.password = "";
      this.loggedUser = {};
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
  height: 100%;
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
  filter: brightness(75%);
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

input::placeholder {
  color: white;
}

input:active {
  background-color: #707070;
}

input:hover {
  color: white;
}

input:focus {
  background-color: #707070;
  color: white;
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

#register:hover {
  border: 1px solid white !important;
  background-color: #007bff;
}

#entrar:hover {
  border: 1px solid white !important;
  background-color: #007bff;
}
</style>
