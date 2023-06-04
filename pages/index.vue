<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="12" md="4" v-for="(article, i ) in articlesData" :key="i">
          <nuxt-link :to="`articles/${article.title}`">
            <ArticlesDetail :title="article.title" :date="article.date" :revenue="article.revenue"
              :overview="article.overview" :image="article.image" />
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
    ArticlesDetail

  },
  data() {
    return {
      articlesData: null,

    }
  },
  async fetch() {
    this.articlesData = await fetch(
      "http://localhost:3000/articles"
    ).then((res) => res.json())
  },
  mounted() {

  },
  computed: {

  },


}
</script>
<style></style>