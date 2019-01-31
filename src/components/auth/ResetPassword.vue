<template>

    <layout-auth>

        <h2 class="text-xs-center headline font-weight-light mb-3">
            Cambiar contraseña
        </h2>

        <div class="text-xs-center">
            <v-progress-circular
                v-if="loading.findToken"
                class="mt-4 text-xs-center"
                color="primary" indeterminate>
            </v-progress-circular>
        </div>

        <section v-if="form.email">

            <article class="text-xs-center mb-3">
                <v-chip color="blue-grey lighten-5 elevation-0">
                    <v-avatar class="mr-1">
                        <v-icon>account_circle</v-icon>
                    </v-avatar>
                    {{ form.email }}&nbsp;
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
import { mapState } from 'vuex';
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
        form: {
            email: null,
            token: null,
            password: null,
            password_confirmation: null,
        }
    }),
    created() {

        this.form.token = this.$route.params.token

        this.$store.dispatch('resetPassword/findToken',this.form.token)
        .then((resp) => {
            this.form.email = resp.data.email
        })

    },
    computed: {
        ...mapState('resetPassword',['loading']),
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
                this.$store.dispatch('resetPassword/reset',this.form)
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
