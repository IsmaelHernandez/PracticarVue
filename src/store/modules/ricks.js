const state = () => ({
    listRick: [],
  });
  
  const actions = {
    setListRick({ commit }) {
      commit("setWord");
    },
  };
  
  const mutations = {
    setListRick(state, payload) {
      state.listRick = payload;
    },
  };
  
  const getters = {
    getItems(state) {
        return state.listRick;
      },
  };
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
  };
  