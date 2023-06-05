<template>
    <div>
        <v-navigation-drawer elevation="0" app v-model="drawer" temporary>

        </v-navigation-drawer>

        <v-app-bar app elevation="0">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title>Faizan Khan</v-toolbar-title>
        </v-app-bar>




    </div>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
        }
    }
}
</script>

<style></style>
