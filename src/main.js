import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from 'firebase/app';

createApp(App).use(router).mount('#app')

const firebaseConfig = {
  apiKey: "AIzaSyDGVIDr68u5aeO1NAxR5y0AW0rOEtDLXqE",
  authDomain: "evently-78c0f.firebaseapp.com",
  projectId: "evently-78c0f",
  storageBucket: "evently-78c0f.appspot.com",
  messagingSenderId: "736198572993",
  appId: "1:736198572993:web:d5fc1ef740c52b270c0d40"
};

initializeApp(firebaseConfig);