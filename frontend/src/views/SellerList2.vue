<template>
    <section class="seller-list-2-section shop-section section-b-space">
        <div class="container">
            <div class="row g-sm-4 g-3">
                <div class="col-xxl-3 col-xl-4">
                    <div class="shop-filter sticky">
                        <div class="shop-filter-block">
                            <div class="shop-mobile-back">
                                <button>Close <i class="ri-close-fill"></i></button>
                            </div>

                            <div class="shop-filter-box">
                                <div class="accordion" id="filterAccordion">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseSearch">
                                                <span>Search Seller</span>
                                            </button>
                                        </h2>
                                        <div id="collapseSearch" class="accordion-collapse collapse show">
                                            <div class="accordion-body px-xl-0">
                                                <div class="search-box m-0">
                                                    <input type="search" name="text" placeholder="Search sellers...">
                                                    <i class="iconsax search-icon" data-icon="search-normal-2"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseLocation">
                                                <span>Location</span>
                                            </button>
                                        </h2>
                                        <div id="collapseLocation" class="accordion-collapse collapse show">
                                            <div class="accordion-body">
                                                <ul class="categories-box">
                                                    <li>
                                                        <input class="checkbox_animated" type="checkbox" id="loc1">
                                                        <label for="loc1" class="form-label">United States
                                                            <span>(156)</span></label>
                                                    </li>
                                                    <li>
                                                        <input class="checkbox_animated" type="checkbox" id="loc2">
                                                        <label for="loc2" class="form-label">United Kingdom
                                                            <span>(92)</span></label>
                                                    </li>
                                                    <li>
                                                        <input class="checkbox_animated" type="checkbox" id="loc3">
                                                        <label for="loc3" class="form-label">Germany
                                                            <span>(45)</span></label>
                                                    </li>
                                                    <li>
                                                        <input class="checkbox_animated" type="checkbox" id="loc4">
                                                        <label for="loc4" class="form-label">Japan
                                                            <span>(38)</span></label>
                                                    </li>
                                                    <li>
                                                        <input class="checkbox_animated" type="checkbox" id="loc5">
                                                        <label for="loc5" class="form-label">Canada
                                                            <span>(22)</span></label>
                                                    </li>
                                                    <li>
                                                        <input class="checkbox_animated" type="checkbox" id="loc6">
                                                        <label for="loc6" class="form-label">Australia
                                                            <span>(18)</span></label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseCategory">
                                                <span>Categories</span>
                                            </button>
                                        </h2>
                                        <div id="collapseCategory" class="accordion-collapse collapse show">
                                            <div class="accordion-body">
                                                <ul class="categories-box">
                                                    <li>
                                                        <input class="checkbox_animated" type="checkbox" id="cat1">
                                                        <label for="cat1">Technology <span>(42)</span></label>
                                                    </li>
                                                    <li>
                                                        <input class="checkbox_animated" type="checkbox" id="cat2">
                                                        <label for="cat2">Fashion <span>(28)</span></label>
                                                    </li>
                                                    <li>
                                                        <input class="checkbox_animated" type="checkbox" id="cat3">
                                                        <label for="cat3">Eco-Friendly <span>(15)</span></label>
                                                    </li>
                                                    <li>
                                                        <input class="checkbox_animated" type="checkbox" id="cat4">
                                                        <label for="cat4">Home & Garden <span>(35)</span></label>
                                                    </li>
                                                    <li>
                                                        <input class="checkbox_animated" type="checkbox" id="cat5">
                                                        <label for="cat5">Sports & Outdoors <span>(20)</span></label>
                                                    </li>
                                                    <li>
                                                        <input class="checkbox_animated" type="checkbox" id="cat6">
                                                        <label for="cat6">Beauty & Health <span>(18)</span></label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapsePrice">
                                                <span>Price Range</span>
                                            </button>
                                        </h2>
                                        <div id="collapsePrice" class="accordion-collapse collapse show">
                                            <div class="accordion-body">
                                                <div class="range-wrapper">
                                                    <div class="wrapper">
                                                        <div class="slider">
                                                            <div class="progress"></div>
                                                        </div>
                                                        <div class="range-input">
                                                            <input type="range" class="range-min" min="0" max="10000"
                                                                value="2500" step="100">
                                                            <input type="range" class="range-max" min="0" max="10000"
                                                                value="7500" step="100">
                                                        </div>
                                                        <div class="price-input">
                                                            <div class="field">
                                                                <input type="number" class="input-min" value="2500"
                                                                    disabled>
                                                            </div>
                                                            <span class="separator">
                                                                <i class="ri-subtract-line"></i>
                                                            </span>
                                                            <div class="field">
                                                                <input type="number" class="input-max" value="7500"
                                                                    disabled>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseRating">
                                                <span>Customer Ratings</span>
                                            </button>
                                        </h2>
                                        <div id="collapseRating" class="accordion-collapse collapse show">
                                            <div class="accordion-body">
                                                <ul class="rating-box">
                                                    <li>
                                                        <input class="checkbox_animated" type="checkbox" name="text">
                                                        <div>
                                                            <ul class="rating">
                                                                <li>
                                                                    <i class="ri-star-fill"></i>
                                                                </li>
                                                                <li>
                                                                    <i class="ri-star-fill"></i>
                                                                </li>
                                                                <li>
                                                                    <i class="ri-star-fill"></i>
                                                                </li>
                                                                <li>
                                                                    <i class="ri-star-fill"></i>
                                                                </li>
                                                                <li>
                                                                    <i class="ri-star-fill"></i>
                                                                </li>
                                                                <li><h3>5 & up</h3></li>
                                                            </ul>
                                                            <span>(31)</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <input class="checkbox_animated" type="checkbox" name="text">
                                                        <div>
                                                            <ul class="rating">
                                                                <li>
                                                                    <i class="ri-star-fill"></i>
                                                                </li>
                                                                <li>
                                                                    <i class="ri-star-fill"></i>
                                                                </li>
                                                                <li>
                                                                    <i class="ri-star-fill"></i>
                                                                </li>
                                                                <li>
                                                                    <i class="ri-star-fill"></i>
                                                                </li>
                                                                <li>
                                                                    <i class="ri-star-line"></i>
                                                                </li>
                                                                <li><h3>4 & up</h3></li>
                                                            </ul>
                                                            <span>(39)</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <input class="checkbox_animated" type="checkbox" name="text">
                                                        <div>
                                                            <ul class="rating">
                                                                <li>
                                                                    <i class="ri-star-fill"></i>
                                                                </li>
                                                                <li>
                                                                    <i class="ri-star-fill"></i>
                                                                </li>
                                                                <li>
                                                                    <i class="ri-star-fill"></i>
                                                                </li>
                                                                <li>
                                                                    <i class="ri-star-line"></i>
                                                                </li>
                                                                <li>
                                                                    <i class="ri-star-line"></i>
                                                                </li>
                                                                <li><h3>3 & up</h3></li>
                                                            </ul>
                                                            <span>(35)</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <input class="checkbox_animated" type="checkbox" name="text">
                                                        <div>
                                                            <ul class="rating">
                                                                <li>
                                                                    <i class="ri-star-fill"></i>
                                                                </li>
                                                                <li>
                                                                    <i class="ri-star-fill"></i>
                                                                </li>
                                                                <li>
                                                                    <i class="ri-star-line"></i>
                                                                </li>
                                                                <li>
                                                                    <i class="ri-star-line"></i>
                                                                </li>
                                                                <li>
                                                                    <i class="ri-star-line"></i>
                                                                </li>
                                                                <li><h3>2 & up</h3></li>
                                                            </ul>
                                                            <span>(22)</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <input class="checkbox_animated" type="checkbox" name="text">
                                                        <div>
                                                            <ul class="rating">
                                                                <li>
                                                                    <i class="ri-star-fill"></i>
                                                                </li>
                                                                <li>
                                                                    <i class="ri-star-line"></i>
                                                                </li>
                                                                <li>
                                                                    <i class="ri-star-line"></i>
                                                                </li>
                                                                <li>
                                                                    <i class="ri-star-line"></i>
                                                                </li>
                                                                <li>
                                                                    <i class="ri-star-line"></i>
                                                                </li>
                                                                <li><h3>1 & up</h3></li>
                                                            </ul>
                                                            <span>(18)</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseTrust">
                                                <span>Merchant Trust</span>
                                            </button>
                                        </h2>
                                        <div id="collapseTrust" class="accordion-collapse collapse show">
                                            <div class="accordion-body">
                                                <ul class="categories-box">
                                                    <li>
                                                        <input class="checkbox_animated" type="checkbox" id="trust1">
                                                        <label for="trust1">Verified Merchant</label>
                                                    </li>
                                                    <li>
                                                        <input class="checkbox_animated" type="checkbox" id="trust2">
                                                        <label for="trust2">Fast Responder <span>(95%+)</span></label>
                                                    </li>
                                                    <li>
                                                        <input class="checkbox_animated" type="checkbox" id="trust3">
                                                        <label for="trust3">Top Rated Seller</label>
                                                    </li>
                                                    <li>
                                                        <input class="checkbox_animated" type="checkbox" id="trust4">
                                                        <label for="trust4">Premium Seller</label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xxl-9 col-xl-8">
                    <div class="results-header">
                        <button class="filter-button theme-btn btn d-xl-none"><i class="ri-equalizer-2-line"></i> Filter
                            Menu</button>
                        <h3>Top Rated Sellers <span>(1,248)</span></h3>
                        <div class="theme-form">
                            <label class="form-label">Sort by : </label>
                            <select class="custom-slim-select">
                                <option selected disabled>Type</option>
                                <option value="1">Newest</option>
                                <option value="2">Rating</option>
                                <option value="3">Popularity</option>
                            </select>
                        </div>
                    </div>

                    <div class="row g-sm-4 g-3">
                        <div class="col-md-6">
                            <div class="seller-card-minimal">
                                <div class="card-header-top">
                                    <span class="seller-type-badge trending">Trending</span>
                                    <div class="seller-brand">
                                        <div class="brand-logo">
                                            <img src="../assets/images/user/1.png" class="img-fluid" alt="Seller">
                                        </div>
                                        <div class="brand-info">
                                            <h3>Hazy Fashion <span class="time-ago">2 Hours ago</span></h3>
                                            <div class="brand-meta">
                                                <span class="category-info">Fashion & Apparel</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card-body-content">
                                    <p class="seller-short-desc">Premium fashion store offering the latest trends in
                                        clothing and accessories for all seasons. Discover our exclusive collection of
                                        high-quality fabrics and unique designs that cater to every style and occasion.
                                    </p>

                                    <ul class="ecommerce-highlights">
                                        <li><i class="iconsax" data-icon="truck"></i> Free Shipping</li>
                                        <li><i class="iconsax" data-icon="refresh"></i> 30 Days Return</li>
                                        <li><i class="iconsax" data-icon="wallet-3"></i> COD Available</li>
                                    </ul>

                                    <ul class="seller-stats-row">
                                        <li class="stat-box">
                                            <h4 class="label">Products</h4>
                                            <h5 class="value">842</h5>
                                        </li>
                                        <li class="stat-box">
                                            <h4 class="label">Total Sell</h4>
                                            <h5 class="value">12.5k+</h5>
                                        </li>
                                        <li class="stat-box">
                                            <h4 class="label">Followers</h4>
                                            <h5 class="value">15.8k</h5>
                                        </li>
                                    </ul>

                                    <div class="product-preview-list">
                                        <div class="seller-product-title">
                                            <h4>Best Selling Products</h4>
                                            <span class="offer-badge">Upto 20% OFF</span>
                                        </div>
                                        <ul>
                                            <li>
                                                <img src="../assets/images/product/fashion/1.png" alt="Product Image"
                                                    class="img-fluid">
                                            </li>
                                            <li>
                                                <img src="../assets/images/product/fashion/2.png" alt="Product Image"
                                                    class="img-fluid">
                                            </li>
                                            <li>
                                                <img src="../assets/images/product/fashion/3.png" alt="Product Image"
                                                    class="img-fluid">
                                            </li>
                                            <li>
                                                <img src="../assets/images/product/fashion/4.png" alt="Product Image"
                                                    class="img-fluid">
                                            </li>
                                            <li class="more-products">+2</li>
                                        </ul>
                                    </div>

                                    <ul class="tag-list mb-0">
                                        <li>Fashion</li>
                                        <li>Verified</li>
                                        <li>Top Rated</li>
                                        <li>+3 more</li>
                                    </ul>
                                </div>

                                <div class="card-footer-bottom">
                                    <div class="footer-left">
                                        <div class="rating-box">
                                            <i class="ri-star-fill"></i>
                                            <span>5.0 (5 ratings)</span>
                                        </div>
                                        <div class="location-box">
                                            <i class="iconsax" data-icon="gps"></i> London, Manhattan
                                        </div>
                                    </div>
                                    <div class="d-flex gap-2">
                                        <button class="btn contact-btn" data-bs-toggle="modal"
                                            data-bs-target="#contactSellerModal" data-seller-name="Hazy Fashion">
                                            <i class="ri-chat-1-line"></i>
                                        </button>
                                        <a href="shop-page(infinite-scroll).html" class="btn visit-store-btn">Visit
                                            Store <i class="ri-arrow-right-long-line"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="seller-card-minimal">
                                <div class="card-header-top">
                                    <span class="seller-type-badge featured">Featured</span>
                                    <div class="seller-brand">
                                        <div class="brand-logo">
                                            <img src="../assets/images/user/2.png" class="img-fluid" alt="Seller">
                                        </div>
                                        <div class="brand-info">
                                            <h3>Urban Kicks <span class="time-ago">5 Hours ago</span></h3>
                                            <div class="brand-meta">
                                                <span class="category-info">Footwear & Sneakers</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card-body-content">
                                    <p class="seller-short-desc">Your go-to destination for urban footwear, street style
                                        sneakers, and limited editions. We stock the latest drops from top brands,
                                        ensuring you always step out in style with comfort and durability.</p>

                                    <ul class="ecommerce-highlights">
                                        <li><i class="iconsax" data-icon="globe"></i> Eco Friendly</li>
                                        <li><i class="iconsax" data-icon="clock"></i> Fast Delivery</li>
                                        <li><i class="iconsax" data-icon="24hr-service"></i> 24/7 Support</li>
                                    </ul>

                                    <ul class="seller-stats-row">
                                        <li class="stat-box">
                                            <h4 class="label">Products</h4>
                                            <h5 class="value">315</h5>
                                        </li>
                                        <li class="stat-box">
                                            <h4 class="label">Total Sell</h4>
                                            <h5 class="value">5.4k+</h5>
                                        </li>
                                        <li class="stat-box">
                                            <h4 class="label">Followers</h4>
                                            <h5 class="value">8.2k</h5>
                                        </li>
                                    </ul>

                                    <div class="product-preview-list">
                                        <div class="seller-product-title">
                                            <h4>Trending Items</h4>
                                            <span class="offer-badge">Buy 2 Get 1</span>
                                        </div>
                                        <ul>
                                            <li>
                                                <img src="../assets/images/product/shoes/1.png" alt="Product Image"
                                                    class="img-fluid">
                                            </li>
                                            <li>
                                                <img src="../assets/images/product/shoes/2.png" alt="Product Image"
                                                    class="img-fluid">
                                            </li>
                                            <li>
                                                <img src="../assets/images/product/shoes/3.png" alt="Product Image"
                                                    class="img-fluid">
                                            </li>
                                            <li>
                                                <img src="../assets/images/product/shoes/4.png" alt="Product Image"
                                                    class="img-fluid">
                                            </li>
                                            <li class="more-products">+5</li>
                                        </ul>
                                    </div>

                                    <ul class="tag-list mb-0">
                                        <li>Footwear</li>
                                        <li>Trendy</li>
                                        <li>Sneakers</li>
                                        <li>Sports</li>
                                        <li>+2 more</li>
                                    </ul>
                                </div>

                                <div class="card-footer-bottom">
                                    <div class="footer-left">
                                        <div class="rating-box">
                                            <i class="ri-star-fill"></i>
                                            <span>4.8 (120 ratings)</span>
                                        </div>
                                        <div class="location-box">
                                            <i class="iconsax" data-icon="gps"></i> London, Manhattan
                                        </div>
                                    </div>
                                    <div class="d-flex gap-2">
                                        <button class="btn contact-btn" data-bs-toggle="modal"
                                            data-bs-target="#contactSellerModal" data-seller-name="Urban Kicks">
                                            <i class="ri-chat-1-line"></i>
                                        </button>
                                        <a href="shop-page(infinite-scroll).html" class="btn visit-store-btn">Visit
                                            Store <i class="ri-arrow-right-long-line"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="seller-card-minimal">
                                <div class="card-header-top">
                                    <span class="seller-type-badge trending">Trending</span>
                                    <div class="seller-brand">
                                        <div class="brand-logo">
                                            <img src="../assets/images/user/3.png" class="img-fluid" alt="Seller">
                                        </div>
                                        <div class="brand-info">
                                            <h3>Royal Bags <span class="time-ago">1 Day ago</span></h3>
                                            <div class="brand-meta">
                                                <span class="category-info">Accessories & Luxury</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card-body-content">
                                    <p class="seller-short-desc">Luxury handbags and accessories for the modern woman.
                                        Authentic brands guaranteed. From classic totes to chic clutches, our collection
                                        features timeless pieces that elevate any outfit with elegance.</p>

                                    <ul class="ecommerce-highlights">
                                        <li><i class="iconsax" data-icon="award-3"></i> Luxury Brand</li>
                                        <li><i class="iconsax" data-icon="shield-tick"></i> Authenticity</li>
                                        <li><i class="iconsax" data-icon="truck"></i> Global Shipping</li>
                                    </ul>

                                    <ul class="seller-stats-row">
                                        <li class="stat-box">
                                            <h4 class="label">Products</h4>
                                            <h5 class="value">124</h5>
                                        </li>
                                        <li class="stat-box">
                                            <h4 class="label">Total Sell</h4>
                                            <h5 class="value">2.8k+</h5>
                                        </li>
                                        <li class="stat-box">
                                            <h4 class="label">Followers</h4>
                                            <h5 class="value">4.5k</h5>
                                        </li>
                                    </ul>

                                    <div class="product-preview-list">
                                        <div class="seller-product-title">
                                            <h4>New Arrivals</h4>
                                            <span class="offer-badge">Special Gift</span>
                                        </div>
                                        <ul>
                                            <li>
                                                <img src="../assets/images/product/bag/1.png" alt="Product Image"
                                                    class="img-fluid">
                                            </li>
                                            <li>
                                                <img src="../assets/images/product/bag/2.png" alt="Product Image"
                                                    class="img-fluid">
                                            </li>
                                            <li>
                                                <img src="../assets/images/product/bag/3.png" alt="Product Image"
                                                    class="img-fluid">
                                            </li>
                                            <li>
                                                <img src="../assets/images/product/bag/4.png" alt="Product Image"
                                                    class="img-fluid">
                                            </li>
                                            <li class="more-products">+1</li>
                                        </ul>
                                    </div>

                                    <ul class="tag-list">
                                        <li>Accessories</li>
                                        <li>Luxury</li>
                                        <li>Bags</li>
                                        <li>Purse</li>
                                    </ul>
                                </div>

                                <div class="card-footer-bottom">
                                    <div class="footer-left">
                                        <div class="rating-box">
                                            <i class="ri-star-fill"></i>
                                            <span>3.9 (45 ratings)</span>
                                        </div>
                                        <div class="location-box">
                                            <i class="iconsax" data-icon="gps"></i> London, Manhattan
                                        </div>
                                    </div>
                                    <div class="d-flex gap-2">
                                        <button class="btn contact-btn" data-bs-toggle="modal"
                                            data-bs-target="#contactSellerModal" data-seller-name="Royal Bags">
                                            <i class="ri-chat-1-line"></i>
                                        </button>
                                        <a href="shop-page(infinite-scroll).html" class="btn visit-store-btn">Visit
                                            Store <i class="ri-arrow-right-long-line"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="seller-card-minimal">
                                <div class="card-header-top">
                                    <span class="seller-type-badge featured">Featured</span>
                                    <div class="seller-brand">
                                        <div class="brand-logo">
                                            <img src="../assets/images/user/profile.jpg" class="img-fluid" alt="Seller">
                                        </div>
                                        <div class="brand-info">
                                            <h3>Tech Gadgets <span class="time-ago">3 Hours ago</span></h3>
                                            <div class="brand-meta">
                                                <span class="category-info">Electronics & Gadgets</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card-body-content">
                                    <p class="seller-short-desc">Latest electronics, smart gadgets, and high-tech
                                        accessories at the best prices. Whether you're a tech enthusiast or looking for
                                        the perfect gift, we have the newest innovations to upgrade your lifestyle.</p>

                                    <ul class="ecommerce-highlights">
                                        <li><i class="iconsax" data-icon="cpu"></i> Smart Tech</li>
                                        <li><i class="iconsax" data-icon="shield-tick"></i> Warranty</li>
                                        <li><i class="iconsax" data-icon="headphones"></i> Support</li>
                                    </ul>

                                    <ul class="seller-stats-row">
                                        <li class="stat-box">
                                            <h4 class="label">Products</h4>
                                            <h5 class="value">560</h5>
                                        </li>
                                        <li class="stat-box">
                                            <h4 class="label">Total Sell</h4>
                                            <h5 class="value">9.2k+</h5>
                                        </li>
                                        <li class="stat-box">
                                            <h4 class="label">Followers</h4>
                                            <h5 class="value">12k</h5>
                                        </li>
                                    </ul>

                                    <div class="product-preview-list">
                                        <div class="seller-product-title">
                                            <h4>Hot Gadgets</h4>
                                            <span class="offer-badge">Flash Sale</span>
                                        </div>
                                        <ul>
                                            <li>
                                                <img src="../assets/images/product/electronic/1-1.png" alt="Product Image"
                                                    class="img-fluid">
                                            </li>
                                            <li>
                                                <img src="../assets/images/product/electronic/2-1.png" alt="Product Image"
                                                    class="img-fluid">
                                            </li>
                                            <li>
                                                <img src="../assets/images/product/electronic/3-1.png" alt="Product Image"
                                                    class="img-fluid">
                                            </li>
                                            <li>
                                                <img src="../assets/images/product/electronic/4-1.png" alt="Product Image"
                                                    class="img-fluid">
                                            </li>
                                            <li class="more-products">+3</li>
                                        </ul>
                                    </div>

                                    <ul class="tag-list mb-0">
                                        <li>Electronics</li>
                                        <li>Gadgets</li>
                                        <li>Smart Home</li>
                                    </ul>
                                </div>

                                <div class="card-footer-bottom">
                                    <div class="footer-left">
                                        <div class="rating-box">
                                            <i class="ri-star-fill"></i>
                                            <span>4.6 (89 ratings)</span>
                                        </div>
                                        <div class="location-box">
                                            <i class="iconsax" data-icon="gps"></i> London, Manhattan
                                        </div>
                                    </div>
                                    <div class="d-flex gap-2">
                                        <button class="btn contact-btn" data-bs-toggle="modal"
                                            data-bs-target="#contactSellerModal" data-seller-name="Tech Gadgets">
                                            <i class="ri-chat-1-line"></i>
                                        </button>
                                        <a href="shop-page(infinite-scroll).html" class="btn visit-store-btn">Visit
                                            Store <i class="ri-arrow-right-long-line"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="seller-card-minimal">
                                <div class="card-header-top">
                                    <span class="seller-type-badge trending">Trending</span>
                                    <div class="seller-brand">
                                        <div class="brand-logo">
                                            <img src="../assets/images/user/team-1.jpg" class="img-fluid" alt="Seller">
                                        </div>
                                        <div class="brand-info">
                                            <h3>Electro World <span class="time-ago">10 Hours ago</span></h3>
                                            <div class="brand-meta">
                                                <span class="category-info">Home Appliances</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card-body-content">
                                    <p class="seller-short-desc">One stop shop for all home appliances, kitchen
                                        electronics and entertainment systems. Transform your home with our
                                        energy-efficient and smart appliances designed to make your life easier and more
                                        enjoyable.</p>

                                    <ul class="ecommerce-highlights">
                                        <li><i class="iconsax" data-icon="home-2"></i> Home Care</li>
                                        <li><i class="iconsax" data-icon="plug"></i> Smart Energy</li>
                                        <li><i class="iconsax" data-icon="flash"></i> Free Install</li>
                                    </ul>

                                    <ul class="seller-stats-row">
                                        <li class="stat-box">
                                            <h4 class="label">Products</h4>
                                            <h5 class="value">315</h5>
                                        </li>
                                        <li class="stat-box">
                                            <h4 class="label">Total Sell</h4>
                                            <h5 class="value">5.4k+</h5>
                                        </li>
                                        <li class="stat-box">
                                            <h4 class="label">Followers</h4>
                                            <h5 class="value">8.2k</h5>
                                        </li>
                                    </ul>

                                    <div class="product-preview-list">
                                        <div class="seller-product-title">
                                            <h4>Best of Kitchen</h4>
                                            <span class="offer-badge">Bundle Deal</span>
                                        </div>
                                        <ul>
                                            <li>
                                                <img src="../assets/images/product/electronic/10-1.png" alt="Product Image"
                                                    class="img-fluid">
                                            </li>
                                            <li>
                                                <img src="../assets/images/product/electronic/11-1.png" alt="Product Image"
                                                    class="img-fluid">
                                            </li>
                                            <li>
                                                <img src="../assets/images/product/electronic/12-1.png" alt="Product Image"
                                                    class="img-fluid">
                                            </li>
                                            <li>
                                                <img src="../assets/images/product/electronic/13-1.png" alt="Product Image"
                                                    class="img-fluid">
                                            </li>
                                            <li class="more-products">+2</li>
                                        </ul>
                                    </div>

                                    <ul class="tag-list mb-0">
                                        <li>Appliances</li>
                                        <li>Home</li>
                                        <li>Electronics</li>
                                        <li>Kitchen</li>
                                        <li>+3 more</li>
                                    </ul>
                                </div>

                                <div class="card-footer-bottom">
                                    <div class="footer-left">
                                        <div class="rating-box">
                                            <i class="ri-star-fill"></i>
                                            <span>5.0 (210 ratings)</span>
                                        </div>
                                        <div class="location-box">
                                            <i class="iconsax" data-icon="gps"></i> London, Manhattan
                                        </div>
                                    </div>
                                    <div class="d-flex gap-2">
                                        <button class="btn contact-btn" data-bs-toggle="modal"
                                            data-bs-target="#contactSellerModal" data-seller-name="Electro World">
                                            <i class="ri-chat-1-line"></i>
                                        </button>
                                        <a href="shop-page(infinite-scroll).html" class="btn visit-store-btn">Visit
                                            Store <i class="ri-arrow-right-long-line"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="seller-card-minimal">
                                <div class="card-header-top">
                                    <span class="seller-type-badge featured">Featured</span>
                                    <div class="seller-brand">
                                        <div class="brand-logo">
                                            <img src="../assets/images/user/team-4.jpg" class="img-fluid" alt="Seller">
                                        </div>
                                        <div class="brand-info">
                                            <h3>Home Decors <span class="time-ago">2 Days ago</span></h3>
                                            <div class="brand-meta">
                                                <span class="category-info">Decor & Furniture</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card-body-content">
                                    <p class="seller-short-desc">Beautiful home decoration items, furniture and
                                        accessories to style your living space. Explore our curated selection of modern
                                        and traditional decor that adds a touch of warmth and personality to every room.
                                    </p>

                                    <ul class="ecommerce-highlights">
                                        <li><i class="iconsax" data-icon="flash"></i> Premium Comfort</li>
                                        <li><i class="iconsax" data-icon="truck"></i> Safe Delivery</li>
                                    </ul>

                                    <ul class="seller-stats-row">
                                        <li class="stat-box">
                                            <h4 class="label">Products</h4>
                                            <h5 class="value">245</h5>
                                        </li>
                                        <li class="stat-box">
                                            <h4 class="label">Total Sell</h4>
                                            <h5 class="value">3.2k+</h5>
                                        </li>
                                        <li class="stat-box">
                                            <h4 class="label">Followers</h4>
                                            <h5 class="value">5.8k</h5>
                                        </li>
                                    </ul>

                                    <div class="product-preview-list">
                                        <div class="seller-product-title">
                                            <h4>Modern Living</h4>
                                            <span class="offer-badge">Buy 1 Get 1</span>
                                        </div>
                                        <ul>
                                            <li>
                                                <img src="../assets/images/product/furniture/1.jpg" alt="Product Image"
                                                    class="img-fluid">
                                            </li>
                                            <li>
                                                <img src="../assets/images/product/furniture/2.jpg" alt="Product Image"
                                                    class="img-fluid">
                                            </li>
                                            <li>
                                                <img src="../assets/images/product/furniture/3.jpg" alt="Product Image"
                                                    class="img-fluid">
                                            </li>
                                            <li>
                                                <img src="../assets/images/product/furniture/4.jpg" alt="Product Image"
                                                    class="img-fluid">
                                            </li>
                                            <li class="more-products">+4</li>
                                        </ul>
                                    </div>

                                    <ul class="tag-list mb-0">
                                        <li>Decor</li>
                                        <li>Home</li>
                                        <li>Living</li>
                                        <li>Furniture</li>
                                    </ul>
                                </div>

                                <div class="card-footer-bottom">
                                    <div class="footer-left">
                                        <div class="rating-box">
                                            <i class="ri-star-fill"></i>
                                            <span>4.3 (15 ratings)</span>
                                        </div>
                                        <div class="location-box">
                                            <i class="iconsax" data-icon="gps"></i> London, Manhattan
                                        </div>
                                    </div>
                                    <div class="d-flex gap-2">
                                        <button class="btn contact-btn" data-bs-toggle="modal"
                                            data-bs-target="#contactSellerModal" data-seller-name="Home Decors">
                                            <i class="ri-chat-1-line"></i>
                                        </button>
                                        <a href="shop-page(infinite-scroll).html" class="btn visit-store-btn">Visit
                                            Store <i class="ri-arrow-right-long-line"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>