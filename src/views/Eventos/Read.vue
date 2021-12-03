<template>
  <q-page padding>
    <div class="text-justify q-mx-auto q-mt-xl" style="max-width: 65ch">
      <template
        v-for="[key, val] of Object.entries(this.event).filter(
          (e) => e[0] != 'id'
        )"
        :key="key"
      >
        <p>
          <span class="text-bold text-capitalize">{{ key }}:</span> {{ val }}
        </p>
      </template>

      <div>
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
      </div>

      <div v-if="this.event.createdBy == this.user().id">
        <q-btn flat label="Editar" @click="edit(this.event.id)" />
        <q-btn
          flat
          label="Deletar"
          @click="deleteMe(this.event.id)"
          class="text-red-6"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  created() {
    let id = this.$route.params.id;
    this.events({ id }).then((r) => {
      this.event = r[0];
    });
  },
  data() {
    return {
      event: {},
    };
  },
  methods: {
    ...mapActions(["events", "deleteEvent", "subscribe", "unsubscribe"]),
    ...mapGetters(["user"]),
    edit(id) {
      this.$router.push({ name: "evento-edit", params: { id } });
    },
    deleteMe(id) {
      this.deleteEvent(id).then(() => this.$route.push({ name: "home" }));
    },
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
  },
};
</script>