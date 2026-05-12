<template>
  <div
    class="offcanvas offcanvas-end cart-offcanvas"
    tabindex="-1"
    id="addToCart"
  >
    <!-- Header -->
    <div class="offcanvas-header border-bottom">
      <h5 class="offcanvas-title fw-semibold">
        Shopping Cart
      </h5>

      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
    </div>

    <!-- Body -->
    <div class="offcanvas-body d-flex flex-column">

      <!-- Empty -->
      <div v-if="cartItems.length === 0" class="text-center py-5">
        <img
          src="/assets/svg/no-data.svg#emptyCart"
          class="img-fluid mb-3"
          style="max-width: 180px"
        />
        <h5>No Items In Cart</h5>
      </div>

      <!-- Items -->
      <ul v-else class="cart-product-box scroll-bar flex-grow-1">
        <li
          v-for="item in cartItems"
          :key="item.id"
          class="product-list mb-3"
        >
          <div class="product-box d-flex gap-3">

            <img
              :src="item.image"
              class="img-fluid object-fit-cover"
              width="80"
              height="80"
            />

            <div class="flex-grow-1">

              <div class="d-flex justify-content-between">
                <h6 class="mb-1">{{ item.name }}</h6>

                <button
                  class="btn btn-sm text-danger"
                  @click="removeItem(item.id)"
                >
                  <i class="ri-delete-bin-line"></i>
                </button>
              </div>

              <small class="text-muted d-block">
                Color: {{ item.color }}
              </small>

              <small class="text-muted d-block mb-2">
                Type: {{ item.type }}
              </small>

              <div class="d-flex justify-content-between align-items-center">

                <div class="d-flex gap-2 align-items-center">
                  <button class="btn btn-sm btn-outline-dark" @click="dec(item)">-</button>
                  <span>{{ item.quantity }}</span>
                  <button class="btn btn-sm btn-outline-dark" @click="inc(item)">+</button>
                </div>

                <strong>
                  ${{ item.price * item.quantity }}
                </strong>

              </div>

            </div>

          </div>
        </li>
      </ul>

      <!-- Footer -->
      <div v-if="cartItems.length" class="border-top pt-3">

        <div class="d-flex justify-content-between mb-3">
          <strong>Total</strong>
          <strong>${{ total }}</strong>
        </div>

        <div class="d-grid gap-2">
          <router-link to="/cart" class="btn btn-outline-dark">
            View Cart
          </router-link>

          <router-link to="/checkout" class="btn btn-dark">
            Checkout
          </router-link>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

import img1 from '/assets/images/product/furniture/6.jpg'
import img2 from '/assets/images/product/furniture/10.jpg'

const cartItems = ref([
  { id: 1, name: 'Ergo Chair', image: img1, color: 'Black', type: 'Ergonomic', price: 455, quantity: 1 },
  { id: 2, name: 'Velvet Chair', image: img2, color: 'Green', type: 'Velvet', price: 655, quantity: 1 },
])

const inc = (item) => item.quantity++
const dec = (item) => item.quantity > 1 && item.quantity--

const removeItem = (id) => {
  cartItems.value = cartItems.value.filter(i => i.id !== id)
}

const total = computed(() =>
  cartItems.value.reduce((t, i) => t + i.price * i.quantity, 0)
)
</script>