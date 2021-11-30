<template>
  <q-layout view="lHh lpr lFf" class="shadow-2">
    <!-- HEADER -->
    <q-header elevated class="text-white bg-teal-4" height-hint="98">
      <q-toolbar class="shadow-2 rounded-borders">
        <q-toolbar-title class="text-weight-bold text-h5">
          Evently
        </q-toolbar-title>
        <q-space />

        <!--
        notice shrink property since we are placing it
        as child of QToolbar
      -->
        <q-tabs shrink>
          <q-tab>
            <router-link class="text-white text-weight-bold" to="/">
              Home
            </router-link>
          </q-tab>
          <q-tab>
            <router-link class="text-white text-weight-bold" to="/eventos">
              Eventos
            </router-link>
          </q-tab>
          <q-tab>
            <router-link class="text-white text-weight-bold" to="/about">
              Sobre
            </router-link>
          </q-tab>
        </q-tabs>
      </q-toolbar>
    </q-header>

    <!-- CONTENT -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- FOOTER -->
    <!-- <q-footer elevated class="text-white bg-grey-8">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer> -->
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
