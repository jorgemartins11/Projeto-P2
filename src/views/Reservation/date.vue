<template>
  <div class="home">
    <NavBar />
    <div
      class="container position-relative d-flex align-items-center justify-content-center"
    >
      <div class="d-flex justify-content-center">
        <div class="row">
          <div class="col-12">
            <p id="chosing">Escolha a Data da Reserva</p>
            <!-- <input type="date" id="reservationDate" v-model="reservationDate" /> -->
            <div class="col-12 pt-5">
              <div class="month">
                <ul>
                  <li class="prev">&#10094;</li>
                  <li class="next">&#10095;</li>
                  <li id="month">
                    August <br /><span style="font-size:18px" id="year"
                      >2017</span
                    >
                  </li>
                </ul>
              </div>

              <ul class="weekdays">
                <li>Mo</li>
                <li>Tu</li>
                <li>We</li>
                <li>Th</li>
                <li>Fr</li>
                <li>Sa</li>
                <li>Su</li>
              </ul>

              <ul class="days">
                <li id="1" @click="selectDay(1)"><span class="active">1</span></li>
                <li id="2" @click="selectDay(2)">2</li>
                <li id="3" @click="selectDay(3)">3</li>
                <li id="4" @click="selectDay(4)">4</li>
                <li id="5" @click="selectDay(5)">5</li>
                <li id="6" @click="selectDay(6)">6</li>
                <li id="7" @click="selectDay(7)">7</li>
                <li id="8" @click="selectDay(8)">8</li>
                <li id="9" @click="selectDay(9)">9</li>
                <li id="10" @click="selectDay(10)">10</li>
                <li id="11" @click="selectDay(11)">11</li>
                <li id="12" @click="selectDay(12)">12</li>
                <li id="13" @click="selectDay(13)">13</li>
                <li id="14" @click="selectDay(14)">14</li>
                <li id="15" @click="selectDay(15)">15</li>
                <li id="16" @click="selectDay(16)">16</li>
                <li id="17" @click="selectDay(17)">17</li>
                <li id="18" @click="selectDay(18)">18</li>
                <li id="19" @click="selectDay(19)">19</li>
                <li id="20" @click="selectDay(20)">20</li>
                <li id="21" @click="selectDay(21)">21</li>
                <li id="22" @click="selectDay(22)">22</li>
                <li id="23" @click="selectDay(23)">23</li>
                <li id="24" @click="selectDay(24)">24</li>
                <li id="25" @click="selectDay(25)">25</li>
                <li id="26" @click="selectDay(26)">26</li>
                <li id="27" @click="selectDay(27)">27</li>
                <li id="28" @click="selectDay(28)">28</li>
                <li id="29" @click="selectDay(29)">29</li>
                <li id="30" @click="selectDay(30)">30</li>
                <li id="31" @click="selectDay(31)">31</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <router-link to="/table">
              <img
                src="../../assets/arrowDown.png"
                id="arrow"
                alt
                class="img-fluid"
                @click="setReservationDate()"
              />
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
  },
  data() {
    return {
      selectedDay: 0
    };
  },
  methods: {
    setReservationDate() {
      this.$store.commit("SET_RESERVATION_DATE", {
        date: this.selectedDay + " " + this.getMonthAndYear
      });
    },
    selectDay(id) {
      // this.selectedDay = id;
      if (this.selectedDay == 0) {
        this.selectedDay = id;
        document.getElementById(
          id
        ).innerHTML = `<span class="active">${id}</span>`;
        alert(document.getElementById(id).innerHTML);
      } else {
        document.getElementById(this.selectedDay).innerHTML = this.selectedDay;
        alert(document.getElementById(this.selectedDay).innerHTML);
        document.getElementById(
          id
        ).innerHTML = `<span class="active">${id}</span>`;
        alert(document.getElementById(id).innerHTML);
        this.selectedDay = id;
      }
    }
  },
  computed: {
    getMonthAndYear() {
      return (
        document.getElementById("month").innerHTML.split(" ")[1] +
        " " +
        document.getElementById("year").innerHTML
      );
    }
  }
};
</script>

<style scoped>
#chosing {
  margin-top: 120px;
  font-size: 30px;
  color: #2c3e50;
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
  color: white;
  font-size: 20px;
  font-weight: bolder;
}

.dayPicker {
  color: white;
  font-weight: bolder;
  font-size: 18px;
}

#date-picker {
  background-color: #2c3e50;
}

ul {
  list-style-type: none;
}
body {
  font-family: Verdana, sans-serif;
}

/* Month header */
.month {
  padding: 70px 25px;
  width: 100%;
  background: #2c3e50;
  text-align: center;
}

/* Month list */
.month ul {
  margin: 0;
  padding: 0;
}

.month ul li {
  color: white;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 3px;
}

/* Previous button inside month header */
.month .prev {
  float: left;
  padding-top: 10px;
}

/* Next button */
.month .next {
  float: right;
  padding-top: 10px;
}

/* Weekdays (Mon-Sun) */
.weekdays {
  margin: 0;
  padding: 10px 0;
  background-color: #ddd;
}

.weekdays li {
  display: inline-block;
  width: 13.6%;
  color: #666;
  text-align: center;
}

/* Days (1-31) */
.days {
  padding: 10px 0;
  background: #eee;
  margin: 0;
}

.days li {
  list-style-type: none;
  display: inline-block;
  width: 13.6%;
  text-align: center;
  margin-bottom: 5px;
  font-size: 12px;
  color: #777;
}

/* Highlight the "current" day */
.days li .active {
  padding: 5px;
  background: #2c3e50;
  color: white !important;
}
</style>
