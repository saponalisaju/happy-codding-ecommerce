export default {
  state: () => ({
    isOpen: false,
    type: null,
    data: null,
  }),

  mutations: {
    OPEN_MODAL(state, { type = null, data = null }) {
      state.isOpen = true;
      state.type = type;
      state.data = data;
    },

    CLOSE_MODAL(state) {
      state.isOpen = false;
      state.type = null;
      state.data = null;
    },
  },

  actions: {
    open({ commit }, payload) {
      commit("OPEN_MODAL", payload);
    },

    close({ commit }) {
      commit("CLOSE_MODAL");
    },
  },
};
