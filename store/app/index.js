// store/articles.js

const state = () => ({
    titles: []
});

const mutations = {
    init(state, titles) {
        state.titles = titles
    },
    add(state, initem) {
        state.titles = [...state.titles, initem]
    }

};

const actions = {
    async add({ commit }, article) {
        console.log("actions is Fired")
        try {
            const response = await fetch("http://localhost:30001/article", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify({ article })
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
