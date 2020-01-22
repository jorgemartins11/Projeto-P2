<template>
  <div class="home position-relative">
    <NavBar />
    <div
      class="container d-flex align-items-center justify-content-center"
    >
      <div class="row">
        <div class="col-12 pt-5">
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

            <ul class="days" v-html="calendar"></ul>
          </div>
          <div class="position-relative arrowDown">
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
              width: 13.6%;
              text-align: center;
              margin-bottom: 5px;
              font-size: 12px;
              color: #777;
              cursor: pointer;
              font-family: "Muli", sans-serif;;" id="${i +
                1}" v-on:click="selectDayOnClick(${i + 1})">${i + 1}</li>`;
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
  margin-bottom: auto;
  margin-top: 100px;
}

.header {
  color: white;
  font-size: 20px;
  font-weight: bolder;
}

/* ********************************************CALENDARIO****************************************** */
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
}

/* Highlight the "current" day */
.days li .active {
  padding: 5px;
  background: #2c3e50;
  color: white !important;
}
/* ********************************************CALENDARIO****************************************** */
</style>
