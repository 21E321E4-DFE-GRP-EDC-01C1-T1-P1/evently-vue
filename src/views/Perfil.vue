<template>
  <q-page padding>
    <div class="container">
      <h3 class="text-h5">{{this.user().name}}</h3>
      <Calendar :events="myEvents" />
    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Calendar from "../components/Calendar.vue";

export default {
  components: {
    Calendar,
  },
  created() {
    this.events().then(
      response => {
        this.myEvents = response.filter(e => e.participants.includes(this.user().id));
      }
    );
  },
  data() {
    return {myEvents: [],}
  },
  methods: {
    ...mapGetters(["user"]),
    ...mapActions(["events"])
  },
};
</script>
