<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar class="rounded-borders" style="background-color:aquamarine">
        <q-space />

        <!--
        notice shrink property since we are placing it
        as child of QToolbar
      -->
        <q-tabs v-model="tab" shrink>
          <q-tab>
            <router-link class="text-weight-bold text-white" to="/">Home</router-link>
          </q-tab>
          <q-tab>
            <router-link class="text-weight-bold text-white" to="/eventos">Eventos</router-link>
          </q-tab>
          <q-tab>
            <router-link class="text-weight-bold text-white" to="/perfil">Perfil</router-link>
          </q-tab>
          <q-tab>
            <router-link class="text-weight-bold text-white" to="/about">Sobre</router-link>
          </q-tab>
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  name: "LayoutDefault",

  components: {},

  setup() {
    return {
      leftDrawerOpen: ref(false),
    };
  },
};
</script>

<style>
#app {
  height: 100%;
}

.q-tab a {
  text-decoration: none;
}
</style>
