<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="hero-section">
    <div class="container">
      <div class="row align-items-center g-4">

        <!-- LEFT: SWIPER -->
        <div class="col-lg-6">
          <Swiper
            :modules="[Autoplay, Pagination]"
            :autoplay="{ delay: 3000, disableOnInteraction: false }"
            :pagination="{ clickable: true }"
            class="hero-swiper"
          >
            <SwiperSlide v-for="i in 3" :key="i">
              <div class="hero-img-box">
                <img
                  :src="`/assets/images/layout-7/${i}.png`"
                  class="hero-img"
                  alt="product"
                />

                <RouterLink to="/shop" class="plus-btn">
                  <i class="ri-add-line"></i>
                </RouterLink>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <!-- RIGHT: CONTENT -->
        <div class="col-lg-6">
          <div class="hero-content">

            <span class="sub-title">New Arrival Collection</span>

            <h1>Electronics that Make Life Easier</h1>

            <p>
              Discover innovative electronics designed to simplify your daily life with smart technology and modern design.
            </p>

            <RouterLink to="/shop" class="btn theme-btn">
              <i class="ri-shopping-bag-3-line"></i>
              Shop Now
            </RouterLink>

            <!-- MINI PRODUCTS -->
            <div class="mini-grid">
              <div class="mini-card" v-for="item in 3" :key="item">

                <RouterLink to="/shop" class="mini-img">
                  <img :src="`/assets/images/layout-7/${item}.png`" />
                </RouterLink>

                <div class="mini-info">
                  <RouterLink to="/shop" class="title">
                    Product {{ item }}
                  </RouterLink>
                  <h5>${{ 99 * item }}</h5>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* =====================
   SECTION BASE
===================== */
.hero-section {
  padding: 60px 0;
  overflow: hidden;
}

/* =====================
   SWIPER IMAGE
===================== */
.hero-img-box {
  position: relative;
  border-radius: 18px;
  overflow: hidden;
  background: #f6f6f6;
}

.hero-img {
  width: 100%;
  height: 420px;
  object-fit: contain;
  object-position: center;
  display: block;
  transition: transform 0.4s ease;
}

.hero-img-box:hover .hero-img {
  transform: scale(1.05);
}

/* PLUS BUTTON */
.plus-btn {
  position: absolute;
  bottom: 16px;
  right: 16px;
  width: 46px;
  height: 46px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: 0.3s;
}

.plus-btn:hover {
  transform: scale(1.1);
}

/* =====================
   CONTENT
===================== */
.hero-content .sub-title {
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #888;
  display: inline-block;
  margin-bottom: 10px;
}

.hero-content h1 {
  font-size: 42px;
  font-weight: 700;
  line-height: 1.2;
}

.hero-content p {
  margin: 15px 0 25px;
  color: #666;
  line-height: 1.6;
}

/* =====================
   MINI GRID
===================== */
.mini-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-top: 25px;
}

.mini-card {
  display: flex;
  gap: 10px;
  align-items: center;
  background: #f8f8f8;
  padding: 10px;
  border-radius: 12px;
  transition: 0.3s;
}

.mini-card:hover {
  transform: translateY(-3px);
}

.mini-img img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 10px;
}

.mini-info .title {
  font-size: 14px;
  font-weight: 500;
  display: block;
}

.mini-info h5 {
  font-size: 14px;
  margin: 2px 0 0;
}

/* =====================
   RESPONSIVE
===================== */
@media (max-width: 991px) {
  .hero-img {
    height: 320px;
  }

  .hero-content h1 {
    font-size: 30px;
  }

  .mini-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 576px) {
  .hero-img {
    height: 250px;
  }

  .hero-content h1 {
    font-size: 24px;
  }
}
</style>