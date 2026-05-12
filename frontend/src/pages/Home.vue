<template>
    <Hero />
    <BrandLogo />
    <ProductTop />
    <BannerSlider />
    <BannerSection />
    <ProductMiddle />
    <ProductBottom />
    <BannerBottom />
    <Testimonial />
    <BlogPage />
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

const Hero = defineAsyncComponent(() =>
  import('@/views/Homes/Hero.vue')
)
const BrandLogo = defineAsyncComponent(() =>
  import('@/views/Homes/BrandLogo.vue')
)
const ProductTop = defineAsyncComponent(() =>
  import('@/views/Homes/ProductTop.vue')
)
const BannerSlider = defineAsyncComponent(() =>
  import('@/views/Homes/BannerSlider.vue')
)
const BannerSection = defineAsyncComponent(() =>
  import('@/views/Homes/BannerSection.vue')
)
const ProductMiddle = defineAsyncComponent(() =>
  import('@/views/Homes/ProductMiddle.vue')
)
const ProductBottom = defineAsyncComponent(() =>
  import('@/views/Homes/ProductBottom.vue')
)
const BannerBottom = defineAsyncComponent(() =>
  import('@/views/Homes/BannerBottom.vue')
)
const BlogPage = defineAsyncComponent(() =>
  import('@/views/Homes/BlogPage.vue')
)
const Testimonial = defineAsyncComponent(() =>
  import('@/views/Homes/Testimonial.vue')
)
</script>