const state = () => ({
  word: "Hola yo soy un texto en el state global word",
});

const actions = {
  setWord({ commit }) {
    commit("setWord");
  },
};

const mutations = {
  setWord(state, payload) {
    state.word = payload;
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
