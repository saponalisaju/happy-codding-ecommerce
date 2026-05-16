<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <footer class="footer-section footer-section-6">
        <div class="container">
            <div class="footer-link-wrapper st-space sb-space">
                <div class="row g-md-5 g-3">

                    <!-- Brand Section -->
                    <div class="col-xl-5 col-lg-6 order-1">
                        <div class="brand-section">
                            <RouterLink to="/" class="footer-logo">
                                <img
                                    class="w-25 h-25 object-contain"
                                    src="/assets/images/logo/happy-logo.png"
                                    alt="Logo"
                                />
                            </RouterLink>

                            <p>
                                Discover the latest gadgets and electronics that perfectly align
                                with your digital lifestyle. With premium products and exceptional
                                customer service, we empower you to stay connected and make smart
                                choices for the future.
                            </p>
                        </div>

                        <!-- Social Links -->
                        <ul class="social-link-box social-links order-sm-2 order-1">
                            <li>
                                <a
                                    href="https://www.instagram.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i class="ri-instagram-line"></i>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://www.pinterest.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i class="ri-pinterest-line"></i>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i class="ri-facebook-fill"></i>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://www.twitter.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i class="ri-twitter-x-fill"></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <!-- Footer Links -->
                    <div class="col-xl-7 col-lg-6 order-xl-2 order-3">
                        <div class="row gy-3">

                            <!-- Top Brand -->
                            <div class="col-xl-4 col-lg-4 col-sm-6">
                                <h5 class="footer-title">Top Brand</h5>

                                <ul class="accordion-hidden footer-nav-list">
                                    <li><RouterLink to="/shop">Apple</RouterLink></li>
                                    <li><RouterLink to="/shop">Samsung</RouterLink></li>
                                    <li><RouterLink to="/shop">Huawei</RouterLink></li>
                                    <li><RouterLink to="/shop">Dell</RouterLink></li>
                                    <li><RouterLink to="/shop">Asus</RouterLink></li>
                                </ul>
                            </div>

                            <!-- Support -->
                            <div class="col-xl-4 col-lg-4 col-sm-6">
                                <h5 class="footer-title">Support & Services</h5>

                                <ul class="accordion-hidden footer-nav-list">
                                    <li>
                                        <RouterLink to="/faq">
                                            Device Setup Guide
                                        </RouterLink>
                                    </li>

                                    <li>
                                        <RouterLink to="/return-policy">
                                            Warranty Information
                                        </RouterLink>
                                    </li>

                                    <li>
                                        <RouterLink to="/order-tracking">
                                            Repair Status Tracking
                                        </RouterLink>
                                    </li>

                                    <li>
                                        <RouterLink to="/contact">
                                            Technical Support
                                        </RouterLink>
                                    </li>
                                </ul>
                            </div>

                            <!-- Customer Care -->
                            <div class="col-xl-4 col-lg-4 col-sm-6">
                                <h5 class="footer-title">Customer Care</h5>

                                <ul class="accordion-hidden footer-nav-list">
                                    <li>
                                        <RouterLink to="/about">
                                            E-waste Recycling
                                        </RouterLink>
                                    </li>

                                    <li>
                                        <RouterLink to="/shop">
                                            Trade-In Program
                                        </RouterLink>
                                    </li>

                                    <li>
                                        <RouterLink to="/return-policy">
                                            Return & Refund
                                        </RouterLink>
                                    </li>

                                    <li>
                                        <RouterLink to="/terms">
                                            Protection Plans
                                        </RouterLink>
                                    </li>

                                    <li>
                                        <RouterLink to="/contact">
                                            Contact Us
                                        </RouterLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Newsletter -->
                    <div class="col-xl-5 col-lg-6 order-xl-3 order-2">
                        <div class="news-letter-wrap">
                            <h5 class="news-input-title">
                                Subscribe Our Newsletters
                            </h5>

                            <div class="news-input-wrap">
                                <input
                                    type="email"
                                    placeholder="Enter email address"
                                />

                                <button class="theme-btn btn" type="submit">
                                    <span>Subscribe</span>
                                    <i class="ri-arrow-right-long-line"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Account & Company -->
                    <div class="col-xl-7 col-lg-6 order-4">
                        <div class="row gy-3">

                            <!-- My Account -->
                            <div class="col-xl-4 col-lg-4 col-sm-6">
                                <h5 class="footer-title">My Account</h5>

                                <ul class="accordion-hidden footer-nav-list">
                                    <li>
                                        <RouterLink to="/dashboard">
                                            My Devices
                                        </RouterLink>
                                    </li>

                                    <li>
                                        <RouterLink to="/orders">
                                            Order History
                                        </RouterLink>
                                    </li>

                                    <li>
                                        <RouterLink to="/wishlist">
                                            Wishlist
                                        </RouterLink>
                                    </li>

                                    <li>
                                        <RouterLink to="/order-tracking">
                                            Track Repair
                                        </RouterLink>
                                    </li>

                                    <li>
                                        <RouterLink to="/checkout">
                                            Checkout
                                        </RouterLink>
                                    </li>
                                </ul>
                            </div>

                            <!-- Company -->
                            <div class="col-xl-4 col-lg-4 col-sm-6">
                                <h5 class="footer-title">Our Company</h5>

                                <ul class="accordion-hidden footer-nav-list">
                                    <li>
                                        <RouterLink to="/about">
                                            About Happy
                                        </RouterLink>
                                    </li>

                                    <li>
                                        <RouterLink to="/blog">
                                            Tech Blog
                                        </RouterLink>
                                    </li>

                                    <li>
                                        <RouterLink to="/careers">
                                            Careers in Tech
                                        </RouterLink>
                                    </li>

                                    <li>
                                        <RouterLink to="/press">
                                            Press & Media
                                        </RouterLink>
                                    </li>

                                    <li>
                                        <RouterLink to="/investors">
                                            Investor Relations
                                        </RouterLink>
                                    </li>

                                    <li>
                                        <RouterLink to="/contact">
                                            Brand Partnerships
                                        </RouterLink>
                                    </li>
                                </ul>
                            </div>

                            <!-- Categories -->
                            <div class="col-xl-4 col-lg-4 col-sm-6">
                                <h5 class="footer-title">Our Categories</h5>

                                <ul class="accordion-hidden footer-nav-list">
                                    <li>
                                        <RouterLink to="/shop/laptops">
                                            Laptops & PCs
                                        </RouterLink>
                                    </li>

                                    <li>
                                        <RouterLink to="/shop/smartphones">
                                            Smartphones & Tablets
                                        </RouterLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <!-- Sub Footer -->
            <div class="sub-footer">

                <!-- Language -->
                <ul class="footer-selectors order-md-1 order-2">
                    <li>
                        <select class="form-select">
                            <option value="en">English</option>
                            <option value="fr">French</option>
                            <option value="es">Spanish</option>
                        </select>
                    </li>
                </ul>

                <!-- Copyright -->
                <p class="order-md-2 order-1">
                    &copy; 2026 HappyBuy Electronics Hub. All Rights Reserved.
                </p>

                <!-- Payment -->
                <ul class="footer-logo order-3">
                    <li>
                        <img
                            src="/assets/images/payment/1.jpg"
                            alt="Payment"
                            class="img-fluid"
                        />
                    </li>

                    <li>
                        <img
                            src="/assets/images/payment/2.jpg"
                            alt="Payment"
                            class="img-fluid"
                        />
                    </li>

                    <li>
                        <img
                            src="/assets/images/payment/3.jpg"
                            alt="Payment"
                            class="img-fluid"
                        />
                    </li>

                    <li>
                        <img
                            src="/assets/images/payment/4.jpg"
                            alt="Payment"
                            class="img-fluid"
                        />
                    </li>

                    <li>
                        <img
                            src="/assets/images/payment/5.jpg"
                            alt="Payment"
                            class="img-fluid"
                        />
                    </li>

                    <li>
                        <img
                            src="/assets/images/payment/6.jpg"
                            alt="Payment"
                            class="img-fluid"
                        />
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>