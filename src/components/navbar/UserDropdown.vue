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
            <v-list-tile avatar>
                <v-list-tile-content class="white--text">
                    <v-list-tile-title class="font-weight-bold text-lowercase">
                        {{ user.email }}
                    </v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-avatar>
                    <img src="https://randomuser.me/api/portraits/men/85.jpg">
                </v-list-tile-avatar>
            </v-list-tile>
        </v-list>

        <v-card elevation="1">
            <v-list>
                <v-list-tile avatar>
                    <v-list-tile-content>
                        <v-list-tile-sub-title>
                            {{ user.name }}
                        </v-list-tile-sub-title>
                        <v-list-tile-title class="font-weight-bold">
                            {{ user.email }}
                        </v-list-tile-title>
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
            <!-- <v-card-actions class="text-left">
                <v-btn flat round color="primary" @click="menu = false">Mi Perfil</v-btn>
            </v-card-actions> -->
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
            return this.$store.getters['auth/user']
        }
    }
}
</script>
