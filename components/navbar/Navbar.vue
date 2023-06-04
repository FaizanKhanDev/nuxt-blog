<template>
    <div>
        <!-- ======== DeskTop navigation bar ====== -->
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
                                {{ isDark ? "mdi-weather-night" : "mdi-weather-sunny" }}
                            </v-icon>
                        </v-btn>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <!-- ======== DeskTop navigation bar ====== -->

        <v-app-bar class="nav" dense dark elevation="0" color="#913fe2">
            <b-container>
                <b-row>
                    <!-- ======== Mobile navigation bar ====== -->
                    <b-col cols="12" class="my-navigation-col">
                        <v-app-bar-nav-icon @click="drawer"></v-app-bar-nav-icon>
                        <nuxt-link to="/">
                            <img :src="require('~/assets/images/navlogo.webp')" alt="" class="nav-logo" />
                        </nuxt-link>
                        <v-text-field outlined dense dark placeholder="Search" append-icon="mdi-magnify"
                            class="search-field"></v-text-field>
                        <v-btn icon id="mode-switcher" @click="$vuetify.theme.dark = !$vuetify.theme.dark">
                            <v-icon :color="isDark ? '#fff' : '#fff'">
                                {{ isDark ? "mdi-weather-night" : "mdi-weather-sunny" }}
                            </v-icon>
                        </v-btn>
                    </b-col>

                    <!-- ======== Mobile navigation bar ====== -->
                    <!-- ======== DeskTop navigation bar ====== -->
                    <b-col cols="12" class="my-navigation-col-2">
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
                    <!-- ======== DeskTop navigation bar ====== -->
                </b-row>
            </b-container>
        </v-app-bar>
        <!-- ======== Mobile navigation bar ====== -->
        <v-navigation-drawer v-model="navDrawer" temporary app class="my-navigation-drawer">
            <v-list nav dense>
                <v-list-item-group active-class="deep-purple--text text--accent-4">

                    <v-list-item-avatar size="56" class="navigation-drawer-icon">
                        <img :src="require('~/assets/images/navlogo.webp')" alt="" />
                    </v-list-item-avatar>
                    <v-divider></v-divider>

                    <nuxt-link to="/">
                        <v-list-item>
                            <v-list-item-title> Home </v-list-item-title>
                        </v-list-item>
                    </nuxt-link>

                    <nuxt-link to="/bookmark" class="mt-5">
                        <v-list-item>
                            <v-list-item-title> Bookmarks </v-list-item-title>
                        </v-list-item>
                    </nuxt-link>

                    <nuxt-link to="/comics" class="mt-5">
                        <v-list-item>
                            <v-list-item-title> Comics </v-list-item-title>
                        </v-list-item>
                    </nuxt-link>

                    <nuxt-link to="/recruitment" class="mt-5">
                        <v-list-item>
                            <v-list-item-title> Recruitment </v-list-item-title>
                        </v-list-item>
                    </nuxt-link>

                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
        <!-- ======== Mobile navigation bar ====== -->
    </div>
</template>

<script>
export default {
    name: "Navbar",
    data() {
        return {
            navDrawer: false,
            searchTerm: "",
        };

    },
    computed: {
        isDark() {
            return this.$vuetify.theme.dark;
        },
    },
    methods: {
        drawer() {
            this.navDrawer = !this.navDrawer;
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
    margin-left: 20px;
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

.my-navigation-col {
    display: none;
}

.nav-logo {
    width: 40px;
    margin-left: 10px;
}

.search-field {
    height: 40px;
    margin-left: 100px;
    margin-right: 50px;
    background: var(--textBlack);
}

.navigation-drawer-icon {
    display: flex;
    justify-content: center;
    width: auto !important;
    margin: auto;
}

.my-navigation-drawer a {
    text-decoration: none;
}

@media only screen and (max-width: 940px) {
    .my-header {
        display: none;
    }

    .my-navigation-col-2 {
        display: none;
    }

    .my-navigation-col {
        display: flex;
        align-items: center;
    }
}

@media only screen and (max-width: 560px) {
    .search-field {
        margin-left: 50px;
        margin-right: 10px;
    }
}

@media only screen and (max-width: 460px) {
    .search-field {
        margin-left: 20px;
        margin-right: 10px;
    }
}
</style>
