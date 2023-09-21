import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
// import store from './store'
// import axios from './plugins/vueaxios';


Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  // axios,
  // store,
  render: h => h(App)
}).$mount('#app')
