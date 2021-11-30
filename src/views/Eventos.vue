<template>
  <h2>Eventos</h2>
  <div class="items-start q-pa-md row q-gutter-md">
    <template v-for="event of events" :key="event.id">
      <q-card class="my-card" style="width: 30%">
        <q-card-section>
          <div class="text-h6">{{ event.name }}</div>
          <div class="text-subtitle2">
            {{ this.displayTime(event.startTime) }}
          </div>
          <div class="text-subtitle2">{{ event.location }}</div>
        </q-card-section>

        <q-separator />

        <q-card-actions>
          <p
            style="color: #f00"
            v-if="event.participants.length >= event.maxParticipants"
          >
            Lotado
          </p>
          <q-btn flat v-else-if="event.participants.includes(user.id)">
            Inscrito
          </q-btn>
          <q-btn flat v-else>Inscrever-se</q-btn>
        </q-card-actions>
      </q-card>
    </template>
  </div>
</template>

<script>
export default {
  name: "Eventos",
  components: {},
  computed: {
    events() {
      return this.$store.getters.events;
    },
    user() {
      return this.$store.state.currentUser;
    },
  },
  methods: {
    displayTime(date) {
      return new Date(date).toISOString().split("T")[0];
    },
  },
};
</script>
