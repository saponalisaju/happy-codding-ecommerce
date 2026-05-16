<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const menus = [
  {
    name: "Home",
    path: "/",
    icon: "home-2",
  },
  {
    name: "Cart",
    path: "/cart",
    icon: "shopping-cart",
  },
  {
    name: "Category",
    path: "/category",
    icon: "grid-apps",
  },
  {
    name: "Wishlist",
    path: "/wishlist",
    icon: "heart",
  },
  {
    name: "Account",
    path: "/account",
    icon: "user-1",
  },
];
</script>

<template>
  <nav class="mobile-menu" aria-label="Mobile Navigation">

    <ul class="mobile-menu-list">

      <li
        v-for="menu in menus"
        :key="menu.path"
        class="mobile-menu-item"
        :class="{ active: route.path === menu.path }"
      >
        <RouterLink
          :to="menu.path"
          class="mobile-menu-link"
        >

          <i
            class="iconsax"
            :data-icon="menu.icon"
          ></i>

          <span>
            {{ menu.name }}
          </span>

        </RouterLink>
      </li>

    </ul>

  </nav>
</template>

<style scoped>

.mobile-menu {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background: #ffffff;
  border-top: 1px solid #e5e7eb;
  box-shadow: 0 -2px 20px rgba(0, 0, 0, 0.05);
}

.mobile-menu-list {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0;
  padding: 10px 0;
  list-style: none;
}

.mobile-menu-item {
  flex: 1;
}

.mobile-menu-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  text-decoration: none;
  color: #6b7280;
  font-size: 12px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.mobile-menu-link i {
  font-size: 22px;
  transition: all 0.3s ease;
}

.mobile-menu-item.active .mobile-menu-link {
  color: #111827;
}

.mobile-menu-item.active .mobile-menu-link i {
  transform: translateY(-2px);
}

.mobile-menu-link:hover {
  color: #111827;
}

/* Desktop Hide */
@media (min-width: 992px) {
  .mobile-menu {
    display: none;
  }
}

</style>