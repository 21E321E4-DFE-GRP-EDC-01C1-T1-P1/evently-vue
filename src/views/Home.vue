<template>
  <q-page padding>
    <div class="row">
      <h3 class="text-h4">Olá, {{ this.user().name }}!</h3>
    </div>
    <div class="row">
      <div class="col">
        <OwnEventsPanel />
      </div>
      <div class="col-4">Col 2</div>
    </div>
    
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="accent" @click="this.createEvent()" />
    </q-page-sticky>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";

import OwnEventsPanel from "../components/OwnEventsPanel.vue";

export default {
  name: "Home",
  components: {
    OwnEventsPanel,
  },
  data() {
    return {};
  },
  methods: {
    ...mapGetters(["user"]),
    createEvent() {
      this.$router.push({name: "evento-novo"});
    }
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