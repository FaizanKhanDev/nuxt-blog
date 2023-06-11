<template>
    <div>
        <v-container>
            <v-row class="album p-1" v-if="skeletonLoader">
                <template>
                    <v-col cols="12" md="4" v-for="i in 6" :key="i">
                        <v-sheet :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`" class="pa-3">
                            <v-skeleton-loader type="card-avatar, article, actions"></v-skeleton-loader>
                        </v-sheet>
                    </v-col>


                </template>
            </v-row>
            <v-row class="album p-1" v-else>
                <template>
                    <v-col cols="12" md="4" v-for="(data, index) in articlesData" :key="index">
                        <v-card class="mx-auto">
                            <div class="hover-wrapper">
                                <v-img height="250" eager position="center center"
                                    src="https://images.pexels.com/photos/2944537/pexels-photo-2944537.jpeg?">
                                </v-img>
                            </div>

                            <v-card-title>{{ data.articleData.title }}</v-card-title>
                            <v-card-text>{{ data.articleData.overview }}</v-card-text>
                            <v-card-actions class="justify-space-between">
                                <v-btn-toggle dense>
                                    <v-btn text>Read</v-btn>
                                    <v-btn text>Update</v-btn>
                                    <v-dialog ref="deleteDialog" v-model="isActive" persistent max-width="290">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn text v-bind="attrs" v-on="on">
                                                Delete
                                            </v-btn>
                                        </template>
                                        <v-card>
                                            <v-card-title class="text-h5">
                                                Are You Sure to delete it?
                                            </v-card-title>
                                            <v-card-actions>
                                                <v-spacer></v-spacer>
                                                <v-btn color="green darken-1" text>
                                                    cancel
                                                </v-btn>
                                                <v-btn color="green darken-1" text @click="deleted(data)">
                                                    Agree
                                                </v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </v-dialog>
                                </v-btn-toggle>
                                <div class="overline">Date:{{ data.articleData.date }}</div>
                            </v-card-actions>
                            <v-divider class="mt-3"></v-divider>
                            <v-card-text>
                                <div class="d-flex align-center">
                                    <v-col sm="3">
                                        <v-img height="60" width="60" aspect-ratio class="rounded-circle"
                                            src="https://images.pexels.com/photos/1482476/pexels-photo-1482476.jpeg?">
                                        </v-img>
                                    </v-col>
                                    <v-col sm="9">
                                        <p class="mb-0 subtitle-1">Author:Admin</p>
                                        <p class="mb-0">Happy Guy</p>
                                    </v-col>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </template>
            </v-row>

        </v-container>

    </div>
</template>
                
<script>


import { mapActions, mapState } from 'vuex';
export default {
    components: {

    },
    data() {
        return {
            articlesData: null,
            skeletonLoader: false,
            dialog: false,
            isActive: false,
            data: null,

        };


    },
    inject: {
        theme: {
            default: { isDark: false },
        },
    },
    methods: {
        openDialog() {
            this.$refs.deleteDialog.open()
        },
        deleted(data) {
            this.isActive = false;
            this.$store.dispatch('app/deleted', data);
        },
        open() {
            this.isActive = true
        },
        hideSkeletonLoader() {
            setTimeout(() => {
                this.skeletonLoader = false;
            }, 1000);
        },
        // ...mapActions("app", ["deleted"]),




    },
    computed: {
        ...mapState('app', ['articles']),

    },
    watch: {


    },
    mounted() {
        this.hideSkeletonLoader();
    },

    async fetch() {
        this.articlesData = await fetch(
            "http://localhost:30001/articles"
        ).then((res) => res.json())

    },

}
</script>

<style scoped>
.album {
    margin-top: 5rem;

}

.hover-wrapper {
    display: block;
    position: relative;
    overflow: hidden;
}

.hover-wrapper .v-image {
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
}

.hover-wrapper:hover .v-image {
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -o-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
}
</style>