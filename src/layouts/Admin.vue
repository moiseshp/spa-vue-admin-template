<template>

    <v-app>

        <v-toolbar class="b-gradient-left white--text elevation-0"
            fixed app clipped-right>
            <v-toolbar-side-icon
                class="white--text"
                @click.stop="sidebar = !sidebar"></v-toolbar-side-icon>

            <v-spacer></v-spacer>

            <v-toolbar-items>

                <v-btn icon class="white--text">
                    <v-icon>dashboard</v-icon>
                </v-btn>

                <v-btn icon class="white--text">
                    <v-icon>notifications</v-icon>
                </v-btn>

                <user-dropdown/>

            </v-toolbar-items>

        </v-toolbar>

        <v-navigation-drawer width="280" v-model="sidebar" app>

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
                            <v-btn icon @click.stop="sidebar = !sidebar">
                                <v-icon>close</v-icon>
                            </v-btn>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list>
            </v-toolbar>

            <v-list class="pt-3 sidebar-items">

                <div v-for="item in items" :key="item.title">

                    <v-list-group
                        class="blue-grey--text text--darken-3"
                        v-if="item.items.length"
                        :prepend-icon="item.action"
                        :value="true"
                        no-action>

                        <v-list-tile slot="activator">
                            <v-list-tile-content>
                                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>

                        <v-list-tile
                            class="blue-grey--text"
                            v-for="subItem in item.items"
                            :key="subItem.title"
                            @click="">

                            <v-list-tile-content>
                                <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                            </v-list-tile-content>

                            <v-list-tile-action>
                                <v-icon>{{ subItem.action }}</v-icon>
                            </v-list-tile-action>

                        </v-list-tile>
                    </v-list-group>

                    <v-list-tile v-else :to="{ name: item.to }"
                        class="blue-grey--text text--darken-3">
                        <v-list-tile-action>
                            <v-icon v-text="item.action"></v-icon>
                        </v-list-tile-action>
                        <v-list-tile-title v-text="item.title"></v-list-tile-title>
                    </v-list-tile>

                </div>
            </v-list>

        </v-navigation-drawer>

        <v-content>

            <v-container fluid class="mb-5">
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
    name: 'LayoutAdmin',
    props: {
        source: String
    },
    components : {
        UserDropdown
    },
    data: () => ({
        sidebar: false,
        items: [
            {
                action: 'dashboard',
                title: 'Dashboard',
                to: 'dashboard',
                items: []
            },
            {
                action: 'people',
                title: 'Users',
                to: 'users-index',
                items: []
            },
            {
              action: 'restaurant',
              title: 'Dining',
              items: [
                { title: 'Breakfast & brunch' },
                { title: 'New American' },
                { title: 'Sushi' }
              ]
            },
            {
              action: 'content_cut',
              title: 'Office',
              items: [
                { title: 'List Item' }
              ]
            },
            {
              action: 'local_offer',
              title: 'Promotions',
              items: [
                { title: 'List Item' }
              ]
            }
          ]
    }),
    created(){
        this.sidebar = true
        if ( this.$vuetify.breakpoint.mdAndDown ) {
            this.sidebar = false
        }
    }
}
</script>

<style lang="stylus">
@import '~vuetify/src/stylus/settings/_colors'
.theme--light
    .v-content__wrap
        background-color: rgba($blue-grey.lighten-5,0.1)

    &.v-navigation-drawer
        box-shadow: 0 0 10px rgba($blue-grey.darken-4,.1)

    &.sidebar-items

        &.v-list
            .v-list__group__header .v-icon,
            div[role="listitem"] .v-list__tile__action .v-icon
                font-size: 18px

            .v-list__group__header__prepend-icon
                .v-icon.theme--light
                    margin: 0 auto
                    margin-right: -13px

            div[role="listitem"] .v-list__tile__action .v-icon
                margin: 0 auto

            div[role="listitem"] .v-list__tile__action .v-icon,
            .v-list__group__header__prepend-icon
                .v-icon.theme--light
                    color: $blue-grey.darken-3

        // .v-list__group
        //     .v-list__group__header__prepend-icon
        //         .v-list__tile__title,
        //         .v-icon
        //             color: $blue-grey.darken-2
        //
        // .v-list__group__items
        //     .v-list__tile__content
        //         .v-list__tile__title
        //             color: $blue-grey.darken-1
        //             font-weight: 400

    .v-navigation-drawer__border
        width: 0

</style>
