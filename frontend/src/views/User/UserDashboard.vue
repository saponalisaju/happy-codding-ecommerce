<script setup>
import { ref } from "vue";
import Sidebar from "./components/Sidebar.vue";

import DashboardTab from "./tabs/DashboardTab.vue";
import WalletTab from "./tabs/WalletTab.vue";
import OrdersTab from "./tabs/OrdersTab.vue";
import RefundTab from "./tabs/RefundTab.vue";
import AddressTab from "./tabs/AddressTab.vue";
import ProfileTab from "./tabs/ProfileTab.vue";
import EarningsTab from "./tabs/EarningsTab.vue";

const activeTab = ref("dashboard");
</script>

<template>
  <section class="dashboard-wrapper">
    <div class="container">
      <div class="grid-layout">

        <!-- SIDEBAR -->
        <Sidebar v-model="activeTab" />

        <!-- CONTENT -->
        <div class="content-area">

          <DashboardTab v-if="activeTab === 'dashboard'" />
          <WalletTab v-if="activeTab === 'wallet'" />
          <OrdersTab v-if="activeTab === 'orders'" />
          <RefundTab v-if="activeTab === 'refund'" />
          <AddressTab v-if="activeTab === 'address'" />
          <ProfileTab v-if="activeTab === 'profile'" />
          <EarningsTab v-if="activeTab === 'earnings'" />

        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.dashboard-wrapper {
  padding: 30px;
  background: #f6f7fb;
  min-height: 100vh;
}

.grid-layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 20px;
}

.content-area {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

@media (max-width: 992px) {
  .grid-layout {
    grid-template-columns: 1fr;
  }
}
</style>