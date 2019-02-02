<template>

    <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        scrollable>

        <v-btn slot="activator" color="primary" round class="elevation-0">New User</v-btn>

        <v-card tile>
            <v-toolbar card color="b-gradient-left white--text">
                <v-btn icon dark @click="close">
                    <v-icon>close</v-icon>
                </v-btn>
                <v-toolbar-title>Create User</v-toolbar-title>
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
    data: () => ({
        dialog: false,
        form: {},
    }),
    methods: {
        close() {
            this.dialog = false
            this.form = Object.assign({},{})
        },
        onSubmit() {
            console.log('submit')
            this.$emit('create',this.form)
            // Object.assign(this.desserts[this.editedIndex], this.editedItem)
            axios.post('users/store',this.form)
            .then(resp => {
                console.log(resp)
                this.close()
            })
        },
    }
}
</script>

<style lang="css" scoped>
</style>
