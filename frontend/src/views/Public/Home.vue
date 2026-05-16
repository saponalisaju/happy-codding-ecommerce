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
  import('@/views/Home/Hero.vue')
)
const BrandLogo = defineAsyncComponent(() =>
  import('@/views/Home/BrandLogo.vue')
)
const ProductTop = defineAsyncComponent(() =>
  import('@/views/Home/ProductTop.vue')
)
const BannerSlider = defineAsyncComponent(() =>
  import('@/views/Home/BannerSlider.vue')
)
const BannerSection = defineAsyncComponent(() =>
  import('@/views/Home/BannerSection.vue')
)
const ProductMiddle = defineAsyncComponent(() =>
  import('@/views/Home/ProductMiddle.vue')
)
const ProductBottom = defineAsyncComponent(() =>
  import('@/views/Home/ProductBottom.vue')
)
const BannerBottom = defineAsyncComponent(() =>
  import('@/views/Home/BannerBottom.vue')
)
const BlogPage = defineAsyncComponent(() =>
  import('@/views/Home/BlogPage.vue')
)
const Testimonial = defineAsyncComponent(() =>
  import('@/views/Home/Testimonial.vue')
)
</script>