<template>
    <v-btn icon id="mode-switcher" @click="$vuetify.theme.dark = !$vuetify.theme.dark">
        <v-icon :color="($vuetify.theme.dark) ? 'primary' : 'primary lighten-4'">
            {{ ($vuetify.theme.dark) ? 'mdi-weather-night' : 'mdi-weather-sunny' }}
        </v-icon>
    </v-btn>
</template>

<script>
export default {
    name: "Navbar",
    computed: {
        isDark() {
            return (this.$vuetify.theme.dark)
                ? 'dark'
                : 'light'
        }
    },
}
</script>

<style></style>