<template>

    <v-menu
        v-model="menu"
        :close-on-content-click="false"
        width="240"
        offset-y
        left>

        <v-btn flat class="white--text" slot="activator">
            <strong class="text-lowercase">moi@gmail.com</strong>
            <v-icon right>account_circle</v-icon>
        </v-btn>

        <v-card>
          <v-list>
            <v-list-tile  class="pa-2">

                <v-list-tile-action>
                    <v-icon>account_circle</v-icon>
                </v-list-tile-action>
              <!-- <v-list-tile-avatar>
                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
              </v-list-tile-avatar> -->

              <v-list-tile-content>
                <v-list-tile-title>Moisés Huaringa</v-list-tile-title>
                <v-list-tile-sub-title>
                    moiseseduardo.hp@gmail.com
                </v-list-tile-sub-title>
              </v-list-tile-content>

            </v-list-tile>
          </v-list>

          <v-divider></v-divider>

          <v-card-actions class="text-left">
            <v-spacer></v-spacer>
            <v-btn flat @click="menu = false">Cerrar Sesión</v-btn>
            <v-btn color="primary" flat @click="menu = false">Mi Perfil</v-btn>
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
