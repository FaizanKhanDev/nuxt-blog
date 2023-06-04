<template>
    <v-form @submit.prevent="add(article)">
        <v-text-field v-model="article"></v-text-field>


        <v-btn type="submit">Add Article</v-btn>
    </v-form>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: "addarticles",
    data() {
        return {
            article: "faizankhan",
        }
    },
    computed: {
        ...mapState('app', {
            titles: state => state.titles
        })
    },
    methods: {
        ...mapActions('app', ['add'])

    }
}
</script>

<style></style>