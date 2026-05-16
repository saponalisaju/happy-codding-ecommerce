<script setup>
import { RouterLink } from "vue-router";
import { computed, nextTick } from "vue";
import store from "@/store";
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";

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
   
        <ul class="header-option">

          <!-- Search -->
          <li>
            <RouterLink to="/search">
              <i
                class="iconsax"
                data-icon="search-normal-2"
              ></i>
            </RouterLink>
          </li>

          <!-- Wishlist -->
          <li class="cart-option">
            <RouterLink :to="{name: 'account.wishlist'}">

              <i
                class="iconsax"
                data-icon="heart"
              ></i>

              <span>1</span>

            </RouterLink>
          </li>

          <!-- Cart -->
          <li class="cart-option">
            <RouterLink to="/cart">

              <i
                class="iconsax"
                data-icon="shopping-cart"
              ></i>

              <span>4</span>

            </RouterLink>
          </li>

          <!-- User -->
          <li v-if="!token">
            <RouterLink to="/login">
              <i
                class="iconsax"
                data-icon="user-2"
              ></i>
            </RouterLink>
          </li>

          <li v-else>
          <button @click="logout">
           <i class="iconsax" data-icon="logout"></i>
            </button>
           </li>

        </ul>

</template>