<script setup>
import { navigation } from "../data/navigation";
</script>

<template>
  <ul class="navbar-nav">

    <li
      v-for="(item, index) in navigation"
      :key="index"
      class="nav-item"
      :class="{
        dropdown: item.type === 'dropdown',
        'mega-menu-wrapper': item.type === 'mega',
      }"
    >

      <!-- MAIN TITLE -->
      <a class="nav-link" href="#">
        {{ item.title }}
      </a>

      <!-- DROPDOWN -->
      <DropdownMenu
        v-if="item.type === 'dropdown'"
        :items="item.children"
      />

      <!-- MEGA MENU -->
      <MegaMenu
        v-if="item.type === 'mega'"
        :columns="item.columns"
      />

    </li>

  </ul>
</template>

<script>
import DropdownMenu from "./DropdownMenu.vue";
import MegaMenu from "./MegaMenu.vue";

export default {
  components: {
    DropdownMenu,
    MegaMenu,
  },
};
</script>