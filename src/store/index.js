import Vue from 'vue'
import Vuex from 'vuex'
import snackbar from './modules/snackbar'
import login from './modules/auth/login'
import forgotPassword from './modules/auth/forgotPassword'
import resetPassword from './modules/auth/resetPassword'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        snackbar,
        login,
        forgotPassword,
        resetPassword
    },
    strict: debug,
})
