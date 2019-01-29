<template>

<div>

    <v-list-tile @click="dialog = true">
        <v-list-tile-title>Editar perfil</v-list-tile-title>
    </v-list-tile>

    <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        scrollable>

        <v-card tile>
            <v-toolbar card color="b-gradient-left white--text">
                <v-btn icon dark @click="dialog = false">
                    <v-icon>close</v-icon>
                </v-btn>
                <v-toolbar-title>Editar perfil</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn dark flat @click="dialog = false">Guardar</v-btn>
                </v-toolbar-items>
            </v-toolbar>

            <v-card-text class="pa-4">

                <v-form>

                    <p>https://jsfiddle.net/meyubaraj/fLbe7r72/</p>

                    <v-text-field
                        v-model="form.email"
                        label="Nombre"
                        :error-messages="emailErrors"
                        @input="$v.form.email.$touch()"
                        @blur="$v.form.email.$touch()"
                        required></v-text-field>

                    <v-text-field
                        v-model="form.email"
                        label="Apellido"
                        :error-messages="emailErrors"
                        @input="$v.form.email.$touch()"
                        @blur="$v.form.email.$touch()"
                        required></v-text-field>

                    <v-text-field
                        v-model="form.email"
                        label="Teléfono"
                        :error-messages="emailErrors"
                        @input="$v.form.email.$touch()"
                        @blur="$v.form.email.$touch()"
                        required></v-text-field>

                    <v-text-field
                        v-model="form.email"
                        label="Correo electrónico"
                        :error-messages="emailErrors"
                        @input="$v.form.email.$touch()"
                        @blur="$v.form.email.$touch()"
                        required></v-text-field>

                    <v-text-field
                        v-model="form.password"
                        label="Foto de perfil"
                        :error-messages="passwordErrors"
                        @input="$v.form.password.$touch()"
                        @blur="$v.form.password.$touch()"
                        required></v-text-field>

                </v-form>

            </v-card-text>

        </v-card>
    </v-dialog>

</div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
    mixins: [validationMixin],
    validations: {
        form: {
            email: { required, email },
            password: { required, minLength: minLength(5) },
        }
    },
    data: () => ({
        show: false,
        form: {
            email: null,
            password: null,
        },
        dialog: false,
        loading: false
    }),
    computed: {
        emailErrors() {
            const errors = []
            if (!this.$v.form.email.$dirty) return errors
            !this.$v.form.email.email && errors.push('Must be valid e-mail')
            !this.$v.form.email.required && errors.push('E-mail is required')
            return errors
        },
        passwordErrors() {
            const errors = []
            if (!this.$v.form.password.$dirty) return errors
            !this.$v.form.password.minLength && errors.push('Name must be at most 10 characters  long')
            !this.$v.form.password.required && errors.push('Contraseña is required.')
            return errors
        },
    },
    methods: {
        onSubmit(){

        }
    }
}
</script>

<style lang="css" scoped>
</style>
