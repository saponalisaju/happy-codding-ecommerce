<template>

  <div class="col-xl-3 col-lg-4 col-6">

    <div class="product-box style-4">

      <!-- IMAGE BOX -->
      <div class="product-img-box">

        <!-- NEW LABEL -->
        <label
          v-if="product.isNew"
          class="label-red"
        >
          new
        </label>

        <!-- OPTIONS -->
        <ul class="option-box">

          <!-- FAVORITE -->
          <li
            class="toggle-img"
            @click="emit('toggle-favorite', product)"
          >

            <i
              v-if="!product.favorite"
              class="ri-heart-3-line"
            ></i>

            <i
              v-else
              class="ri-heart-3-fill text-danger"
            ></i>

          </li>

          <!-- QUICK VIEW -->
          <li>
            <router-link
              to="/quick-view"
              data-bs-toggle="modal"
            >
              <i class="ri-eye-line"></i>
            </router-link>
          </li>

          <!-- COMPARE -->
          <li>
            <router-link to="/compare">
              <i class="ri-arrow-left-right-line"></i>
            </router-link>
          </li>

        </ul>

        <!-- CART BUTTON -->
        <div class="cart-btn">

          <button
            class="btn transition-all duration-300"
            :class="added
              ? 'bg-success text-white border-0'
              : 'bg-dark text-white'"
            @click="handleAddToCart"
            :disabled="loading"
          >

            <!-- ICON -->
            <i
              :class="added
                ? 'ri-check-line'
                : 'ri-shopping-cart-line'"
            ></i>

            <!-- TEXT -->
            {{
              loading
                ? 'Loading...'
                : added
                  ? 'Added'
                  : 'Add to cart'
            }}

          </button>

        </div>

        <!-- PRODUCT IMAGE -->
        <router-link
          to="/product-details"
          class="product-img"
        >

          <img
            :src="product.image"
            class="img-fluid"
            :alt="product.name"
          />

        </router-link>

      </div>

      <!-- DETAILS -->
      <div class="product-details">

        <router-link
          to="/product-details"
          class="name"
        >
          {{ product.name }}
        </router-link>

        <h4>
          ${{ product.price.toFixed(2) }}
        </h4>

      </div>

    </div>

  </div>

</template>

<script setup>

import { ref } from "vue";
import { addToCart } from "@/services/api/cart";

const props = defineProps({
  product: Object
});

const emit = defineEmits([
  "toggle-favorite"
]);

const added = ref(false);
const loading = ref(false);

const handleAddToCart = async () => {

  try {

    loading.value = true;

    const response = await addToCart(
      props.product.id,
      1
    );

    console.log(response.data);

    added.value = true;

  } catch (error) {

    console.log(error);

    if (error.response?.status === 401) {

      alert("Please login first");

    } else {

      alert("Failed to add to cart");
    }

  } finally {

    loading.value = false;
  }
};

</script>