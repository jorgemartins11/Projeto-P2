<template>
  <div class="home">
    <AdminNavBar />
      <div class="row1">
        <div class="col-12 text-center users pb-5 pt-5">
          <img src="../../assets/stock.png" class="img-fluid mb-4 mt-5" />
          <h1 class="display-5">Gestão de Stock</h1>
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
div{
  overflow-x: hidden;
}

.img-fluid{
    height: 150px;
}

.row1{
    background-color: #2980B9;
    height: 350px;
    overflow-y: hidden;
    color: white;
}
</style>