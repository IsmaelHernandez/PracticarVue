const state = () => ({
  persons: [
    {
      name: "Ismael",
      lastname: "Hernandez",
    },
    {
      name: "Abigail",
      lastname: "Hernandez",
    },
    {
      name: "Jorge",
      lastname: "Hernandez",
    },
    {
      name: "Jair",
      lastname: "Hernandez",
    },
  ],
});

const actions = {
  setPersons({ commit }) {
    commit("setPersons");
  },
  setWord({ commit }) {
    commit("setWord");
  },
};

const mutations = {
  setPersons(state, payload) {
    state.persons = payload;
  },
  setWord(state, payload) {
    state.word = payload;
  },
};

const getters = {
  getPersons(state) {
    return state.persons;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
