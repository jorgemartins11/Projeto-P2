<template>
  <div class="home">
    <AdminNavBar />
    <div class="imgContainer position-relative d-flex align-items-center justify-content-center">

    </div>
    <AdminFooter />
  </div>
</template>

<script>

import AdminFooter from "@/components/AdminFooter.vue"
import AdminNavBar from "@/components/AdminNavBar.vue"

export default {
  name: "about",
  components:{
    AdminFooter,
    AdminNavBar
  }
}
</script>

<style scoped>
p{
  color: black;
}
</style>