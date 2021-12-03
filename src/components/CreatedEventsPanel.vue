<template>
  <h2 class="text-h6">
    {{ this.myEvents.length ? "Eventos Criados" : "Nenhum evento criado" }}
  </h2>
  <div class="container no-scrollbar">
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
        this.myEvents = response.filter((e) => e.createdBy == this.user().id);
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