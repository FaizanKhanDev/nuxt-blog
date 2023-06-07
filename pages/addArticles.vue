<template>
    <v-form @submit.prevent="addArticles">
        <v-text-field outlined label="title" v-model="title"></v-text-field>
        <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent width="290px">
            <template v-slot:activator="{ on, attrs }">
                <v-text-field outlined v-model="date" label="Picker in dialog" readonly v-bind="attrs"
                    v-on="on"></v-text-field>
            </template>
            <v-date-picker v-model="date" scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal = false">
                    Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.dialog.save(date)">
                    OK
                </v-btn>
            </v-date-picker>
        </v-dialog>
        <v-text-field outlined label="overview" v-model="overview"></v-text-field>
        <v-textarea v-model="content" label="description"></v-textarea>
        <v-btn type="submit">Add Article</v-btn>
    </v-form>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: "addarticles",
    data() {
        return {
            title: "",
            overview: "",
            content: "",
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            modal: false,
        }
    },
    computed: {
        ...mapState('app', {
            titles: state => state.titles
        })
    },
    methods: {
        ...mapActions('app', ['add']),
        addArticles() {
            const articleData = {
                title: this.title,
                date: this.date,
                overview: this.overview,
                content: this.content,
            };
            this.add(articleData);
            this.title = "";       // Reset title field
            this.date = "";        // Reset date field   // Reset revenue field
            this.overview = "";    // Reset overview field
            this.content = "";     // Reset content field
        }
    }
}
</script>

<style></style>