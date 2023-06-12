<template>
    <div>
        <v-col v-for="(article, i) in articlesData" :key="i" cols="12" md="12">
            <ArticlesDetail :image="article.file" :title="article.title" :date="article.date" :overview="article.overview"
                :content="article.content" />
        </v-col>
    </div>
</template>

<script>
import ArticlesDetail from "@/components/articles/ArticlesDetail.vue";

export default {
    components: {
        ArticlesDetail,
    },
    data() {
        return {
            articlesData: null,
        };
    },
    async fetch() {
        const articleId = this.$route.params.id; // Access the dynamic route parameter
        this.articlesData = await fetch(`http://localhost:30001/articles/${articleId}`).then(
            (res) => res.json()
        );
    },
    mounted() {


    }
};
</script>

<style></style>
