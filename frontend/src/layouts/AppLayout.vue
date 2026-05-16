<template>
  <div v-if="isAuthenticated" class="min-h-screen bg-gray-200 flex">

    <!-- Sidebar -->
    <Sidebar :class="{ '-ml-[240px]': !sidebarOpened }" />

    <!-- Main -->
    <div class="flex-1 flex flex-col">

      <Navbar @toggle-sidebar="toggleSidebar" />

      <main class="p-6 flex-1 overflow-auto">
        <router-view />
      </main>

    </div>

  </div>

  <!-- Loading -->
  <div v-else class="min-h-screen flex items-center justify-center bg-gray-100">
    <Spinner />
  </div>

  <Toast />
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue"
import { useStore } from "vuex"

import Sidebar from "../views/Admin/AdminSidebar.vue"
import Navbar from "../components/common/Navbar.vue"
import Spinner from "../components/core/Spinner.vue"
import Toast from "../components/core/Toast.vue"

const store = useStore()

const sidebarOpened = ref(true)

/* ========================
   AUTH STATE (SAFE)
======================== */
const isAuthenticated = computed(() => {
  return !!store.state.user?.token
})

/* ========================
   TOGGLE SIDEBAR
======================== */
function toggleSidebar() {
  sidebarOpened.value = !sidebarOpened.value
}

/* ========================
   RESPONSIVE SIDEBAR
======================== */
function updateSidebarState() {
  sidebarOpened.value = window.innerWidth > 768
}

/* ========================
   LIFECYCLE
======================== */
onMounted(async () => {
  if (store.state.user.token) {
    await store.dispatch("getCurrentUser")
  }

  store.dispatch("getCountries")

  updateSidebarState()
  window.addEventListener("resize", updateSidebarState)
})

onUnmounted(() => {
  window.removeEventListener("resize", updateSidebarState)
})
</script>

<style scoped>
</style>
