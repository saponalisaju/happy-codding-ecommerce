<script setup>
import {
  computed,
  reactive,
  watch,
  ref,
} from "vue";

import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

import {
  XMarkIcon,
} from "@heroicons/vue/24/outline";

import CustomInput from "@/components/core/CustomInput.vue";
import Spinner from "@/components/core/Spinner.vue";

import store from "@/store";

/* =========================================
   Props
========================================= */
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },

  user: {
    type: Object,
    required: true,
  },
});

/* =========================================
   Emits
========================================= */
const emit = defineEmits([
  "update:modelValue",
  "close",
]);

/* =========================================
   Modal State
========================================= */
const show = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

/* =========================================
   Loading
========================================= */
const loading = ref(false);

/* =========================================
   Form State
========================================= */
const form = reactive({
  id: null,
  name: "",
  email: "",
  password: "",
});

/* =========================================
   Watch User Changes
========================================= */
watch(
  () => props.user,
  (newUser) => {
    form.id = newUser?.id || null;
    form.name = newUser?.name || "";
    form.email = newUser?.email || "";
    form.password = "";
  },
  {
    immediate: true,
    deep: true,
  }
);

/* =========================================
   Modal Close
========================================= */
function closeModal() {
  show.value = false;
  emit("close");
}

/* =========================================
   Submit Form
========================================= */
async function onSubmit() {
  try {
    loading.value = true;

    let response = null;

    /* Update */
    if (form.id) {
      response = await store.dispatch(
        "updateUser",
        form
      );
    }

    /* Create */
    else {
      response = await store.dispatch(
        "createUser",
        form
      );
    }

    /* Success */
    if (
      response?.status === 200 ||
      response?.status === 201
    ) {
      await store.dispatch("getUsers");

      closeModal();
    }
  } catch (error) {
    console.error(
      "User save failed:",
      error
    );
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <TransitionRoot
    appear
    as="template"
    :show="show"
  >

    <Dialog
      as="div"
      class="relative z-50"
      @close="closeModal"
    >

      <!-- Overlay -->
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >

        <div
          class="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

      </TransitionChild>

      <!-- Modal -->
      <div
        class="fixed inset-0 overflow-y-auto"
      >

        <div
          class="flex min-h-full items-center justify-center p-4"
        >

          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >

            <DialogPanel
              class="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            >

              <!-- Loading -->
              <Spinner
                v-if="loading"
                class="absolute inset-0 z-50 flex items-center justify-center bg-white/80"
              />

              <!-- Header -->
              <div
                class="flex items-center justify-between border-b border-gray-100 px-6 py-5"
              >

                <div>

                  <DialogTitle
                    class="text-xl font-bold text-gray-900"
                  >
                    {{
                      form.id
                        ? "Update User"
                        : "Create New User"
                    }}
                  </DialogTitle>

                  <p
                    class="mt-1 text-sm text-gray-500"
                  >
                    {{
                      form.id
                        ? "Update existing user information."
                        : "Fill all required information to create a user."
                    }}
                  </p>

                </div>

                <!-- Close -->
                <button
                  type="button"
                  class="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-gray-100"
                  @click="closeModal"
                >

                  <XMarkIcon
                    class="h-6 w-6 text-gray-500"
                  />

                </button>

              </div>

              <!-- Form -->
              <form
                @submit.prevent="onSubmit"
              >

                <!-- Body -->
                <div
                  class="space-y-5 px-6 py-6"
                >

                  <CustomInput
                    v-model="form.name"
                    label="Full Name"
                    placeholder="Enter full name"
                  />

                  <CustomInput
                    v-model="form.email"
                    type="email"
                    label="Email Address"
                    placeholder="Enter email address"
                  />

                  <CustomInput
                    v-model="form.password"
                    type="password"
                    label="Password"
                    placeholder="Enter password"
                  />

                </div>

                <!-- Footer -->
                <div
                  class="flex flex-col-reverse gap-3 border-t border-gray-100 bg-gray-50 px-6 py-5 sm:flex-row sm:justify-end"
                >

                  <!-- Cancel -->
                  <button
                    type="button"
                    class="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
                    @click="closeModal"
                  >
                    Cancel
                  </button>

                  <!-- Submit -->
                  <button
                    type="submit"
                    class="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
                  >
                    {{
                      form.id
                        ? "Update User"
                        : "Create User"
                    }}
                  </button>

                </div>

              </form>

            </DialogPanel>

          </TransitionChild>

        </div>

      </div>

    </Dialog>

  </TransitionRoot>
</template>