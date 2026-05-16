<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
} from "@headlessui/vue";

import {
  Bars3Icon,
  ChevronDownIcon,
} from "@heroicons/vue/24/solid";

import {
  ArrowRightOnRectangleIcon,
  UserCircleIcon,
} from "@heroicons/vue/24/outline";

/* =========================================
   Emits
========================================= */
const emit = defineEmits(["toggle-sidebar"]);

/* =========================================
   Router & Store (SAFE INIT)
========================================= */
const router = useRouter();
const store = useStore();

/* =========================================
   SAFE USER (IMPORTANT FIX)
========================================= */
const currentUser = computed(() => {
  return store?.state?.user?.data || null;
});

/* =========================================
   USER INFO (SAFE ACCESS)
========================================= */
const userName = computed(() => {
  return currentUser.value?.name || "Administrator";
});

const userEmail = computed(() => {
  return currentUser.value?.email || "admin@example.com";
});

const userImage = computed(() => {
  return (
    currentUser.value?.image ||
    "https://randomuser.me/api/portraits/men/32.jpg"
  );
});

/* =========================================
   ACTIONS
========================================= */
const goToProfile = () => {
  router.push({ name: "profile" });
};

const logout = async () => {
  try {
    await store.dispatch("logout");

    router.push({ name: "login" });
  } catch (error) {
    console.error("Logout failed:", error);
  }
};
</script>

<template>
  <header class="dashboard-header">

    <!-- Left -->
    <div class="header-left">

      <!-- Sidebar Toggle -->
      <button
        type="button"
        class="sidebar-toggle"
        aria-label="Toggle Sidebar"
        @click="emit('toggle-sidebar')"
      >
        <Bars3Icon class="icon-size" />
      </button>

    </div>

    <!-- Right -->
    <div class="header-right">

      <!-- User Menu -->
      <Menu
        as="div"
        class="relative"
      >

        <!-- Trigger -->
        <MenuButton class="user-dropdown-btn">

          <img
            :src="userImage"
            alt="User Avatar"
            class="user-avatar"
          />

          <div class="user-content">

            <h6 class="user-name">
              {{ userName }}
            </h6>

            <p class="user-email">
              {{ userEmail }}
            </p>

          </div>

          <ChevronDownIcon class="dropdown-icon" />

        </MenuButton>

        <!-- Dropdown -->
        <transition
          enter-active-class="transition duration-150 ease-out"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >

          <MenuItems class="dropdown-menu">

            <!-- Header -->
            <div class="dropdown-user">

              <img
                :src="userImage"
                alt="User"
                class="dropdown-user-avatar"
              />

              <div>
                <h5 class="dropdown-user-name">
                  {{ userName }}
                </h5>

                <p class="dropdown-user-email">
                  {{ userEmail }}
                </p>
              </div>

            </div>

            <!-- Menu Items -->
            <div class="dropdown-body">

              <!-- Profile -->
              <MenuItem v-slot="{ active }">

                <button
                  type="button"
                  @click="goToProfile"
                  :class="[
                    active ? 'dropdown-item-active' : '',
                    'dropdown-item',
                  ]"
                >

                  <UserCircleIcon
                    class="dropdown-item-icon"
                  />

                  <span>
                    My Profile
                  </span>

                </button>

              </MenuItem>

              <!-- Logout -->
              <MenuItem v-slot="{ active }">

                <button
                  type="button"
                  @click="logout"
                  :class="[
                    active ? 'logout-active' : '',
                    'dropdown-item logout-btn',
                  ]"
                >

                  <ArrowRightOnRectangleIcon
                    class="dropdown-item-icon"
                  />

                  <span>
                    Logout
                  </span>

                </button>

              </MenuItem>

            </div>

          </MenuItems>

        </transition>

      </Menu>

    </div>

  </header>
</template>

<style scoped>

/* =========================================
   Header
========================================= */

.dashboard-header {
  position: sticky;
  top: 0;
  z-index: 100;

  height: 72px;
  padding: 0 24px;

  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* =========================================
   Header Sides
========================================= */

.header-left,
.header-right {
  display: flex;
  align-items: center;
}

/* =========================================
   Sidebar Toggle
========================================= */

.sidebar-toggle {
  width: 44px;
  height: 44px;

  border: none;
  border-radius: 14px;

  background: transparent;
  color: #374151;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.25s ease;
}

.sidebar-toggle:hover {
  background: #f3f4f6;
  color: #111827;
}

.icon-size {
  width: 24px;
  height: 24px;
}

/* =========================================
   User Dropdown Button
========================================= */

.user-dropdown-btn {
  display: flex;
  align-items: center;
  gap: 14px;

  padding: 8px 14px;

  border: 1px solid #e5e7eb;
  border-radius: 16px;

  background: #ffffff;

  cursor: pointer;

  transition: all 0.25s ease;
}

.user-dropdown-btn:hover {
  background: #f9fafb;
  border-color: #d1d5db;
}

/* =========================================
   User Avatar
========================================= */

.user-avatar {
  width: 44px;
  height: 44px;

  border-radius: 50%;
  object-fit: cover;
}

/* =========================================
   User Content
========================================= */

.user-content {
  text-align: left;
}

.user-name {
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  color: #111827;
}

.user-email {
  margin: 2px 0 0;
  font-size: 12px;
  color: #6b7280;
}

/* =========================================
   Dropdown Icon
========================================= */

.dropdown-icon {
  width: 18px;
  height: 18px;
  color: #6b7280;
}

/* =========================================
   Dropdown Menu
========================================= */

.dropdown-menu {
  width: 260px;

  position: absolute;
  right: 0;
  margin-top: 14px;

  background: #ffffff;

  border: 1px solid #e5e7eb;
  border-radius: 18px;

  box-shadow:
    0 12px 32px rgba(0, 0, 0, 0.08);

  overflow: hidden;

  outline: none;
}

/* =========================================
   Dropdown User
========================================= */

.dropdown-user {
  display: flex;
  align-items: center;
  gap: 14px;

  padding: 18px;

  border-bottom: 1px solid #f3f4f6;
}

.dropdown-user-avatar {
  width: 52px;
  height: 52px;

  border-radius: 50%;
  object-fit: cover;
}

.dropdown-user-name {
  margin: 0;
  font-size: 15px;
  font-weight: 700;
  color: #111827;
}

.dropdown-user-email {
  margin: 4px 0 0;
  font-size: 13px;
  color: #6b7280;
}

/* =========================================
   Dropdown Body
========================================= */

.dropdown-body {
  padding: 10px;
}

/* =========================================
   Dropdown Item
========================================= */

.dropdown-item {
  width: 100%;

  display: flex;
  align-items: center;
  gap: 12px;

  padding: 12px 14px;

  border: none;
  border-radius: 12px;

  background: transparent;

  font-size: 14px;
  font-weight: 500;

  color: #111827;

  transition: all 0.2s ease;
}

.dropdown-item:hover {
  background: #f3f4f6;
}

.dropdown-item-active {
  background: #f3f4f6;
}

/* =========================================
   Icons
========================================= */

.dropdown-item-icon {
  width: 20px;
  height: 20px;
}

/* =========================================
   Logout
========================================= */

.logout-btn {
  color: #dc2626;
}

.logout-btn:hover,
.logout-active {
  background: #fef2f2;
}

/* =========================================
   Responsive
========================================= */

@media (max-width: 768px) {

  .dashboard-header {
    padding: 0 16px;
  }

  .user-content {
    display: none;
  }

  .dropdown-menu {
    width: 220px;
  }
}

</style>