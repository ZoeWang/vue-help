import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'
axios.defaults.withCredentials = true ;
Vue.prototype.axios = axios


Vue.config.productionTip = false

import './filter/router';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
