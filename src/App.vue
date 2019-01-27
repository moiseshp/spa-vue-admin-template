<template>
    <div id="app">
        <component :is="layout">
            <v-snackbar
                v-model="snackbar"
                :auto-height="true"
                :color="type"
                right top vertical :timeout="6000">
                {{ message }}
                <v-btn color="white" flat @click="snackbar = false">Cerrar</v-btn>
            </v-snackbar>
            <router-view :layout.sync="layout"/>
        </component>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            layout: 'div',
            snackbar: false,
            type: '',
            message: ''
        }
    },
    created: function () {
        const self = this
        console.log(this.$store.getters)
        // this.message = err.response.data
        axios.interceptors.response.use(undefined, function (err) {
            return new Promise(function (resolve, reject) {
                console.log('app',err.response.data.message)

                self.snackbar = true
                self.type = 'error'
                self.message = err.response.data.message
                // let err = err.response.data
                // console.log(err)
                // let status = err.status
                // let message = err.response.data.message
                // console.log(status,message)
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
