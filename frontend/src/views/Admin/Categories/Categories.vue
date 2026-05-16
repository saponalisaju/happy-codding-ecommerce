<template>
  <div class="p-6 max-w-7xl mx-auto">
    <!-- Top Action Panel Header Grid -->
    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-gray-200 pb-5 mb-6 gap-4">
      <div>
        <h1 class="text-2xl font-bold text-gray-900 tracking-tight">Product Categories</h1>
        <p class="text-sm text-gray-500 mt-1">Manage, filter, and sort organizational classification frameworks for your storefront.</p>
      </div>
      <button 
        type="button" 
        @click="openCreateModal"
        class="inline-flex justify-center items-center px-4 py-2.5 border border-transparent rounded-lg text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all shadow-sm"
      >
        + Add Category
      </button>
    </div>

    <!-- Your Table Template Render Block -->
    <!-- It listens to clickEdit event and runs openEditModal function -->
    <CategoriesTable @clickEdit="openEditModal" />

    <!-- Reusable Form Overlay Component Modal Instance -->
    <CategoryModal 
      v-model="modalOpen" 
      :category="activeCategoryModel" 
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CategoriesTable from './CategoriesTable.vue' // Imports your table layout template
import CategoryModal from './CategoryModal.vue' // Imports the unified HeadlessUI modal we fixed

const modalOpen = ref(false)
const activeCategoryModel = ref({ id: null, name: '', parent_id: null, active: true })

/**
 * Instantiates pristine empty properties inside the data tracker 
 * and reveals the modal view for a creation routine.
 */
function openCreateModal() {
  activeCategoryModel.value = { id: null, name: '', parent_id: null, active: true }
  modalOpen.value = true
}

/**
 * Receives the category object emitted by CategoryTable, maps 
 * a reactive copy, and forces open the editing interface window.
 */
function openEditModal(category) {
  activeCategoryModel.value = { ...category, active: !!category.active }
  modalOpen.value = true
}
</script>
