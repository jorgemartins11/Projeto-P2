<template>
  <div class="home">
    <NavBar />
    <div class="imgContainer position-relative d-flex align-items-center justify-content-center">
      <img src="../../assets/polvo.jpg" id="bg" alt class="img-fluid" />
      <div class="barra d-flex justify-content-center">
        <div class="row">
          <div class="col-12">
            <form>
              <router-link to="/menu">
                <img src="../../assets/arrow.png" id="arrow" alt class="img-fluid" />
              </router-link>
              <p id="Chosing4" class="p">Observações</p>
              <textarea type="text" id="observacao" name="fname" class="textbox mb-4" maxlength="1000" 
              placeholder="Caso queira avisar de alguma intolerância ou pretenda escrever qualquer indicação adicional que gostaria de acrescentar ao seu pedido, sinta-se livre de nos avisar através deste campo de observações..."></textarea><br>
              <button type="submit" id="submitReservation" class="btn btn-primary btn-lg mr-2">Confirmar Reserva</button>
              <button type="submit" id="cancelReservation" class="btn btn-danger btn-lg ml-2">Cancelar Reserva</button>
            </form>
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
  name: "about",
  components: {
    Footer,
    NavBar
  }
};
</script>

<style scoped>
#Chosing4 {
  margin-top: 10px;
  font-size: 30px;
  color: #2c3e50;
}

#info{
  font-size: 18px;
  color: #2c3e50;
}

#arrow{
    margin-top: 120px;
}

.textbox{
  width: 600px;
  height: 400px;
  resize: none;
  border: 3px solid #2c3e50;
  color:#2c3e50;
}

.textbox::placeholder{
  color: #2c3e50;
  font-size: 20px;
}

.btn {
  background-color: #2c3e50;
  border-color: black;
  opacity: 1;
}

#submitReservation:hover {
  border: 3px solid black !important;
  background-color: #007bff;
}

#cancelReservation:hover {
  border: 3px solid black !important;
  background-color: #dc3545;
}

.imgContainer {
  width: 100%;
  height: 100vh;
}

.barra {
  background-color: white;
  opacity: 0.8;
  height: 100%;
  width: 70rem;
  top: 0;
  position: absolute;
}

img#bg {
  position: fixed;
  height: 100%;
  width: 100%;
  filter: brightness(75%);
}

img#arrow {
  height: 60px;
  width: 60px;
  margin-bottom: auto;
  margin-top: 100px;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}
</style>