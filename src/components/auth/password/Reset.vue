<template>

    <layout-auth :alert="alert">

        <h2 class="text-xs-center headline font-weight-light mb-3">
            Cambiar contraseña
        </h2>

        <article class="text-xs-center mb-3">
            <v-chip color="primary lighten-4">
                <v-avatar>
                    <v-icon>account_circle</v-icon>
                </v-avatar>
                moiseseduardo.hp@gmail.com &nbsp;
            </v-chip>
        </article>

        <v-form>

            <v-text-field
                v-model="form.password"
                :append-icon="show ? 'visibility_off' : 'visibility'"
                :type="show ? 'text' : 'password'"
                label="Nueva Contraseña"
                @click:append="show = !show"
                :error-messages="passwordErrors"
                @input="$v.form.password.$touch()"
                @blur="$v.form.password.$touch()"
                required
                ></v-text-field>

            <v-text-field
                v-model="form.repeatPassword"
                :append-icon="show ? 'visibility_off' : 'visibility'"
                :type="show ? 'text' : 'password'"
                label="Repite la Contraseña"
                @click:append="show = !show"
                :error-messages="repeatPasswordErrors"
                @input="$v.form.repeatPassword.$touch()"
                @blur="$v.form.repeatPassword.$touch()"
                required
                ></v-text-field>

            <v-btn
                class="mt-4 elevation-0"
                block color="primary" large round
                @click="onSubmit"
                :loading="loading.submit"
                :disabled="loading.submit">Cambiar contraseña</v-btn>

        </v-form>

    </layout-auth>

</template>

<script>
import LayoutAuth from '@/layouts/Auth.vue'
import { validationMixin } from 'vuelidate'
import { required, sameAs, minLength } from 'vuelidate/lib/validators'

export default {
    name: 'Login',
    components : {
        LayoutAuth
    },
    mixins: [validationMixin],
    validations: {
        form: {
            password: { required, minLength: minLength(6) },
            repeatPassword: { sameAsPassword: sameAs('password') },
        }
    },
    data: () => ({
        alert : {},
        show: false,
        form: {
            password: null,
            repeatPassword: null,
        },
        loading: {
            submit: false
        }
    }),
    computed: {
        passwordErrors () {
            const errors = []
            if (!this.$v.form.password.$dirty) return errors
            !this.$v.form.password.required && errors.push('password is required')
            !this.$v.form.password.minLength && errors.push('Min 6 letters')
            return errors
        },
        repeatPasswordErrors () {
            const errors = []
            if (!this.$v.form.repeatPassword.$dirty) return errors
            !this.$v.form.repeatPassword.sameAsPassword && errors.push('Las contraseñas no coinciden')
            return errors
        },
    },
    methods: {
        onSubmit(){
            console.log('submit!')
            this.$v.$touch()
            if (this.$v.$invalid) {
                this.alert = {
                    value : true,
                    type : 'error',
                    message : 'Error message'
                }
                return
            } else {
                // do your submit logic here
                this.loading.submit = true
                setTimeout(() => {
                    this.loading.submit = false
                    this.alert = {
                        value : true,
                        type : 'info',
                        message : 'Info message'
                    }
                }, 1500)
            }
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
