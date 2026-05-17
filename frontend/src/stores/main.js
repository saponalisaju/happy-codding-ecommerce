import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    user: {
      token: localStorage.getItem('token') || null,
      data: {},
    },
    products: {
      loading: false,
      data: [],
      links: [],
      from: null,
      to: null,
      page: 1,
      limit: null,
      total: null,
    },
    users: {
      loading: false,
      data: [],
      links: [],
      from: null,
      to: null,
      page: 1,
      limit: null,
      total: null,
    },
    customers: {
      loading: false,
      data: [],
      links: [],
      from: null,
      to: null,
      page: 1,
      limit: null,
      total: null,
    },
    countries: [],
    orders: {
      loading: false,
      data: [],
      links: [],
      from: null,
      to: null,
      page: 1,
      limit: null,
      total: null,
    },
    toast: {
      show: false,
      message: '',
      delay: 5000,
    },
    dateOptions: [
      { key: '1d', text: 'Last Day' },
      { key: '1k', text: 'Last Week' },
      { key: '2k', text: 'Last 2 Weeks' },
      { key: '1m', text: 'Last Month' },
      { key: '3m', text: 'Last 3 Months' },
      { key: '6m', text: 'Last 6 Months' },
      { key: 'all', text: 'All Time' },
    ],
  }),
  actions: {
    setUser(user) {
      this.user.data = user;
    },
    setToken(token) {
      this.user.token = token;
      localStorage.setItem('token', token);
    },
    setProducts([loading, data = null]) {
      if (data) {
        this.products = {
          ...this.products,
          data: data.data,
          links: data.meta?.links,
          page: data.meta.current_page,
          limit: data.meta.per_page,
          from: data.meta.from,
          to: data.meta.to,
          total: data.meta.total,
        };
      }
      this.products.loading = loading;
    },
    setUsers([loading, data = null]) {
      if (data) {
        this.users = {
          ...this.users,
          data: data.data,
          links: data.meta?.links,
          page: data.meta.current_page,
          limit: data.meta.per_page,
          from: data.meta.from,
          to: data.meta.to,
          total: data.meta.total,
        };
      }
      this.users.loading = loading;
    },
    setCustomers([loading, data = null]) {
      if (data) {
        this.customers = {
          ...this.customers,
          data: data.data,
          links: data.meta?.links,
          page: data.meta.current_page,
          limit: data.meta.per_page,
          from: data.meta.from,
          to: data.meta.to,
          total: data.meta.total,
        };
      }
      this.customers.loading = loading;
    },
    setOrders([loading, data = null]) {
      if (data) {
        this.orders = {
          ...this.orders,
          data: data.data,
          links: data.meta?.links,
          page: data.meta.current_page,
          limit: data.meta.per_page,
          from: data.meta.from,
          to: data.meta.to,
          total: data.meta.total,
        };
      }
      this.orders.loading = loading;
    },
    setCountries(data) {
      this.countries = data;
    },
    showToast(message, delay = 5000) {
      this.toast = { show: true, message, delay };
    },
    hideToast() {
      this.toast.show = false;
      this.toast.message = '';
    },
    logout() {
      this.setUser(null);
      this.setToken(null);
      localStorage.removeItem('token');
    },
  },
});
