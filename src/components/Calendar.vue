<template>
  <div class="wrapper">
    <div class="container-calendar">
      <h3 class="text-center text-h6">
        {{ this.longMonth[this.currentMonth] }} {{ this.currentYear }}
      </h3>

      <div class="button-container-calendar">
        <button id="previous" @click="this.previous()">&#8249;</button>
        <button id="next" @click="this.next()">&#8250;</button>
      </div>

      <table class="table-calendar" id="calendar" data-lang="en">
        <thead id="thead-month">
          <tr>
            <th v-for="day of this.weekDay" :key="day">{{ day }}</th>
          </tr>
        </thead>
        <tbody id="calendar-body">
          <tr v-for="[k, v] of Object.entries(this.calendar)" :key="k">
            <td
              v-for="[q, d] of Object.entries(v)"
              :key="q"
              @click="viewDate(d)"
            >
              <div :class="this.getClass(d)">
                <span>{{ d.date || "" }}</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="footer-container-calendar">
        <label for="month">Ir até: </label>
        <select
          id="month"
          @change="this.updateCalendar()"
          v-model="this.currentMonth"
        >
          <option
            v-for="[k, v] in Object.entries(this.months)"
            :key="k"
            :value="k"
          >
            {{ v }}
          </option>
        </select>
        <select
          id="year"
          @change="this.updateCalendar()"
          v-model="this.currentYear"
        >
          <option
            v-for="i of this.generateYearRange(1970, 2050)"
            :key="i"
            :value="i"
          >
            {{ i }}
          </option>
        </select>
      </div>
    </div>

    <q-dialog v-model="modal">
      <q-card>
        <q-card-section class="items-center row q-pb-none">
          <div class="text-h6">Eventos do dia {{this.modalDateInfo.date}} de {{this.longMonth[this.currentMonth]}}</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section v-for="event of this.modalDateInfo.events" :key="event.id">
          <h3 class="text-h6">{{event.name}}</h3>
          <p class="">{{event.description}}</p>
          <q-btn flat class="text-accent" @click="gotoEvent(event.id)">Ir para o evento</q-btn>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    events: {
      type: Array,
      default: () => [],
    },
  },
  watch: {
    events: function () {
      this.updateCalendar();
    },
  },
  setup() {
    return {
      modal: ref(false),
    };
  },
  created() {
    this.updateCalendar();
  },
  data() {
    return {
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      months: [
        "Jan",
        "Fev",
        "Mar",
        "Apr",
        "Maio",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez",
      ],
      longMonth: [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
      ],
      weekDay: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
      calendar: [],
      modalDateInfo: {},
    };
  },
  methods: {
    *generateYearRange(start, end) {
      let year = start;
      while (year < end) {
        yield year;
        year++;
      }
    },
    daysInMonth(year, month) {
      return 32 - new Date(year, month, 32).getDate();
    },
    next() {
      this.currentYear =
        this.currentMonth === 11 ? this.currentYear + 1 : this.currentYear;
      this.currentMonth = (this.currentMonth + 1) % 12;
      this.updateCalendar();
    },
    previous() {
      this.currentYear =
        this.currentMonth === 0 ? this.currentYear - 1 : this.currentYear;
      this.currentMonth = this.currentMonth === 0 ? 11 : this.currentMonth - 1;
      this.updateCalendar();
    },
    updateCalendar() {
      const firstDay = new Date(this.currentYear, this.currentMonth).getDay();
      const lastDate = this.daysInMonth(this.currentYear, this.currentMonth);
      const today = new Date();
      let dateCounter = 1;
      let rows = [];
      weekLabel: for (let row_ = 0; row_ < 6; row_++) {
        let row = [];
        dayLabel: for (let day_ = 0; day_ < 7; day_++) {
          if (row_ === 0 && day_ < firstDay) {
            row.push({});
            continue dayLabel;
          } else if (dateCounter > lastDate) {
            rows.push(new Array(7).fill().map((e, idx) => row[idx] || {}));
            break weekLabel;
          }

          let isToday =
            today.getFullYear() == this.currentYear &&
            today.getMonth() == this.currentMonth &&
            today.getDate() == dateCounter;

          row.push({
            date: dateCounter,
            isToday,
            events: this.events?.filter((e) => {
              let d = new Date(e.startTime);
              return (
                d.getFullYear() == this.currentYear &&
                d.getMonth() == this.currentMonth &&
                d.getDate() == dateCounter
              );
            }),
          });
          dateCounter++;
        }
        rows.push(row);
      }
      this.calendar = rows;
    },
    getClass(date) {
      return date.events?.length ? "numberCircle" : date.isToday ? "today" : "";
    },
    viewDate(date) {
      this.modalDateInfo = date;
      this.modal = true;
    },
    gotoEvent(id) {
      this.$router.push({name: "evento-read", params: {id}});
    },
  },
};
</script>

<style scoped>
html {
  font-family: sans-serif;
  font-size: 15px;
  line-height: 1.4;
  color: #444;
}

body {
  margin: 0;
  background: #504f4f;
  font-size: 1em;
}

.wrapper {
  margin: 15px auto;
  max-width: 1100px;
}

.container-calendar {
  background: #ffffff;
  padding: 15px;
  max-width: 475px;
  margin: 0 auto;
  overflow: auto;
}

.button-container-calendar button {
  cursor: pointer;
  display: inline-block;
  zoom: 1;
  background: #4db6ac;
  color: #fff;
  border: 1px solid #98f3ea;
  border-radius: 4px;
  padding: 5px 10px;
}

.table-calendar {
  border-collapse: collapse;
  width: 100%;
}

.table-calendar td,
.table-calendar th {
  padding: 5px;
  border: 1px solid #e2e2e2;
  text-align: center;
  vertical-align: top;
}

#monthAndYear {
  text-align: center;
  margin-top: 0;
}

.button-container-calendar {
  position: relative;
  margin-bottom: 1em;
  overflow: hidden;
  clear: both;
}

#previous {
  float: left;
}

#next {
  float: right;
}

.footer-container-calendar {
  margin-top: 1em;
  border-top: 1px solid #dadada;
  padding: 10px 0;
}

.footer-container-calendar select {
  cursor: pointer;
  display: inline-block;
  zoom: 1;
  background: #ffffff;
  color: #585858;
  border: 1px solid #bfc5c5;
  border-radius: 3px;
  padding: 5px 1em;
}

.today span {
  color: #a945ba;
  border-bottom: 2px solid currentColor;
}

.numberCircle {
  box-sizing: border-box;
  position: relative;
  color: #f5f5f5;
  background-color: tomato;
  width: 25px;
  height: 25px;
  margin: auto;
  text-align: center;
  border-radius: 50%;
  cursor: pointer;
}

.numberCircle span {
  vertical-align: middle;
}
</style>
