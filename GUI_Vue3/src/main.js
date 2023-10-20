import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// material icons
import { aliases, mdi } from "vuetify/lib/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";



const myCustomLightTheme = {
  dark: false,
  colors: {
    primary: '#1387ED',
    'primary-darken-1': '#1164c7',
    secondary: '#00A886',
    'secondary-darken-1': '#008b67',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#e27b08',
  },
}
const vuetify = createVuetify({
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme,
    },
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  components,
  directives,
})

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);
app.mount('#app');
