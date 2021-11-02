import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";

/* eslint-disable */
createApp(App)
    .use(Quasar, quasarUserOptions)
    .use(store)
    .use(router)
    .mount("#app");
