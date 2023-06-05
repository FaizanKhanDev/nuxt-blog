<template>
    <v-app dark>
        <AdminNavbar />
        <Nuxt />
    </v-app>
</template>

<script>
import AdminNavbar from "@/components/adminnavbar/AdminNavbar.vue"
export default {
    name: 'DefaultLayout',
    components: {
        AdminNavbar
    },
    data() {
        return {
        }
    }
}
</script>
