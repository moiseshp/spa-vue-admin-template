<template>

    <layout-auth :alert="alert">

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
                :loading="loading.submit"
                :disabled="loading.submit">Enviar enlace</v-btn>

        </v-form>

        <footer class="text-xs-center mt-4">
            <router-link :to="{ name:'login' }">
                &larr; Volver</router-link>
        </footer>

    </layout-auth>

</template>

<script>
import LayoutAuth from '@/layouts/Auth.vue'
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'

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
        alert : {},
        show: false,
        form: {
            email: null,
        },
        loading: {
            submit: false
        }
    }),
    computed: {
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
                // do your submit logic here
                this.loading.submit = true
                setTimeout(() => {
                    this.loading.submit = false

                    if (false) {
                        this.alert = {
                            value: true,
                            type: 'info',
                            message: 'Un correo se ha enviado para proceder con el cambio.'
                        }
                    }
                    else {
                        this.alert = {
                            value: true,
                            type: 'error',
                            message: 'Mensaje de error del servicio.'
                        }
                    }
                }, 1500)
            }
            // axios.post('login',data)
            //      .then(response => {
            //     console.log(response.data[0])
            // });
        }
        // beforeRouteEnter (to, from, next) {
        //     if (localStorage.getItem('jwt')) {
        //         return next('board');
        //     }
        //     next();
        // }
    }
}
</script>
<style>
</style>
