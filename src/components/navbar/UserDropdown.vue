<template>

    <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :min-width="280"
        :nudge-width="100"
        offset-x offset-y bottom>

        <v-list class="pa-0 transparent white--text" slot="activator">
            <v-list-tile class="list-tile-user">
                <v-list-tile-avatar
                    class="breakpoint"
                    :style="$vuetify.breakpoint.smAndDown ? 'min-width:auto':''">
                    <img :src="user.avatar">
                </v-list-tile-avatar>
                <v-list-tile-content class="white--text hidden-sm-and-down">
                    <v-list-tile-title class="font-weight-bold ext-lowercase body-1">
                        {{ user.email }}
                    </v-list-tile-title>
                </v-list-tile-content>
                <v-btn icon class="white--text hidden-sm-and-down">
                    <v-icon>keyboard_arrow_down</v-icon>
                </v-btn>
            </v-list-tile>
        </v-list>
        <v-card>
            <v-list class="py-0">
                <v-list-tile
                    class="blue-grey lighten-5 py-2"
                    avatar>
                    <v-list-tile-avatar>
                        <img :src="user.avatar">
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-sub-title>{{ user.name }}</v-list-tile-sub-title>
                        <v-list-tile-title
                            class="font-weight-bold">{{ user.email }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
            <v-list class="blue-grey--text text--darken-3">
                <change-password/>
                <profile/>
                <logout class="mb-0"/>
            </v-list>
        </v-card>

    </v-menu>

</template>

<script>
import Logout from '../auth/Logout'
import Profile from '../users/Profile'
import ChangePassword from '../users/ChangePassword'

export default {
    components : {
        Logout,
        Profile,
        ChangePassword
    },
    data:() => ({
        menu : null,
    }),
    computed: {
        user(){
            return this.$store.getters['login/user']
        }
    }
}
</script>

<style lang="stylus">
.list-tile-user > .v-list__tile
    padding-right: 0 !important
</style>
