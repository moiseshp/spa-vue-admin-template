<template>

    <layout-auth>

        <h2 class="text-xs-center headline font-weight-light mb-4">
            Olvidé mi contraseña
        </h2>

        <v-form>

            <v-text-field
                v-model="form.email"
                label="Correo Electrónico"
                :error-messages="emailErrors"
                @input="$v.form.email.$touch()"
                @blur="$v.form.email.$touch()"
                required
                ></v-text-field>

            <v-btn
                class="mt-4 elevation-0"
                block color="primary" large round
                @click="onSubmit"
                :loading="loading"
                :disabled="loading">Enviar enlace</v-btn>

        </v-form>

        <footer class="text-xs-center mt-4">
            <router-link to="/login">
                &larr; Volver</router-link>
        </footer>

    </layout-auth>

</template>

<script>
import LayoutAuth from '@/layouts/Auth.vue'
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'
import { mapState } from 'vuex';
export default {
    name: 'Login',
    components : {
        LayoutAuth
    },
    mixins: [validationMixin],
    validations: {
        form: {
            email: { required, email },
        }
    },
    data: () => ({
        show: false,
        form: {
            email: null,
        },
    }),
    computed: {
        ...mapState('login',['loading']),
        emailErrors () {
            const errors = []
            if (!this.$v.form.email.$dirty) return errors
            !this.$v.form.email.email && errors.push('Must be valid e-mail')
            !this.$v.form.email.required && errors.push('E-mail is required')
            return errors
        },
    },
    methods: {
        onSubmit(){
            this.$v.$touch()
            if (this.$v.$invalid) return
            else {
                this.$store.dispatch('forgotPassword/forgot',this.form)
                .then(resp => {
                    this.$store.dispatch('snackbar/show',{
                        text: resp.data.message,
                        color: 'success'
                    })
                    this.$router.push('/login')
                })
            }
        }
    }
}
</script>
<style>
</style>
