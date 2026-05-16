<template>
  <div class="bg-white p-6 rounded-lg shadow">

    <h1 class="text-2xl font-bold mb-4">Users</h1>

    <table class="w-full border">

      <thead>
        <tr class="bg-gray-100">
          <th class="p-2">ID</th>
          <th class="p-2">Name</th>
          <th class="p-2">Email</th>
          <th class="p-2">Role</th>
        </tr>
      </thead>

      <tbody>

        <!-- LOADING -->
        <tr v-if="loading">
          <td colspan="4" class="text-center p-4">
            Loading...
          </td>
        </tr>

        <!-- EMPTY -->
        <tr v-else-if="!usersList.length">
          <td colspan="4" class="text-center p-4 text-gray-500">
            No users found
          </td>
        </tr>

        <!-- DATA -->
        <tr v-else v-for="user in usersList" :key="user.id">
          <td class="p-2 border">{{ user.id }}</td>
          <td class="p-2 border">{{ user.name }}</td>
          <td class="p-2 border">{{ user.email }}</td>
          <td class="p-2 border">
            {{ user.is_admin ? 'Admin' : 'User' }}
          </td>
        </tr>

      </tbody>

    </table>

  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import store from "../../../store";

onMounted(() => {
  store.dispatch("getUsers");
});

const usersList = computed(() => store.state.users.data || []);
const loading = computed(() => store.state.users.loading);
</script>