<template>

    <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-width="0"
        offset-y right
        nudge-bottom="0">

        <v-btn flat class="white--text" slot="activator">
            <strong class="text-lowercase">moiseseduardo.hp@gmail.com</strong>
            <v-icon right>account_circle</v-icon>
        </v-btn>

        <v-card>
          <v-list>
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title>John Leider</v-list-tile-title>
                <v-list-tile-sub-title>
                    Founder of Vuetify.js
                </v-list-tile-sub-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-btn
                  :class="fav ? 'red--text' : ''"
                  icon
                  @click="fav = !fav"
                >
                  <v-icon>favorite</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat @click="menu = false">Cancel</v-btn>
            <v-btn color="primary" flat @click="menu = false">Save</v-btn>
          </v-card-actions>

        </v-card>
      </v-menu>



</template>

<script>
export default {
    data:() => ({
        menu : null,
        fav : null
    })

}
</script>
