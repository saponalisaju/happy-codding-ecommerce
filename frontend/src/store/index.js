// Vuex store migrated to Pinia. This file is now obsolete.
// Please use src/stores/main.js (Pinia) instead.
import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
    token: null,
  },

  mutations: {
    setUser(state, user) {
      state.user = user;
    },

    setToken(state, token) {
      state.token = token;
    },
  },
});