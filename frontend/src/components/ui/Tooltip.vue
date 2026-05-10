<template>
  <div class="relative inline-flex group">

    <!-- Trigger -->
    <slot />

    <!-- Tooltip -->
    <div
      class="absolute z-50 px-3 py-1 text-xs text-white bg-gray-900 rounded-md shadow-lg
             opacity-0 group-hover:opacity-100 transition duration-200
             pointer-events-none whitespace-nowrap"
      :class="positionClass"
    >
      {{ text }}

      <!-- Arrow -->
      <div class="absolute w-2 h-2 bg-gray-900 rotate-45"
           :class="arrowClass"></div>

    </div>

  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  text: { type: String, required: true },
  position: { type: String, default: 'top' } // top, bottom, left, right
})

const positionClass = computed(() => {
  switch (props.position) {
    case 'bottom':
      return 'top-full mt-2 left-1/2 -translate-x-1/2'
    case 'left':
      return 'right-full mr-2 top-1/2 -translate-y-1/2'
    case 'right':
      return 'left-full ml-2 top-1/2 -translate-y-1/2'
    default:
      return 'bottom-full mb-2 left-1/2 -translate-x-1/2'
  }
})

const arrowClass = computed(() => {
  switch (props.position) {
    case 'bottom':
      return 'top-[-4px] left-1/2 -translate-x-1/2'
    case 'left':
      return 'right-[-4px] top-1/2 -translate-y-1/2'
    case 'right':
      return 'left-[-4px] top-1/2 -translate-y-1/2'
    default:
      return 'bottom-[-4px] left-1/2 -translate-x-1/2'
  }
})
</script>