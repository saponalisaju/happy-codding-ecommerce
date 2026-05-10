import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
  state: () => ({
    isOpen: false,
    type: null,
    data: null
  }),

  actions: {
    open(type = null, data = null) {
      this.isOpen = true
      this.type = type
      this.data = data
    },

    close() {
      this.isOpen = false
      this.type = null
      this.data = null
    }
  }
})