<script setup>
import { RouterLink } from "vue-router";
import { computed, nextTick } from "vue";
import store from "@/store";
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";
import CategoryMenu from "../../views/Public/MegaMenu/CategoryMenu.vue";
import ProductMenu from "../../views/Public/MegaMenu/ProductMenu.vue";
import ShopMenu from "../../views/Public/MegaMenu/ShopMenu.vue";
import PageMenu from "../../views/Public/MegaMenu/PageMenu.vue";
import BlogMenu from "../../views/Public/MegaMenu/BlogMenu.vue";
import FeaturesMenu from "../../views/Public/MegaMenu/FeaturesMenu.vue";
import HeaderOption from "./HeaderOption.vue";
import MainHeader from "./MainHeader.vue";
import TopHeader from "./TopHeader.vue";

const router = useRouter();

onMounted(async () => {
  await nextTick();

  if (window.Iconsax) {
    window.Iconsax.replace();
  }
});

const token = computed(() => store.state.user.token);


const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const handleClickOutside = (e) => {
  const el = document.querySelector(".dropdown-category");

  if (el && !el.contains(e.target)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});

const logout = () => {
  store.commit("setUser", null);
  store.commit("setToken", null);
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  router.push({ name: "home" });
};


const openDropdown = ref(null);

</script>

<template>
  <header class="header-7">

    <!-- Top Header -->
    <TopHeader />

    <!-- Main Header -->
    <MainHeader />

    <!-- Navigation -->
    <div class="container d-md-block d-none">

      <nav class="navbar navbar-expand-lg">

        <!-- Category -->
        <div class="dropdown-category">

          <button class="category-toggle">

            <img
              src="/assets/images/menu.svg"
              alt="Menu"
            />

            Categories

          </button>

          <ul class="category-list">

            <li>
              <RouterLink to="/shop/mobile">
                Phone
              </RouterLink>
            </li>

            <li>
              <RouterLink to="/shop/laptop">
                Laptop
              </RouterLink>
            </li>

            <li>
              <RouterLink to="/shop/keyboard">
                Keyboard
              </RouterLink>
            </li>

            <li>
              <RouterLink to="/shop/mouse">
                Mouse
              </RouterLink>
            </li>

          </ul>
        </div>

        <!-- Navbar -->
        <div
          class="collapse navbar-collapse"
          id="navbarSupportedContent"
        >

          <div class="side-menu-header">
            <h3 class="d-lg-none d-block">
              Menu
            </h3>

            <button
              type="button"
              class="close-btn d-lg-none d-block"
            >
              <img
                src="/assets/svg/icon/close.svg"
                class="img-fluid"
                alt="Close"
              />
            </button>
          </div>

          <!-- Nav Links -->
          <ul class="navbar-nav m-auto">

            <li class="nav-item">
              <RouterLink
                class="nav-link"
                to="/"
              >
                Home
              </RouterLink>
            </li>

            <ShopMenu />

            <CategoryMenu />

            <FeaturesMenu />

            <BlogMenu />

            <li class="nav-item">
              <RouterLink
                class="nav-link"
                to="/contact-us"
              >
                Contact
              </RouterLink>
            </li>

          </ul>

        </div>

        <HeaderOption :token="token" @logout="logout" />
      </nav>
    </div>

  </header>
</template>

<style scoped>

.nav-item.dropdown {
  position: relative;
  list-style: none;
}

.nav-item.dropdown .nav-link::after {
  display: none !important;
  content: none !important;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;

  min-width: 200px;

  width: 100px;

  padding: 12px 0;

  background: #ffffff !important;

  opacity: 1 !important;

  backdrop-filter: unset !important;

  border: 1px solid #eee;

  border-radius: 12px;

  box-shadow: 0 20px 40px rgba(0,0,0,0.12);

  z-index: 999999 !important;

  overflow: hidden;

  isolation: isolate;
}

.dropdown-item {
  display: block;
  padding: 12px 20px;
  color: #222;
  text-decoration: none;
  transition: 0.3s;
}

.dropdown-item:hover {
  background: #f5f5f5;
  padding-left: 25px;
}

.nav-link {
  cursor: pointer;
}

.custom-logo {
  width: 120px;
  height: auto;
  object-fit: contain;
}

.category-list {
  transition: all 0.2s ease;
}

.offer-text {
  margin: 0;
  font-size: 14px;
}

.category-btn,
.category-toggle {
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;
}

.header-option li a {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-option span {
  position: absolute;
  top: -6px;
  right: -8px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ff4d4d;
  color: #fff;
}

.footer-desc {
  line-height: 1.8;
}

</style>