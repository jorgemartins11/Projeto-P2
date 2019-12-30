<template>
  <div class="home">
    <NavBar />
    <div class="imgContainer position-relative d-flex align-items-center justify-content-center">
      <img src="../../assets/polvo.jpg" id="bg" alt class="img-fluid" />
      <div class="barra d-flex justify-content-center">
        <div class="row">
          <div class="col-12">
            <p id="Chosing" class="p">Escolha a Data da Reserva</p>
            <!-- DATE PICKER -->
            <div id="date-picker" class="date-picker mt-5">
              <div>
                <p class="header mt-3">MÊS DE OUTUBRO</p>
                <div id="date-picker-header">
                  <div id="date-picker-dow"></div>
                  <div id="date-picker-month"></div>
                  <div id="date-picker-day"></div>
                  <div id="date-picker-year"></div>
                </div>
                <div id="date-picker-cal-wrapper">
                  <table id="date-picker-cal" class="table borderless">
                    <thead>
                      <tr class="header">
                        <td>Segunda</td>
                        <td>Terça</td>
                        <td>Quarta</td>
                        <td>Quinta</td>
                        <td>Sexta</td>
                        <td>Sábado</td>
                        <td>Domingo</td>
                      </tr>
                    </thead>
                    <tbody class="dayPicker">
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                        <td>11</td>
                        <td>12</td>
                        <td>13</td>
                        <td>14</td>
                      </tr>
                      <tr>
                        <td>15</td>
                        <td>16</td>
                        <td>17</td>
                        <td>18</td>
                        <td>19</td>
                        <td>20</td>
                        <td>21</td>
                      </tr>
                      <tr>
                        <td>22</td>
                        <td>23</td>
                        <td>24</td>
                        <td>25</td>
                        <td>26</td>
                        <td>27</td>
                        <td>28</td>
                      </tr>
                      <tr>
                        <td>29</td>
                        <td>30</td>
                        <td>31</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <!-- DATE PICKER -->
            <router-link to="/table">
              <img src="../../assets/arrow2.png" id="arrow" alt class="img-fluid" />
            </router-link>
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
#Chosing {
  margin-top: 120px;
  font-size: 30px;
  color: #2c3e50;
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

#date-picker {
  border: 2px solid #2c3e50;
}

.header {
  color: #2c3e50;
  font-size: 20px;
  font-weight: bolder;
}

.dayPicker {
  color: #2c3e50;
  font-weight: bolder;
  font-size: 18px;
}
</style>