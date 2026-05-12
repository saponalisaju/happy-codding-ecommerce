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
import Footer from "./Footer.vue"

import TapToTap from '@/components/ui/modals/TapToTap.vue'
import CookieBar from '@/components/ui/modals/CookieBar.vue'

import Newsletter from '@/components/ui/modals/Newsletter.vue'
import ExitModal from '@/components/ui/modals/ExitModal.vue'
import QuickView from '@/components/ui/modals/QuickView.vue'
import StoreProduct from '@/components/ui/modals/StoreProduct.vue'
import AddToCart from '@/views/Cart/AddToCart.vue';
</script>