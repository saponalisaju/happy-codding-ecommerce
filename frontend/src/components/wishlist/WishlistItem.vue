<template>
  <div class="col-md-4 col-sm-6">

    <div class="card wishlist-card border-0 shadow-sm">

      <!-- Image -->
      <div class="position-relative">

        <img
          :src="item.image"
          class="card-img-top"
          alt=""
        />

        <!-- Remove -->
        <button
          class="btn btn-sm btn-danger position-absolute top-0 end-0 m-2"
          @click="$emit('remove', item.id)"
        >
          <i class="ri-close-line"></i>
        </button>

      </div>

      <!-- Body -->
      <div class="card-body">

        <h6 class="mb-1">{{ item.name }}</h6>

        <small class="text-muted d-block mb-2">
          {{ item.category }}
        </small>

        <!-- Rating -->
        <div class="mb-2 text-warning">
          <i class="ri-star-fill"></i>
          {{ item.rating }}
        </div>

        <!-- Price -->
        <h5 class="mb-3">${{ item.price }}</h5>

        <!-- Actions -->
        <div class="d-grid gap-2">

          <button
            class="btn btn-dark text-white btn-sm"
            @click="$emit('add-to-cart', item)"
          >
            Add to Cart
          </button>

          <RouterLink
            to="/product"
            class="btn btn-outline-dark btn-sm"
          >
            View Details
          </RouterLink>

        </div>

      </div>

    </div>

  </div>
</template>

<script setup>
defineProps(['item'])
defineEmits(['remove', 'add-to-cart'])
</script>