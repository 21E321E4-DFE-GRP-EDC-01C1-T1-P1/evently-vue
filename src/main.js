import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";
import '@quasar/extras/material-icons/material-icons.css';
import firebase from 'firebase';

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
   
  const firebaseConfig = {
    apiKey: "AIzaSyDGVIDr68u5aeO1NAxR5y0AW0rOEtDLXqE",
    authDomain: "evently-78c0f.firebaseapp.com",
    projectId: "evently-78c0f",
    storageBucket: "evently-78c0f.appspot.com",
    messagingSenderId: "736198572993",
    appId: "1:736198572993:web:d5fc1ef740c52b270c0d40"
  };
      
  firebase.initializeApp(firebaseConfig);