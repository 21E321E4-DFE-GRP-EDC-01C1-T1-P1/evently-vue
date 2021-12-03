<template>
  <q-page padding>
    <div class="row">
      <h3 class="text-h4">Olá, {{ this.user().name }}!</h3>
    </div>
    <div class="row">
      <div class="col q-mx-md">
        <OwnEventsPanel />
      </div>
      <div class="flex-break"></div>
      <div class="col q-mx-md">
        <CreatedEventsPanel />
      </div>
    </div>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="accent" @click="this.createEvent()" />
    </q-page-sticky>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";

import OwnEventsPanel from "../components/OwnEventsPanel.vue";
import CreatedEventsPanel from "../components/CreatedEventsPanel.vue";

export default {
  name: "Home",
  components: {
    OwnEventsPanel,
    CreatedEventsPanel,
  },
  data() {
    return {};
  },
  methods: {
    ...mapGetters(["user"]),
    createEvent() {
      this.$router.push({ name: "evento-novo" });
    },
  },
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  .row {
    flex-direction: column;
  }
}
</style>