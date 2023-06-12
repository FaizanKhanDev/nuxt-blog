<template>
    <b-container>
        <b-row>
            <b-col cols="6" class="add-new-articles">
                <div v-if="successMessage">
                    <v-card disabled loading elevation="0">
                        <v-alert type="info">
                            <div class="text--h6">
                                Your Article has been Updated
                            </div>
                        </v-alert>
                    </v-card>
                </div>
                <h1 class="text-center">Updating the Existing Article</h1>
                <v-form action="" @submit.prevent="updateArticles" v-model="valid">


                    <v-text-field outlined label="Image Link" v-model="file"></v-text-field>
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
                            <v-btn color="primary" @click="$refs.dialog.save(date)">
                                OK
                            </v-btn>
                        </v-date-picker>
                    </v-dialog>
                    <v-text-field outlined label="overview" v-model="overview"></v-text-field>
                    <v-textarea v-model="content" label="description"></v-textarea>
                    <v-btn :disabled="!valid" type="submit">Add Article</v-btn>
                    <nuxt-link to="/adminpanel">
                        <v-btn type="button">Cancel</v-btn>

                    </nuxt-link>
                </v-form>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: "EditeExistingArticles",
    components: {
    },
    data() {
        return {
            valid: false,
            successMessage: false,
            title: "",
            overview: "",
            content: "",
            file: "",
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            modal: false,
            errorRules: [
                (v) => !!v || "Required"
            ]
        }
    },
    computed: {

    },
    methods: {
        ...mapActions('app', ['add']),
        // updateArticles() {
        //     this.$store.dispatch("app/updated")
        // },
        ...mapActions('app', ['updateArticle']),
        updateArticles() {
            const articleData = {
                id: this.$route.params.id,
                file: this.file,
                title: this.title,
                overview: this.overview,
                content: this.content,
                date: this.date,
            }
            this.updateArticle(articleData)
            this.successMessage = true
            setTimeout(() => {
                this.successMessage = false

            }, 2000)
        },

    },
    async fetch() {
        const _id = this.$route.params.id;
        const response = await fetch(`http://localhost:30001/articles/${_id}`);
        const articleData = await response.json();

        if (response.ok) {
            const { file, title, overview, content, date } = articleData.articleData;

            this.file = file;
            this.title = title;
            this.overview = overview;
            this.content = content;
            this.date = date;
        } else {
            // Handle error when fetching the article data
            console.error('Failed to fetch article data');
        }

    },
}
</script>
<style scoped>
.add-new-articles {
    margin: auto;
    margin-top: 5rem;
}

.add-new-articles h1 {
    margin-bottom: 5rem;
}

.my-progress-bar {
    top: 19px !important;
}
</style>