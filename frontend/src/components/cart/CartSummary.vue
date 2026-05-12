<template>
  <div class="card shadow-sm border-0">

    <div class="card-body">

      <h5 class="mb-3">Price Details</h5>

      <ul class="list-unstyled">

        <li class="d-flex justify-content-between mb-2">
          <span>Total Items</span>
          <strong>{{ totalItems }}</strong>
        </li>

        <li class="d-flex justify-content-between mb-2">
          <span>Total Price</span>
          <strong>${{ totalPrice }}</strong>
        </li>

        <li class="d-flex justify-content-between text-success">
          <span>Delivery</span>
          <span>Free</span>
        </li>

      </ul>

      <hr />

      <RouterLink to="/checkout" class="btn btn-dark w-100">
        Checkout
      </RouterLink>

    </div>

  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  cart: Array
})

const totalItems = computed(() =>
  props.cart.reduce((t, i) => t + i.qty, 0)
)

const totalPrice = computed(() =>
  props.cart.reduce((t, i) => t + i.qty * i.price, 0)
)
</script>