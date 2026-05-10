<template>
    <section class="home-section style-7 st-space">
        <div class="container">
            <div class="row g-md-4 g-3">
                <div class="col-lg-6">
                    <div class="swiper electronic-main">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="left-box">
                                    <div>
                                        <img src="/assets/images/layout-7/1.png" alt="Product" class="img-fluid">
                                        <div class="category-box">
                                            <router-link to="product-page(4-image).html" class="icon-box">
                                                <i class="ri-add-line"></i>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="left-box">
                                    <div>
                                        <img src="/assets/images/layout-7/2.png" alt="Product" class="img-fluid">
                                        <div class="category-box">
                                            <a href="product-page(4-image).html" class="icon-box">
                                                <i class="ri-add-line"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="left-box">
                                    <div>
                                        <img src="/assets/images/layout-7/3.png" alt="Product" class="img-fluid">
                                        <div class="category-box">
                                            <a href="product-page(4-image).html" class="icon-box">
                                                <i class="ri-add-line"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="right-box">
                        <div class="home-detail-wrap section-t-space">
                            <h1>Electronics that Makes Life more Easier</h1>
                            <p class="sb-space">Discover innovative electronics designed to simplify your life.
                                Experience seamless convenience and cutting-edge technology.</p>
                            <router-link to="/shop/infinite-scroll" class="btn theme-btn cart-btn"><i
                                    class="ri-shopping-bag-3-line"></i> Shop Now</router-link>
                        </div>
                        <div class="electronic-slider">
                            <div class="swiper electronic">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide extra-pading">
                                        <div class="shoes-detail-box">
                                            <router-link to="/shop/infinite-scroll" class="shoes-img-box">
                                                <img src="/assets/images/layout-7/1.png" class="img-fluid"
                                                    alt="Product">
                                            </router-link>
                                            <div class="shoes-detail">
                                                <router-link to="/shop/infinite-scroll">iPhone 15 Pro Max</router-link>
                                                <h2>$1099.00</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="shoes-detail-box">
                                            <router-link to="/shop/infinite-scroll" class="shoes-img-box">
                                                <img src="/assets/images/layout-7/2.png" class="img-fluid"
                                                    alt="Product">
                                            </router-link>
                                            <div class="shoes-detail">
                                                <a href="product-page(left-thumbnail).html">Alexa Speaker</a>
                                                <h2>$99.00</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="shoes-detail-box">
                                            <router-link to="/shop/infinite-scroll" class="shoes-img-box">
                                                <img src="/assets/images/layout-7/3.png" class="img-fluid"
                                                    alt="Product">
                                            </router-link>
                                            <div class="shoes-detail">
                                                <router-link to="/shop/infinite-scroll">Apple Watch SE</router-link>
                                                <h2>$249.00</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-pagination electronic-pagination"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>