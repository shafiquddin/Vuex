import { createStore } from "vuex";
import actions from "./rootActions";
import getters from "./rootGetters";
import counterStore from "./modules/counter";
import mutations from "./rootMutations";

const store = createStore({
    modules:{
        number:counterStore,
    },
  state() {
    return {
      isLogged: false,
    };
  },
  mutations: mutations,
  actions: actions,
  getters: getters,
})

export default store;