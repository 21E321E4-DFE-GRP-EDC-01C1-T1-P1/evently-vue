<template>
  <q-card flat bordered class="my-card bg-grey-1">
    <q-card-section>
      <div class="items-center row no-wrap">
        <div class="col">
          <div class="text-h6">{{ this.event.name }}</div>
          <div class="text-subtitle2">
            Data: {{ this.day }} {{ this.month }}, {{ this.ano }}
          </div>
        </div>

        <div class="col-auto">
          <q-btn color="grey-7" round flat icon="more_vert">
            <q-menu cover auto-close>
              <q-list>
                <q-item clickable @click="view(this.event.id)">
                  <q-item-section>Ver Mais</q-item-section>
                </q-item>
                <template v-if="this.event.createdBy == this.user.id">
                  <q-item clickable @click="edit(this.event.id)">
                    <q-item-section>Editar</q-item-section>
                  </q-item>
                  <q-item clickable @click="deleteMe(this.event.id)">
                    <q-item-section class="text-red-6">Deletar</q-item-section>
                  </q-item>
                </template>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </div>
    </q-card-section>

    <q-card-section class="text-justify">
      {{ this.description }}
    </q-card-section>

    <q-separator />

    <q-card-actions>
      <p
        class="text-red-6 text-bold q-my-auto q-ml-md q-mr-lg text-uppercase"
        v-if="this.event.participants.length >= this.event.maxParticipants"
      >
        Lotado
      </p>
      <q-btn
        flat
        @click="this.subMe()"
        v-else-if="!this.event.participants.includes(this.user?.id)"
      >
        Inscreva-se
      </q-btn>
      <q-btn
        flat
        @click="unsubMe()"
        class="text-grey-7"
        v-if="this.event.participants.includes(this.user?.id)"
      >
        Inscrito
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "EventCard",
  props: {
    event: { type: Object, required: true },
  },
  data() {
    return {
      day: String(new Date(this.event.startTime).getDate()).padStart(2, "0"),
      month: [
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
      ][new Date(this.event.startTime).getMonth()],
      ano: new Date(this.event.startTime).getFullYear(),
      description: this.event.description.slice(0, 249) + "…",
      user: this.$store.getters.user,
    };
  },
  methods: {
    ...mapActions(["subscribe", "unsubscribe", "deleteEvent"]),
    subMe() {
      let response = this.subscribe({ event: this.event, user: this.user });
      if (response) {
        this.$emit("change");
      }
    },
    unsubMe() {
      let response = this.unsubscribe({ event: this.event, user: this.user });
      if (response) {
        this.$emit("change");
      }
    },
    view(id) {
      this.$router.push({ name: "evento-read", params: { id } });
    },
    edit(id) {
      this.$router.push({ name: "evento-edit", params: { id } });
    },
    deleteMe(id) {
      this.deleteEvent(id).then(() => this.$route.push({name: "home"}));
    },
  },
};
</script>

<style scoped>
/* .my-card {
    width: 50%;
} */

@media only screen and (max-width: 600px) {
  .my-card {
    width: 100%;
  }
}
</style>