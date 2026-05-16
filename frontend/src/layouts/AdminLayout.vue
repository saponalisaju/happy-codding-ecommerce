<template>
  <div v-if="isAuthenticated" class="admin-layout">

    <!-- ================= SIDEBAR ================= -->
    <aside
      class="sidebar"
      :class="{ open: sidebarOpened, collapsed: !sidebarOpened }"
    >
      <Sidebar />
    </aside>

    <!-- MOBILE OVERLAY -->
    <div
      v-if="sidebarOpened && isMobile"
      class="overlay"
      @click="sidebarOpened = false"
    ></div>

    <!-- ================= MAIN AREA ================= -->
    <div class="main">

      <!-- TOPBAR -->
      <header class="topbar">
        <button class="menu-btn lg:hidden" @click="toggleSidebar">
          ☰
        </button>

        <h1 class="title">Admin Dashboard</h1>

        <div class="user">
          Welcome Admin
        </div>
      </header>

      <!-- PAGE CONTENT -->
      <main class="content">
        <router-view />
      </main>

    </div>

  </div>

  <!-- LOADING -->
  <div v-else class="loading">
    <Spinner />
  </div>

  <Toast />
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue"
import { useStore } from "vuex"

import Sidebar from "../views/Admin/AdminSidebar.vue"
import Spinner from "../components/core/Spinner.vue"
import Toast from "../components/core/Toast.vue"

const store = useStore()

const sidebarOpened = ref(true)
const isMobile = ref(false)

/* AUTH */
const isAuthenticated = computed(() => !!store.state.user?.token)

/* TOGGLE */
function toggleSidebar() {
  sidebarOpened.value = !sidebarOpened.value
}

/* RESPONSIVE */
function handleResize() {
  isMobile.value = window.innerWidth < 1024

  if (!isMobile.value) {
    sidebarOpened.value = true
  }
}

onMounted(async () => {
  if (store.state.user?.token) {
    await store.dispatch("getCurrentUser")
  }

  handleResize()
  window.addEventListener("resize", handleResize)
})

onUnmounted(() => {
  window.removeEventListener("resize", handleResize)
})
</script>

<style scoped>

/* ================= LAYOUT ================= */

.admin-layout {
  display: flex;
  height: 100vh;
  background: #f3f4f6;
  overflow: hidden;
}

/* ================= SIDEBAR ================= */

.sidebar {
  width: 260px;
  background: #111827;
  color: white;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  transition: all 0.3s ease;
  z-index: 50;
}

/* collapsed desktop */
.sidebar.collapsed {
  transform: translateX(0);
}

/* mobile hide */
@media (max-width: 1024px) {
  .sidebar {
    transform: translateX(-100%);
  }

  .sidebar.open {
    transform: translateX(0);
  }
}

/* ================= OVERLAY ================= */

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  z-index: 40;
}

/* ================= MAIN ================= */

.main {
  flex: 1;
  margin-left: 260px;

  display: flex;
  flex-direction: column;

  height: 100vh;
  overflow: hidden;
}

@media (max-width: 1024px) {
  .main {
    margin-left: 0;
  }
}

/* ================= TOPBAR ================= */

.topbar {
  height: 60px;
  background: white;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 20px;

  box-shadow: 0 2px 10px rgba(0,0,0,0.06);
}

.menu-btn {
  font-size: 22px;
  background: none;
  border: none;
  cursor: pointer;
}

/* ================= CONTENT ================= */

.content {
  flex: 1;
  overflow-y: auto;
  padding: 24px;
}

/* scrollbar */
.content::-webkit-scrollbar {
  width: 6px;
}

.content::-webkit-scrollbar-thumb {
  background: #c7c7c7;
  border-radius: 10px;
}

/* ================= LOADING ================= */

.loading {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  font-weight: 600;
  color: #374151;
}

.user {
  font-size: 14px;
  color: #6b7280;
}

</style>