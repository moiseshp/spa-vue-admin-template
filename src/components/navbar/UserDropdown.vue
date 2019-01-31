<template>

    <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :min-width="250"
        offset-y
        nudge-bottom="4"
        dark
        left>

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

        <v-card elevation="1">
            <v-list>
                <v-list-tile avatar>
                    <v-list-tile-content>
                        <v-list-tile-sub-title>{{ user.name }}</v-list-tile-sub-title>
                        <v-list-tile-title
                            class="font-weight-bold">{{ user.email }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
            <v-divider></v-divider>
            <v-list class="pt-0 pb-0">
                <change-password/>
                <v-divider></v-divider>
                <profile/>
                <v-divider></v-divider>
                <logout/>
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
.list-tile-user > .v-list__tile {
    padding-right: 0 !important
}
</style>
