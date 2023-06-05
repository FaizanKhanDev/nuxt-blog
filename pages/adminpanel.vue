<template>
    <v-app>
        <AdminPanelArticlesEditdeleteupdate />
    </v-app>
</template>

<script>
import AdminPanelArticlesEditdeleteupdate from "@/components/articles/adminpanelarticles/AdminPanelArticlesEditdeleteupdate.vue";
export default {
    layout: 'adminLayout',
    components: {
        AdminPanelArticlesEditdeleteupdate
    },
    data() {
        return {

        };
    },
    methods: {

    },
};
</script>
