<template>
  <q-page padding>
    <h2 class="text-h5">Eventos</h2>
    <div class="container">
      <template v-for="event of this.myEvents" :key="event.id">
        <EventCard :event="event" class="q-my-xl card" />
      </template>
    </div>
  </q-page>
</template>

<script>
import { mapActions } from "vuex";

import EventCard from "../components/EventCard.vue";

export default {
  components: {
    EventCard,
  },
  created() {
    this.events().then((response) => {
      let today = new Date();
      this.myEvents = response.filter(e => new Date(e.startTime) > today);
    });
  },
  data() {
    return {
      myEvents: [],
    };
  },
  methods: {
    ...mapActions(["events"]),
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
}

.card {
  width: 30%;
  margin-inline: 1rem;
}

@media only screen and (max-width: 600px) {
  .card {
    width: 100%;
  }
}
</style>
