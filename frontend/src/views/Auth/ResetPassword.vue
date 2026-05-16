<template>
  <GuestLayout title="Set New Password">

    <form class="mt-8 space-y-6" @submit.prevent="onSubmit">

      <!-- Password Fields -->
      <div class="space-y-3">

        <!-- New Password -->
        <div>
          <label for="new-password" class="sr-only">New Password</label>

          <input
            id="new-password"
            v-model="form.password"
            type="password"
            autocomplete="new-password"
            required
            placeholder="New Password"
            class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm
                   focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
                   outline-none transition"
          />
        </div>

        <!-- Repeat Password -->
        <div>
          <label for="repeat-password" class="sr-only">Repeat Password</label>

          <input
            id="repeat-password"
            v-model="form.passwordRepeat"
            type="password"
            autocomplete="new-password"
            required
            placeholder="Repeat Password"
            class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm
                   focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
                   outline-none transition"
          />
        </div>

      </div>

      <!-- Back -->
      <div class="text-sm">
        <router-link
          :to="{ name: 'login' }"
          class="font-medium text-indigo-600 hover:text-indigo-500"
        >
          Go back to Login
        </router-link>
      </div>

      <!-- Submit -->
      <button
        type="submit"
        :disabled="loading"
        class="relative flex w-full items-center justify-center rounded-md
               bg-indigo-600 px-4 py-2 text-sm font-medium text-white
               hover:bg-indigo-700 focus:outline-none focus:ring-2
               focus:ring-indigo-500 disabled:opacity-50"
      >
        <LockClosedIcon class="absolute left-3 h-5 w-5 text-indigo-200" />

        {{ loading ? "Updating..." : "Reset Password" }}
      </button>

    </form>

  </GuestLayout>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import GuestLayout from "../../Layouts/GuestLayout.vue";
import { LockClosedIcon } from "@heroicons/vue/24/solid";

const loading = ref(false);

const form = reactive({
  password: "",
  passwordRepeat: ""
});

const onSubmit = async () => {
  if (form.password !== form.passwordRepeat) {
    alert("Passwords do not match");
    return;
  }

  loading.value = true;

  try {
    // API call here
    console.log("Submit password reset", form);

  } catch (err) {
    console.error(err);

  } finally {
    loading.value = false;
  }
};
</script>