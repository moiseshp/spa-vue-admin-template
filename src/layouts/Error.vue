<template>

    <v-app class="b-gradient-top white--text">

        <section class="layout-error">

            <div class="mb-4">
                <slot/>
            </div>

            <v-btn :to="{ name: 'login' }"
                class="ml-0 elevation-0" secondary large round outline dark>&larr; Mi cuenta</v-btn>

        </section>

    </v-app>

</template>

<script>
export default {
    name: 'LayoutError',
}
</script>

<style lang="stylus">
.layout-error
    margin: 35px
    @media only screen and (min-width: 600px)
        max-width: 500px
        margin: 50px auto

    .wrapper-code
        &:after
            content: ""
            width: 60px
            height: 4px
            display: block
            margin-top: 10px
            background-color: #FFF

    .wrapper-image
        position: absolute
        bottom: 10px
        right: 35px
        font-size: 5em
        @media only screen and (min-width: 600px)
            font-size: 10em
</style>
