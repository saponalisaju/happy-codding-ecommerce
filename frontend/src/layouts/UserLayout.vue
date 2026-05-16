<template>
  <div class="user-layout">

    <!-- HEADER -->
    <Header />

    <div class="dashboard-wrapper">

      <!-- SIDEBAR -->
      <!-- <UserSidebar /> -->

      <!-- PAGE CONTENT -->
      <main class="dashboard-content">
        <router-view />
      </main>

    </div>

  </div>
</template>

<script setup>

import Header from "../components/common/Header.vue";
</script>