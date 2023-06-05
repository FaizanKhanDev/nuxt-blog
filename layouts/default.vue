<template>
  <v-app dark>
    <Navbar />
    <Nuxt />
  </v-app>
</template>

<script>
import Navbar from "@/components/navbar/Navbar.vue"
export default {
  name: 'DefaultLayout',
  components: {
    Navbar
  },
  data() {
    return {
    }
  }
}
</script>
