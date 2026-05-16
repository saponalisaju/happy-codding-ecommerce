<template>
  <div
    class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 animate-fade-in-down"
  >
    <!-- Header -->
    <div
      class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 border-b border-gray-100 pb-4 mb-5"
    >
      <!-- Left -->
      <div class="flex flex-wrap items-center gap-3">
        <span class="text-sm font-medium text-gray-600">
          Per Page
        </span>

        <select
          v-model="perPage"
          @change="getCustomers()"
          class="h-10 rounded-xl border border-gray-200 px-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>

        <div class="text-sm text-gray-500">
          Found
          <span class="font-semibold text-gray-800">
            {{ customers.total || 0 }}
          </span>
          customers
        </div>
      </div>

      <!-- Right -->
      <div class="flex items-center gap-3">
        <input
          v-model="search"
          @keyup.enter="getCustomers()"
          type="text"
          placeholder="Search customers..."
          class="h-10 w-full lg:w-72 rounded-xl border border-gray-200 px-4 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
    </div>

    <!-- Table -->
    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-gray-100">
            <TableHeaderCell
              field="id"
              :sort-field="sortField"
              :sort-direction="sortDirection"
              @click="sortCustomers('id')"
            >
              ID
            </TableHeaderCell>

            <TableHeaderCell
              field="name"
              :sort-field="sortField"
              :sort-direction="sortDirection"
              @click="sortCustomers('name')"
            >
              Customer
            </TableHeaderCell>

            <TableHeaderCell
              field="email"
              :sort-field="sortField"
              :sort-direction="sortDirection"
              @click="sortCustomers('email')"
            >
              Email
            </TableHeaderCell>

            <TableHeaderCell
              field="phone"
              :sort-field="sortField"
              :sort-direction="sortDirection"
              @click="sortCustomers('phone')"
            >
              Phone
            </TableHeaderCell>

            <TableHeaderCell
              field="status"
              :sort-field="sortField"
              :sort-direction="sortDirection"
              @click="sortCustomers('status')"
            >
              Status
            </TableHeaderCell>

            <TableHeaderCell
              field="created_at"
              :sort-field="sortField"
              :sort-direction="sortDirection"
              @click="sortCustomers('created_at')"
            >
              Registered
            </TableHeaderCell>

            <th
              class="text-left py-4 px-3 font-semibold text-gray-700"
            >
              Actions
            </th>
          </tr>
        </thead>

        <!-- Loading -->
        <tbody v-if="customers.loading">
          <tr>
            <td colspan="7" class="py-10">
              <Spinner />
            </td>
          </tr>
        </tbody>

        <!-- Empty -->
        <tbody v-else-if="!customers.data?.length">
          <tr>
            <td
              colspan="7"
              class="py-10 text-center text-gray-500"
            >
              No customers found
            </td>
          </tr>
        </tbody>

        <!-- Data -->
        <tbody v-else>
          <tr
            v-for="customer in customers.data"
            :key="customer.id"
            class="border-b border-gray-50 hover:bg-gray-50 transition"
          >
            <!-- ID -->
            <td class="py-4 px-3 font-medium text-gray-700">
              #{{ customer.id }}
            </td>

            <!-- Name -->
            <td class="py-4 px-3">
              <div class="flex items-center gap-3">
                <div
                  class="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center font-semibold text-indigo-600 uppercase"
                >
                  {{ customer.first_name?.charAt(0) }}
                </div>

                <div>
                  <h6 class="font-semibold text-gray-800">
                    {{ customer.first_name }}
                    {{ customer.last_name }}
                  </h6>
                </div>
              </div>
            </td>

            <!-- Email -->
            <td
              class="py-4 px-3 text-gray-600 max-w-[220px] truncate"
            >
              {{ customer.email }}
            </td>

            <!-- Phone -->
            <td class="py-4 px-3 text-gray-600">
              {{ customer.phone }}
            </td>

            <!-- Status -->
            <td class="py-4 px-3">
              <span
                class="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
                :class="
                  customer.status === 'active'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-600'
                "
              >
                {{ customer.status }}
              </span>
            </td>

            <!-- Created -->
            <td class="py-4 px-3 text-gray-500">
              {{ customer.created_at }}
            </td>

            <!-- Actions -->
            <td class="py-4 px-3">
              <Menu as="div" class="relative inline-block text-left">
                <MenuButton
                  class="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-gray-100 transition"
                >
                  <EllipsisVerticalIcon
                    class="w-5 h-5 text-gray-500"
                  />
                </MenuButton>

                <transition
                  enter-active-class="transition duration-150 ease-out"
                  enter-from-class="opacity-0 scale-95"
                  enter-to-class="opacity-100 scale-100"
                  leave-active-class="transition duration-100 ease-in"
                  leave-from-class="opacity-100 scale-100"
                  leave-to-class="opacity-0 scale-95"
                >
                  <MenuItems
                    class="absolute right-0 mt-2 w-40 origin-top-right rounded-2xl bg-white border border-gray-100 shadow-lg focus:outline-none z-20 p-2"
                  >
                    <!-- View / Edit -->
                    <MenuItem v-slot="{ active }">
                      <RouterLink
                        :to="{
                          name: 'app.customers.view',
                          params: { id: customer.id },
                        }"
                        :class="[
                          active
                            ? 'bg-indigo-50 text-indigo-600'
                            : 'text-gray-700',
                          'flex items-center gap-3 w-full rounded-xl px-3 py-2 text-sm transition',
                        ]"
                      >
                        <PencilSquareIcon class="w-5 h-5" />

                        Edit
                      </RouterLink>
                    </MenuItem>

                    <!-- Delete -->
                    <MenuItem v-slot="{ active }">
                      <button
                        @click="deleteCustomer(customer)"
                        :class="[
                          active
                            ? 'bg-red-50 text-red-600'
                            : 'text-red-500',
                          'flex items-center gap-3 w-full rounded-xl px-3 py-2 text-sm transition',
                        ]"
                      >
                        <TrashIcon class="w-5 h-5" />

                        Delete
                      </button>
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Footer -->
    <div
      v-if="!customers.loading"
      class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mt-6"
    >
      <!-- Info -->
      <div class="text-sm text-gray-500">
        Showing
        <span class="font-semibold text-gray-800">
          {{ customers.from || 0 }}
        </span>
        to
        <span class="font-semibold text-gray-800">
          {{ customers.to || 0 }}
        </span>
      </div>

      <!-- Pagination -->
      <nav
        v-if="customers.total > customers.limit"
        class="flex items-center flex-wrap gap-2"
      >
        <button
          v-for="(link, index) in customers.links"
          :key="index"
          :disabled="!link.url"
          @click="getForPage($event, link)"
          v-html="link.label"
          class="min-w-[42px] h-10 px-3 rounded-xl border text-sm transition"
          :class="[
            link.active
              ? 'bg-indigo-600 text-white border-indigo-600'
              : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50',

            !link.url
              ? 'opacity-50 cursor-not-allowed'
              : '',
          ]"
        />
      </nav>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";

import {
  EllipsisVerticalIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/vue/24/outline";

import store from "@/store";

import Spinner from "@/components/core/Spinner.vue";
import TableHeaderCell from "@/components/core/Table/TableHeaderCell.vue";

import { CUSTOMERS_PER_PAGE } from "@/constants";

/* =========================================
   State
========================================= */

const perPage = ref(CUSTOMERS_PER_PAGE);

const search = ref("");

const sortField = ref("updated_at");

const sortDirection = ref("desc");

/* =========================================
   Store
========================================= */

const customers = computed(() => {
  return store.state.customers;
});

/* =========================================
   Lifecycle
========================================= */

onMounted(() => {
  getCustomers();
});

/* =========================================
   Methods
========================================= */

function getCustomers(url = null) {
  store.dispatch("getCustomers", {
    url,
    search: search.value,
    per_page: perPage.value,
    sort_field: sortField.value,
    sort_direction: sortDirection.value,
  });
}

function getForPage(event, link) {
  event.preventDefault();

  if (!link.url || link.active) return;

  getCustomers(link.url);
}

function sortCustomers(field) {
  if (sortField.value === field) {
    sortDirection.value =
      sortDirection.value === "asc"
        ? "desc"
        : "asc";
  } else {
    sortField.value = field;
    sortDirection.value = "asc";
  }

  getCustomers();
}

function deleteCustomer(customer) {
  const confirmDelete = confirm(
    `Are you sure you want to delete "${customer.first_name}"?`
  );

  if (!confirmDelete) return;

  store
    .dispatch("deleteCustomer", customer)
    .then(() => {
      store.commit(
        "showToast",
        "Customer deleted successfully"
      );

      getCustomers();
    })
    .catch((error) => {
      console.error("Delete failed:", error);
    });
}
</script>

<style scoped>
.animate-fade-in-down {
  animation: fadeInDown 0.35s ease;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-12px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>