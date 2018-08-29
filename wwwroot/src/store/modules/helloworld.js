import { fetchMessage } from '../../api';

export default {
  namespaced: true,
  // IMPORTANT: state must be a function so the module can be
  // instantiated multiple times
  state: () => ({
    message: ''
  }),
  actions: {
    fetchMessage({ commit }) {
      // return the Promise via `store.dispatch()` so that we know
      // when the data has been fetched
      return fetchMessage().then((result) => {
        commit('setMessage', result)
      }).catch((err) => {
        console.error('Error fetching message: ', err);
      });
    }
  },
  mutations: {
    setMessage(state, message) {
      state.message = message;
    }
  }
}
