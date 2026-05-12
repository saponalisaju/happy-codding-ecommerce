<template>
  <section class="wishlist-section py-4">
    <div class="container">

      <!-- Header -->
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h4 class="mb-0">My Wishlist</h4>

        <span class="text-muted">
          {{ wishlist.length }} items
        </span>
      </div>

      <!-- Empty State -->
      <div v-if="wishlist.length === 0" class="text-center py-5">
        <img
          src="/assets/svg/no-data.svg#emptyWishlist"
          style="max-width: 180px"
          class="mb-3"
        />
        <h5>Your wishlist is empty</h5>
        <p class="text-muted">Save items you like for later</p>
        <RouterLink to="/shop" class="btn btn-dark mt-2">
          Continue Shopping
        </RouterLink>
      </div>

      <!-- Wishlist Grid -->
      <div v-else class="row g-4">

        <WishlistItem
          v-for="item in wishlist"
          :key="item.id"
          :item="item"
          @remove="removeItem"
          @add-to-cart="addToCart"
        />

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import WishlistItem from '@/components/wishlist/WishlistItem.vue'

import img1 from '/assets/images/product/furniture/1.jpg'
import img2 from '/assets/images/product/furniture/10.jpg'

const wishlist = ref([
  {
    id: 1,
    name: 'Ergo Comfort Chair',
    price: 455,
    image: img1,
    category: 'Furniture',
    rating: 4.5
  },
  {
    id: 2,
    name: 'Modern Velvet Chair',
    price: 655,
    image: img2,
    category: 'Luxury',
    rating: 4.8
  }
])

const removeItem = (id) => {
  wishlist.value = wishlist.value.filter(i => i.id !== id)
}

const addToCart = (item) => {
  console.log('Add to cart:', item)
}
</script>

<style scoped>
.wishlist-card {
  border-radius: 14px;
  overflow: hidden;
  transition: 0.3s;
}

.wishlist-card:hover {
  transform: translateY(-4px);
}

.wishlist-card img {
  height: 220px;
  object-fit: cover;
}

.btn {
  border-radius: 8px;
}
</style>