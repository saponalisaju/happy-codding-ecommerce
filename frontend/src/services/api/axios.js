import axios from 'axios'
import store from '../../store'
import router from '../../router'

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
})

// 🔥 REQUEST INTERCEPTOR (FIXED)
axiosClient.interceptors.request.use(config => {

  const token = store.state.user.token || localStorage.getItem('token')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

// 🔥 RESPONSE INTERCEPTOR
axiosClient.interceptors.response.use(
  response => response,
  error => {

    if (error.response?.status === 401) {

      store.commit('setUser', null)
      store.commit('setToken', null)

      localStorage.removeItem('token')

      router.push({ name: 'login' })
    }

    return Promise.reject(error)
  }
)

export default axiosClient