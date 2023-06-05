// store/articles.js

const state = () => ({
    articles: []
});

const mutations = {
    init(state, articles) {
        state.titles = articles
    },
    add(state, initem) {
        state.articles = [...state.articles, initem]
    }

};

const actions = {
    async add({ commit }, articleData) {
        console.log("actions is Fired")
        try {
            const response = await fetch("http://localhost:30001/articles", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify({ articleData })
            })
            const data = await response.json()
            commit('add', data)
            console.log("mutation is Fired")
        } catch (error) {
            console.log("================= error ==============", error)
        }
    }
}

const getters = {

};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
