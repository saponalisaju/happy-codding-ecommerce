import { createStore } from "vuex";
import state from "./state";
import * as actions from "./actions";
import * as mutations from "./mutations";

// ✅ IMPORT axiosClient (IMPORTANT)
import axiosClient from "@/services/api/axios";
import modal from "./modules/modal";

const token = localStorage.getItem("token");

if (token) {
  axiosClient.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const store = createStore({
  state,
  getters: {},
  actions,
  mutations,
  modules: {
    modal,
  },
});

export default store;
