<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="12" md="4" v-for="(article, i ) in articlesData" :key="i">
          <nuxt-link :to="`articles/${article.articleData.title}`">
            <ArticlesDetail :title="article.articleData.title" :date="article.articleData.date"
              :overview="article.articleData.overview" :content="article.articleData.content" />
          </nuxt-link>
        </b-col>
      </b-row>
    </b-container>



  </div>
</template>
  
<script>
import ArticlesDetail from "@/components/articles/ArticlesDetail.vue";

export default {
  name: 'IndexPage',
  componets: {
    ArticlesDetail,


  },
  data() {
    return {
      articlesData: null,

    }
  },
  async fetch() {
    this.articlesData = await fetch(
      "http://localhost:30001/articles"
    ).then((res) => res.json())
    console.log(this.articlesData)

  },
  // async fetch() {
  //   this.articlesData = await fetch(
  //     "http://localhost:30001/articles?search=" + this.searchTerm
  //   ).then((res) => res.json());
  // },
  // computed: {
  //   filteredArticles() {
  //     if (!this.articlesData) {
  //       return [];
  //     }
  //     return this.articlesData.filter((article) => {
  //       const searchRegex = new RegExp(this.searchTerm, "i");
  //       return (
  //         article.title.match(searchRegex) ||
  //         article.overview.match(searchRegex)
  //       );
  //     });
  //   }
  // },
  mounted() {
  },
  computed: {

  },


}
</script>
<style></style>