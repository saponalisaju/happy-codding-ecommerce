<template>
  <TransitionRoot as="template" :show="show">
    <Dialog as="div" class="relative z-50" @close="closeModal">
      
      <!-- Darkened Mask Layer Background Overlay -->
      <TransitionChild 
        as="template" 
        enter="ease-out duration-300" 
        enter-from="opacity-0" 
        enter-to="opacity-100" 
        leave="ease-in duration-200" 
        leave-from="opacity-100" 
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
      </TransitionChild>

      <!-- Viewport Matrix Content Wrapper Container -->
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          
          <!-- ✅ FIXED STRUCTURAL HIERARCHY: Added a single native <div> as the immediate child element of TransitionChild -->
          <TransitionChild 
            as="template" 
            enter="ease-out duration-300" 
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" 
            enter-to="opacity-100 translate-y-0 sm:scale-100" 
            leave="ease-in duration-200" 
            leave-from="opacity-100 translate-y-0 sm:scale-100" 
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel class="relative transform overflow-hidden rounded-xl bg-white p-6 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md">
              
              <!-- Spinner stays inside DialogPanel container safely -->
              <div v-if="saving" class="absolute inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center z-50 rounded-xl">
                <Spinner class="h-8 w-8 text-indigo-600" />
              </div>

              <!-- Modal Component Header Wrapper -->
              <div class="flex justify-between items-center mb-5 border-b border-gray-100 pb-3">
                <DialogTitle as="h3" class="text-lg font-bold text-gray-900">
                  {{ form.id ? `Update Category: "${props.category.name}"` : 'Register New Category' }}
                </DialogTitle>
                <button @click="closeModal" class="text-gray-400 hover:text-gray-600 text-2xl focus:outline-none" type="button">&times;</button>
              </div>

              <!-- Form Specifications Rules Matrix -->
              <form @submit.prevent="onSubmit" class="space-y-4">
                
                <!-- Category Name Input -->
                <div>
                  <CustomInput 
                    v-model="form.name" 
                    label="Category Name" 
                    :errors="errors['name']" 
                    required 
                    placeholder="e.g. Mens Footwear"
                  />
                </div>

                <!-- Stable Dropdown Matrix -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Parent Hierarchy Tier</label>
                  <select 
                    v-model="form.parent_id" 
                    class="w-full bg-white border border-gray-300 rounded-lg p-2.5 text-sm text-gray-800 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm outline-none transition-all"
                  >
                    <option :value="null">Select Parent Category (Leave blank for Root)</option>
                    <option v-for="opt in flatOptions" :key="opt.id" :value="opt.id">
                      {{ opt.name }}
                    </option>
                  </select>
                  <p v-if="errors['parent_id']" class="text-xs text-red-500 mt-1 font-medium">{{ errors['parent_id'] }}</p>
                </div>

                <!-- Visibility Status Mapping -->
                <div class="pt-2">
                  <CustomInput type="checkbox" v-model="form.active" label="Mark Node Active" :errors="errors['active']" class="accent-indigo-600" />
                </div>

                <!-- Actions Controls Footer Operations Matrix -->
                <div class="flex justify-end gap-3 pt-4 border-t border-gray-100 mt-6 -mx-6 -mb-6 p-4 bg-gray-50 rounded-b-xl">
                  <button type="button" @click="closeModal" class="border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-all">Cancel</button>
                  <button type="submit" :disabled="saving" class="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-all shadow-sm">
                    {{ saving ? 'Saving...' : 'Commit Data' }}
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

<script setup>
import { computed, ref, watch } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import CustomInput from '@/components/core/CustomInput.vue'
import Spinner from '@/components/core/Spinner.vue'
import axiosClient from '@/services/api/axios.js'
import store from '@/store/index.js'

const props = defineProps({
  modelValue: { type: Boolean, required: true },
  category: { type: Object, default: () => ({ id: null, name: '', parent_id: null, active: true }) }
})

const emit = defineEmits(['update:modelValue', 'success'])

const saving = ref(false)
const errors = ref({})
const flatOptions = ref([])

const form = ref({ id: null, name: '', parent_id: null, active: true })

const show = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

const loadDropdownDataMatrix = async () => {
  try {
    const response = await axiosClient.get('/categories')
    const list = response.data.data || response.data
    flatOptions.value = Array.isArray(list) ? list.filter(c => !form.value.id || c.id !== form.value.id) : []
  } catch (err) {
    console.error('Failed to populate dropdown properties data array:', err)
  }
}

watch(() => props.modelValue, (isOpen) => {
  if (isOpen) {
    form.value = {
      id: props.category?.id || null,
      name: props.category?.name || '',
      parent_id: props.category?.parent_id || null,
      active: props.category ? !!props.category.active : true
    }
    errors.value = {}
    loadDropdownDataMatrix()
  }
})

function closeModal() {
  show.value = false
  errors.value = {}
  emit('update:modelValue', false)
}

async function onSubmit() {
  saving.value = true
  errors.value = {}
  try {
    const payload = { ...form.value, active: form.value.active ? 1 : 0 }
    
    if (payload.id) {
      await axiosClient.put(`/categories/${payload.id}`, payload)
      store.commit('showToast', 'Category changed successfully')
    } else {
      await axiosClient.post('/categories', payload)
      store.commit('showToast', 'New category node deployed safely')
    }
    
    emit('success')
    closeModal()
  } catch (err) {
    if (err.response && err.response.status === 422) {
      errors.value = err.response.data.errors || {}
    }
  } finally {
    saving.value = false
  }
}
</script>
