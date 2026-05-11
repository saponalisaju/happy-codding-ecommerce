<template>
    <section class="shop-section section-b-space">
        <div class="container">
            <div class="row">
                <div class="col-xxl-3 col-xl-4">
                    <div class="shop-filter sticky">
                        <div class="shop-filter-block">
                            <div class="shop-mobile-back">
                                <button>Close
                                    <i class="ri-close-fill"></i>
                                </button>
                            </div>
                            <div class="seller-profile-sidebar">
                                <div class="profile-image">
                                    <img src="../assets/images/user/profile.jpg" alt="Hazy Fashion" class="img-fluid">
                                    <span class="verified-badge">
                                        <i class="iconsax" data-icon="verify"></i>
                                    </span>
                                </div>
                                <h4>Hazy Fashion</h4>
                                <div class="rating">
                                    <i class="ri-star-fill"></i>
                                    <span>4.8 (1.2k Reviews)</span>
                                </div>
                                <p>Premium fashion store for all seasons. Offering exclusive collections of high-quality
                                    fabrics.</p>

                                <ul class="contact-info">
                                    <li>
                                        <div class="icon-box">
                                            <i class="iconsax" data-icon="location"></i>
                                        </div>
                                        Manchester, UK
                                    </li>
                                    <li>
                                        <div class="icon-box">
                                            <i class="iconsax" data-icon="calendar-1"></i>
                                        </div>
                                        Joined since 2023
                                    </li>
                                    <li>
                                        <div class="icon-box">
                                            <i class="iconsax" data-icon="mail"></i>
                                        </div>
                                        hazy@fashion.com
                                    </li>
                                </ul>

                                <div class="seller-button-group">
                                    <button class="btn message-btn" data-bs-toggle="modal"
                                        data-bs-target="#messageModal">Message Seller</button>
                                    <button class="btn follow-btn">Follow Store</button>
                                </div>

                                <div class="social-links">
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <i class="ri-facebook-fill"></i>
                                    </a>
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <i class="ri-instagram-line"></i>
                                    </a>
                                    <a href="https://twitter.com/" target="_blank">
                                        <i class="ri-twitter-x-line"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="shop-filter-box">
                                <div class="accordion">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button" data-bs-toggle="collapse"
                                                data-bs-target="#panelsStayOpen-collapseOne">
                                                <span>Shop Categories</span>
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                                            <div class="accordion-body">
                                                <div class="search-box">
                                                    <input type="search" name="text" placeholder="Search items...">
                                                    <i class="iconsax search-icon" data-icon="search-normal-2"></i>
                                                </div>
                                                <ul class="categories-box">
                                                    <li>
                                                        <input class="checkbox_animated" type="radio" name="text"
                                                            id="Categories" checked>
                                                        <label for="Categories">all categories <span>(54)</span></label>
                                                    </li>
                                                    <li>
                                                        <input class="checkbox_animated" type="radio" name="text"
                                                            id="Furniture">
                                                        <label for="Furniture">furniture <span>(12)</span></label>
                                                    </li>
                                                    <li>
                                                        <input class="checkbox_animated" type="radio" name="text"
                                                            id="Accessories">
                                                        <label for="Accessories">accessories <span>(36)</span></label>
                                                    </li>
                                                    <li>
                                                        <input class="checkbox_animated" type="radio" name="text"
                                                            id="Clothes">
                                                        <label for="Clothes">clothes <span>(30)</span></label>
                                                    </li>
                                                    <li>
                                                        <input class="checkbox_animated" type="radio" name="text"
                                                            id="Electronic">
                                                        <label for="Electronic">electronic <span>(21)</span></label>
                                                    </li>
                                                    <li>
                                                        <input class="checkbox_animated" type="radio" name="text"
                                                            id="Bag">
                                                        <label for="Bag">bag <span>(10)</span></label>
                                                    </li>
                                                    <li>
                                                        <input class="checkbox_animated" type="radio" name="text"
                                                            id="Vegetable">
                                                        <label for="Vegetable">vegetable <span>(9)</span></label>
                                                    </li>
                                                    <li>
                                                        <input class="checkbox_animated" type="radio" name="text"
                                                            id="Watches">
                                                        <label for="Watches">watches <span>(50)</span></label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button" data-bs-toggle="collapse"
                                                data-bs-target="#panelsStayFour-collapseFour">
                                                <span>Highlight</span>
                                            </button>
                                        </h2>
                                        <div id="panelsStayFour-collapseFour" class="accordion-collapse collapse show">
                                            <div class="accordion-body">
                                                <ul class="highlight-box">
                                                    <li>
                                                        <input class="checkbox_animated" type="checkbox" name="text"
                                                            id="seller">
                                                        <label for="seller">best seller <span>(45)</span></label>
                                                    </li>
                                                    <li>
                                                        <input class="checkbox_animated" type="checkbox" name="text"
                                                            id="arrivals">
                                                        <label for="arrivals">new arrivals <span>(15)</span></label>
                                                    </li>
                                                    <li>
                                                        <input class="checkbox_animated" type="checkbox" name="text"
                                                            id="sale">
                                                        <label for="sale">sale <span>(32)</span></label>
                                                    </li>
                                                    <li>
                                                        <input class="checkbox_animated" type="checkbox" name="text"
                                                            id="all-items">
                                                        <label for="all-items">hot items <span>(35)</span></label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" data-bs-toggle="collapse"
                                                data-bs-target="#panelsStayOpen-collapseTwo">
                                                <span>Price</span>
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show">
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
                                            <button class="accordion-button collapsed" data-bs-toggle="collapse"
                                                data-bs-target="#panelsStayOpen-collapseThree">
                                                <span>Color</span>
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse show">
                                            <div class="accordion-body">
                                                <ul class="color-filter">
                                                    <li>
                                                        <input class="checkbox_animated" type="checkbox" name="text"
                                                            id="color">
                                                        <label for="color">
                                                            <span class="color"
                                                                style="background-color: #94c4ff;"></span>
                                                            Navy blue
                                                            <span class="number">(29)</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input class="checkbox_animated" type="checkbox" name="text"
                                                            id="color1">
                                                        <label for="color1">
                                                            <span class="color"
                                                                style="background-color: #c5aff6;"></span> Light
                                                            purple <span class="number">(24)</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input class="checkbox_animated" type="checkbox" name="text"
                                                            id="color2">
                                                        <label for="color2">
                                                            <span class="color"
                                                                style="background-color: #fbe8bf;"></span> Golden
                                                            yellow <span class="number">(10)</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input class="checkbox_animated" type="checkbox" name="text"
                                                            id="color3">
                                                        <label for="color3">
                                                            <span class="color"
                                                                style="background-color: #b2ebd6;"></span> Greene
                                                            green <span class="number">(39)</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input class="checkbox_animated" type="checkbox" name="text"
                                                            id="color4">
                                                        <label for="color4">
                                                            <span class="color"
                                                                style="background-color: #cdb69b;"></span> Browne
                                                            <span class="number">(5)</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input class="checkbox_animated" type="checkbox" name="text"
                                                            id="color5">
                                                        <label for="color5">
                                                            <span class="color"
                                                                style="background-color: #ffbfbf;"></span> Orange
                                                            <span class="number">(45)</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input class="checkbox_animated" type="checkbox" name="text"
                                                            id="color6">
                                                        <label for="color6">
                                                            <span class="color"
                                                                style="background-color: #fbc6ea;"></span> Baby pink
                                                            <span class="number">(3)</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input class="checkbox_animated" type="checkbox" name="text"
                                                            id="color7">
                                                        <label for="color7">
                                                            <span class="color"
                                                                style="background-color: #dbe793;"></span> Dark
                                                            Green <span class="number">(32)</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input class="checkbox_animated" type="checkbox" name="text"
                                                            id="color8">
                                                        <label for="color8">
                                                            <span class="color"
                                                                style="background-color: #ffc38d;"></span> Orange
                                                            olive <span class="number">(21)</span>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button" data-bs-toggle="collapse"
                                                data-bs-target="#panelsStayFive-collapseFive">
                                                <span>Availability</span>
                                            </button>
                                        </h2>
                                        <div id="panelsStayFive-collapseFive" class="accordion-collapse collapse show">
                                            <div class="accordion-body">
                                                <ul class="availability-box">
                                                    <li>
                                                        <input class="checkbox_animated" type="radio" name="text"
                                                            id="in-stock">
                                                        <label for="in-stock">in stock</label>
                                                    </li>
                                                    <li>
                                                        <input class="checkbox_animated" type="radio" name="text"
                                                            id="out-stock">
                                                        <label for="out-stock">out of stock</label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button" data-bs-toggle="collapse"
                                                data-bs-target="#panelsStaySeven-collapseSeven">
                                                <span>Rating</span>
                                            </button>
                                        </h2>
                                        <div id="panelsStaySeven-collapseSeven"
                                            class="accordion-collapse collapse show">
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
                                            <button class="accordion-button" data-bs-toggle="collapse"
                                                data-bs-target="#panelsStaySix-collapseSix">
                                                <span>Tags</span>
                                            </button>
                                        </h2>
                                        <div id="panelsStaySix-collapseSix" class="accordion-collapse collapse show">
                                            <div class="accordion-body px-0 pb-0">
                                                <ul class="tag-box">
                                                    <li>
                                                        <a href="#!">furniture</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">accessories</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">beauty</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">clothes</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">electronic</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">bag</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">vegetable</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">watches</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="shop-banner-box">
                                        <div class="swiper shop-offer-banner">
                                            <div class="swiper-wrapper">
                                                <div class="swiper-slide">
                                                    <img src="../assets/images/shop-page/1.png" alt="" class="img-fluid">
                                                </div>
                                                <div class="swiper-slide">
                                                    <img src="../assets/images/shop-page/2.png" alt="" class="img-fluid">
                                                </div>
                                                <div class="swiper-slide">
                                                    <img src="../assets/images/shop-page/3.png" alt="" class="img-fluid">
                                                </div>
                                                <div class="swiper-slide">
                                                    <img src="../assets/images/shop-page/4.png" alt="" class="img-fluid">
                                                </div>
                                                <div class="swiper-slide">
                                                    <img src="../assets/images/shop-page/5.png" alt="" class="img-fluid">
                                                </div>
                                                <div class="swiper-slide">
                                                    <img src="../assets/images/shop-page/6.png" alt="" class="img-fluid">
                                                </div>
                                                <div class="swiper-slide">
                                                    <img src="../assets/images/shop-page/7.png" alt="" class="img-fluid">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="shop-banner">
                                            <h3>Subscribe & Get Free Shipping on Your Next Order
                                                <img src="https://themes.pixelstrap.net/hazy/assets/svg/icon/like.svg" class="img-fluid" alt="">
                                            </h3>
                                            <form class="news-latter-form">
                                                <input type="email" placeholder="Enter email">
                                                <button class="btn">
                                                    <img src="https://themes.pixelstrap.net/hazy/assets/svg/icon/right-arrow.svg" alt="">
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-9 col-xl-8">
                    <div class="categories-items sticky">
                        <div class="filter-content">
                            <div class="d-flex align-items-center gap-2 flex-wrap">
                                <button class="filter-button theme-btn btn"><i class="ri-equalizer-2-line"></i> Filter
                                    Menu</button>
                                <span>Showing 1-8 of 52 results</span>
                            </div>
                            <div class="right-menu">
                                <div>
                                    <div class="filter-option-grid d-lg-flex d-none">
                                        <button class="btn filter-box nav-link">
                                            <svg>
                                                <use href="https://themes.pixelstrap.net/hazy/assets/svg/sprite_icon.svg#grid"></use>
                                            </svg>
                                        </button>
                                        <button class="btn filter-box nav-link">
                                            <svg>
                                                <use href="https://themes.pixelstrap.net/hazy/assets/svg/sprite_icon.svg#list-view"></use>
                                            </svg>
                                        </button>
                                    </div>
                                    <ul class="shop-sorting">
                                        <li>
                                            <label>Sort:</label>
                                            <select class="form-select">
                                                <option selected disabled>Default sorting</option>
                                                <option value="1">popularity</option>
                                                <option value="2">average rating</option>
                                                <option value="3">price: low to high</option>
                                                <option value="4">price: high to low</option>
                                            </select>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="recent-box">
                            <h4>Filter:</h4>
                            <ul>
                                <li>
                                    <a href="#!">Furniture <i class="ri-close-line"></i></a>
                                </li>
                                <li>
                                    <a href="#!">Watches <i class="ri-close-line"></i></a>
                                </li>
                                <li>
                                    <a href="#!">Bag <i class="ri-close-line"></i></a>
                                </li>
                                <li>
                                    <a href="#!">New Arrivals <i class="ri-close-line"></i></a>
                                </li>
                                <li>
                                    <a href="#!">$4000 - $6600 <i class="ri-close-line"></i></a>
                                </li>
                                <li>
                                    <button class="btn">Clear all <i class="ri-delete-bin-5-line"></i></button>
                                </li>
                            </ul>
                        </div>
                        <div class="product-tab-content">
                            <div class="row-cols-md-3 row-cols-2 grid-section view-option row g-3 g-xl-4">
                                <div class="col">
                                    <div class="product-box style-3">
                                        <div class="product-img-box">
                                            <ul class="option-box">
                                                <li class="toggle-img">
                                                    <input class="form-check-input" type="checkbox" value="">
                                                    <i class="ri-heart-3-line"></i>
                                                    <i class="ri-heart-3-fill"></i>
                                                </li>
                                                <li>
                                                    <a href="#quickViewModal" data-bs-toggle="modal">
                                                        <i class="ri-eye-line"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="compare.html">
                                                        <i class="ri-arrow-left-right-line"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                            <a href="product-page(left-thumbnail).html" class="product-img">
                                                <img src="../assets/images/product/fashion/1.png" class="img-fluid" alt="">
                                            </a>
                                        </div>
                                        <div class="product-details">
                                            <span class="food-label">Clothes</span>
                                            <div class="details-box">
                                                <a href="product-page(left-thumbnail).html" class="name">Floral Summer
                                                    Dress</a>
                                                <h4>
                                                    <svg>
                                                        <use href="https://themes.pixelstrap.net/hazy/assets/svg/sprite_icon.svg#star"></use>
                                                    </svg>
                                                    4.5
                                                </h4>
                                            </div>
                                            <p class="product-description">A breezy floral dress perfect for summer
                                                days. Light, comfortable, and stylish for any casual occasion.</p>
                                            <h5 class="price">$45.00 <del>$60.00</del></h5>
                                            <div class="bottom-panel">
                                                <div class="product">
                                                    <button class="add-btn">
                                                        <span>Add</span>
                                                        <i class="ri-add-line"></i>
                                                    </button>
                                                    <div class="counter">
                                                        <button class="decrement">
                                                            <i class="ri-subtract-line"></i>
                                                        </button>
                                                        <span class="count">01</span>
                                                        <button class="increment">
                                                            <i class="ri-add-line"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <button class="btn cart-btn">
                                                    <i class="ri-shopping-cart-line"></i>
                                                    <span>cart</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="product-box style-3">
                                        <div class="product-img-box">
                                            <label class="label-red">10% OFF</label>
                                            <ul class="option-box">
                                                <li class="toggle-img">
                                                    <input class="form-check-input" type="checkbox" value="">
                                                    <i class="ri-heart-3-line"></i>
                                                    <i class="ri-heart-3-fill"></i>
                                                </li>
                                                <li>
                                                    <a href="#quickViewModal" data-bs-toggle="modal">
                                                        <i class="ri-eye-line"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="compare.html">
                                                        <i class="ri-arrow-left-right-line"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                            <a href="product-page(left-thumbnail).html" class="product-img">
                                                <img src="../assets/images/product/shoes/1.png" class="img-fluid" alt="">
                                            </a>
                                        </div>
                                        <div class="product-details">
                                            <span class="food-label">Shoes</span>
                                            <div class="details-box">
                                                <a href="product-page(left-thumbnail).html" class="name">Urban Trekker
                                                    Boots</a>
                                                <h4>
                                                    <svg>
                                                        <use href="https://themes.pixelstrap.net/hazy/assets/svg/sprite_icon.svg#star"></use>
                                                    </svg>
                                                    4.2
                                                </h4>
                                            </div>
                                            <p class="product-description">Durable and stylish trekking boots designed
                                                for maximum comfort and grip on any terrain. Ideal for hiking and
                                                outdoor adventures.</p>
                                            <h5 class="price">$26.59 <del>$27.99</del></h5>
                                            <div class="bottom-panel">
                                                <div class="product">
                                                    <button class="add-btn">
                                                        <span>Add</span>
                                                        <i class="ri-add-line"></i>
                                                    </button>
                                                    <div class="counter">
                                                        <button class="decrement">
                                                            <i class="ri-subtract-line"></i>
                                                        </button>
                                                        <span class="count">01</span>
                                                        <button class="increment">
                                                            <i class="ri-add-line"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <button class="btn cart-btn">
                                                    <i class="ri-shopping-cart-line"></i>
                                                    <span>cart</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="product-box style-3">
                                        <div class="product-img-box">
                                            <ul class="option-box">
                                                <li class="toggle-img">
                                                    <input class="form-check-input" type="checkbox" value="">
                                                    <i class="ri-heart-3-line"></i>
                                                    <i class="ri-heart-3-fill"></i>
                                                </li>
                                                <li>
                                                    <a href="#quickViewModal" data-bs-toggle="modal">
                                                        <i class="ri-eye-line"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="compare.html">
                                                        <i class="ri-arrow-left-right-line"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                            <a href="product-page(left-thumbnail).html" class="product-img">
                                                <img src="../assets/images/product/watch/3.png" class="img-fluid" alt="">
                                            </a>
                                        </div>
                                        <div class="product-details">
                                            <span class="food-label">Watch</span>
                                            <div class="details-box">
                                                <a href="product-page(left-thumbnail).html" class="name">Eclipse
                                                    Chrono</a>
                                                <h4>
                                                    <svg>
                                                        <use href="https://themes.pixelstrap.net/hazy/assets/svg/sprite_icon.svg#star"></use>
                                                    </svg>
                                                    4.9
                                                </h4>
                                            </div>
                                            <p class="product-description">A sophisticated chronograph watch featuring a
                                                sleek design and precision timekeeping. Perfect for both casual and
                                                formal wear, adding a touch of elegance.</p>
                                            <h5 class="price">$34.36 <del>$38.64</del> <span
                                                    class="text-error">15%</span></h5>
                                            <div class="bottom-panel">
                                                <div class="product">
                                                    <button class="add-btn">
                                                        <span>Add</span>
                                                        <i class="ri-add-line"></i>
                                                    </button>
                                                    <div class="counter">
                                                        <button class="decrement">
                                                            <i class="ri-subtract-line"></i>
                                                        </button>
                                                        <span class="count">01</span>
                                                        <button class="increment">
                                                            <i class="ri-add-line"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <button class="btn cart-btn">
                                                    <i class="ri-shopping-cart-line"></i>
                                                    <span>cart</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="product-box style-3">
                                        <div class="product-img-box">
                                            <label class="label-red">8% OFF</label>
                                            <a href="product-page(left-thumbnail).html" class="product-img">
                                                <img src="../assets/images/product/watch/8.png" class="img-fluid" alt="">
                                            </a>
                                            <ul class="option-box">
                                                <li class="toggle-img">
                                                    <input class="form-check-input" type="checkbox" value="">
                                                    <i class="ri-heart-3-line"></i>
                                                    <i class="ri-heart-3-fill"></i>
                                                </li>
                                                <li>
                                                    <a href="#quickViewModal" data-bs-toggle="modal">
                                                        <i class="ri-eye-line"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="compare.html">
                                                        <i class="ri-arrow-left-right-line"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="product-details">
                                            <span class="food-label">Watch</span>
                                            <div class="details-box">
                                                <a href="product-page(left-thumbnail).html" class="name">Regal
                                                    Horizon</a>
                                                <h4>
                                                    <svg>
                                                        <use href="https://themes.pixelstrap.net/hazy/assets/svg/sprite_icon.svg#star"></use>
                                                    </svg>
                                                    4.8
                                                </h4>
                                            </div>
                                            <p class="product-description">An elegant watch that combines classic
                                                aesthetics with modern durability. Features a water-resistant design and
                                                a premium strap for daily wear.</p>
                                            <h5 class="price">$65.25 <del>$68.69</del></h5>
                                            <div class="bottom-panel">
                                                <div class="product">
                                                    <button class="add-btn">
                                                        <span>Add</span>
                                                        <i class="ri-add-line"></i>
                                                    </button>
                                                    <div class="counter">
                                                        <button class="decrement">
                                                            <i class="ri-subtract-line"></i>
                                                        </button>
                                                        <span class="count">01</span>
                                                        <button class="increment">
                                                            <i class="ri-add-line"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <button class="btn cart-btn">
                                                    <i class="ri-shopping-cart-line"></i>
                                                    <span>cart</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="product-box style-3">
                                        <div class="product-img-box">
                                            <label class="label-red">67% OFF</label>
                                            <a href="product-page(left-thumbnail).html" class="product-img">
                                                <img src="../assets/images/shop-page/product/12.png" class="img-fluid"
                                                    alt="">
                                            </a>
                                            <ul class="option-box">
                                                <li class="toggle-img">
                                                    <input class="form-check-input" type="checkbox" value="">
                                                    <i class="ri-heart-3-line"></i>
                                                    <i class="ri-heart-3-fill"></i>
                                                </li>
                                                <li>
                                                    <a href="#quickViewModal" data-bs-toggle="modal">
                                                        <i class="ri-eye-line"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="compare.html">
                                                        <i class="ri-arrow-left-right-line"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="product-details">
                                            <span class="food-label">Shoes</span>
                                            <div class="details-box">
                                                <a href="product-page(left-thumbnail).html" class="name">Sneakers</a>
                                                <h4>
                                                    <svg>
                                                        <use href="https://themes.pixelstrap.net/hazy/assets/svg/sprite_icon.svg#star"></use>
                                                    </svg>
                                                    4.3
                                                </h4>
                                            </div>
                                            <p class="product-description">Sneakers are stylish, versatile, and
                                                comfortable shoes designed for everyday wear. Perfect for casual
                                                outings, sports, or travel, they blend fashion with function, ensuring
                                                durability, support, and all-day comfort.</p>
                                            <h5 class="price">$82.45 <del>$85.15</del></h5>
                                            <div class="bottom-panel">
                                                <div class="product">
                                                    <button class="add-btn">
                                                        <span>Add</span>
                                                        <i class="ri-add-line"></i>
                                                    </button>
                                                    <div class="counter">
                                                        <button class="decrement">
                                                            <i class="ri-subtract-line"></i>
                                                        </button>
                                                        <span class="count">01</span>
                                                        <button class="increment">
                                                            <i class="ri-add-line"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <button class="btn cart-btn">
                                                    <i class="ri-shopping-cart-line"></i>
                                                    <span>cart</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="product-box style-3">
                                        <div class="product-img-box">
                                            <a href="product-page(left-thumbnail).html" class="product-img">
                                                <img src="../assets/images/shop-page/product/25.png" class="img-fluid"
                                                    alt="">
                                            </a>
                                            <ul class="option-box">
                                                <li class="toggle-img">
                                                    <input class="form-check-input" type="checkbox" value="">
                                                    <i class="ri-heart-3-line"></i>
                                                    <i class="ri-heart-3-fill"></i>
                                                </li>
                                                <li>
                                                    <a href="#quickViewModal" data-bs-toggle="modal">
                                                        <i class="ri-eye-line"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="compare.html">
                                                        <i class="ri-arrow-left-right-line"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="product-details">
                                            <span class="food-label">fashion</span>
                                            <div class="details-box">
                                                <a href="product-page(left-thumbnail).html" class="name">Strapless
                                                    Top</a>
                                                <h4>
                                                    <svg>
                                                        <use href="https://themes.pixelstrap.net/hazy/assets/svg/sprite_icon.svg#star"></use>
                                                    </svg>
                                                    4.5
                                                </h4>
                                            </div>
                                            <p class="product-description">A strapless top is a chic, versatile fashion
                                                piece that highlights shoulders and neckline. Perfect for parties,
                                                summer outings, or layering, it blends elegance with modern, confident
                                                style.</p>
                                            <h5 class="price">$45.00 <del>$80.00</del> <span>1 Piece</span></h5>
                                            <div class="bottom-panel">
                                                <div class="product">
                                                    <button class="add-btn">
                                                        <span>Add</span>
                                                        <i class="ri-add-line"></i>
                                                    </button>
                                                    <div class="counter">
                                                        <button class="decrement">
                                                            <i class="ri-subtract-line"></i>
                                                        </button>
                                                        <span class="count">01</span>
                                                        <button class="increment">
                                                            <i class="ri-add-line"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <button class="btn cart-btn">
                                                    <i class="ri-shopping-cart-line"></i>
                                                    <span>cart</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="product-box style-3">
                                        <div class="product-img-box">
                                            <label class="label-red">10% OFF</label>
                                            <a href="product-page(left-thumbnail).html" class="product-img">
                                                <img src="../assets/images/product/fashion/2.png" class="img-fluid" alt="">
                                            </a>
                                            <ul class="option-box">
                                                <li class="toggle-img">
                                                    <input class="form-check-input" type="checkbox" value="">
                                                    <i class="ri-heart-3-line"></i>
                                                    <i class="ri-heart-3-fill"></i>
                                                </li>
                                                <li>
                                                    <a href="#quickViewModal" data-bs-toggle="modal">
                                                        <i class="ri-eye-line"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="compare.html">
                                                        <i class="ri-arrow-left-right-line"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="product-details">
                                            <span class="food-label">Accessories</span>
                                            <div class="details-box">
                                                <a href="product-page(left-thumbnail).html" class="name">Premium Leather
                                                    Handbag</a>
                                                <h4>
                                                    <svg>
                                                        <use href="https://themes.pixelstrap.net/hazy/assets/svg/sprite_icon.svg#star"></use>
                                                    </svg>
                                                    4.5
                                                </h4>
                                            </div>
                                            <p class="product-description">High-quality leather handbag with spacious
                                                compartments and a timeless design. Perfect for work, travel, and
                                                everyday use.</p>
                                            <h5 class="price">$120.00 <del>$132.00</del></h5>
                                            <div class="bottom-panel">
                                                <div class="product">
                                                    <button class="add-btn">
                                                        <span>Add</span>
                                                        <i class="ri-add-line"></i>
                                                    </button>
                                                    <div class="counter">
                                                        <button class="decrement">
                                                            <i class="ri-subtract-line"></i>
                                                        </button>
                                                        <span class="count">01</span>
                                                        <button class="increment">
                                                            <i class="ri-add-line"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <button class="btn cart-btn">
                                                    <i class="ri-shopping-cart-line"></i>
                                                    <span>cart</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="product-box style-3">
                                        <div class="product-img-box">
                                            <a href="product-page(left-thumbnail).html" class="product-img">
                                                <img src="../assets/images/product/shoes/4.png" class="img-fluid" alt="">
                                            </a>
                                            <ul class="option-box">
                                                <li class="toggle-img">
                                                    <input class="form-check-input" type="checkbox" value="">
                                                    <i class="ri-heart-3-line"></i>
                                                    <i class="ri-heart-3-fill"></i>
                                                </li>
                                                <li>
                                                    <a href="#quickViewModal" data-bs-toggle="modal">
                                                        <i class="ri-eye-line"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="compare.html">
                                                        <i class="ri-arrow-left-right-line"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="product-details">
                                            <span class="food-label">Men Collection</span>
                                            <div class="details-box">
                                                <a href="product-page(left-thumbnail).html" class="name">StrideEase Flex
                                                    Sneakers</a>
                                                <h4>
                                                    <svg>
                                                        <use href="https://themes.pixelstrap.net/hazy/assets/svg/sprite_icon.svg#star"></use>
                                                    </svg>
                                                    4.4
                                                </h4>
                                            </div>
                                            <p class="product-description">High-performance flex sneakers designed for
                                                maximum comfort and agility. Features breathable mesh, responsive
                                                cushioning, and a durable outsole for all-day wear.</p>
                                            <h5 class="price">$54.69 <del>$56.56</del></h5>
                                            <div class="bottom-panel">
                                                <div class="product">
                                                    <button class="add-btn">
                                                        <span>Add</span>
                                                        <i class="ri-add-line"></i>
                                                    </button>
                                                    <div class="counter">
                                                        <button class="decrement">
                                                            <i class="ri-subtract-line"></i>
                                                        </button>
                                                        <span class="count">01</span>
                                                        <button class="increment">
                                                            <i class="ri-add-line"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <button class="btn cart-btn">
                                                    <i class="ri-shopping-cart-line"></i>
                                                    <span>cart</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="product-box style-3">
                                        <div class="product-img-box">
                                            <label class="label-red">10% OFF</label>
                                            <a href="product-page(left-thumbnail).html" class="product-img">
                                                <img src="../assets/images/product/fashion/3.png" class="img-fluid" alt="">
                                            </a>
                                            <ul class="option-box">
                                                <li class="toggle-img">
                                                    <input class="form-check-input" type="checkbox" value="">
                                                    <i class="ri-heart-3-line"></i>
                                                    <i class="ri-heart-3-fill"></i>
                                                </li>
                                                <li>
                                                    <a href="#quickViewModal" data-bs-toggle="modal">
                                                        <i class="ri-eye-line"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="compare.html">
                                                        <i class="ri-arrow-left-right-line"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="product-details">
                                            <span class="food-label">Clothes</span>
                                            <div class="details-box">
                                                <a href="product-page(left-thumbnail).html" class="name">Classic Denim
                                                    Jacket</a>
                                                <h4>
                                                    <svg>
                                                        <use href="https://themes.pixelstrap.net/hazy/assets/svg/sprite_icon.svg#star"></use>
                                                    </svg>
                                                    4.5
                                                </h4>
                                            </div>
                                            <p class="product-description">A timeless denim jacket that goes with
                                                everything. Durable, stylish, and perfect for layering over any outfit.
                                                A must-have classic.</p>
                                            <h5 class="price">$65.00 <del>$72.00</del></h5>
                                            <div class="bottom-panel">
                                                <div class="product">
                                                    <button class="add-btn">
                                                        <span>Add</span>
                                                        <i class="ri-add-line"></i>
                                                    </button>
                                                    <div class="counter">
                                                        <button class="decrement">
                                                            <i class="ri-subtract-line"></i>
                                                        </button>
                                                        <span class="count">01</span>
                                                        <button class="increment">
                                                            <i class="ri-add-line"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <button class="btn cart-btn">
                                                    <i class="ri-shopping-cart-line"></i>
                                                    <span>cart</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="product-box style-3">
                                        <div class="product-img-box">
                                            <label class="label-red">10% OFF</label>
                                            <a href="product-page(left-thumbnail).html" class="product-img">
                                                <img src="../assets/images/product/fashion/4.png" class="img-fluid" alt="">
                                            </a>
                                            <ul class="option-box">
                                                <li class="toggle-img">
                                                    <input class="form-check-input" type="checkbox" value="">
                                                    <i class="ri-heart-3-line"></i>
                                                    <i class="ri-heart-3-fill"></i>
                                                </li>
                                                <li>
                                                    <a href="#quickViewModal" data-bs-toggle="modal">
                                                        <i class="ri-eye-line"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="compare.html">
                                                        <i class="ri-arrow-left-right-line"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="product-details">
                                            <span class="food-label">Accessories</span>
                                            <div class="details-box">
                                                <a href="product-page(left-thumbnail).html" class="name">Silk Scarf</a>
                                                <h4>
                                                    <svg>
                                                        <use href="https://themes.pixelstrap.net/hazy/assets/svg/sprite_icon.svg#star"></use>
                                                    </svg>
                                                    4.5
                                                </h4>
                                            </div>
                                            <p class="product-description">Soft and luxurious silk scarf to add a touch
                                                of elegance to any outfit. Lightweight and breathable, perfect for all
                                                seasons.</p>
                                            <h5 class="price">$25.00 <del>$35.00</del></h5>
                                            <div class="bottom-panel">
                                                <div class="product">
                                                    <button class="add-btn">
                                                        <span>Add</span>
                                                        <i class="ri-add-line"></i>
                                                    </button>
                                                    <div class="counter">
                                                        <button class="decrement">
                                                            <i class="ri-subtract-line"></i>
                                                        </button>
                                                        <span class="count">01</span>
                                                        <button class="increment">
                                                            <i class="ri-add-line"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <button class="btn cart-btn">
                                                    <i class="ri-shopping-cart-line"></i>
                                                    <span>cart</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="product-box style-3">
                                        <div class="product-img-box">
                                            <label class="label-red">10% OFF</label>
                                            <a href="product-page(left-thumbnail).html" class="product-img">
                                                <img src="../assets/images/product/fashion/5.png" class="img-fluid" alt="">
                                            </a>
                                            <ul class="option-box">
                                                <li class="toggle-img">
                                                    <input class="form-check-input" type="checkbox" value="">
                                                    <i class="ri-heart-3-line"></i>
                                                    <i class="ri-heart-3-fill"></i>
                                                </li>
                                                <li>
                                                    <a href="#quickViewModal" data-bs-toggle="modal">
                                                        <i class="ri-eye-line"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="compare.html">
                                                        <i class="ri-arrow-left-right-line"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="product-details">
                                            <span class="food-label">Accessories</span>
                                            <div class="details-box">
                                                <a href="product-page(left-thumbnail).html" class="name">Stylish
                                                    Sunglasses</a>
                                                <h4>
                                                    <svg>
                                                        <use href="https://themes.pixelstrap.net/hazy/assets/svg/sprite_icon.svg#star"></use>
                                                    </svg>
                                                    4.8
                                                </h4>
                                            </div>
                                            <p class="product-description">Trendy sunglasses offering UV protection and
                                                a chic look for sunny days. Comfortable feather-light frame with durable
                                                lenses.</p>
                                            <h5 class="price">$30.00 <del>$45.00</del></h5>
                                            <div class="bottom-panel">
                                                <div class="product">
                                                    <button class="add-btn">
                                                        <span>Add</span>
                                                        <i class="ri-add-line"></i>
                                                    </button>
                                                    <div class="counter">
                                                        <button class="decrement">
                                                            <i class="ri-subtract-line"></i>
                                                        </button>
                                                        <span class="count">01</span>
                                                        <button class="increment">
                                                            <i class="ri-add-line"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <button class="btn cart-btn">
                                                    <i class="ri-shopping-cart-line"></i>
                                                    <span>cart</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="product-box style-3">
                                        <div class="product-img-box">
                                            <label class="label-red">10% OFF</label>
                                            <a href="product-page(left-thumbnail).html" class="product-img">
                                                <img src="../assets/images/product/fashion/6.png" class="img-fluid" alt="">
                                            </a>
                                            <ul class="option-box">
                                                <li class="toggle-img">
                                                    <input class="form-check-input" type="checkbox" value="">
                                                    <i class="ri-heart-3-line"></i>
                                                    <i class="ri-heart-3-fill"></i>
                                                </li>
                                                <li>
                                                    <a href="#quickViewModal" data-bs-toggle="modal">
                                                        <i class="ri-eye-line"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="compare.html">
                                                        <i class="ri-arrow-left-right-line"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="product-details">
                                            <span class="food-label">Accessories</span>
                                            <div class="details-box">
                                                <a href="product-page(left-thumbnail).html" class="name">Wide Brim
                                                    Hat</a>
                                                <h4>
                                                    <svg>
                                                        <use href="https://themes.pixelstrap.net/hazy/assets/svg/sprite_icon.svg#star"></use>
                                                    </svg>
                                                    4.7
                                                </h4>
                                            </div>
                                            <p class="product-description">Classic wide-brim hat, perfect for beach days
                                                or adding a sophisticated touch to your look. Provides excellent sun
                                                protection with style.</p>
                                            <h5 class="price">$35.00 <del>$45.00</del></h5>
                                            <div class="bottom-panel">
                                                <div class="product">
                                                    <button class="add-btn">
                                                        <span>Add</span>
                                                        <i class="ri-add-line"></i>
                                                    </button>
                                                    <div class="counter">
                                                        <button class="decrement">
                                                            <i class="ri-subtract-line"></i>
                                                        </button>
                                                        <span class="count">01</span>
                                                        <button class="increment">
                                                            <i class="ri-add-line"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <button class="btn cart-btn">
                                                    <i class="ri-shopping-cart-line"></i>
                                                    <span>cart</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="product-box style-3">
                                        <div class="product-img-box">
                                            <label class="label-red">10% OFF</label>
                                            <a href="product-page(left-thumbnail).html" class="product-img">
                                                <img src="../assets/images/product/fashion/7.png" class="img-fluid" alt="">
                                            </a>
                                            <ul class="option-box">
                                                <li class="toggle-img">
                                                    <input class="form-check-input" type="checkbox" value="">
                                                    <i class="ri-heart-3-line"></i>
                                                    <i class="ri-heart-3-fill"></i>
                                                </li>
                                                <li>
                                                    <a href="#quickViewModal" data-bs-toggle="modal">
                                                        <i class="ri-eye-line"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="compare.html">
                                                        <i class="ri-arrow-left-right-line"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="product-details">
                                            <span class="food-label">Clothes</span>
                                            <div class="details-box">
                                                <a href="product-page(left-thumbnail).html" class="name">Casual
                                                    T-Shirt</a>
                                                <h4>
                                                    <svg>
                                                        <use href="https://themes.pixelstrap.net/hazy/assets/svg/sprite_icon.svg#star"></use>
                                                    </svg>
                                                    4.6
                                                </h4>
                                            </div>
                                            <p class="product-description">Soft cotton T-shirt available in various
                                                colors. A wardrobe essential for everyday wear, offering comfort and
                                                simple style.</p>
                                            <h5 class="price">$20.00 <del>$30.00</del></h5>
                                            <div class="bottom-panel">
                                                <div class="product">
                                                    <button class="add-btn">
                                                        <span>Add</span>
                                                        <i class="ri-add-line"></i>
                                                    </button>
                                                    <div class="counter">
                                                        <button class="decrement">
                                                            <i class="ri-subtract-line"></i>
                                                        </button>
                                                        <span class="count">01</span>
                                                        <button class="increment">
                                                            <i class="ri-add-line"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <button class="btn cart-btn">
                                                    <i class="ri-shopping-cart-line"></i>
                                                    <span>cart</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="product-box style-3">
                                        <div class="product-img-box">
                                            <label class="label-red">10% OFF</label>
                                            <ul class="option-box">
                                                <li class="toggle-img">
                                                    <input class="form-check-input" type="checkbox" value="">
                                                    <i class="ri-heart-3-line"></i>
                                                    <i class="ri-heart-3-fill"></i>
                                                </li>
                                                <li>
                                                    <a href="#quickViewModal" data-bs-toggle="modal">
                                                        <i class="ri-eye-line"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="compare.html">
                                                        <i class="ri-arrow-left-right-line"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                            <a href="product-page(left-thumbnail).html" class="product-img">
                                                <img src="../assets/images/product/fashion/8.png" class="img-fluid" alt="">
                                            </a>
                                        </div>
                                        <div class="product-details">
                                            <span class="food-label">Accessories</span>
                                            <div class="details-box">
                                                <a href="product-page(left-thumbnail).html" class="name">Leather
                                                    Belt</a>
                                                <h4>
                                                    <svg>
                                                        <use href="https://themes.pixelstrap.net/hazy/assets/svg/sprite_icon.svg#star"></use>
                                                    </svg>
                                                    4.5
                                                </h4>
                                            </div>
                                            <p class="product-description">Genuine leather belt with a durable buckle.
                                                Adds a polished finish to formal and casual outfits. Long-lasting and
                                                stylish.</p>
                                            <h5 class="price">$40.00 <del>$55.00</del></h5>
                                            <div class="bottom-panel">
                                                <div class="product">
                                                    <button class="add-btn">
                                                        <span>Add</span>
                                                        <i class="ri-add-line"></i>
                                                    </button>
                                                    <div class="counter">
                                                        <button class="decrement">
                                                            <i class="ri-subtract-line"></i>
                                                        </button>
                                                        <span class="count">01</span>
                                                        <button class="increment">
                                                            <i class="ri-add-line"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <button class="btn cart-btn">
                                                    <i class="ri-shopping-cart-line"></i>
                                                    <span>cart</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul class="custom-pagination pagination">
                            <li class="page-item disabled">
                                <a class="page-link">
                                    <span class="d-sm-inline-block d-none">Previous</span>
                                    <i class="ri-arrow-left-double-line d-sm-none"></i>
                                </a>
                            </li>
                            <li class="pagination-number">
                                <div class="page-item">
                                    <a class="page-link" href="#!">1</a>
                                </div>
                                <div class="page-item active">
                                    <a class="page-link" href="#!">2</a>
                                </div>
                                <div class="page-item">
                                    <a class="page-link" href="#!">3</a>
                                </div>
                                <div class="page-item">
                                    <a class="page-link" href="#!">...</a>
                                </div>
                                <div class="page-item">
                                    <a class="page-link" href="#!">10</a>
                                </div>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#!">
                                    <span class="d-sm-inline-block d-none">Next</span>
                                    <i class="ri-arrow-right-double-line d-sm-none"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>