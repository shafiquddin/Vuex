import counterActions from "./actions";
import counterGetters from "./getters";
import counterMutation from "./mutations";

const counterStore = {
    namespaced:true,
  state() {
    return {
      counter: 0,
    };
  },
  mutations: counterMutation,
  actions:counterActions,
  getters: counterGetters
};

export default counterStore;