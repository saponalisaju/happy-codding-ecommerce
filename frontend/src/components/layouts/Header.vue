<template>
  <header class="header-7">
    <div class="sub-header">
      <div class="container">
        <div class="sub-header-dropdown">
          <div class="d-flex">
            <select class="form-select ps-0 w-auto">
              <option selected>English</option>
              <option value="1">Spanish</option>
              <option value="2">Arabic</option>
            </select>
            <div class="icon">
              <i class="fa-solid fa-angle-down"></i>
            </div>
          </div>
          <div class="d-flex">
            <select class="form-select w-auto">
              <option selected>($)USD</option>
              <option value="1">($)EUR</option>
              <option value="2">(¥)JPY</option>
              <option value="3">(₹)INR</option>
            </select>
            <div class="icon">
              <i class="fa-solid fa-angle-down"></i>
            </div>
          </div>
        </div>
        <p>
          Get 15% OFF on your First Order.
          <router-link to="/shop/infinite-scroll">Shop Now!</router-link>
        </p>
        <div class="flash-fire">
          <img src="/assets/images/gif/fire.gif" alt="fire" />
          <span>Flash Sale</span>
        </div>
      </div>
    </div>
    <div class="style-7">
      <div class="container">
        <div class="header-wrapper">
          <button
            class="navbar-toggler d-lg-none d-block"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <svg class="navbar-toggler-icon">
              <use
                href="/assets/svg/sprite_icon.svg#menu-bar"
              ></use>
            </svg>
          </button>

          <router-link to="/shop" class="logo">
            <img
              class="img-fluid light custom-logo"
              src="/assets/images/logo/happy-logo.png"
              alt="logo"
            />
            <!-- <img
              class="img-fluid dark"
              src="/assets/images/logo/logo-7-white.svg"
              alt="logo"
            /> -->
          </router-link>
          <div class="search-input d-lg-block d-none position-relative">
            <div class="d-flex">
              <div class="dropdown-category">
                <a href="#!">
                  Categories
                  <i class="ri-arrow-down-s-line"></i>
                </a>
                <ul class="category-list">
                  <li>
                    <a href="shop-page(tending-product-2).html">Phone</a>
                  </li>
                  <li>
                    <a href="shop-page(tending-product-2).html">Laptop</a>
                  </li>
                  <li>
                    <a href="shop-page(tending-product-2).html">Keyboard</a>
                  </li>
                  <li>
                    <a href="shop-page(tending-product-2).html">Mouse</a>
                  </li>
                </ul>
              </div>
              <i class="iconsax" data-icon="search-normal-2"></i>
              <input
                type="text"
                class="main-search input-lg"
                placeholder="Search for product"
                name="search-term"
                id="search-term"
              />
            </div>
          </div>
          <div class="contact-box d-md-block d-none">
            <div class="d-flex">
              <div class="icon">
                <img
                  src="/assets/icon/contact.svg"
                  class="img-fluid"
                  alt="Contact Icon"
                />
              </div>
              <div class="contact">
                <a href="contact-us.html">
                  <h6>Contact us</h6>
                </a>
                <p>Call us for any Inquiry</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container d-md-block d-none">
      <nav class="navbar navbar-expand-lg">
        <div class="dropdown-category">
          <a href="#!">
            <img src="/assets/images/menu.svg" alt="Icon" />
            Categories
          </a>
          <ul class="category-list">
            <li>
              <a href="shop-page(full-width).html">Phone</a>
            </li>
            <li>
              <a href="shop-page(full-width).html">Laptop</a>
            </li>
            <li>
              <a href="shop-page(full-width).html">Keyboard</a>
            </li>
            <li>
              <a href="shop-page(full-width).html">Mouse </a>
            </li>
          </ul>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="side-menu-header">
            <h3 class="d-lg-none d-block">menu</h3>
            <button type="button" class="close-btn d-lg-none d-block">
              <img
                src="/assets/svg/icon/close.svg"
                class="img-fluid"
                alt="Close"
              />
            </button>
          </div>
          <ul class="navbar-nav m-auto">
            <li class="nav-item">
              <router-link
                class="nav-link {{ request()->is('/') ? 'active' : '' }}"
                to="/"
              >
                Home
              </router-link>
              <div class="mega-menu">
                <div class="home-demo-menu">
                  <div class="row g-4">
                    <div class="col-xl-3 col-md-4 col-sm-6">
                      <div class="home-box">
                        <span class="status-tag tag-new">Smart</span>
                        <a href="index-7.html" class="card-img-wrap">
                          <img
                            src="/assets/images/demos/7.jpg"
                            class="img-fluid"
                            alt="Home 7"
                          />
                        </a>
                        <div class="card-body">
                          <h4>Electronics Hub</h4>
                          <p>Innovative Gadgets</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item dropdown">
              <router-link class="nav-link dropdown-toggle" to="/shop/infinite-scroll">Shop</router-link>
              <div class="dropdown-menu">
                <ul class="dropdown-list">
                  <li class="nav-item">
                    <a href="shop-page(banner).html">Shop Banner</a>
                    <div class="dropdown-menu">
                      <ul class="dropdown-list">
                        <li>
                          <a href="shop-page(banner).html">Shop Banner</a>
                        </li>
                        <li>
                          <a href="shop-page(banner-2).html">Shop Banner 2</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="nav-item">
                    <a href="shop-page(trending-product).html"
                      >Trending Product</a
                    >
                    <div class="dropdown-menu">
                      <ul class="dropdown-list">
                        <li>
                          <a href="shop-page(trending-product).html"
                            >Trending Product</a
                          >
                        </li>
                        <li>
                          <a href="shop-page(trending-product-2).html"
                            >Trending Product 2</a
                          >
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="nav-item">
                    <a href="shop-page(trending-product).html">Shop Layouts</a>
                    <div class="dropdown-menu">
                      <ul class="dropdown-list">
                        <li>
                          <a href="shop-page(left-sidebar).html"
                            >Shop Left Sidebar</a
                          >
                        </li>
                        <li>
                          <a href="shop-page(right-sidebar).html"
                            >Shop Right Sidebar</a
                          >
                        </li>
                        <li>
                          <a href="shop-page(no-sidebar).html"
                            >Shop No Sidebar</a
                          >
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="shop-page(category-slider).html"
                      >Shop Category Slider</a
                    >
                  </li>
                  <li>
                    <a href="shop-page(category).html">Shop Category</a>
                  </li>
                  <li>
                    <a href="shop-page(full-width).html">Shop Full Width</a>
                  </li>
                  <li>
                    <a href="shop-page(infinite-scroll).html"
                      >Shop Infinite Scroll</a
                    >
                  </li>
                  <li>
                    <a href="shop-page(pagination).html">Shop Pagination</a>
                  </li>
                  <li>
                    <a href="shop-page(toggle-sidebar).html"
                      >Shop Toggle Sidebar</a
                    >
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item dropdown mega-menu-wrapper">
              <router-link class="nav-link" to="/product">Product</router-link>
              <div class="mega-menu">
                <div class="home-demo-menu">
                  <div class="row g-4 row-cols-5">
                    <div class="col">
                      <div class="menu-col">
                        <h5 class="menu-header">Product Swatches</h5>
                        <ul class="mega-links">
                          <li>
                            <a href="product-page(circle).html"
                              >product Color Swatch</a
                            >
                          </li>
                          <li>
                            <a href="product-page(image-swatch).html"
                              >product Image Swatch</a
                            >
                          </li>
                          <li>
                            <a href="product-page(radio-button).html"
                              >product Radio Buttons</a
                            >
                          </li>
                          <li>
                            <a href="product-page(dropdown).html"
                              >product Dropdown Select</a
                            >
                          </li>
                          <li>
                            <a href="product-page(circle).html"
                              >product Circle</a
                            >
                          </li>
                          <li>
                            <a href="product-page(radio-button).html"
                              >product new style <span class="new">new</span></a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="col">
                      <div class="menu-col">
                        <h5 class="menu-header">Product page</h5>
                        <ul class="mega-links">
                          <li>
                            <a href="product-page(left-thumbnail).html"
                              >Product thumbnail <span class="hot">Hot</span></a
                            >
                          </li>
                          <li>
                            <a href="product-page(4-image).html"
                              >Product Image</a
                            >
                          </li>
                          <li>
                            <a href="product-page(grid-image).html"
                              >Product Grid Image</a
                            >
                          </li>
                          <li>
                            <a href="product-page(slider).html"
                              >Product slider</a
                            >
                          </li>
                          <li>
                            <a href="product-page(sticky).html"
                              >Product sticky</a
                            >
                          </li>
                          <li>
                            <a href="product-page(new-style).html"
                              >Product new style <span class="new">New</span></a
                            >
                          </li>
                          <li>
                            <a href="product-page(image-zoom).html"
                              >Image Zoom</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="col">
                      <div class="menu-col">
                        <h5 class="menu-header">Product Features</h5>
                        <ul class="mega-links">
                          <li>
                            <a href="product-page(bundle).html"
                              >Product Bundle <span class="hot">hot</span></a
                            >
                          </li>
                          <li>
                            <a href="product-page(video).html">Product Video</a>
                          </li>
                          <li>
                            <a href="product-page(out-of-stock).html"
                              >Out Of Stock</a
                            >
                          </li>
                          <li>
                            <a href="product-page(out-of-stock-2).html"
                              >Out Of Stock 2</a
                            >
                          </li>
                          <li>
                            <a href="product-page(left-thumbnail).html"
                              >Sticky Add To Cart</a
                            >
                          </li>
                          <li>
                            <a href="product-page(image-swatch).html"
                              >Size Guide</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="col">
                      <div class="menu-col">
                        <h5 class="menu-header">Product Features</h5>
                        <ul class="mega-links">
                          <li>
                            <a href="product-page(left-thumbnail).html"
                              >Product Simple</a
                            >
                          </li>
                          <li>
                            <a href="product-page(sticky).html"
                              >Product classified</a
                            >
                          </li>
                          <li>
                            <a href="product-page(slider).html">size chart</a>
                          </li>
                          <li>
                            <a href="product-page(sticky).html"
                              >delivery & return</a
                            >
                          </li>
                          <li>
                            <a href="product-page(new-style).html"
                              >Product review</a
                            >
                          </li>
                          <li>
                            <a href="product-page(bundle).html"
                              >ask an expert</a
                            >
                          </li>
                          <li>
                            <a href="product-page(bundle).html"
                              >Seller Chat <span class="new">New</span></a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="col">
                      <div class="menu-col">
                        <h5 class="menu-header">Product Features</h5>
                        <ul class="mega-links">
                          <li>
                            <a href="product-page(left-thumbnail).html"
                              >Real Time Visitor</a
                            >
                          </li>
                          <li>
                            <a href="product-page(image-swatch).html"
                              >Secure Checkout</a
                            >
                          </li>
                          <li>
                            <a href="product-page(slider).html"
                              >Free Shipping Bar</a
                            >
                          </li>
                          <li>
                            <a href="product-page(sticky).html"
                              >Estimate Delivery</a
                            >
                          </li>
                          <li>
                            <a href="product-page(new-style).html"
                              >Buying Together</a
                            >
                          </li>
                          <li>
                            <a href="product-page(recently-view).html"
                              >Recently Viewed Products</a
                            >
                          </li>
                          <li>
                            <a href="product-page(similar-products).html"
                              >Similar Products</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item dropdown mega-menu-wrapper">
              <a class="nav-link" href="#!">Features</a>
              <div class="mega-menu">
                <div class="home-demo-menu">
                  <div class="row g-sm-4 g-3 row-cols-5">
                    <div class="col">
                      <div class="menu-col">
                        <h5 class="menu-header">Invoice Template</h5>
                        <ul class="mega-links">
                          <li>
                            <a href="#!">Invoice 1</a>
                          </li>
                          <li>
                            <a href="#!">Invoice 2</a>
                          </li>
                          <li>
                            <a href="#!">Invoice 3</a>
                          </li>
                          <li>
                            <a href="#!">Invoice 4</a>
                          </li>
                          <li>
                            <a href="#!">Invoice 5</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="col">
                      <div class="menu-col">
                        <h5 class="menu-header">Email Template</h5>
                        <ul class="mega-links">
                          <li>
                            <a href="#!">Welcome</a>
                          </li>
                          <li>
                            <a href="#!">Announcement</a>
                          </li>
                          <li>
                            <a href="#!">Abandonment</a>
                          </li>
                          <li>
                            <a href="#!">Offer</a>
                          </li>
                          <li>
                            <a href="#!">Offer 2</a>
                          </li>
                          <li>
                            <a href="#!">Review</a>
                          </li>
                          <li>
                            <a href="#!">Featured Product</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="col">
                      <div class="menu-col">
                        <h5 class="menu-header">Email Template</h5>
                        <ul class="mega-links">
                          <li>
                            <a href="#!">Black Friday</a>
                          </li>
                          <li>
                            <a href="#!">Christmas</a>
                          </li>
                          <li>
                            <a href="#!">Cyber-Monday</a>
                          </li>
                          <li>
                            <a href="#!">Flash Sale</a>
                          </li>
                          <li>
                            <a href="#!">Order Success</a>
                          </li>
                          <li>
                            <a href="#!">Order Success 2</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="col">
                      <div class="menu-col">
                        <h5 class="menu-header">Cookie Bar</h5>
                        <ul class="mega-links">
                          <li>
                            <a href="index.html">Cookie Bottom 1</a>
                          </li>
                          <li>
                            <a href="index-2.html">Cookie Bottom 2</a>
                          </li>
                          <li>
                            <a href="index-3.html">Cookie Bottom 3</a>
                          </li>
                          <li>
                            <a href="index-4.html">Cookie Bottom 4</a>
                          </li>
                          <li>
                            <a href="index-5.html">Cookie Bottom 5</a>
                          </li>
                          <li>
                            <a href="index-6.html">Cookie Bottom 6</a>
                          </li>
                          <li>
                            <a href="index-7.html">Cookie Bottom 7</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="col">
                      <div class="menu-col">
                        <h5 class="menu-header">Model</h5>
                        <ul class="mega-links">
                          <li>
                            <a href="#!">Newsletter</a>
                          </li>
                          <li>
                            <a href="#!">Exit</a>
                          </li>
                          <li>
                            <a href="#!">Christmas</a>
                          </li>
                          <li>
                            <a href="#!">Black Friday</a>
                          </li>
                          <li>
                            <a href="#!">Cyber Monday</a>
                          </li>
                          <li>
                            <a href="#!">New Year</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
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
                            <a href="shop-page(banner).html"
                              >Smartwatches & Tech
                              <span class="hot">Hot</span></a
                            >
                          </li>
                          <li>
                            <a href="shop-page(left-sidebar).html"
                              >Luxury Handbags</a
                            >
                          </li>
                          <li>
                            <a href="shop-page(category-slider).html"
                              >Modern Furniture</a
                            >
                          </li>
                          <li>
                            <a href="shop-page(category-slider).html"
                              >Premium Footwear</a
                            >
                          </li>
                          <li>
                            <a href="shop-page(recent-product).html"
                              >Health & Grocery</a
                            >
                          </li>
                          <li>
                            <a href="shop-page(category-slider).html"
                              >Winter Essentials</a
                            >
                          </li>
                          <li>
                            <a href="shop-page(infinite-scroll).html"
                              >Summer Collection</a
                            >
                          </li>
                          <li>
                            <a href="shop-page(right-sidebar).html"
                              >Beauty & Care <span class="hot">New</span></a
                            >
                          </li>
                          <li>
                            <a href="shop-page(full-width).html"
                              >Electronic Deals</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="col-xl-9 col-lg-8">
                      <div class="top-header">
                        <h5>Shop by Category</h5>
                        <a href="shop-page(left-sidebar).html" class="view-all"
                          >View All Products
                          <i class="ri-arrow-right-long-line"></i
                        ></a>
                      </div>
                      <div class="category-grid">
                        <div class="swiper menu-category-slider">
                          <div class="swiper-wrapper">
                            <div class="swiper-slide">
                              <a
                                href="shop-page(left-sidebar).html"
                                class="category-box"
                              >
                                <div class="img-wrap">
                                  <img
                                    src="/assets/images/category/bag/1.png"
                                    alt="bags"
                                    class="img-fluid"
                                  />
                                </div>
                                <h6>Designer Bags</h6>
                              </a>
                            </div>
                            <div class="swiper-slide">
                              <a
                                href="shop-page(left-sidebar).html"
                                class="category-box"
                              >
                                <div class="img-wrap">
                                  <img
                                    src="/assets/images/product/watch/1.png"
                                    alt="watches"
                                    class="img-fluid"
                                  />
                                </div>
                                <h6>Smart Watches</h6>
                              </a>
                            </div>
                            <div class="swiper-slide">
                              <a
                                href="shop-page(left-sidebar).html"
                                class="category-box"
                              >
                                <div class="img-wrap">
                                  <img
                                    src="/assets/images/product/shoes/1.png"
                                    alt="shoes"
                                    class="img-fluid"
                                  />
                                </div>
                                <h6>Running Shoes</h6>
                              </a>
                            </div>
                            <div class="swiper-slide">
                              <a
                                href="shop-page(left-sidebar).html"
                                class="category-box"
                              >
                                <div class="img-wrap">
                                  <img
                                    src="/assets/images/product/furniture/1.jpg"
                                    alt="furniture"
                                    class="img-fluid"
                                  />
                                </div>
                                <h6>Home Furniture</h6>
                              </a>
                            </div>
                            <div class="swiper-slide">
                              <a
                                href="shop-page(left-sidebar).html"
                                class="category-box"
                              >
                                <div class="img-wrap">
                                  <img
                                    src="/assets/images/product/electronic/1-1.png"
                                    alt="electronic"
                                    class="img-fluid"
                                  />
                                </div>
                                <h6>Premium Tech</h6>
                              </a>
                            </div>
                            <div class="swiper-slide">
                              <a
                                href="shop-page(left-sidebar).html"
                                class="category-box"
                              >
                                <div class="img-wrap">
                                  <img
                                    src="/assets/images/product/fashion/1.png"
                                    alt="fashion"
                                    class="img-fluid"
                                  />
                                </div>
                                <h6>Latest Fashion</h6>
                              </a>
                            </div>
                          </div>
                          <div
                            class="custom-swiper-pagination swiper-pagination"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#!">Pages</a>
              <div class="dropdown-menu">
                <ul class="dropdown-list">
                  <li class="nav-item">
                    <a href="#!">Authentications</a>
                    <div class="dropdown-menu">
                      <ul class="dropdown-list">
                        <li>
                          <a href="sign-in.html">Log In</a>
                        </li>
                        <li>
                          <a href="sign-up.html">Sign Up</a>
                        </li>
                        <li>
                          <a href="reset-password.html">Reset Password</a>
                        </li>
                        <li>
                          <a href="forgot-password.html">Forgot Password</a>
                        </li>
                        <li>
                          <a href="otp.html">OTP Verification</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="nav-item">
                    <a href="#!">Error Pages</a>
                    <div class="dropdown-menu">
                      <ul class="dropdown-list">
                        <li>
                          <a href="400.html">400 Bad Request</a>
                        </li>
                        <li>
                          <a href="404.html">404 Not Found</a>
                        </li>
                        <li>
                          <a href="500.html">500 Internal Server Error</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="about-us.html">About Us</a>
                  </li>
                  <li>
                    <a href="cart.html">Cart</a>
                  </li>
                  <li>
                    <a href="checkout.html">Checkout</a>
                  </li>
                  <li>
                    <a href="coming-soon.html">Coming Soon</a>
                  </li>
                  <li>
                    <a href="compare.html">Compare Product</a>
                  </li>
                  <li>
                    <a href="contact-us.html">Contact Us</a>
                  </li>
                  <li>
                    <a href="maintenance.html">Maintenance</a>
                  </li>
                  <li>
                    <a href="order-success.html">Order Success</a>
                  </li>
                  <li>
                    <a href="order-tracking.html">Order Tracking</a>
                  </li>
                  <li>
                    <a href="privacy-policy.html">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="return-policy.html">Return Policy</a>
                  </li>
                  <li>
                    <a href="terms-conditions.html">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="user-dashboard.html">User Dashboard</a>
                  </li>
                  <li>
                    <a href="wishlist.html">Wishlist</a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#!">Seller</a>
              <div class="dropdown-menu">
                <ul class="dropdown-list">
                  <li>
                    <a href="seller-become.html">Become a Seller</a>
                  </li>
                  <li>
                    <a href="seller-list.html">Seller List</a>
                  </li>
                  <li>
                    <a href="seller-list-2.html">Seller List 2</a>
                  </li>
                  <li>
                    <a href="seller-grid.html">Seller Grid</a>
                  </li>
                  <li>
                    <a href="seller-details.html">Seller Details</a>
                  </li>
                  <li>
                    <a href="seller-details-2.html">Seller Details 2</a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#!">Blog</a>
              <div class="dropdown-menu">
                <ul class="dropdown-list">
                  <li>
                    <a href="blog-page(left-sidebar).html">Blog Left Sidebar</a>
                  </li>
                  <li>
                    <a href="blog-page(right-sidebar).html"
                      >Blog Right Sidebar</a
                    >
                  </li>
                  <li>
                    <a href="blog-page(no-sidebar).html">Blog No Sidebar</a>
                  </li>
                  <li>
                    <a href="blog-page(list).html">Blog list</a>
                  </li>
                  <li>
                    <a href="blog-page(masonary).html">Blog Masonry</a>
                  </li>
                  <li>
                    <a href="blog-page(details).html">Blog Details</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <ul class="header-option">
          <li>
            <router-link to="/search">
              <i class="iconsax" data-icon="search-normal-2"></i>
            </router-link>
          </li>
          <li class="cart-option">
            <router-link to="/wish-list" data-bs-toggle="offcanvas">
              <i class="iconsax" data-icon="heart"></i>
              <span>1</span>
            </router-link>
          </li>
          <li class="cart-option">
            <router-link data-bs-toggle="offcanvas" to="/add-cart">
              <i class="iconsax" data-icon="shopping-cart"></i>
              <span>4</span>
            </router-link>
          </li>
        
          <li class="">
            <router-link class="" to="/login">
              <i class="iconsax" data-icon="user-2"></i>
            </router-link>
         </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
  .custom-logo {
    width: 100px;
    height: auto;
  }
</style>

<script>
export default {
  name: "Header",
};
</script>


