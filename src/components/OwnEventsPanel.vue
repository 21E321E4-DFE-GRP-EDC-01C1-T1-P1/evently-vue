<template>
  <h2 class="text-h6">{{this.myEvents.length ? 'Eventos Inscritos' : 'Inscrito em nenhum evento'}}</h2>
  <div>
    <template v-for="event of this.myEvents" :key="event.id">
      <EventCard
        :event="event"
        @change="this.updateEventList()"
        class="q-my-xl"
      />
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import EventCard from "../components/EventCard.vue";

export default {
  components: {
    EventCard,
  },
  created() {
    this.updateEventList();
  },
  data() {
    return {
      myEvents: [],
    };
  },
  methods: {
    ...mapActions(["events"]),
    ...mapGetters(["user"]),
    updateEventList() {
      this.events().then((response) => {
        this.myEvents = response.filter((e) => {
          return e.participants.includes(this.user().id);
        });
      });
    },
  },
};
</script>

<style scoped>
</style>