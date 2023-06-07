// store/articles.js

const state = () => ({
    articles: [],
    dialog: false,
});

const mutations = {
    init(state, articles) {
        state.articles = articles
    },
    add(state, initem) {
        state.articles = [...state.articles, initem]
    },
    deleted(state, data) {
        state.articles = state.articles.filter(t => t.id !== data.id)
    },
    setDialog(state, payload) {
        state.dialog = payload;
    }

};

const actions = {
    async add({ commit }, articleData) {
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
            commit('setDialog', false)
        } catch (error) {
            console.log("================= error ==============", error)
        }
    },
    async deleted({ commit }, data) {
        console.log("delete action is fired");
        try {
            await fetch(`http://localhost:30001/articles/${data.id}`, {
                method: "DELETE"
            });
            commit("deleted", data);
            console.log("delete mutation is fired");
        } catch (error) {
            console.log("================= error ==============", error);
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
