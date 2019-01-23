<template>
    <layout-error>
        <h1>Error</h1>
        <p>
            Lo sentimos! Hubo un inconveniente
        </p>
    </layout-error>
</template>

<script>

import LayoutError from '@/layouts/Error.vue'
export default {
    name: 'Error',
    components : {
        LayoutError
    },
    // created() {
    //     this.$emit('update:layout', LayoutDashboard);
    //     console.log('Home')
    // },
}
</script>
