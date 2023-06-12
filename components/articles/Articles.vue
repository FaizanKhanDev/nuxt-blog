<template>
    <div>
        <v-card class="mx-auto">
            <div class="hover-wrapper">
                <v-img height="250" eager position="center center" :src="image"></v-img>
            </div>
            <v-card-title>{{ title }}</v-card-title>
            <v-card-text>{{ overview }} <h6>read more...</h6> </v-card-text>
            <v-card-text>Date: {{ date }}</v-card-text>
            <v-divider class="mt-3"></v-divider>
        </v-card>
    </div>
</template>

<script>

export default {
    name: "Articles",
    data() {
        return {

        }
    },
    props: {
        title: {
            type: String,
            default: "",
        },
        date: {
            type: String,
            default: "",

        },
        overview: {
            type: String,
            default: "",

        },
        content: {
            type: String,
            default: "",
        },
        image: {
            type: String,
            default: "",
        },

    },
    methods: {

    },
    mounted() {
    }

}
</script>

<style>
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