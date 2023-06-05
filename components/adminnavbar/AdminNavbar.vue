<template>
    <div>
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

        <v-app-bar app elevation="0">
            <v-app-bar-nav-icon @click="drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Faizan Khan</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-menu left bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>

                <v-list>
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
        }
    },
    methods: {
        drawer() {
            this.navDrawer = !this.navDrawer
        }

    }
}
</script>

<style scoped>
.anchor-tag {
    text-decoration: none;

}
</style>
