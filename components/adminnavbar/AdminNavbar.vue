<template>
    <div>
        <v-navigation-drawer v-model="navDrawer" app class="my-navigation-drawer">
            <v-list nav dense>
                <v-list-item-group active-class="deep-purple--text text--accent-4">
                    <v-list-item-avatar size="56" class="navigation-drawer-icon">
                        <img :src="require('~/assets/images/navlogo.webp')" alt="" />
                    </v-list-item-avatar>
                    <v-divider></v-divider>
                    <nuxt-link to="/adminpanel">
                        <v-list-item>
                            <v-list-item-title> DashBoard </v-list-item-title>
                        </v-list-item>
                    </nuxt-link>
                    <nuxt-link to="/adminpanel/addnewarticle" class="mt-5">
                        <v-list-item>
                            <v-list-item-title> Add new Article </v-list-item-title>
                        </v-list-item>
                    </nuxt-link>
                    <nuxt-link to="/adminpanel/viewallarticles" class="mt-5">
                        <v-list-item>
                            <v-list-item-title> View All Articles </v-list-item-title>
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

        <v-app-bar app elevation="0">
            <v-app-bar-nav-icon @click="drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Faizan Khan</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-text-field outlined dense class="admin-search-field" v-if="showSearchField" label="Search"></v-text-field>
            <v-btn icon @click="showSearchField = !showSearchField">
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-btn icon id="mode-switcher" @click="$vuetify.theme.dark = !$vuetify.theme.dark">
                <v-icon :color="isDark ? '#fff' : '#000'">
                    {{ isDark ? "mdi-weather-night" : "mdi-weather-sunny" }}
                </v-icon>
            </v-btn>
            <v-menu left bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item-group>
                        <nuxt-link to="/" class="anchor-tag">
                            <v-list-item class="v-list-item--hover">
                                <v-list-item-icon>
                                    <v-icon>mdi-account</v-icon>
                                    <v-list-title>
                                        Profile
                                    </v-list-title>
                                </v-list-item-icon>
                            </v-list-item>
                        </nuxt-link>
                        <nuxt-link to="/" class="anchor-tag">
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon>mdi-cog</v-icon>
                                    <v-list-title>
                                        Setting
                                    </v-list-title>
                                </v-list-item-icon>
                            </v-list-item>
                        </nuxt-link>
                        <nuxt-link to="/" class="anchor-tag">
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon>mdi-logout</v-icon>
                                    <v-list-title>
                                        logout
                                    </v-list-title>
                                </v-list-item-icon>
                            </v-list-item>
                        </nuxt-link>
                    </v-list-item-group>
                </v-list>
            </v-menu>
        </v-app-bar>

    </div>
</template>

<script>
export default {
    data() {
        return {
            navDrawer: false,
            showSearchField: false,
        }
    },
    methods: {
        drawer() {
            this.navDrawer = !this.navDrawer
        }

    },
    computed: {
        isDark() {
            return this.$vuetify.theme.dark;
        },
    }

}
</script>

<style scoped>
.anchor-tag {
    text-decoration: none;

}

.admin-search-field {
    height: 40px !important;
}
</style>
