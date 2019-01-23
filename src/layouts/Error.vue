<template>
    <v-app>
        <header>
            <img src="@/assets/logo.png">
            <router-link :to="{ name:'login' }">Login</router-link>
            <router-link :to="{ name:'dashboard' }">Dashboard</router-link>
        </header>

        <main>
            <slot/>
        </main>

        <footer>
            Made with love by Moisés Huaringa
        </footer>

    </v-app>
</template>

<script>
export default {
    name: 'LayoutError',
}
</script>
