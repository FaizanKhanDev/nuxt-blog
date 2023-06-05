<template>
    <div>
        <v-container>
            <v-row class="album p-1">
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
                                    <v-btn text>Read now</v-btn>
                                    <v-btn text @click="share(post.id)">Share</v-btn>
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
export default {
    data() {
        return {
            articlesData: null,

        };


    },
    methods: {
        share(id) {
            alert("share id: " + id);
        },
    },
    async fetch() {
        this.articlesData = await fetch(
            "http://localhost:30001/articles"
        ).then((res) => res.json())
        console.log(this.articlesData)

    },
};
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