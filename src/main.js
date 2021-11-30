import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";
import '@quasar/extras/material-icons/material-icons.css';

/* eslint-disable */
createApp(App)
    .use(Quasar, quasarUserOptions)
    .use(store)
    .use(router)
    .use(Quasar, {
        extras: {
            extras: [
                // 'ionicons-v4',
                // 'mdi-v5',
                // 'fontawesome-v5',
                 'eva-icons',
                // 'themify',
                // 'line-awesome',
                // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!
            
                'roboto-font', // optional, you are not bound to it
                'material-icons', // optional, you are not bound to it
                 ],
        }, 
      })