<template>
  <div class="home position-relative">
    <NavBar />
    <div class="container d-flex align-items-center justify-content-center">
      <div class="row">
        <div class="col-12 pt-5">
          <p id="chosing">Escolha a Data da Reserva</p>
          <!-- <input type="date" id="reservationDate" v-model="reservationDate" /> -->
          <div class="col-12 pt-3">
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
              <li @click="selectDayOnClick(1)">1</li>
              <li @click="selectDayOnClick(2)">2</li>
              <li @click="selectDayOnClick(3)">3</li>
              <li @click="selectDayOnClick(4)">4</li>
              <li @click="selectDayOnClick(5)">5</li>
              <li @click="selectDayOnClick(6)">6</li>
              <li @click="selectDayOnClick(7)">7</li>
              <li @click="selectDayOnClick(8)">8</li>
              <li @click="selectDayOnClick(9)">9</li>
              <li @click="selectDayOnClick(10)">10</li>
              <li @click="selectDayOnClick(11)">11</li>
              <li @click="selectDayOnClick(12)">12</li>
              <li @click="selectDayOnClick(13)">13</li>
              <li @click="selectDayOnClick(14)">14</li>
              <li @click="selectDayOnClick(15)">15</li>
              <li @click="selectDayOnClick(16)">16</li>
              <li @click="selectDayOnClick(17)">17</li>
              <li @click="selectDayOnClick(18)">18</li>
              <li @click="selectDayOnClick(19)">19</li>
              <li @click="selectDayOnClick(20)">20</li>
              <li @click="selectDayOnClick(21)">21</li>
              <li @click="selectDayOnClick(22)">22</li>
              <li @click="selectDayOnClick(23)">23</li>
              <li @click="selectDayOnClick(24)">24</li>
              <li @click="selectDayOnClick(25)">25</li>
              <li @click="selectDayOnClick(26)">26</li>
              <li @click="selectDayOnClick(27)">27</li>
              <li @click="selectDayOnClick(28)">28</li>
              <li @click="selectDayOnClick(29)">29</li>
              <li @click="selectDayOnClick(30)">30</li>
              <li @click="selectDayOnClick(31)">31</li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div class="position-relative arrowDown pt-5 mt-5">
            <router-link to="/table" class="text-center">
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
      selectedDay: 0,
      calendar: ""
    };
  },
  created() {
    this.renderCalendar();
  },
  methods: {
    setReservationDate() {
      this.$store.commit("SET_RESERVATION_DATE", {
        date: this.selectedDay + " " + this.getMonthAndYear
      });
    },
    renderCalendar() {
      if (this.selectedDay == 0) {
        for (let i = 0; i < 35; i++) {
          if (i < 31) {
            this.calendar += `<li style="list-style-type: none;
              display: inline-block;
              width: 13.6%; text-align: center;
              margin-bottom: 5px; font-size: 12px;
              color: #777;
              cursor: pointer;
              font-family: "Muli", sans-serif;"
              id="${i + 1}" @click="selectDayOnClick(${i + 1})">${i + 1}</li>`;
          } else {
            this.calendar += `<li style="list-style-type: none;
              display: inline-block;
              width: 13.6%;
              text-align: center;
              margin-bottom: 5px;
              font-size: 12px;
              color: #777;"></li>`;
          }
        }
      }
    },
    selectDayOnClick(id) {
      this.selectedDay = id;
      alert(id);
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
@import url("https://fonts.googleapis.com/css?family=Muli&display=swap");

#chosing {
  font-family: "Muli", sans-serif;
  font-size: 2rem;
  font-weight: bold;
  color: #2c3e50;
}

.arrowDown {
  top: -10%;
  z-index: 999;
}

img#arrow {
  height: 30px;
  width: 30px;
}

.header {
  color: white;
  font-size: 20px;
  font-weight: bolder;
}

/* ******************************************** CALENDARIO ****************************************** */
ul {
  list-style-type: none;
}
body {
  font-family: "Muli", sans-serif;
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
  font-family: "Muli", sans-serif;
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
  font-family: "Muli", sans-serif;
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
  cursor: pointer;
  font-family: "Muli", sans-serif;
}

/* Highlight the "current" day */
.days li .active {
  padding: 5px;
  background: #2c3e50;
  color: white !important;
  cursor: pointer;
  font-family: "Muli", sans-serif;
}
/* ******************************************** CALENDARIO ****************************************** */
</style>
