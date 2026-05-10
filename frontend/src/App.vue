<template>
  <MainLayout>
    <router-view />
  </MainLayout>
  <global-modal />
</template>

<script setup>
import MainLayout from '../src/components/layouts/MainLayout.vue'
import GlobalModal from './components/ui/modals/GlobalModal.vue';
</script>