<template>
  <div>
    <div class="row">
      <div class="col-6 col-md-4 q-mx-auto q-my-xl">
        <div class="q-pt-md" >
          <q-form
            @submit.prevent="onSubmit"
            @reset="onReset"
            class="q-gutter-md"
          >
            <q-input
              filled
              v-model="email"
              label="Email *"
              hint="Email"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
                (val) =>
                  Boolean(val.match(/.+@\w+(\.\w+)+/)) || 'Invalid e-mail',
              ]"
              required
            />
            <q-input
              label="Senha"
              v-model="password"
              filled
              :type="isPwd ? 'password' : 'text'"
              required
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>

            <p 
              class="text-red-6"
              v-if="erro"
            >
              {{erro}}
            </p>

            <div class="text-center">
              <q-btn label="Entrar" type="submit" color="primary" />
            </div>
            <div class="text-center">
              <q-btn
                flat
                to="/register"
                color="primary"
                class="text-center q-ml-sm text-weight-bolder text-caption"
                label="Crie uma conta"
              />
            </div>
          </q-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      isPwd: true,
      erro: ""
    };
  },
  methods: {
    ...mapActions(["login"]),
    async onSubmit() {
      let resp = await this.login({ email: this.email, password: this.password });
      console.log(resp);
      if (resp) {
        this.$router.replace({name: 'home'});
        return;
      }
      this.erro = "Senha ou email inválidos.";
    },
    onReset() {
      this.email = "";
      this.password = "";
    },
  },
};
</script>