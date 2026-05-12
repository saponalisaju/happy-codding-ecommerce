<template>
  <section class="search-section section-b-space mt-space">
    <div class="container">

      <!-- HERO SEARCH -->
      <div class="search-hero-container">
        <div class="row justify-content-center">
          <div class="col-xl-9 col-lg-10">

            <div class="search-content-wrap text-center">

              <div class="search-header mb-4">
                <span class="search-subtitle">Curated For You</span>
                <h3 class="search-title">What are you looking for?</h3>
                <p class="search-description">
                  Explore premium collection of luxury items & brands.
                </p>
              </div>

              <form class="search-form-modern" @submit.prevent="onSearch">
                <i class="iconsax search-icon" data-icon="search-normal-2"></i>

                <input
                  v-model="query"
                  type="text"
                  class="form-control"
                  placeholder="Search products..."
                />

                <button type="submit" class="btn btn-search-submit">
                  Search
                </button>
              </form>

            </div>

          </div>
        </div>

        <!-- PRODUCTS -->
        <div class="recommended-products-box mt-5">
          <div class="row g-3">

            <div
              v-for="product in filteredProducts"
              :key="product.id"
              class="col-xl-3 col-lg-4 col-sm-6"
            >
              <div class="product-box style-3">

                <!-- IMAGE -->
                <div class="product-img-box position-relative">

                  <span class="label-red" v-if="product.discount">
                    {{ product.discount }}% OFF
                  </span>

                  <img
                    :src="product.image"
                    class="product-img"
                    alt=""
                  />

                  <!-- ACTIONS -->
                  <ul class="option-box">

                    <li @click="toggleWishlist(product)">
                      <i
                        :class="product.wishlist ? 'ri-heart-3-fill text-danger' : 'ri-heart-3-line'"
                      ></i>
                    </li>

                    <li>
                      <i class="ri-eye-line"></i>
                    </li>

                    <li>
                      <i class="ri-arrow-left-right-line"></i>
                    </li>

                  </ul>

                </div>

                <!-- DETAILS -->
                <div class="product-details">

                  <span class="food-label">
                    {{ product.category }}
                  </span>

                  <div class="details-box">
                    <h5 class="name">{{ product.name }}</h5>
                    <h4>⭐ {{ product.rating }}</h4>
                  </div>

                  <h5 class="price">
                    ${{ product.price }}
                    <del v-if="product.oldPrice">${{ product.oldPrice }}</del>
                  </h5>

                  <!-- BUTTON -->
                  <div class="bottom-panel">

                    <button
                      class="btn btn-sm btn-dark w-100"
                      @click="addToCart(product)"
                    >
                      Add to Cart
                    </button>

                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue"

/* SEARCH */
const query = ref("")

/* PRODUCTS DATA */
const products = ref([
  {
    id: 1,
    name: "Regal Horizon",
    category: "Watch",
    image: "/assets/images/product/watch/8.png",
    price: 65.25,
    oldPrice: 68.69,
    rating: 4.8,
    discount: 8,
    wishlist: false,
  },
  {
    id: 2,
    name: "Luxury Boots",
    category: "Shoes",
    image: "/assets/images/product/shoes/1.png",
    price: 145,
    oldPrice: 185,
    rating: 4.5,
    discount: 10,
    wishlist: false,
  },
])

/* FILTER */
const filteredProducts = computed(() => {
  if (!query.value) return products.value

  return products.value.filter(p =>
    p.name.toLowerCase().includes(query.value.toLowerCase())
  )
})

/* ACTIONS */
const toggleWishlist = (product) => {
  product.wishlist = !product.wishlist
}

const addToCart = (product) => {
  console.log("Add to cart:", product)
}

const onSearch = () => {
  console.log("Searching:", query.value)
}
</script>

<style scoped>
.product-img-box {
  width: 100%;
  height: 220px;          /* fixed card height */
  overflow: hidden;
  border-radius: 12px;
  position: relative;
}

.product-img {
  width: 100%;
  height: 100%;
  object-fit: cover;      /* key for equal look */
  object-position: center;
  transition: transform 0.3s ease;
}

.product-img-box:hover .product-img {
  transform: scale(1.05);
}
@media (max-width: 768px) {
  .product-img-box {
    height: 180px;
  }
}

@media (max-width: 480px) {
  .product-img-box {
    height: 160px;
  }
}
</style>