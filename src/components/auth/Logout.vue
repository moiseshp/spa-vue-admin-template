<template>

    <v-btn flat round
        :loading="loading"
        :disabled="loading"
        @click="logout">Cerrar Sesión</v-btn>

</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'Logout',
    computed: {
        ...mapState('auth',['loading']),
    },
    methods: {
        logout(){
            this.$store.dispatch('auth/logout')
            .then(() => {
                this.$router.push('/login')
            })
        }
    }
}
</script>
