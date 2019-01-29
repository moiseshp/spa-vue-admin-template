import Vue from 'vue'
import Router from 'vue-router'
import middleware from './middleware'

const base = [
    {
        path: '*',
        name: '404',
        component: () => import('@/components/404.vue'),
    }
]

const dashboard = [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/components/Dashboard.vue'),
        beforeEnter: middleware.auth,
    },
]

const users = [
    {
        path: '/users',
        name: 'users-index',
        component: () => import('@/components/users/Index.vue'),
        beforeEnter: middleware.auth,
        // children: [
        //     {
        //         path: 'bar',
        //         component: Bar,
        //     }
        // ]
    },
]

const auth = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/components/auth/Login.vue'),
        beforeEnter: middleware.guest,
    },
    {
        path: '/password/reset',
        name: 'forgot-password',
        component: () => import('@/components/auth/password/Forgot.vue'),
    },
    {
        path: '/password/reset/:token',
        name: 'reset-password',
        component: () => import('@/components/auth/password/Reset.vue')
    }
]

const routes = base.concat(dashboard)
                   .concat(auth)
                   .concat(users)

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: routes
})
