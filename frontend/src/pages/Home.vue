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
  import('../sections/home/Hero.vue')
)
const BrandLogo = defineAsyncComponent(() =>
  import('../sections/home/BrandLogo.vue')
)
const ProductTop = defineAsyncComponent(() =>
  import('../sections/home/ProductTop.vue')
)
const BannerSlider = defineAsyncComponent(() =>
  import('../sections/home/BannerSlider.vue')
)
const BannerSection = defineAsyncComponent(() =>
  import('../sections/home/BannerSection.vue')
)
const ProductMiddle = defineAsyncComponent(() =>
  import('../sections/home/ProductMiddle.vue')
)
const ProductBottom = defineAsyncComponent(() =>
  import('../sections/home/ProductBottom.vue')
)
const BannerBottom = defineAsyncComponent(() =>
  import('../sections/home/BannerBottom.vue')
)
const BlogPage = defineAsyncComponent(() =>
  import('../sections/home/BlogPage.vue')
)
const Testimonial = defineAsyncComponent(() =>
  import('../sections/home/Testimonial.vue')
)
</script>