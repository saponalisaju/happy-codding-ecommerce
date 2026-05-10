<template>
  <div v-if="isOpen" class="modal-backdrop">
    <div class="modal-content">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { useModalStore } from '../../../store/modal'

const modal = useModalStore()
const isOpen = modal.isOpen
</script>