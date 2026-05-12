<template>
  <GuestLayout title="Set new password">

    <form class="mt-8 space-y-6" @submit.prevent="onSubmit">

      <div class="rounded-md shadow-sm -space-y-px">

        <!-- New Password -->
        <div>
          <label for="new-password" class="sr-only">New Password</label>
          <input
            id="new-password"
            v-model="form.password"
            type="password"
            required
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="New Password"
          />
        </div>

        <!-- Repeat Password -->
        <div>
          <label for="password-repeat" class="sr-only">Repeat Password</label>
          <input
            id="password-repeat"
            v-model="form.passwordRepeat"
            type="password"
            required
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Repeat Password"
          />
        </div>

      </div>

      <!-- Back link -->
      <div class="flex items-center justify-between">
        <router-link
          :to="{ name: 'login' }"
          class="font-medium text-indigo-600 hover:text-indigo-500 text-sm"
        >
          Go back to Login
        </router-link>
      </div>

      <!-- Submit -->
      <div>
        <button
          type="submit"
          class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" />
          </span>
          Submit
        </button>
      </div>

    </form>

  </GuestLayout>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import GuestLayout from "@/components/GuestLayout.vue";
import { LockClosedIcon } from "@heroicons/vue/solid";

const form = reactive({
  password: "",
  passwordRepeat: ""
});

const onSubmit = () => {
  if (form.password !== form.passwordRepeat) {
    alert("Passwords do not match");
    return;
  }

  console.log("Submit password reset", form);
};
</script>