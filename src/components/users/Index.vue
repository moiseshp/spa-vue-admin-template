<template>
    <layout-admin>
        <h1>Usuarios</h1>
        <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet.
        </p>


    </layout-admin>
</template>

<script>
import LayoutAdmin from '@/layouts/Admin.vue';

export default {
    name: 'Index',
    components : {
        LayoutAdmin
    },
    // created() {
    //     this.$emit('update:layout', LayoutDashboard);
    //     console.log('Home')
    // },
}
</script>
