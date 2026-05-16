<template>
  <div class="flex items-center justify-between mb-3 p-4">
    <h1 class="text-3xl font-semibold">
      {{ product.id ? `Update product: "${product.title}"` : 'Create new Product' }}
    </h1>
  </div>
  <div class="bg-white rounded-lg shadow p-6 relative">
    <Spinner v-if="loading" class="absolute left-0 top-0 bg-white right-0 bottom-0 flex items-center justify-center z-50"/>
    
    <form v-if="!loading" @submit.prevent="onSubmit">
      <div class="grid grid-cols-3 gap-6">
        
        <!-- Left Column Inputs -->
        <div class="col-span-2 px-4 pt-5 pb-4">
          <CustomInput class="mb-2" v-model="product.title" label="Product Title" :errors="errors['title']"/>
          <CustomInput type="richtext" class="mb-2" v-model="product.description" label="Description" :errors="errors['description']"/>
          <CustomInput type="number" class="mb-2" v-model="product.price" label="Price" prepend="$" :errors="errors['price']"/>
          <CustomInput type="number" class="mb-2" v-model="product.quantity" label="Quantity" :errors="errors['quantity']"/>
          <CustomInput type="checkbox" class="mb-2" v-model="product.published" label="Published" :errors="errors['published']"/>
          
          <div class="mt-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">Categories</label>
            <treeselect v-model="product.categories" :multiple="true" :options="options" :errors="errors['categories']"/>
          </div>
        </div>
        
        <!-- Right Column: Single Cloudinary Image Upload Container -->
        <div class="col-span-1 px-4 pt-5 pb-4">
          <label class="block text-sm font-medium text-gray-700 mb-2">Product Image</label>
          
          <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md relative bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
            <div class="space-y-1 text-center">
              <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <div class="flex text-sm text-gray-600">
                <label class="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500">
                  <span>Upload a file</span>
                  <input type="file" class="sr-only" @change="onImageSelect" accept="image/*" />
                </label>
              </div>
            </div>
          </div>

          <div v-if="uploadProgress > 0" class="mt-2 text-sm text-green-600 font-bold">
            Uploading to Cloudinary: {{ uploadProgress }}%
          </div>

          <div v-if="imagePreviewUrl" class="mt-4 border rounded-lg overflow-hidden shadow-sm bg-white p-2">
            <p class="text-xs text-gray-400 mb-1">Image Preview:</p>
            <img :src="imagePreviewUrl" class="w-full h-48 object-cover rounded-md" alt="Product preview" />
          </div>
        </div>
      </div>

      <!-- Form Actions Footer -->
      <footer class="bg-gray-50 rounded-b-lg px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse mt-6">
        <button type="submit" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500">
          Save
        </button>
        <button type="button" @click="onSubmit($event, true)" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500">
          Save & Close
        </button>
        <!-- ✅ Fixed router destination target name here -->
        <router-link :to="{name: 'admin.products'}" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 text-base font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
          Cancel
        </router-link>
      </footer>
    </form>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import CustomInput from "@/components/core/CustomInput.vue";
import store from "@/store/index.js";
import Spinner from "@/components/core/Spinner.vue";
import {useRoute, useRouter} from "vue-router";
import Treeselect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
import axiosClient from '@/services/api/axios.js';
import axios from 'axios';

const route = useRoute()
const router = useRouter()

const product = ref({
  id: null,
  title: null,
  image: '', 
  description: '',
  price: null,
  quantity: null,
  published: false,
  categories: []
})

const selectedFile = ref(null)
const imagePreviewUrl = ref('')
const uploadProgress = ref(0)
const errors = ref({});
const loading = ref(false)
const options = ref([])

onMounted(() => {
  if (route.params.id) {
    loading.value = true
    store.dispatch('getProduct', route.params.id)
      .then((response) => {
        loading.value = false;
        product.value = response.data
        if (product.value.image) {
          imagePreviewUrl.value = product.value.image
        }
      })
  }

  axiosClient.get('/categories/tree')
    .then(result => {
      options.value = result.data
    })
})

function onImageSelect(event) {
  const files = event.target.files
  if (!files || !files.length) return
  selectedFile.value = files[0]
  imagePreviewUrl.value = URL.createObjectURL(files[0])
}

async function uploadToCloudinary() {
  if (!selectedFile.value) return product.value.image;

  const signatureResponse = await axiosClient.get('/cloudinary/signature');
  const { signature, timestamp, api_key, cloud_name, upload_preset } = signatureResponse.data;

  const formData = new FormData();
  formData.append('file', selectedFile.value);
  formData.append('upload_preset', upload_preset);
  formData.append('api_key', api_key);
  formData.append('timestamp', timestamp);
  formData.append('signature', signature);

  const url = `https://cloudinary.com{cloud_name}/image/upload`;
  const cloudResponse = await axios.post(url, formData, {
    onUploadProgress: (progressEvent) => {
      uploadProgress.value = Math.round((progressEvent.loaded * 100) / progressEvent.total)
    }
  });

  return cloudResponse.data.secure_url;
}

async function onSubmit($event, close = false) {
  loading.value = true
  errors.value = {};
  product.value.quantity = product.value.quantity || null

  try {
    const finalImageUrl = await uploadToCloudinary();
    product.value.image = finalImageUrl;

    const action = product.value.id ? 'updateProduct' : 'createProduct';
    const response = await store.dispatch(action, product.value);
    
    loading.value = false;
    product.value = response.data;
    
    store.commit('showToast', `Product was successfully ${product.value.id ? 'updated' : 'created'}`);
    store.dispatch('getProducts');

    if (close || !product.value.id) {
      router.push({name: 'admin.products'}); // ✅ Changed target path name
    } else {
      router.push({name: 'admin.products.edit', params: {id: response.data.id}}); // ✅ Changed target path name
    }
  } catch (err) {
    loading.value = false;
    if (err.response && err.response.data) {
      errors.value = err.response.data.errors || {};
    }
  }
}
</script>
