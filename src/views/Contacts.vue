<template>
  <div class="home">
    <NavBar />
    <div class="position-relative align-items-center justify-content-center">
      <div class="row">
        <div class="col-7">
          <div class="google-map" id="myMap"></div>
        </div>
        <div class="col-5 d-flex align-items-center text-left">
          <div class="row">
            <div class="col-2 position-relative">
              <img src="../assets/contacts.png" />
            </div>
            <div class="col-10 position-relative pt-3">
              <p class="text-nowrap"><b>E-mail:</b> gpse@esht.ipp.pt</p>
              <p class="text-nowrap pt-4 pb-1">
                <b>Telefone:</b> +351 252 291 700
              </p>
              <p class="text-nowrap pt-4">
                <b>Direções:</b> Rua D. Sancho I,<br />nº 981 4480-876 Vila do
                Conde<br />
                Portugal
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "Maps",
  components: {
    Footer,
    NavBar
  },
  data: function() {
    return {
      map: "",
      center: { lat: 41.3661502, lng: -8.7402198 }
    };
  },
  mounted() {
    this.map = new google.maps.Map(document.querySelector("#myMap"), {
      center: this.center,
      zoom: 15,
      disableDefaultUI: true
    });
    this.map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
    const marker = new google.maps.Marker({
      position: this.center
    });
    marker.setMap(this.map);
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Muli&display=swap");

p {
  font-family: "Muli", sans-serif;
  font-size: 12pt;
}

.home {
  overflow: hidden;
}

.google-map {
  width: 100%;
  height: 85vh;
  margin: 0 auto;
}
</style>
