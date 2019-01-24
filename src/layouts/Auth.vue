<template>

    <v-app class="background-gradient">

        <section class="layout-auth">

            <v-alert
                block
                class="my-0"
                :value="alert.value"
                :type="alert.type"
                transition="fade-transition">
                {{ alert.message }}
            </v-alert>

            <v-card
                elevation="0"
                class="wrapper-card"
                :class="{ 'mt-5' : $vuetify.breakpoint.smAndUp }">

                <header class="mb-3 text-xs-center">
                    <router-link :to="{ name:'login' }">
                        <img src="@/assets/logo.png" class="logo">
                    </router-link>
                </header>

                <slot/>

            </v-card>

        </section>

    </v-app>

</template>

<script>
export default {
    name: 'LayoutAuth',
    props: ['alert'],
}
</script>

<style lang="styl">
.layout-auth

    .wrapper-card
        padding: 20px
        @media only screen and (min-width: 600px)
            width: 400px
            margin: 0 auto
            padding: 45px
            border-radius: 8px
        .logo
            max-width: 90px
        footer
            a
                text-decoration: none
</style>
