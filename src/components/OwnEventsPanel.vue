<template>
  <h2 class="text-h6">
    {{
      this.myEvents.length ? "Eventos Inscritos" : "Inscrito em nenhum evento"
    }}
  </h2>
  <div class="container no-scrollbar">
    <EventCard
      v-for="event of this.myEvents"
      :key="event.id"
      :event="event"
      @change="this.updateEventList()"
      class="q-my-xl"
    />
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
.container {
  max-height: 25%;
  overflow-y: scroll;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>