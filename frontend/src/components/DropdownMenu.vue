<script setup>
defineProps({
  items: Array,
});
</script>

<template>

  <div class="dropdown-menu">

    <ul class="dropdown-list">

      <li
        v-for="(item, index) in items"
        :key="index"
        class="nav-item"
      >

        <!-- LINK -->
        <router-link
          v-if="item.url"
          :to="item.url"
        >
          {{ item.title }}
        </router-link>

        <!-- HAS CHILDREN -->
        <template v-else>

          <a href="#">
            {{ item.title }}
          </a>

          <!-- RECURSIVE -->
          <DropdownMenu
            v-if="item.children"
            :items="item.children"
          />

        </template>

      </li>

    </ul>

  </div>

</template>

<script>
export default {
  name: "DropdownMenu",
};
</script>