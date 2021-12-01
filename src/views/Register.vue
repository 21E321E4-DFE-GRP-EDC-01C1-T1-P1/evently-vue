<template>
  <div>
    <div class="row">
      <div class="col-6 col-md-4 q-mx-auto q-my-xl">
        <q-toolbar-title
          class="text-center text-capitalize text-weight-bolder text-h5"
        >
          Cadastre-se
        </q-toolbar-title>
        <div class="q-pt-md">
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <q-input
              filled
              v-model="this.name"
              label="Seu nome *"
              hint="Nome e sobrenome"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Campo obrigatório',
              ]"
              required
            />

            <q-input
              filled
              v-model="this.email"
              label="Email *"
              hint="Email"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Campo obrigatório',
                (val) =>
                  Boolean(val.match(/.+@\w+(\.\w+)+/)) || 'E-mail inválido',
              ]"
              required
            />
            
            <q-input
              label="Password"
              v-model="this.password"
              filled
              type="password"
              required
            >
            </q-input>

            <q-input
              label="Confirm Password"
              v-model="this.confirmPassword"
              filled
              type="password"
              required
            >
            </q-input>

            <p 
              class="text-red-6"
              v-if="erro"
            >
              {{erro}}
            </p>

            <div class="text-center">
              <q-btn label="Cadastrar-se" type="submit" color="primary" />
            </div>
            <div class="text-center">
              <p>
                Já possui uma conta?
              <q-btn
                flat
                to="/login"
                color="primary"
                class="text-center text-weight-bolder text-caption no-margin no-padding"
                label="Faça login."
              />
              </p>
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
  name: "Register",
  data() {
    return { 
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      erro: "",
    };
  },
  methods: {
    ...mapActions(['register']),
    async onSubmit() {
      if (this.password != this.confirmPassword) {
        this.erro = "Senhas não são iguais.";
        return false;
      }
      
      const user = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      
      let resp = await this.register(user);
      if (resp) {
        this.$router.push({name: "login"});
      } else {
        this.error = "Algo ocorreu com o seu pedido. Tente novamente mais tarde.";
      }
    },
    onReset: () => {
      this.name = "";
      this.email = "";
      this.password = "";
      this.confirmPassword = "";
      this.erro = "";
    },
  }
};
</script>