import Vue from 'vue'
import Vuex from 'vuex'
import snackbar from './modules/snackbar'
// import auth from './modules/auth'
import auth from './modules/auth/auth'
import forgotPassword from './modules/auth/forgotPassword'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        snackbar,
        auth,
        forgotPassword
    },
    strict: debug,
})
