<template>

    <layout-auth>

        <h2 class="text-xs-center headline font-weight-light mb-3">
            Cambiar contraseña
        </h2>

        <div class="text-xs-center">
            <v-progress-circular
                v-if="loading.token"
                class="mt-4"
                color="primary" indeterminate>
            </v-progress-circular>
            <!-- <div v-if="!loading.token && !email">
                <v-btn round class="elevation-0"
                    :to="{ name: 'forgot-password' }">
                    Intentar otra vez
                </v-btn>
            </div> -->
        </div>

        <section v-if="email">

            <article class="text-xs-center mb-3">
                <v-chip color="blue-grey lighten-5 elevation-0">
                    <v-avatar>
                        <v-icon>account_circle</v-icon>
                    </v-avatar>
                    {{ email }}&nbsp;
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
                    v-model="form.password_confirmation"
                    :append-icon="show ? 'visibility_off' : 'visibility'"
                    :type="show ? 'text' : 'password'"
                    label="Repite la Contraseña"
                    @click:append="show = !show"
                    :error-messages="password_confirmationErrors"
                    @input="$v.form.password_confirmation.$touch()"
                    @blur="$v.form.password_confirmation.$touch()"
                    required
                    ></v-text-field>

                <v-btn
                    class="mt-4 elevation-0"
                    block color="primary" large round
                    @click="onSubmit"
                    :loading="loading.submit"
                    :disabled="loading.submit">Cambiar contraseña</v-btn>

            </v-form>

        </section>

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
            password_confirmation: { sameAsPassword: sameAs('password') },
        }
    },
    data: () => ({
        show: false,
        showForm: false,
        token : null,
        email : null,
        form: {
            password: null,
            password_confirmation: null,
        },
        loading: {
            token: true,
            submit: false
        }
    }),
    created() {

        this.token = this.$route.params.token

        console.log(this.token )
        axios.get('password/reset/'+this.token)
        .then(resp => {
            this.loading.token = false
            this.email = resp.data.email
            this.form.token = this.token
             console.log(resp)
        })
        .catch(err => {
            // No pasó validación: Se redirecciona al usuario
            console.log(err)
            this.$router.push({ name : '404' })
        })

    },
    computed: {
        passwordErrors () {
            const errors = []
            if (!this.$v.form.password.$dirty) return errors
            !this.$v.form.password.required && errors.push('password is required')
            !this.$v.form.password.minLength && errors.push('Min 6 letters')
            return errors
        },
        password_confirmationErrors () {
            const errors = []
            if (!this.$v.form.password_confirmation.$dirty) return errors
            !this.$v.form.password_confirmation.sameAsPassword && errors.push('Las contraseñas no coinciden')
            return errors
        },
    },
    methods: {
        onSubmit(){
            this.$v.$touch()
            if (this.$v.$invalid) return
            else {
                // do your submit logic here
                axios.post('password/reset',this.form)
                .then(resp => {
                    console.log(resp)
                })
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
