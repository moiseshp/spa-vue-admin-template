import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: 'login'
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('@/components/Dashboard.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/components/auth/Login.vue'),
        },
        {
            path: '/password/reset',
            name: 'forgot-password',
            component: () => import('@/components/auth/password/Forgot.vue')
        },
        {
            path: '/password/reset/:token',
            name: 'reset-password',
            component: () => import('@/components/auth/password/Reset.vue')
        },
        {
            path: '*',
            name: '404',
            component: () => import('@/components/Error.vue'),
        }
    ],
})
