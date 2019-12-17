<template>
  <div class="home">
    <NavBar />
    <div class="imgContainer position-relative d-flex align-items-center justify-content-center">

    </div>
    <Footer />
  </div>
</template>

<script>

import Footer from "@/components/Footer.vue"
import NavBar from "@/components/NavBar.vue"

export default {
  name: "about",
  components:{
    Footer,
    NavBar
  }
}
</script>

<style scoped>
p{
  color: black;
}
</style>