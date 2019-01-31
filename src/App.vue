<template>
    <div id="app">
        <component :is="layout">
            <v-snackbar
                :timeout="0"
                :auto-height="true"
                :color="snackbar.color"
                right top
                :multi-line="snackbar.multiline"
                v-model="snackbar.visible">
                    {{ snackbar.text }}
                    <v-btn flat dark @click="$store.commit('snackbar/close')">
                        Cerrar
                    </v-btn>
            </v-snackbar>
            <router-view :layout.sync="layout"/>
        </component>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'App',
    data: () => ({
        layout: 'div',
    }),
    computed: {
        ...mapState('snackbar',{
            snackbar : state => state,
        })
    },
    created: function () {
        // this.$store.watch(state => state.snackbar.visible, () => {
        //     this.$store.dispatch('snackbar/closeAfter')
        // })
        const self = this

        axios.interceptors.response.use(function (resp) {
            if ( process.env.NODE_ENV == 'development' ){
                console.info( '/// LOG INTERCEPTORS. Only Development ///' )
                console.log( resp )
            }
            return resp
        }, function (err) {

            return new Promise(function (resolve, reject) {

                if ( process.env.NODE_ENV == 'development' ){
                    console.info( '///// ERR!!! /////' )
                    console.log( err, err.response )
                }

                if (err.response.status === 404){
                    self.$router.push({ name:'404'})
                }

                if (err.response.status === 401){
                    self.$router.dispatch('login/logout')
                    self.$router.push({ name:'login'})
                }

                self.$store.dispatch('snackbar/show',{
                    text: err.response.data.message,
                    color: 'error'
                })
                // let status = err.status
                // let message = err.response.data.message
                // if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
                //     // if you ever get an unauthorized, logout the user
                //     this.$store.dispatch(AUTH_LOGOUT)
                //     // you can also redirect to /login if needed !
                // }
                throw err;
            });
        });
    }
}
</script>

<style lang="stylus">
    #app
        font-family: 'Roboto', sans-serif
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
</style>
