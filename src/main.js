import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import'./assets/flexble'
import axios from 'axios'
import './module/module'
Vue.prototype.$axios = axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
