const state = () => ({
    counter: 0,
});

const actions = {
  increment({ commit }) {
    commit('increment');
  },
  decrement({ commit }) {
    commit('decrement');
  },
  reset({ commit }) {
    commit('reset');
  },
};

const mutations = {
  increment(state) {
    state.counter++;
  },
  decrement(state) {
    state.counter--;
  },
  reset(state) {
    state.counter = 0;
  },
};

const getters = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
