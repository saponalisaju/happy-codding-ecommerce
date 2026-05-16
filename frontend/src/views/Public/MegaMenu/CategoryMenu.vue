<template>
    <li class="nav-item dropdown mega-menu-wrapper">
                            <a class="nav-link" href="#!">Category</a>
                            <div class="mega-menu">
                                <div class="home-demo-menu">
                                    <div class="row g-4">
                                        <div class="col-xl-3 col-lg-4">
                                            <div class="side-links">
                                                <div class="link-header">
                                                    <i class="ri-fire-fill"></i>
                                                    <h5>Trending Collections</h5>
                                                </div>
                                                <ul class="mega-links">
                                                    <li>
                                                        <a href="shop-page(banner).html">Smartwatches &
                                                            Tech <span class="hot">Hot</span></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-page(left-sidebar).html">Luxury Handbags</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-page(category-slider).html">Modern
                                                            Furniture</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-page(category-slider).html">Premium
                                                            Footwear</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-page(recent-product).html">Health &
                                                            Grocery</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-page(category-slider).html">Winter
                                                            Essentials</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-page(infinite-scroll).html">Summer
                                                            Collection</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-page(right-sidebar).html">Beauty & Care <span
                                                                class="hot">New</span></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-page(full-width).html">Electronic Deals</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="col-xl-9 col-lg-8">
                                            <div class="top-header">
                                                <h5>Shop by Category</h5>
                                                <a href="shop-page(left-sidebar).html" class="view-all">View All
                                                    Products <i class="ri-arrow-right-long-line"></i></a>
                                            </div>
                                            <div class="category-grid">
                                                <div class="swiper menu-category-slider">
                                                    <div class="swiper-wrapper">
                                                        <div class="swiper-slide">
                                                            <a href="shop-page(left-sidebar).html" class="category-box">
                                                                <div class="img-wrap">
                                                                    <img src="../assets/images/category/bag/1.png"
                                                                        alt="bags" class="img-fluid">
                                                                </div>
                                                                <h6>Designer Bags</h6>
                                                            </a>
                                                        </div>
                                                        <div class="swiper-slide">
                                                            <a href="shop-page(left-sidebar).html" class="category-box">
                                                                <div class="img-wrap">
                                                                    <img src="../assets/images/product/watch/1.png"
                                                                        alt="watches" class="img-fluid">
                                                                </div>
                                                                <h6>Smart Watches</h6>
                                                            </a>
                                                        </div>
                                                        <div class="swiper-slide">
                                                            <a href="shop-page(left-sidebar).html" class="category-box">
                                                                <div class="img-wrap">
                                                                    <img src="../assets/images/product/shoes/1.png"
                                                                        alt="shoes" class="img-fluid">
                                                                </div>
                                                                <h6>Running Shoes</h6>
                                                            </a>
                                                        </div>
                                                        <div class="swiper-slide">
                                                            <a href="shop-page(left-sidebar).html" class="category-box">
                                                                <div class="img-wrap">
                                                                    <img src="../assets/images/product/furniture/1.jpg"
                                                                        alt="furniture" class="img-fluid">
                                                                </div>
                                                                <h6>Home Furniture</h6>
                                                            </a>
                                                        </div>
                                                        <div class="swiper-slide">
                                                            <a href="shop-page(left-sidebar).html" class="category-box">
                                                                <div class="img-wrap">
                                                                    <img src="../assets/images/product/electronic/1-1.png"
                                                                        alt="electronic" class="img-fluid">
                                                                </div>
                                                                <h6>Premium Tech</h6>
                                                            </a>
                                                        </div>
                                                        <div class="swiper-slide">
                                                            <a href="shop-page(left-sidebar).html" class="category-box">
                                                                <div class="img-wrap">
                                                                    <img src="../assets/images/product/fashion/1.png"
                                                                        alt="fashion" class="img-fluid">
                                                                </div>
                                                                <h6>Latest Fashion</h6>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div class="custom-swiper-pagination swiper-pagination"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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