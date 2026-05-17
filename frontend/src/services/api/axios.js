
import axios from "axios";
import { useMainStore } from "@/stores/main";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000/api",
  timeout: 10000,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// REQUEST
axiosClient.interceptors.request.use((config) => {
  // Pinia store must be used inside a function
  try {
    const store = useMainStore();
    const token = store.user.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (e) {
    // Pinia not available (e.g. outside setup)
  }
  return config;
});

// RESPONSE
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      try {
        const store = useMainStore();
        store.logout();
      } catch (e) {}
      localStorage.removeItem("token");
      import("../../router").then(({ default: router }) => {
        router.push({ name: "login" });
      });
    }
    return Promise.reject(error);
  },
);

export default axiosClient;
