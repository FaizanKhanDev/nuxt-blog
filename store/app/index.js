// store/articles.js

const state = () => ({
    articles: [],


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
    updateArticle(state, articleData) {
        const index = state.articles.findIndex(article => article.id === articleData.id)
        if (index !== -1) {
            state.articles[index] = articleData
        }
    },
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
    },
    async updateArticle({ commit }, articleData) {
        const response = await fetch(`http://localhost:30001/articles/${articleData.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ articleData }),
        })
        if (response.ok) {
            commit('updateArticle', articleData)
        } else {
            // Handle error when updating the article
            console.error('Failed to update the article')
        }
    },

}


const getters = {
    // getArtilceId: (state) => (id) => {
    //     return state.articles.find(articles => articles.id === id)
    // }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
