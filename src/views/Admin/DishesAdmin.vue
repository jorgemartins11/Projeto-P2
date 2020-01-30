<template>
  <div class="home">
    <AdminNavBar />
    <div class="row divBlue">
      <div class="col-12 text-center pt-5">
        <img src="../../assets/menus.png" class="img-fluid pb-4 pt-5 mt-1" />
        <h1 class="title pb-1">Prato</h1>
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
                @click="orderProducts()"
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
                  placeholder="Nome do Prato..."
                  maxlength="20"
                  v-model="txtDishName"
                />
              </div>
            </div>
            <div
              class="col-4 position-relative d-flex align-items-center justify-content-center"
            >
              <b-button class="resizeElement" v-b-modal.modal-1
                >Adiconar Prato</b-button
              >
              <b-modal
                id="modal-1"
                ref="modal-1"
                title="Adicionar Utilizador"
                hide-footer
              >
                <form @submit.prevent="addNewDish()">
                  <div class="form-group">
                    <label for="txtName">Nome Prato:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="txtName"
                      v-model="txtName"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="sltCategory">Categoria:</label>
                    <select
                      class="browser-default custom-select"
                      id="sltCategory"
                      name="sltCategory"
                      v-model="sltCategory"
                      required
                    >
                      <option value="Carne">Carne</option>
                      <option value="Peixe">Peixe</option>
                      <option value="Vegetariano">Vegetariano</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="nPeople">Prato para "X" pessoas:</label>
                    <input
                      type="number"
                      class="form-control"
                      id="nPeople"
                      v-model="nPeople"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="img">Imagem:</label>
                    <input
                      type="url"
                      class="form-control"
                      id="img"
                      v-model="img"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="sltIngredients">Ingredients:</label>
                    <select
                      class="browser-default custom-select"
                      id="sltIngredients"
                      name="sltIngredients"
                      v-model="sltIngredients"
                      multiple
                      required
                    >
                      <option v-for="product in products" :key="product.id">{{
                        product.name
                      }}</option>
                    </select>
                    <p>
                      Para selecionar vários valores, pressione ctrl quando
                      seleciona
                    </p>
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
                      <th scope="col">Nome</th>
                      <th scope="col">Categoria</th>
                      <th scope="col">Para "X" Pessoas</th>
                      <th scope="col">Ingredientes</th>
                      <th scope="col">Eliminar</th>
                    </tr>
                  </thead>
                  <tbody
                    id="usersTableBody"
                    v-for="dish of filteredDishes"
                    :key="dish.id"
                  >
                    <td scope="row">{{ dish.id }}</td>
                    <td>{{ dish.name }}</td>
                    <td>{{ dish.category }}</td>
                    <td>{{ dish.nPeople }}</td>
                    <td>{{ dishIngredients(dish.id) }}</td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-danger"
                        @click="deleteDish(dish.id)"
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
      products: [],
      dishes: [],
      order: "A-Z",
      txtDishName: "",
      txtName: "",
      sltCategory: "",
      nPeople: 0,
      img: "",
      sltIngredients: [],
      sltIngredientsId: []
    };
  },
  created() {
    this.$store.commit("SET_PRODUCTS", {
      products: JSON.parse(localStorage.getItem("products"))
    });
    this.products = this.$store.getters.getAllProducts;
    this.$store.commit("SET_DISHES", {
      dishes: JSON.parse(localStorage.getItem("dishes"))
    });
    this.dishes = this.$store.getters.getAllDishes;
  },
  methods: {
    orderProducts() {
      if (this.order == "A-Z") {
        this.dishes = this.$store.getters.getOrderedDishesAZ;
        this.order = "Z-A";
      } else {
        this.dishes = this.$store.getters.getOrderedDishesZA;
        this.order = "A-Z";
      }
    },
    addNewDish() {
      if (!this.$store.getters.getDishByInput(this.txtName)) {
        this.$store.commit("NEW_DISH", {
          id: this.$store.getters.getLastDishId,
          name: this.txtName,
          category: this.sltCategory,
          nPeople: parseInt(this.nPeople),
          image: this.img,
          ingredients: this.sltIngredientsToId()
        });
        this.$refs["modal-1"].hide();
      }
    },
    dishIngredients(id) {
      for (const dish of this.dishes) {
        if (dish.id == id) {
          let ingred = "";
          for (const product of this.products) {
            if (dish.ingredients.includes(product.id)) {
              ingred += `${product.name}; `;
            }
          }
          return ingred;
        }
      }
    },
    deleteDish(id) {
      for (const dish of this.dishes) {
        if (dish.id == id && confirm("Deseja eliminar este prato?")) {
          this.dishes = this.$store.getters.getAllDishesBesidesDeleted(id);
          this.$store.commit("SET_DISHES", { dishes: this.dishes });
        }
      }
    },
    sltIngredientsToId() {
      for (const product of this.products) {
        if (this.sltIngredients.includes(product.name)) {
          this.sltIngredientsId.push(product.id);
        }
      }
      return this.sltIngredientsId;
    }
  },
  computed: {
    filteredDishes() {
      return this.$store.getters.getFilteredDishes(this.txtDishName);
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
