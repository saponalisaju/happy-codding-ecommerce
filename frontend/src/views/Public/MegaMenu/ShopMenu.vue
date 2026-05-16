<template>
    <li class="nav-item dropdown">
                            <RouterLink class="nav-link dropdown-toggle" to="/shop">Shop</RouterLink>
                            <div class="dropdown-menu">
                                <ul class="dropdown-list">
                                    <li class="nav-item">
                                        <RouterLink to="/shop/banner">Shop Banner</RouterLink>
                                        <div class="dropdown-menu">
                                            <ul class="dropdown-list">
                                                <li>
                                                    <RouterLink to="/shop/banner">Shop Banner</RouterLink>
                                                </li>
                                                <li>
                                                    <RouterLink to="/shop/banner-2">Shop Banner 2</RouterLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="nav-item">
                                        <RouterLink to="/shop/trending">Trending Product</RouterLink>
                                        <div class="dropdown-menu">
                                            <ul class="dropdown-list">
                                                <li>
                                                    <RouterLink to="/shop/trending">Trending
                                                        Product</RouterLink>
                                                </li>
                                                <li>
                                                    <RouterLink to="/shop/trending-2">Trending
                                                        Product 2</RouterLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="nav-item">
                                        <RouterLink to="/shop/layouts">Shop Layouts</RouterLink>
                                        <div class="dropdown-menu">
                                            <ul class="dropdown-list">
                                                <li>
                                                    <RouterLink to="/shop/layouts/left-sidebar">Shop Left Sidebar</RouterLink>
                                                </li>
                                                <li>
                                                    <RouterLink to="/shop/layouts/right-sidebar">Shop Right Sidebar</RouterLink>
                                                </li>
                                                <li>
                                                    <RouterLink to="/shop/layouts/no-sidebar">Shop No Sidebar</RouterLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <RouterLink to="/shop/category-slider">Shop Category Slider</RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink to="/shop/category">Shop Category</RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink to="/shop/full-width">Shop Full Width</RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink to="/shop/infinite-scroll">Shop Infinite Scroll</RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink to="/shop/pagination">Shop Pagination</RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink to="/shop/toggle-sidebar">Shop Toggle Sidebar</RouterLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
</template>

<style scoped>
.nav-item.dropdown {
  position: relative;
  list-style: none;
}

.nav-item.dropdown .nav-link::after {
  display: none !important;
  content: none !important;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;

  min-width: 200px;

  width: 100px;

  padding: 12px 0;

  background: #ffffff !important;

  opacity: 1 !important;

  backdrop-filter: unset !important;

  border: 1px solid #eee;

  border-radius: 12px;

  box-shadow: 0 20px 40px rgba(0,0,0,0.12);

  z-index: 999999 !important;

  overflow: hidden;

  isolation: isolate;
}

.dropdown-item {
  display: block;
  padding: 12px 20px;
  color: #222;
  text-decoration: none;
  transition: 0.3s;
}

.dropdown-item:hover {
  background: #f5f5f5;
  padding-left: 25px;
}

.nav-link {
  cursor: pointer;
}


</style>