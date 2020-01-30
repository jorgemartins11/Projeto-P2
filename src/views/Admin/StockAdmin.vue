<template>
  <div class="home">
    <AdminNavBar />
    <div class="row divBlue">
      <div class="col-12 text-center pt-5">
        <img src="../../assets/stock.png" class="img-fluid pb-4 pt-5 mt-1" />
        <h1 class="title pb-1">Stock</h1>
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
                  placeholder="Nome do Produto..."
                  maxlength="20"
                  v-model="txtProductName"
                />
              </div>
            </div>
            <div
              class="col-4 position-relative d-flex align-items-center justify-content-center"
            >
              <b-button class="resizeElement" v-b-modal.modal-1
                >Adiconar Produto</b-button
              >
              <b-modal
                id="modal-1"
                ref="modal-1"
                title="Adicionar Utilizador"
                hide-footer
              >
                <form @submit.prevent="addNewProduct()">
                  <div class="form-group">
                    <label for="txtName">Nome Produto:</label>
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
                      <option value="Carne Branca">Carne Branca</option>
                      <option value="Carne Vermelha">Carne Vermelha</option>
                      <option value="Vegetal">Vegetal</option>
                      <option value="Condimento">Condimento</option>
                      <option value="Especiaria">Especiaria</option>
                      <option value="Doce">Doce</option>
                      <option value="Bebida">Bebida</option>
                      <option value="Aperitivo">Aperitivo</option>
                      <option value="Cereal">Cereal</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="quantity">Quantidade:</label>
                    <input
                      type="number"
                      class="form-control"
                      id="quantity"
                      v-model="quantity"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="minQuantity">Quantidade Mínima:</label>
                    <input
                      type="number"
                      class="form-control"
                      id="minQuantity"
                      v-model="minQuantity"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="sltQuantType">Tipo de Quantidade:</label>
                    <select
                      class="browser-default custom-select"
                      id="sltQuantType"
                      name="sltQuantType"
                      v-model="sltQuantType"
                      required
                    >
                      <option value="g">g</option>
                      <option value="ml">ml</option>
                      <option value="unid.">unid.</option>
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
                      <th scope="col">Nome do Produto</th>
                      <th scope="col">Categoria</th>
                      <th scope="col">Quantidade Atual (g ou ml)</th>
                      <th scope="col">Stock Mínimo</th>
                      <th scope="col">Incrementar Quantidade</th>
                      <th scope="col">Decrementar Quantidade</th>
                    </tr>
                  </thead>
                  <tbody
                    id="usersTableBody"
                    v-for="product of filteredProducts"
                    :key="product.id"
                  >
                    <td scope="row">{{ product.id }}</td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.category }}</td>
                    <td>{{ product.quantity }} {{ product.quantType }}</td>
                    <td>{{ product.minQuantity }} {{ product.quantType }}</td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-success"
                        @click="incrementProductStock(product.id)"
                      >
                        +
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-danger"
                        @click="decrementProductStock(product.id)"
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
      products: [],
      order: "A-Z",
      txtProductName: "",
      txtName: "",
      sltCategory: "",
      quantity: 0,
      minQuantity: 0,
      sltQuantType: ""
    };
  },
  created() {
    this.$store.commit("SET_PRODUCTS", {
      products: JSON.parse(localStorage.getItem("products"))
    });
    this.products = this.$store.getters.getAllProducts;
  },
  methods: {
    orderProducts() {
      if (this.order == "A-Z") {
        this.products = this.$store.getters.getOrderedProductsAZ;
        this.order = "Z-A";
      } else {
        this.products = this.$store.getters.getOrderedProductsZA;
        this.order = "A-Z";
      }
    },
    addNewProduct() {
      if (!this.$store.getters.getProductByInput(this.txtName)) {
        this.$store.commit("NEW_PRODUCT", {
          id: this.$store.getters.getLastProductId,
          name: this.txtName,
          category: this.sltCategory,
          quantity: parseInt(this.quantity),
          minQuantity: parseInt(this.minQuantity)
        });
        this.$refs["modal-1"].hide();
      }
    },
    incrementProductStock(id) {
      for (const product of this.products) {
        if (product.id == id) {
          product.quantity += 1;
        }
      }
    },
    decrementProductStock(id) {
      for (const product of this.products) {
        if (product.id == id) {
          product.quantity -= 1;
        }
      }
    }
  },
  computed: {
    filteredProducts() {
      return this.$store.getters.getFilteredProducts(this.txtProductName);
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
