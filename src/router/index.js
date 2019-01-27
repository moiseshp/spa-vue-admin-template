import Vue from 'vue'
import Router from 'vue-router'
import middleware from './middleware'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
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
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('@/components/Dashboard.vue'),
            beforeEnter: middleware.auth,
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
        },
        {
            path: '*',
            name: '404',
            component: () => import('@/components/404.vue'),
        }
    ],
})
