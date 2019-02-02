<template>
    <v-dialog
        v-model="dialog"
        max-width="300px">

        <v-btn icon slot="activator" @click="destroy" class="mx-0">
            <v-icon small>delete</v-icon>
        </v-btn>

        <v-card>
          <v-card-title>
            <span>Dialog 3</span>
            <v-spacer></v-spacer>
              <v-btn slot="activator" icon>
                <v-icon>close</v-icon>
              </v-btn>

          </v-card-title>
          <v-card-text>
          Eliminar {{ uuid }}
      </v-card-text>
          <v-card-actions class="text-align-right">
            <v-btn color="error" flat round @click="dialog=false">Eliminar</v-btn>
          </v-card-actions>
        </v-card>

    </v-dialog>

</template>

<script>
export default {
    props: ['uuid'],
    data: () => ({
        dialog: false,
        form: {},
    }),
    methods: {
        close() {
            this.dialog = false
            this.form = Object.assign({},{})
        },
        destroy() {
            console.log('submit',this.form)
            this.$emit('destroy',this.form)
            this.close()
            // Object.assign(this.desserts[this.editedIndex], this.editedItem)
            // axios.post('users/store',this.form)
            // .then(resp => {
            //     console.log(resp)
            // })
        },
    }
}
</script>

<style lang="css" scoped>
</style>
