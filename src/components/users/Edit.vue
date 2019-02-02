<template>

    <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        scrollable>

        <v-btn icon slot="activator" @click="edit" class="mx-0">
            <v-icon small>edit</v-icon>
        </v-btn>

        <v-card tile>
            <v-toolbar card color="b-gradient-left white--text">
                <v-btn icon dark @click="close">
                    <v-icon>close</v-icon>
                </v-btn>
                <v-toolbar-title>Edit User</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn dark flat @click="onSubmit">Guardar</v-btn>
                </v-toolbar-items>
            </v-toolbar>

            <v-card-text class="pa-4">

                <v-form>

                    <v-text-field
                        v-model="form.name"
                        label="Nombre"
                        required></v-text-field>

                    <v-text-field
                        v-model="form.last_name"
                        label="Last Name"
                        required></v-text-field>

                    <v-text-field
                        v-model="form.email"
                        label="Email"
                        required></v-text-field>

                </v-form>

            </v-card-text>

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
        edit(){
            axios.get('users/'+this.uuid+'/edit')
            .then( resp => {
                this.form = resp.data
            })
        },
        close() {
            this.dialog = false
            this.form = Object.assign({},{})
        },
        onSubmit() {
            console.log('submit',this.form)
            this.$emit('update',this.form)
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
