<template>

    <v-app>

        <v-toolbar class="b-gradient-left white--text elevation-0"
            fixed app clipped-right>
            <v-toolbar-side-icon
                class="white--text"
                @click.stop="openDrawerMenu"></v-toolbar-side-icon>

            <v-spacer></v-spacer>

            <v-toolbar-items class="hidden-sm-and-down">

                <v-btn icon class="white--text">
                    <v-icon>dashboard</v-icon>
                </v-btn>

                <v-btn icon class="white--text">
                    <v-icon>notifications</v-icon>
                </v-btn>

                <user-dropdown/>

            </v-toolbar-items>

        </v-toolbar>

        <v-navigation-drawer :mini-variant="mini" v-model="drawer" app>

            <v-toolbar flat class="transparent">
                <v-list class="pa-0">
                    <v-list-tile avatar>
                        <v-list-tile-avatar>
                            <img src="@/assets/v-alt.svg">
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                            <v-toolbar-title>Vuetify JS</v-toolbar-title>
                        </v-list-tile-content>
                        <v-list-tile-action class="hidden-lg-and-up">
                            <v-btn icon @click.stop="drawer = !drawer">
                                <v-icon>close</v-icon>
                            </v-btn>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list>
            </v-toolbar>

            <v-list class="pt-0 sidebar-items">
                <v-list-tile
                    v-for="item in items"
                    :key="item.title"
                    :to="{ name: item.to }">
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>

        </v-navigation-drawer>

        <v-content>

            <v-container fluid>
                <slot/>
            </v-container>

            <v-footer inset absolute
                class="transparent pa-4 blue-grey--text text--lighten-2">
                <strong>Vuetify</strong>&nbsp; &copy; {{ new Date().getFullYear() }}
                <!-- <v-spacer></v-spacer> -->
            </v-footer>

        </v-content>

    </v-app>

</template>

<script>
import UserDropdown from '../components/navbar/UserDropdown.vue';

export default {
    name: 'LayoutDashboard',
    props: {
        source: String
    },
    components : {
        UserDropdown
    },
    data: () => ({
        drawer: true,
        mini: true,
        items: [
            { title: 'Dashboard', icon: 'dashboard', to: 'dashboard' },
            { title: 'Usuarios', icon: 'account_circle', to: 'users-index' },
        ],
    }),
    watch: {
        mini() {
            if ( this.$vuetify.breakpoint.mdAndDown ) {
                this.mini = false
            }
        }
    },
    created(){
        this.mini = true
        this.drawer = true
        if ( this.$vuetify.breakpoint.mdAndDown ) {
            this.drawer = false
        }
    },
    methods: {
        openDrawerMenu() {
            if ( this.$vuetify.breakpoint.mdAndDown ) {
                this.mini = false
                this.drawer = true
            }
            else {
                this.mini = !this.mini
            }
        }
    }
}
</script>

<style lang="stylus">
@import '~vuetify/src/stylus/settings/_colors'
.theme--light
    &.v-navigation-drawer
        box-shadow: 0 0 12px rgba(#000,.1)
    &.sidebar-items
        .v-list__tile__title,
        .v-list__tile__action .v-icon
            color: $blue-grey.darken-2
    .v-navigation-drawer__border
        width: 0
</style>
