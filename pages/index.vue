<template>
  <div>
    <ArticlesDetail title="first article" date="6-2-2023" revenue="300M" />



  </div>
</template>
  
<script>
import ArticlesDetail from "@/components/articles/ArticlesDetail.vue"
export default {
  name: 'IndexPage',
  data() {
    return {
      switch1: true,
    }
  },
  computed: {
    isDark() {
      return this.$vuetify.theme.dark;
    },
  },

}
</script>
<style></style>