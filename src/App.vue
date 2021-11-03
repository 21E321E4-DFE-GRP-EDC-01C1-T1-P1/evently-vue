<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar class="shadow-2 rounded-borders">
        <q-btn flat label="Homepage" />
        <q-space />

        <!--
        notice shrink property since we are placing it
        as child of QToolbar
      -->
        <q-tabs v-model="tab" shrink>
          <q-tab>
            <router-link class="text-weight-bold text-white" to="/">Home</router-link>
          </q-tab>
          <q-tab name="tab2" label="Tab 2" />
          <q-tab name="tab3" label="Tab 3" />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
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
