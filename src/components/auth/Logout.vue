<template>

    <v-btn flat round @click="logout">Cerrar Sesión</v-btn>

</template>

<script>
import { AUTH_LOGOUT } from '@/store/actions/auth'
export default {
    name: 'Logout',
    data: () => ({
        loading: {
            submit: false
        }
    }),
    computed : {
        isLoggedIn(){ return this.$store.getters.isLoggedIn }
    },
    methods: {
        logout(){
            this.$store.dispatch(AUTH_LOGOUT)
            .then(() => {
                this.$router.push('/login')
            })
        }
    }
}
</script>
