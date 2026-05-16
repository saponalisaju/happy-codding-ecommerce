<template>
  <div class="bg-white p-4 rounded-lg shadow animate-fade-in-down">

    <div class="flex justify-between border-b-2 pb-3">
      <div class="flex items-center">
        <span class="ml-3">
          Found {{ categories?.data?.length || 0 }} categories
        </span>
      </div>
    </div>

    <table class="table-auto w-full">

      <thead>
        <tr>
          <TableHeaderCell
            field="id"
            :sort-field="sortField"
            :sort-direction="sortDirection"
            @click="sortCategories('id')"
          >
            ID
          </TableHeaderCell>

          <TableHeaderCell
            field="name"
            :sort-field="sortField"
            :sort-direction="sortDirection"
            @click="sortCategories('name')"
          >
            Name
          </TableHeaderCell>

          <TableHeaderCell
            field="slug"
            :sort-field="sortField"
            :sort-direction="sortDirection"
            @click="sortCategories('slug')"
          >
            Slug
          </TableHeaderCell>

          <TableHeaderCell
            field="active"
            :sort-field="sortField"
            :sort-direction="sortDirection"
            @click="sortCategories('active')"
          >
            Active
          </TableHeaderCell>

          <TableHeaderCell
            field="parent_id"
            :sort-field="sortField"
            :sort-direction="sortDirection"
            @click="sortCategories('parent_id')"
          >
            Parent
          </TableHeaderCell>

          <TableHeaderCell
            field="created_at"
            :sort-field="sortField"
            :sort-direction="sortDirection"
            @click="sortCategories('created_at')"
          >
            Create Date
          </TableHeaderCell>

          <TableHeaderCell field="actions">
            Actions
          </TableHeaderCell>
        </tr>
      </thead>

      <!-- LOADING / EMPTY -->
      <tbody v-if="categories.loading || !categories?.data?.length">
        <tr>
          <td colspan="7">
            <Spinner v-if="categories.loading" />
            <p v-else class="text-center py-8 text-gray-700">
              There are no categories
            </p>
          </td>
        </tr>
      </tbody>

      <!-- DATA -->
      <tbody v-else>
        <tr
          v-for="category in categories.data"
          :key="category.id"
        >
          <td class="border-b p-2">{{ category.id }}</td>

          <td class="border-b p-2">
            {{ category.name }}
          </td>

          <td class="border-b p-2 max-w-[200px] whitespace-nowrap overflow-hidden text-ellipsis">
            {{ category.slug }}
          </td>

          <td class="border-b p-2">
            {{ category.active ? 'Yes' : 'No' }}
          </td>

          <td class="border-b p-2">
            {{ category.parent?.name || '-' }}
          </td>

          <td class="border-b p-2">
            {{ category.created_at }}
          </td>

          <!-- ACTIONS -->
          <td class="border-b p-2">
            <Menu as="div" class="relative inline-block text-left">
              <div>
                <MenuButton
                  class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black bg-opacity-0 text-sm font-medium hover:bg-opacity-5 focus:outline-none"
                >
                  <EllipsisVerticalIcon
                    class="h-5 w-5 text-indigo-500"
                  />
                </MenuButton>
              </div>

              <transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
              >
                <MenuItems
                  class="absolute z-10 right-0 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <div class="px-1 py-1">

                    <!-- EDIT -->
                    <MenuItem v-slot="{ active }">
                      <button
                        :class="[
                          active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                          'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                        ]"
                        @click="editCategory(category)"
                      >
                        <PencilIcon class="mr-2 h-5 w-5 text-indigo-400" />
                        Edit
                      </button>
                    </MenuItem>

                    <!-- DELETE -->
                    <MenuItem v-slot="{ active }">
                      <button
                        :class="[
                          active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                          'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                        ]"
                        @click="deleteCategory(category)"
                      >
                        <TrashIcon class="mr-2 h-5 w-5 text-indigo-400" />
                        Delete
                      </button>
                    </MenuItem>

                  </div>
                </MenuItems>
              </transition>

            </Menu>
          </td>
        </tr>
      </tbody>

    </table>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../../../store";
import Spinner from "../../../components/core/Spinner.vue";
import TableHeaderCell from "../../../components/core/Table/TableHeaderCell.vue";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import {
  EllipsisVerticalIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/vue/24/outline";

const categories = computed(() => store.state.categories);

const sortField = ref("name");
const sortDirection = ref("asc");

const emit = defineEmits(["clickEdit"]);

onMounted(() => {
  getCategories();
});

function getCategories(url = null) {
  store.dispatch("getCategories", {
    url,
    sort_field: sortField.value,
    sort_direction: sortDirection.value,
  });
}

function sortCategories(field) {
  if (field === sortField.value) {
    sortDirection.value =
      sortDirection.value === "asc" ? "desc" : "asc";
  } else {
    sortField.value = field;
    sortDirection.value = "asc";
  }

  getCategories();
}

async function deleteCategory(category) {
  if (!confirm("Are you sure you want to delete this category?")) {
    return;
  }

  await store.dispatch("deleteCategory", category);

  store.commit("showToast", "Category deleted successfully");

  getCategories();
}

function editCategory(category) {
  emit("clickEdit", category);
}
</script>

<style scoped>
</style>