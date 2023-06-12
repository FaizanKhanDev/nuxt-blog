<template>
  <div>
    <v-container>
      <v-row class="album p-1" v-if="skeletonLoader">
        <template>
          <v-col cols="12" md="4" v-for="i in 10" :key="i">
            <v-sheet :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`" class="pa-3">
              <v-skeleton-loader type="card-avatar, article, actions"></v-skeleton-loader>
            </v-sheet>
          </v-col>
        </template>
      </v-row>
      <v-row class="album p-1" v-else>
        <v-col v-for="(article, i ) in articlesData" :key="i" cols="12" md="4">
          <!-- <nuxt-link :to="`articles/${article.articleData.title}`"> -->
          <nuxt-link :to="`articles/${article.id}`">
            <Articles :image="article.articleData.file" :title="article.articleData.title"
              :date="article.articleData.date" :overview="article.articleData.overview"
              :content="article.articleData.content" />
          </nuxt-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
  
<script>
import { mapState } from "vuex";
import Articles from "@/components/articles/Articles.vue";

export default {
  name: 'IndexPage',
  componets: {
    Articles,


  },
  data() {
    return {
      articlesData: null,
      skeletonLoader: true,


    }
  },
  inject: {
    theme: {
      default: { isDark: false },
    },
  },
  methods: {
    // updateMessage(e) {
    //   this.$store.commit('updateMessage', e.target.value)
    //   console.log(e.target.value)
    // }
    hideSkeletonLoading() {
      setTimeout(() => {
        this.skeletonLoader = false
      }, 1000)
    }
  },
  async fetch() {
    this.articlesData = await fetch(
      "http://localhost:30001/articles"
    ).then((res) => res.json())
    // console.log(this.articlesData)

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
    this.hideSkeletonLoading()
  },
  computed: {
    // ...mapState({
    //   message: state => state.obj.message
    // })
  },


}
</script>
<style></style>