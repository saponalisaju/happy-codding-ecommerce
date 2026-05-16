<script setup>
import { defineModel } from "vue";

const activeTab = defineModel();

const menus = [
  { key: "dashboard", label: "Dashboard", icon: "ri-home-line" },
  { key: "wallet", label: "Wallet", icon: "ri-wallet-line" },
  { key: "orders", label: "Orders", icon: "ri-shopping-bag-line" },
  { key: "refund", label: "Refunds", icon: "ri-history-line" },
  { key: "address", label: "Address", icon: "ri-map-pin-line" },
  { key: "profile", label: "Profile", icon: "ri-user-line" },
  { key: "earnings", label: "Earnings", icon: "ri-coin-line" },
];
</script>

<template>
  <aside class="sidebar">

    <div class="profile-box">
      <img src="../assets/user/2.png" alt="user"/>
      <h3>John Doe</h3>
      <p>john@email.com</p>
    </div>

    <ul class="menu">
      <li
        v-for="m in menus"
        :key="m.key"
        :class="{ active: activeTab === m.key }"
        @click="activeTab = m.key"
      >
        <i :class="m.icon"></i>
        {{ m.label }}
      </li>
    </ul>

    <button class="logout-btn">
      Logout
    </button>

  </aside>
</template>

<style scoped>
.sidebar {
  background: #111827;
  color: white;
  padding: 20px;
  border-radius: 16px;
  height: 100%;
}

.profile-box {
  text-align: center;
  margin-bottom: 20px;
}

.profile-box img {
  width: 70px;
  border-radius: 50%;
}

.menu {
  list-style: none;
  padding: 0;
}

.menu li {
  padding: 12px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 10px;
  transition: 0.2s;
}

.menu li:hover {
  background: rgba(255,255,255,0.1);
}

.menu li.active {
  background: #4f46e5;
}

.logout-btn {
  margin-top: 20px;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  background: #ef4444;
  color: white;
  border: none;
}
</style>