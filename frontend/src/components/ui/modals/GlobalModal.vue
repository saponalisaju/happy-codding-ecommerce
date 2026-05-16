<template>
  <div v-if="isOpen" class="modal-backdrop">
    <div class="modal-content">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue"
import { useStore } from "vuex"

const store = useStore()

const isOpen = computed(() => store.state.modal.isOpen)
</script>