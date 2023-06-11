import Vue from "vue";
import Vuex from "vuex";
import AppModule from './app';



Vue.use(Vuex)

const store = () => new Vuex.Store({
    modules: {
        'app': AppModule,
    },
    state: {
        obj: {
            message: "khan"
        }
    },

    mutations: {
        updateMessage(state, message) {
            state.obj.message = message
        }
    },
    actions: {

    }

}
)





export const strict = false;
export default store;