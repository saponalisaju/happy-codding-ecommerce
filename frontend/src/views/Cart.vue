<template>
  <section class="cart-section py-4">
    <div class="container">
      <div class="row g-4">

        <!-- LEFT: CART TABLE -->
        <div class="col-lg-8">

          <div class="card shadow-sm border-0">

            <div class="card-header bg-white">
              <h5 class="mb-0">Your Cart ({{ cart.length }})</h5>
            </div>

            <div class="card-body p-0">

              <div v-if="cart.length === 0" class="text-center p-5">
                <img src="/assets/svg/no-data.svg#emptyCart" style="max-width:180px" />
                <p class="mt-3">Your cart is empty</p>
              </div>

              <div v-else class="table-responsive">

                <table class="table align-middle mb-0">
                  <thead class="table-light">
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>

                  <tbody>
                    <CartItem
                      v-for="item in cart"
                      :key="item.id"
                      :item="item"
                      @inc="incQty"
                      @dec="decQty"
                      @remove="removeItem"
                    />
                  </tbody>

                </table>

              </div>

            </div>

          </div>

        </div>

        <!-- RIGHT: SUMMARY -->
        <div class="col-lg-4">

          <CartSummary :cart="cart" />

        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import CartItem from '@/components/cart/CartItem.vue'
import CartSummary from '@/components/cart/CartSummary.vue'

import img1 from '/assets/images/product/furniture/1.jpg'
import img2 from '/assets/images/product/furniture/10.jpg'

const cart = ref([
  { id: 1, name: 'Spinach', price: 12.5, qty: 2, image: img1 },
  { id: 2, name: 'Boots', price: 145, qty: 1, image: img2 },
])

const incQty = (item) => item.qty++
const decQty = (item) => item.qty > 1 && item.qty--
const removeItem = (id) => {
  cart.value = cart.value.filter(i => i.id !== id)
}
</script>

<style scoped>

.cart-section table td,
.cart-section table th {
  vertical-align: middle;
}

@media (max-width: 768px) {
  .table-responsive {
    font-size: 14px;
  }

  .btn {
    padding: 4px 10px;
  }
}

</style>