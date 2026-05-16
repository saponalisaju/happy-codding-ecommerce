<script setup>
import { ref, onMounted } from 'vue'
import axiosClient from '../../../services/api/axios'
const products = ref([])
const loading = ref(true)

const fetchProducts = async () => {
  try {
    const response = await axiosClient.get('/products')
    products.value = response.data
  } catch (error) {
    console.error('Failed to load items:', error)
  } finally {
    loading.value = false
  }
}

const deleteProduct = async (id) => {
  if (!confirm('Are you sure you want to delete this product?')) return
  
  try {
    await axiosClient.delete(`/products/${id}`)
    products.value = products.value.filter(p => p.id !== id)
  } catch (error) {
    alert('Could not delete product.')
  }
}

onMounted(() => {
  fetchProducts()
})
</script>

<template>
  <div style="padding: 20px;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
      <h2>Manage Products</h2>
      <!-- Maps directly to your route naming convention -->
      <router-link :to="{ name: 'admin.products.create' }" style="background: green; color: white; padding: 10px; text-decoration: none; border-radius: 4px;">
        + Add New Product
      </router-link>
    </div>

    <div v-if="loading">Loading products...</div>
    
    <table v-else border="1" width="100%" cellpadding="10" style="border-collapse: collapse; text-align: left;">
      <thead>
        <tr style="background-color: #f4f4f4;">
          <th>Image</th>
          <th>Title</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>
            <img v-if="product.image" :src="`http://127.0.0.1:8000${product.image}`" width="60" style="object-fit: cover;" />
            <span v-else>No Image</span>
          </td>
          <td>{{ product.title }}</td>
          <td>${{ product.price }}</td>
          <td>
            <!-- Triggers your reactive edit view with parameters -->
            <router-link :to="{ name: 'admin.products.edit', params: { id: product.id } }" style="margin-right: 10px; color: blue;">
              Edit
            </router-link>
            <button @click="deleteProduct(product.id)" style="color: red; background: none; border: none; cursor: pointer;">
              Delete
            </button>
          </td>
        </tr>
        <tr v-if="products.length === 0">
          <td colspan="4" style="text-align: center;">No items found.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<style scoped>

</style>
