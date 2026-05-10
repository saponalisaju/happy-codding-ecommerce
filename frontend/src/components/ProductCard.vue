<script setup>
import { ref } from "vue";

const props = defineProps({
  product: Object,
});

const count = ref(props.product.quantity || 1);

const increment = () => {
  count.value++;
};

const decrement = () => {
  if (count.value > 1) {
    count.value--;
  }
};

const toggleFavorite = () => {
  props.product.isFavorite = !props.product.isFavorite;
};
</script>

<template>
  <div class="col">
    <div class="product-box style-3">

      <!-- IMAGE BOX -->
      <div class="product-img-box">

        <!-- OPTIONS -->
        <ul class="option-box">

          <!-- FAVORITE -->
          <li class="toggle-img" @click="toggleFavorite">
            <i
              v-if="!product.isFavorite"
              class="ri-heart-3-line"
            ></i>

            <i
              v-else
              class="ri-heart-3-fill text-danger"
            ></i>
          </li>

          <!-- QUICK VIEW -->
          <li>
            <a href="#quickViewModal" data-bs-toggle="modal">
              <i class="ri-eye-line"></i>
            </a>
          </li>

          <!-- COMPARE -->
          <li>
            <a href="#">
              <i class="ri-arrow-left-right-line"></i>
            </a>
          </li>

        </ul>

        <!-- PRODUCT IMAGE -->
        <a href="#" class="product-img">
          <img
            :src="product.image"
            class="img-fluid"
            :alt="product.name"
          />
        </a>

      </div>

      <!-- DETAILS -->
      <div class="product-details">

        <span class="food-label">
          {{ product.category }}
        </span>

        <div class="details-box">

          <a href="#" class="name">
            {{ product.name }}
          </a>

          <h4>
            <svg>
              <use href="/assets/svg/sprite_icon.svg#star"></use>
            </svg>

            {{ product.rating }}
          </h4>

        </div>

        <!-- DESCRIPTION -->
        <div class="product-description">
          {{ product.description }}
        </div>

        <!-- PRICE -->
        <h5 class="price">
          ${{ product.price }}

          <del>${{ product.oldPrice }}</del>

          <span>{{ product.weight }}</span>
        </h5>

        <!-- BOTTOM PANEL -->
        <div class="bottom-panel">

          <div class="product">

            <!-- ADD BUTTON -->
            <button class="add-btn">
              <span>Add</span>
              <i class="ri-add-line"></i>
            </button>

            <!-- COUNTER -->
            <div class="counter">

              <button
                class="decrement"
                @click="decrement"
              >
                <i class="ri-subtract-line"></i>
              </button>

              <span class="count">
                {{ count }}
              </span>

              <button
                class="increment"
                @click="increment"
              >
                <i class="ri-add-line"></i>
              </button>

            </div>

          </div>

          <!-- CART -->
          <button class="btn cart-btn">
            <i class="ri-shopping-cart-line"></i>
            <span>cart</span>
          </button>

        </div>

      </div>

    </div>
  </div>
</template>