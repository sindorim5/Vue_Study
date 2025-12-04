import counterMutations from '../counter/mutations';
import counterActions from '../counter/actions';
import counterGetters from '../counter/getters';

export default {
  namespaced: true,
  state() {
    return {
      counter: 0,
    };
  },
  mutations: counterMutations,
  actions: counterActions,
  getters: counterGetters,
};
