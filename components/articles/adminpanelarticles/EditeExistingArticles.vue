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
                <h1 class="text-center">Add New Article</h1>
                <v-form action="" @submit.prevent="addArticles" v-model="valid">
                    <v-text-field :rules="errorRules" outlined label="Image Link" v-model="file"></v-text-field>
                    <v-text-field :rules="errorRules" outlined label="title" v-model="title"></v-text-field>
                    <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent width="290px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field :rules="errorRules" outlined v-model="date" label="Picker in dialog" readonly
                                v-bind="attrs" v-on="on"></v-text-field>
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
                    <v-text-field outlined label="overview" v-model="overview" :rules="errorRules"></v-text-field>
                    <v-textarea :rules="errorRules" v-model="content" label="description"></v-textarea>
                    <v-btn :disabled="!valid" type="submit">Add Article</v-btn>
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
            image: null,
            title: "",
            overview: "",
            file: null,
            content: "",
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
        addArticles() {
            const articleData = {
                file: this.file,
                title: this.title,
                date: this.date,
                overview: this.overview,
                content: this.content,
            };
            console.log(this.file)
            this.successMessage = true
            setTimeout(() => {
                this.successMessage = false

            }, 2000)
                ;
            this.$store.dispatch('app/add', articleData);
            this.file = "";       // Reset title field
            this.title = "";       // Reset title field
            this.date = "";        // Reset date field   // Reset revenue field
            this.overview = "";    // Reset overview field
            this.content = "";     // Reset content field
        },


    },
    async fetch() {
        const _id = this.$route.params.id
    }
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