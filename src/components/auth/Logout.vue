<template>

    <v-btn
        flat
        class="pa-2"
        color="cyan lighten-2"
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
            .then( resp => {
                this.$store.commit('snackbar/show',{
                    text: resp.data.message,
                    color: 'success'
                })
            })
            .finally(() => {
                this.$router.push('/login')
            })
        }
    }
}
</script>
