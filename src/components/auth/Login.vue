<template>

    <layout-auth :alert="alert">

        <h2 class="text-xs-center headline font-weight-light mb-4">
            Ingresa a tu cuenta</h2>

        <v-form>

            <v-text-field
                v-model="form.email"
                label="Correo Electrónico"
                :error-messages="emailErrors"
                @input="$v.form.email.$touch()"
                @blur="$v.form.email.$touch()"
                required
                ></v-text-field>

            <v-text-field
                v-model="form.password"
                :append-icon="show ? 'visibility_off' : 'visibility'"
                :type="show ? 'text' : 'password'"
                label="Contraseña"
                @click:append="show = !show"
                :error-messages="passwordErrors"
                @input="$v.form.password.$touch()"
                @blur="$v.form.password.$touch()"
                required
                ></v-text-field>

            <v-btn
                class="mt-4"
                block color="primary" large round
                @click="onSubmit"
                :loading="loading.submit"
                :disabled="loading.submit">Ingresar</v-btn>

        </v-form>

        <footer class="text-xs-center mt-4">
            <router-link :to="{ name:'forgot-password' }">
                ¿Olvidaste tu contraseña?</router-link>
        </footer>

    </layout-auth>

</template>

<script>
import LayoutAuth from '@/layouts/Auth.vue'
import { validationMixin } from 'vuelidate'
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
    name: 'Login',
    components : {
        LayoutAuth
    },
    mixins: [validationMixin],
    validations: {
        form: {
            email: { required, email },
            password: { required, minLength: minLength(5) },
        }
    },
    data(){
        return {
            alert : {},
            show: false,
            form: {
                email: null,
                password: null,
            },
            loading: {
                submit: false
            }
        }
    },
    computed: {
        emailErrors () {
            const errors = []
            if (!this.$v.form.email.$dirty) return errors
            !this.$v.form.email.email && errors.push('Must be valid e-mail')
            !this.$v.form.email.required && errors.push('E-mail is required')
            return errors
        },
        passwordErrors () {
            const errors = []
            if (!this.$v.form.password.$dirty) return errors
            !this.$v.form.password.minLength && errors.push('Name must be at most 10 characters  long')
            !this.$v.form.password.required && errors.push('Contraseña is required.')
            return errors
        },
    },
    created() {
        // this.$emit('update:layout', LayoutAuth)
        // console.log('Login')
        // this.onSubmit()
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
            console.log(this.form)
            // this.$router.push({ name: 'dashboard' });
            // this.$router.dashboard;
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
