<script setup>
import { useRoute, useRouter } from "vue-router"
import { computed } from "vue"
import store from "../../store"

import {
  HomeIcon,
  CubeIcon,
  Squares2X2Icon,
  ShoppingBagIcon,
  UsersIcon,
  UserGroupIcon,
  ChartBarIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/vue/24/outline"

/* =========================
   ROUTER
========================= */
const route = useRoute()
const router = useRouter()

/* =========================
   LOGOUT (SAFE + CLEAN)
========================= */
function logout() {
  store.commit("setUser", null)
  store.commit("setToken", null)

  localStorage.removeItem("token")
  localStorage.removeItem("user")

  router.replace({ name: "login" })
}

/* =========================
   MENU CONFIG (PRO STRUCTURE)
========================= */
const menus = [
  { name: "Dashboard", route: "admin.dashboard", icon: HomeIcon },
  { name: "Categories", route: "admin.categories", icon: Squares2X2Icon },
  { name: "Products", route: "admin.products", icon: CubeIcon },
  { name: "Orders", route: "admin.orders", icon: ShoppingBagIcon },
  { name: "Users", route: "admin.users", icon: UsersIcon },
  { name: "Customers", route: "admin.customers", icon: UserGroupIcon },
  { name: "Reports", route: "admin.reports", icon: ChartBarIcon },
]

/* =========================
   ACTIVE STATE (ROBUST)
========================= */
const isActive = (menuRoute) => {
  return route.name?.startsWith(menuRoute)
}
</script>

<template>
  <aside class="sidebar">

    <!-- LOGO -->
    <div class="sidebar-logo">
      <RouterLink :to="{ name: 'admin.dashboard' }" class="logo-link">
        <span class="logo-text">Happy Admin</span>
      </RouterLink>
    </div>

    <!-- NAV -->
    <nav class="sidebar-nav">
      <RouterLink
        v-for="menu in menus"
        :key="menu.route"
        :to="{ name: menu.route }"
        class="sidebar-link"
        :class="{ active: isActive(menu.route) }"
      >
        <component :is="menu.icon" class="sidebar-icon" />
        <span class="sidebar-label">{{ menu.name }}</span>
      </RouterLink>
    </nav>

    <!-- LOGOUT (PRO UI FIX) -->
    <div class="sidebar-footer">
      <button @click="logout" class="logout-btn">
        <ArrowRightOnRectangleIcon class="sidebar-icon" />
        <span class="sidebar-label">Logout</span>
      </button>
    </div>

  </aside>
</template>

<style scoped>

/* =========================
   BASE SIDEBAR
========================= */
.sidebar {
  width: 260px;
  height: 100vh;

  background: #0b1220;
  color: #fff;

  display: flex;
  flex-direction: column;

  border-right: 1px solid rgba(255,255,255,0.06);

  position: sticky;
  top: 0;

  transition: all 0.3s ease;
}

/* =========================
   LOGO AREA
========================= */
.sidebar-logo {
  height: 70px;
  display: flex;
  align-items: center;

  padding: 0 22px;

  font-size: 20px;
  font-weight: 700;

  border-bottom: 1px solid rgba(255,255,255,0.06);
  letter-spacing: 0.3px;
}

.logo-link {
  text-decoration: none;
  color: white;
}

/* =========================
   NAV AREA
========================= */
.sidebar-nav {
  flex: 1;
  padding: 16px 10px;

  display: flex;
  flex-direction: column;
  gap: 6px;
}

/* =========================
   MENU ITEM
========================= */
.sidebar-link {
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 11px 14px;
  border-radius: 10px;

  color: #cbd5e1;
  text-decoration: none;

  font-size: 14px;
  font-weight: 500;

  transition: all 0.2s ease;
}

.sidebar-link:hover {
  background: rgba(255,255,255,0.06);
  color: #fff;
  transform: translateX(2px);
}

/* ACTIVE ITEM */
.sidebar-link.active {
  background: linear-gradient(90deg, #4f46e5, #6366f1);
  color: #fff;

  box-shadow: 0 6px 18px rgba(79,70,229,0.35);
}

/* =========================
   ICON
========================= */
.sidebar-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

/* =========================
   FOOTER LOGOUT
========================= */
.sidebar-footer {
  padding: 12px;
  border-top: 1px solid rgba(255,255,255,0.06);
}

.logout-btn {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 11px 14px;
  border-radius: 10px;

  background: transparent;
  color: #f87171;

  border: none;
  cursor: pointer;

  font-weight: 500;
  transition: all 0.2s ease;
}

.logout-btn:hover {
  background: rgba(248,113,113,0.12);
  transform: translateX(2px);
}

/* =========================
   RESPONSIVE (PRO)
========================= */
@media (max-width: 1024px) {
  .sidebar {
    width: 80px;
  }

  .sidebar-link,
  .logout-btn {
    justify-content: center;
  }

  .sidebar-label {
    display: none;
  }
}

</style>