import axios from "axios";
import store from "../../store";

const axiosClient = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  timeout: 10000,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// REQUEST
axiosClient.interceptors.request.use((config) => {
  const token = store.state.user.token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// RESPONSE
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      store.commit("setUser", null);
      store.commit("setToken", null);
      localStorage.removeItem("token");

      import("../../router").then(({ default: router }) => {
        router.push({ name: "login" });
      });
    }

    return Promise.reject(error);
  },
);

export default axiosClient;
