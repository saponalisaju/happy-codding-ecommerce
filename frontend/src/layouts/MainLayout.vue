<script setup>
/* =========================
   Layout Components
========================= */
import Header from "../components/common/Header.vue";
import Footer from "../components/common/Footer.vue";
import MobileMenu from "../components/common/MobileMenu.vue";

/* =========================
   Global Modals & Widgets
========================= */
import TapToTop from "@/components/ui/modals/TapToTop.vue";
import CookieBar from "@/components/ui/modals/CookieBar.vue";
import NewsLetter from "@/components/ui/modals/NewsLetter.vue";
import ExitModal from "@/components/ui/modals/ExitModal.vue";
import QuickView from "@/components/ui/modals/QuickView.vue";
import StoreProduct from "@/components/ui/modals/StoreProduct.vue";
import AddToCart from "@/views/Cart/AddToCart.vue";
</script>

<template>
  <div class="main-layout">

    <!-- Header -->
    <Header />

    <!-- Mobile Navigation -->
    <MobileMenu />

    <!-- Main Content -->
    <main class="main-content">
      <router-view />
    </main>

    <!-- Footer -->
    <Footer />

    <!-- Global Components -->
    <NewsLetter />
    <ExitModal />
    <QuickView />
    <StoreProduct />
    <AddToCart />
    <TapToTop />
    <CookieBar />

  </div>
</template>

<style scoped>

.main-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--theme-body-bg, #ffffff);
}

.main-content {
  flex: 1;
  overflow-x: hidden;
}

</style>