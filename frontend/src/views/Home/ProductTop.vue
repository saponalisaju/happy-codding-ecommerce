
<template>
    <section class="product-section">
        <div class="container">
            <div class="title-flex title-b-space">
                <h3 class="title">Explore Watches</h3>
                <RouterLink class="title-link" to="/shop" name="shop-now">
                    View All
                    <svg>
                        <use href="/assets/svg/sprite_icon.svg#right-arrow"></use>
                    </svg>
                </RouterLink>
            </div>
            <div class="row g-sm-4 g-3 ratio_square">
                <ProductTopView

                v-for="product in watchProducts"

                :key="product.id"

                :product="product"

                @add-to-cart="addToCart(product)"

                @toggle-favorite="toggleFavorite(product)"

            />
            </div>
        </div>
    </section>
</template>

<script setup>

import axios from 'axios'

import ProductTopView from "@/components/ProductTopView.vue";
import { watchProducts } from "@/data/watchProducts";
import axiosClient from '../../services/api/axios';

const addToCart = async (product) => {

  if (!product?.id) {
    console.log("Product missing", product)
    return
  }


  try {
    const response = await axiosClient.post(
      `/cart/add`,
      {
        product_id: product.id,
        quantity: 1
      }
      
    )

    console.log("Added To Cart:", response.data)

  } catch (error) {
    console.log("ERROR:", error.response?.data || error)
  }
}

const toggleFavorite = (product) => {
  product.favorite = !product.favorite
}

</script>