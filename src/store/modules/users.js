const state = () => ({
  users: [],
});

const actions = {
  async addUsers({ commit }, newItem) {
    console.log("newItem", newItem);
    commit("addUsers", newItem);
  },
};

const mutations = {
  addUsers(state, newItem) {
    state.users.push(newItem);
  },
};

const getters = {
  getItems(state) {
    return state.users;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
