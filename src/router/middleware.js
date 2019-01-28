import store from '../store' // your vuex store

var middleware = {

    auth: (to, from, next) => {
        //  User is not authenticated
        if (store.getters['auth/isAuthenticated']) {
            next()
            return
        }
        next({
            path: '/login',
            query: { redirect: to.fullPath }
        })
    },
    guest: (to, from, next) => {
        //  User is authenticated
        if (store.getters['auth/isAuthenticated']) {
            next('dashboard')
            return
        }
        next()
    }

}


export default middleware
