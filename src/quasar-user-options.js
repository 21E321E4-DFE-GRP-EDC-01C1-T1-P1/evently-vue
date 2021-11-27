import "quasar/dist/quasar.css";
import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";

// To be used on app.use(Quasar, { ... })
export default {
  return: {
    config: {},
    plugins: {},
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
    css: {
      css: [
        'app.sass'
      ],
    }
  },
};
