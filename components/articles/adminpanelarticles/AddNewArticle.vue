<template>
    <b-container>
        <b-row>
            <b-col cols="6" class="add-new-articles">
                <div v-if="successMessage">
                    <v-card disabled loading elevation="0">
                        <v-alert type="info">
                            <div class="text--h6">
                                Your Article has been added
                            </div>
                        </v-alert>
                    </v-card>
                </div>

                <h1 class="text-center">Add New Article</h1>
                <v-form action="" @submit.prevent="addArticles" v-model="valid">
                    <!-- enctype="multipart/form-data" -->
                    <!-- <div @dragover="dragover" @dragleave="dragleave" @drop="drop"> -->
                    <!-- <input type="file" @change="onChange" ref="file" accept=".pdf,.jpg,.jpeg,.png" /> -->
                    <!-- <div v-if="isDragging">
                            release and Drop here
                        </div> -->
                    <!-- </div> -->
                    <!-- <b-form-file accept=".pdf,.jpg,.jpeg,.png" v-model="file2" class="mt-3" plain></b-form-file> -->
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
                    <!-- <ckeditor :editor="editor" v-model="editorData"></ckeditor> -->
                    <v-textarea :rules="errorRules" v-model="content" label="description"></v-textarea>
                    <v-btn :disabled="!valid" type="submit">Add Article</v-btn>
                </v-form>
            </b-col>

        </b-row>
    </b-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
    name: "AddNewArticle",
    components: {
        // ckeditor: CKEditor.component
    },
    data() {
        return {
            valid: false,
            successMessage: false,
            image: null,
            title: "",
            overview: "",
            content: "",
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            modal: false,
            isDragging: false,
            file: "",
            // file2: null,
            errorRules: [
                (v) => !!v || "Required"
            ]
        }
    },
    computed: {

    },
    methods: {
        ...mapActions('app', ['add']),
        onChange() {
            // this.file = [...this.$refs.file.files]
            // const selectedFile = event.target.files[0];
            // this.file = URL.createObjectURL(selectedFile);
        },
        dragover(e) {
            // e.prevent.default();
            // this.isDragging = true;
        },
        dragleave(e) {
            // e.prevent.default();
            // this.isDragging = false;

        },
        drop(e) {
            // e.prevent.default();
            // // this.$refs.file.files = e.dataTransfer.file;
            // this.onChange();
            // this.isDragging = false;
        },


        addArticles() {
            // this.file = this.$refs.file.files[0]
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

            // this.add(articleData);
            this.$store.dispatch('app/add', articleData);
            this.file = "";       // Reset title field
            this.title = "";       // Reset title field
            this.date = "";        // Reset date field   // Reset revenue field
            this.overview = "";    // Reset overview field
            this.content = "";     // Reset content field
        },


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