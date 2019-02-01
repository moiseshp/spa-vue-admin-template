<template>

    <v-btn
        class="pa-2 elevation-0"
        color="blue-grey--text text--darken-3"
        :loading="loading"
        :disabled="loading"
        @click="logout">Cerrar Sesión</v-btn>

</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'Logout',
    computed: {
        ...mapState('login',['loading']),
    },
    methods: {
        logout(){
            this.$store.dispatch('login/logout')
            .then( resp => {
                this.$store.dispatch('snackbar/show',{
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
