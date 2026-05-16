<template>
  <GuestLayout title="Request New Password">

    <form
      class="mt-8 space-y-6"
      @submit.prevent="submit"
    >

      <!-- Email -->
      <div>
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-700"
        >
          Email Address
        </label>

        <input
          id="email"
          v-model="email"
          type="email"
          autocomplete="email"
          required
          placeholder="Enter your email address"
          class="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm
                 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
                 outline-none transition"
        />
      </div>

      <!-- Back To Login -->
      <div class="flex justify-end">
        <router-link
          :to="{ name: 'login' }"
          class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
        >
          Remember your password?
        </router-link>
      </div>

      <!-- Submit -->
      <button
        type="submit"
        class="group relative flex w-full items-center justify-center
               rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold
               text-white transition hover:bg-indigo-700
               focus:outline-none focus:ring-2 focus:ring-indigo-500
               focus:ring-offset-2"
      >

        <LockClosedIcon
          class="absolute left-4 h-5 w-5 text-indigo-200 transition
                 group-hover:text-white"
        />

        Send Reset Link

      </button>

    </form>

  </GuestLayout>
</template>

<script setup>
import { ref } from "vue";
import { LockClosedIcon } from "@heroicons/vue/24/solid";

import GuestLayout from "../../layouts/GuestLayout.vue";

const email = ref("");

function submit() {
  console.log("Reset password for:", email.value);

  // API call here
}
</script>