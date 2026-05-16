<template>
  <section class="product-section">
    <div class="container">
      <div class="title-flex title-b-space">
        <h3 class="title">Featured Product</h3>

        <RouterLink class="title-link" to="/shop">
          View All
          <svg>
            <use href="/assets/svg/sprite_icon.svg#right-arrow"></use>
          </svg>
        </RouterLink>
      </div>

      <div class="swiper electronic-product">
        <div class="swiper-wrapper">

          <div
            class="swiper-slide"
            v-for="(product, i) in products"
            :key="i"
          >
            <div class="product-box-7">

              <!-- IMAGE BOX -->
              <div class="product-img-box">

                <label v-if="product.badge" class="label-red">
                  {{ product.badge }}
                </label>

                <!-- ACTIONS -->
                <div class="cart-info">
                  <button type="button" data-bs-toggle="tooltip" title="Wishlist">
                    <i class="ri-heart-3-line"></i>
                  </button>

                  <RouterLink to="/compare">
                    <i class="ri-arrow-left-right-line"></i>
                  </RouterLink>

                  <button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#quickViewModal"
                  >
                    <i class="ri-eye-line"></i>
                  </button>
                </div>

                <!-- PRODUCT IMAGE -->
                <RouterLink :to="product.link" class="product-img">
                  <div class="swiper product-slider">
                    <div class="swiper-wrapper">

                      <div
                        class="swiper-slide"
                        v-for="(img, idx) in product.images"
                        :key="idx"
                      >
                        <img :src="img" class="img-fluid" alt="product" />
                      </div>

                    </div>
                  </div>
                </RouterLink>

              </div>

              <!-- DETAILS -->
              <div class="product-details">
                <span class="label">{{ product.category }}</span>

                <div class="details-box">
                  <RouterLink :to="product.link" class="name">
                    {{ product.name }}
                  </RouterLink>

                  <h4>
                    <svg>
                      <use href="/assets/svg/sprite_icon.svg#star"></use>
                    </svg>
                    {{ product.rating }}
                  </h4>
                </div>

                <h5 class="price">
                  ${{ product.price }}
                  <del v-if="product.oldPrice">
                    ${{ product.oldPrice }}
                  </del>
                </h5>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const products = [
  {
    name: "Roborock S8+",
    category: "Home Appliance",
    price: 799,
    rating: 4.8,
    link: "/product/1",
    images: [
      "/assets/images/product/electronic/7-1.png",
      "/assets/images/product/electronic/7-2.png",
      "/assets/images/product/electronic/7-3.png",
    ],
  },
  {
    name: "Google Pixel 8",
    category: "Smart Phone",
    price: 699,
    oldPrice: 749,
    rating: 4.7,
    badge: "10% OFF",
    link: "/product/2",
    images: [
      "/assets/images/product/electronic/8-1.png",
      "/assets/images/product/electronic/8-2.png",
      "/assets/images/product/electronic/8-3.png",
    ],
  },
  {
    name: "AirPods Pro",
    category: "Audio",
    price: 249,
    rating: 4.9,
    link: "/product/3",
    images: [
      "/assets/images/product/electronic/9-1.png",
      "/assets/images/product/electronic/9-2.png",
      "/assets/images/product/electronic/9-3.png",
    ],
  },
];
</script>