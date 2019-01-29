<template>
    <v-list-tile @click="dialog = true">
        <v-list-tile-title>Cambiar contraseña</v-list-tile-title>
    </v-list-tile>
</template>

<script>
export default {
    data: () => ({
        dialog: false
    })
}
</script>
