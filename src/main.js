// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
window.axios = require('axios')
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
window.axios.defaults.baseURL = process.env.API_URL

const token = localStorage.getItem('token')
console.log('token',token)
if (token) {
    axios.defaults.headers.common['Authorization'] = token
    // let user = JSON.parse(localStorage.getItem('user'))
}

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import Vuelidate from 'vuelidate'
// import 'vuetify/dist/vuetify.min.css'
import './stylus/main.styl'

Vue.use(Vuelidate)
Vue.use(Vuetify,{
    options: {
      customProperties: true
    },
    theme: {
        // primary: '#1375F7',

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
  store,
  components: { App },
  template: '<App/>'
})
