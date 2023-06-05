<template>
    <div>

        <h1>{{ title }}</h1>
        <h3> Release Date: {{ date }}</h3>
        <p>{{ overview }}</p>
        <p>{{ content }} </p>
        <!-- <img :src="image" alt="" class="img-fluide"> -->

    </div>
</template>

<script>
export default {
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

    }
}
</script>

<style></style>