// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
window.axios = require('axios')
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
window.axios.defaults.baseURL = process.env.API_URL

import Vue from 'vue'
import router from './router'
import Vuetify from 'vuetify'
import Vuelidate from 'vuelidate'
// import 'vuetify/dist/vuetify.min.css'
import './stylus/main.styl'

import App from './App'

Vue.use(Vuelidate)
Vue.use(Vuetify,{
    options: {
      customProperties: true
    },
    theme: {
        // primary: '#673ab7',
        // secondary: '#FC0',
        // accent: '#FC0',
        // error: '#f44336',
        // warning: '#cddc39',
        // info: '#00bcd4',
        // success: '#8bc34a',
    }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
