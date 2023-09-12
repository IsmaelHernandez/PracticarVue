const state = () => ({
  users: [],
});

const actions = {
   addUsers({ commit }, newItem) {
    console.log("newItem", newItem);
    commit("addUsers", newItem);
  },
  deleteUser({commit}, userId){
    commit("deleteUser", userId)
  }
};

const mutations = {
  addUsers(state, newItem) {
    state.users.push(newItem);
  },
  deleteUser(state, userId){
    state.users = state.users.filter(user => user.id !== userId);
  }
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
