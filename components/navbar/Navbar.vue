<template>
    <div>
        <div class="my-header" dark elevation="0" color="#000">
            <b-container>
                <b-row>
                    <b-col cols="7" md="7">
                        <nuxt-link to="/">
                            <v-img :src="require('~/assets/images/navlogo.webp')" alt="" max-height="50"
                                max-width="50"></v-img>

                        </nuxt-link>
                    </b-col>
                    <b-col cols="5" md="5" class="search-box">
                        <v-text-field outlined dense dark placeholder="Search" append-icon="mdi-magnify"></v-text-field>
                        <v-btn icon id="mode-switcher" @click="$vuetify.theme.dark = !$vuetify.theme.dark">
                            <v-icon :color="isDark ? '#fff' : '#fff'">
                                {{ isDark ? 'mdi-weather-night' : 'mdi-weather-sunny' }}
                            </v-icon>
                        </v-btn>
                    </b-col>
                </b-row>

            </b-container>



        </div>

        <v-app-bar class="nav" dense dark elevation="0" color="#913fe2">
            <b-container>
                <b-row>
                    <b-col cols="12">
                        <ul class="p-0">
                            <li>
                                <nuxt-link to="/">Home</nuxt-link>
                            </li>
                            <li class="navigation-items">
                                <nuxt-link to="/">Bookmarks</nuxt-link>
                            </li>
                            <li class="navigation-items">
                                <nuxt-link to="/">Comics</nuxt-link>
                            </li>
                            <li class="navigation-items">
                                <nuxt-link to="/">Recruitment</nuxt-link>
                            </li>
                            <li class="navigation-items">
                                <nuxt-link to="/">Language</nuxt-link>
                            </li>
                        </ul>
                    </b-col>
                </b-row>
            </b-container>

        </v-app-bar>
    </div>
</template>

<script>
export default {
    name: "Navbar",
    computed: {
        isDark() {
            return this.$vuetify.theme.dark;
        },
    },
};
</script>

<style scoped>
.my-header {
    display: flex;
    align-items: center;
    height: 60px;
    background: var(--textBlack);
    justify-content: space-between;
    padding: 0 7rem;
}

.search-box {
    display: flex;
    padding: 17px;
    height: 60px;
}

#mode-switcher {
    position: relative;
    left: 2rem;
}

/* .nav {
    padding: 0 7rem;
} */

.nav ul {
    display: flex;
    list-style-type: none;
    align-items: center;
    margin: 0;
}



.nav ul li {
    color: var(--textWhite);
}

.navigation-items {

    margin-left: 30px;
}

.nav ul li a {
    padding: 15px 15px;
    color: var(--textWhite);
    font-size: 0.9rem;
    text-decoration: none;
    font-weight: 400;
}

.nav ul li a:hover {
    background-color: var(--secondayPurple);
}
</style>
