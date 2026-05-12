<template>
  <Header />
  <MobileMenu />

  <main>
    <slot />
  </main>
  
  <Footer />
  <Newsletter />
  <ExitModal />
  <QuickView />
  <StoreProduct />
  <AddToCart />
  <TapToTap />
  <CookieBar />
</template>

<script setup>
import Header from './Header.vue'
import MobileMenu from './MobileMenu.vue'
import Footer from './Footer.vue'

import TapToTap from '@/ui/modals/TapToTap.vue';
import CookieBar from '@/ui/modals/CookieBar.vue';  

import Newsletter from '@/ui/modals/Newsletter.vue'
import ExitModal from '@/ui/modals/ExitModal.vue'
import QuickView from '@/ui/modals/QuickView.vue'
import StoreProduct from '@/ui/modals/StoreProduct.vue'
import AddToCart from '@/views/Cart/AddToCart.vue';
</script>