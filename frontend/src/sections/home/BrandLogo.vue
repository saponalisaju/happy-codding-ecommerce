<template>
  <div class="container py-5">
    <Swiper
      :modules="[Autoplay]"
      :slides-per-view="5"
      :space-between="20"
      :loop="true"
      :autoplay="{
        delay: 2000,
        disableOnInteraction: false
      }"
      :breakpoints="breakpoints"
      class="brand-logo-slider"
    >
      <SwiperSlide v-for="(logo, index) in logos" :key="index">
        <div class="brand-item">
          <img :src="logo" alt="logo" />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'

const logos = [
  '/assets/images/dummy-logo/1.svg',
  '/assets/images/dummy-logo/2.svg',
  '/assets/images/dummy-logo/3.svg',
  '/assets/images/dummy-logo/1.svg',
  '/assets/images/dummy-logo/2.svg',
  '/assets/images/dummy-logo/3.svg',
]

const breakpoints = {
  320: {
    slidesPerView: 2,
  },
  576: {
    slidesPerView: 3,
  },
  768: {
    slidesPerView: 4,
  },
  992: {
    slidesPerView: 5,
  },
}
</script>

<style scoped>
.brand-item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.brand-item img {
  width: 120px;
  height: auto;
  object-fit: contain;
}
</style>