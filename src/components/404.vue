<template>

    <layout-error>

        <h2 class="wrapper-code display-4 mb-4">
            404
        </h2>
        <h5 class="headline font-weight-light">
            Lo sentimos, la página que estás buscando no se pudo encontrar.
        </h5>

        <div class="wrapper-image primary--text text--lighten-1">
            :(
        </div>

    </layout-error>

</template>

<script>

import LayoutError from '@/layouts/Error.vue'
export default {
    name: 'Error',
    components : {
        LayoutError
    },
}
</script>
