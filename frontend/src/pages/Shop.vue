<template>
  <section class="shop-section">
    <div class="container">

      <div class="shop-layout">

        <!-- ================= FILTER SIDEBAR ================= -->
        <aside class="shop-sidebar" :class="{ open: filterOpen }">

          <div class="sidebar-header d-xl-none">
            <h5>Filters</h5>
            <button class="close-btn" @click="filterOpen = false">
              <i class="ri-close-line"></i>
            </button>
          </div>

          <!-- CATEGORY -->
          <div class="filter-card">
            <h6 class="title">Categories</h6>

            <input
              type="text"
              class="input"
              placeholder="Search category..."
            />

            <div class="list">
              <label v-for="i in 6" :key="i" class="item">
                <input type="radio" name="cat" />
                <span>Category {{ i }} <small>(12)</small></span>
              </label>
            </div>
          </div>

          <!-- PRICE -->
          <div class="filter-card">
            <h6 class="title">Price Range</h6>

            <input type="range" class="range" />

            <div class="range-info">
              <span>$0</span>
              <span>$10,000</span>
            </div>
          </div>

          <!-- COLOR -->
          <div class="filter-card">
            <h6 class="title">Colors</h6>

            <div class="colors">
              <span v-for="c in 8" :key="c" class="dot"></span>
            </div>
          </div>

        </aside>

        <!-- ================= MAIN CONTENT ================= -->
        <main class="shop-main">

          <!-- TOP BAR -->
          <div class="topbar">

            <button class="filter-btn d-xl-none" @click="filterOpen = true">
              <i class="ri-equalizer-line"></i> Filters
            </button>

            <p class="result">Showing 1–8 of 52 products</p>

            <select class="sort">
              <option>Default sorting</option>
              <option>Price Low → High</option>
              <option>Price High → Low</option>
            </select>

          </div>

          <!-- ACTIVE FILTERS -->
          <div class="active-filters">
            <span class="chip">Watches <i class="ri-close-line"></i></span>
            <span class="chip">New Arrivals <i class="ri-close-line"></i></span>
            <button class="clear">Clear all</button>
          </div>

          <!-- PRODUCTS GRID -->
          <div class="product-grid">

            <div
              class="product-col"
              v-for="product in products"
              :key="product.id"
            >
              <ProductCard :product="product" />
            </div>

          </div>

          <!-- LOAD MORE -->
          <div class="load-wrap">
            <button class="load-btn">Load More</button>
          </div>

        </main>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const filterOpen = ref(false);

const products = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
}));
</script>

<style scoped>

/* ================= LAYOUT ================= */
.shop-section {
  padding: 40px 0;
}

.shop-layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 25px;
}

/* ================= SIDEBAR ================= */
.shop-sidebar {
  position: sticky;
  top: 20px;
  height: fit-content;
}

.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.close-btn {
  background: none;
  border: none;
  font-size: 20px;
}

.filter-card {
  background: #fff;
  border-radius: 14px;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.04);
}

.title {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
}

.input {
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #eee;
  border-radius: 8px;
  margin-bottom: 10px;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.item {
  font-size: 13px;
  display: flex;
  gap: 8px;
  cursor: pointer;
}

.item small {
  color: #999;
}

.range {
  width: 100%;
}

.range-info {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #777;
  margin-top: 6px;
}

.colors {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.dot {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #ddd;
  cursor: pointer;
}

/* ================= MAIN ================= */
.shop-main {
  min-width: 0;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 15px;
}

.result {
  font-size: 14px;
  color: #666;
}

.sort {
  padding: 6px 10px;
  border: 1px solid #eee;
  border-radius: 8px;
}

/* ACTIVE FILTERS */
.active-filters {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 15px;
}

.chip {
  background: #f5f5f5;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 13px;
  display: flex;
  gap: 6px;
  align-items: center;
}

.clear {
  background: none;
  border: none;
  color: red;
  font-size: 13px;
}

/* PRODUCTS */
.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
}

.load-wrap {
  text-align: center;
  margin-top: 20px;
}

.load-btn {
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  background: #111;
  color: #fff;
}

/* ================= MOBILE ================= */
@media (max-width: 1199px) {
  .shop-layout {
    grid-template-columns: 1fr;
  }

  .shop-sidebar {
    position: fixed;
    top: 0;
    left: -100%;
    width: 300px;
    height: 100vh;
    background: #fff;
    z-index: 999;
    transition: 0.3s;
    padding: 15px;
    overflow-y: auto;
  }

  .shop-sidebar.open {
    left: 0;
  }

  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .product-grid {
    grid-template-columns: 1fr;
  }
}

</style>