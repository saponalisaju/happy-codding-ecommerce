import { defineStore } from 'pinia'
import { addToCart, getCart } from '../services/api/cart'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),

  actions: {
    async fetchCart() {
      const res = await getCart()
      this.items = res.data
    },

    async add(product) {
      await addToCart(product.id, 1)
      await this.fetchCart()
    }
  }
})