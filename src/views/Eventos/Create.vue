<template>
  <q-page padding>
    <q-form
      @submit="onSubmit"
      class="q-gutter-md q-mx-auto"
      style="max-width: 65ch"
    >
      <h2 class="text-h5">Novo Evento</h2>
      <q-input
        filled
        v-model="name"
        label="Nome *"
        hint="Nome do evento"
        lazy-rules
        :rules="[
          (val) => (val && val.length > 0) || 'Este campo é obrigatório',
        ]"
        required
      />

      <q-input
        filled
        type="number"
        v-model="maxParticipants"
        label="Número máximo de participantes *"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Este campo é obrigatório',
          (val) => Number(val) > 0 || 'Valor inválido',
        ]"
        required
      />

      <p class="text-h6">Horário de Início</p>
      <div class="items-start q-gutter-md row">
        <q-date
          v-model="startTime"
          mask="YYYY-MM-DD HH:mm"
          color="accent"
          required
        />
        <q-time
          v-model="startTime"
          mask="YYYY-MM-DD HH:mm"
          color="accent"
          required
        />
      </div>

      <p class="text-h6">Horário de Término</p>
      <div class="items-start q-gutter-md row">
        <q-date
          v-model="endTime"
          mask="YYYY-MM-DD HH:mm"
          color="accent"
          lazy-rules
          :rules="[
            () =>
              this.startTime > this.endTime ||
              'Data de término não pode ser menor que data de início',
          ]"
          required
        />
        <q-time
          v-model="endTime"
          mask="YYYY-MM-DD HH:mm"
          color="accent"
          lazy-rules
          :rules="[
            () =>
              this.startTime > this.endTime ||
              'Data de término não pode ser menor que data de início',
          ]"
          required
        />
      </div>

      <q-input
        filled
        v-model="location"
        label="Endereço"
        hint="Endereço de realização do evento"
        lazy-rules
        :rules="[
          (val) => (val && val.length > 0) || 'Este campo é obrigatório',
        ]"
        required
      />

      <q-input
        filled
        v-model="description"
        label="Descrição"
        hint="Descrição do evento"
        type="textarea"
      />

      <q-btn :label="this.id == 0 ? 'Criar' : 'Salvar'" type="submit" color="primary" />
      <q-btn flat label="Cancelar" class="text-red-6" @click="cancel()"/>
    </q-form>
  </q-page>
</template>

<script>
import { mapActions } from "vuex";

export default {
  created() {
    let itemID = this.$route?.params.id;
    if (itemID) {
      this.events({ id: itemID }).then((r) => {
        let item = r[0];
        this.id = item.id;
        this.name = item.name;
        this.maxParticipants = item.maxParticipants;
        this.startTime = new Date(item.startTime);
        this.endTime = new Date(item.endTime);
        this.location = item.location;
        this.description = item.description;
      });
    }
  },
  data() {
    return {
      id: 0,
      name: "",
      maxParticipants: 0,
      startTime: new Date(),
      endTime: new Date(),
      location: "",
      description: "",
    };
  },
  methods: {
    ...mapActions(["createEvent", "events"]),
    onSubmit() {
      this.createEvent({
        name: this.name,
        maxParticipants: this.maxParticipants,
        participants: [],
        startTime: this.startTime,
        endTime: this.endTime,
        createdBy: this.$store.getters.user.id,
        location: this.location,
        description: this.description,
      }).then((response) => {
        if (response?.id) {
          this.$router.replace({ name: "home" });
        } else {
          alert("Algo deu errado com a sua requisição");
        }
      });
    },
    cancel() {
      this.$router.replace({name: "home"});
    },
  },
};
</script>

<style>
</style>