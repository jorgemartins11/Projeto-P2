<template>
  <div class="home">
    <AdminNavBar />
    
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

.container-fluid{
  background-color: #2980b9;
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
    background-color: #707070;
    color: white;
}

.text{
    max-width: 200px;
    resize: none;
    background-color: #2c3e50;
    max-lines: 1;
    color: white;
    border: 2px solid  #707070;
}

.text::placeholder{
    color: white;
}

.filter{
    color: #2c3e50;
    font-size: 20px;
}
</style>