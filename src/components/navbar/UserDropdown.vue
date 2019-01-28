<template>

    <v-menu
        v-model="menu"
        :close-on-content-click="false"
        width="240"
        offset-y
        left>

        <v-btn flat class="white--text" slot="activator">
            <strong class="text-lowercase">{{ user.email }}</strong>
            <v-icon right>account_circle</v-icon>
        </v-btn>

        <v-card>
            <v-list>
                <v-list-tile  class="pa-2">

                    <v-list-tile-content>
                        <v-list-tile-title class="font-weight-bold">
                            {{ user.name }}</v-list-tile-title>
                        <v-list-tile-sub-title>
                            {{ user.email }}
                        </v-list-tile-sub-title>
                    </v-list-tile-content>

                </v-list-tile>
            </v-list>

            <v-divider></v-divider>

            <v-card-actions class="text-left">
                <v-btn flat round color="primary" @click="menu = false">Mi Perfil</v-btn>
                <logout/>
            </v-card-actions>

        </v-card>

    </v-menu>

</template>

<script>
import Logout from '../auth/Logout'

export default {
    components : {
        Logout
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
