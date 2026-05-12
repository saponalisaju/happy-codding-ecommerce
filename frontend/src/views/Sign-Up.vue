<template>
     <section class="authentication-section">
        <div class="container-fluid p-0">
            <div class="row g-0 align-items-center">
                <div class="col-lg-6">
                    <div class="authentication-image">
                        <img src="../assets/images/inner-pages/about-us/1.jpg" class="img-fluid" alt="">
                        <div class="testimonial-box-2">
                            <div class="swiper authentication-slider">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div class="testimonial-content">
                                            <p>“I've never worn shoes as comfortable as these. The support and style are
                                                unmatched. Perfect for my daily commute and evening walks!”</p>
                                            <h5>Sarah Jenkins</h5>
                                            <span>Fashion Enthusiast</span>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="testimonial-content">
                                            <p>“The attention to detail in these sneakers is incredible. They look
                                                premium and feel even better. The quality is truly top-tier!”</p>
                                            <h5>Marcus Thorne</h5>
                                            <span>Shoe Collector</span>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="testimonial-content">
                                            <p>“Finally, a brand that combines sustainability with exceptional design.
                                                These are my go-to shoes for every occasion from now on.”</p>
                                            <h5>Elena Rodriguez</h5>
                                            <span>Eco-conscious Buyer</span>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="testimonial-content">
                                            <p>“Fast shipping and amazing customer service. The fit is true to size and
                                                the materials feel incredibly durable. Highly recommended!”</p>
                                            <h5>David Miller</h5>
                                            <span>Loyal Customer</span>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="testimonial-content">
                                            <p>“Modern, sleek, and high-performance. I've been wearing mine for months
                                                and they still look brand new. Hazy is definitely the future!”</p>
                                            <h5>Jessica Wu</h5>
                                            <span>Verified Athlete</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-pagination"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="authentication-content">
                        <div class="authentication-wrap">
                            <h1>Create Your Account</h1>
                            <p class="notify-text">Join Hazy today and experience the future of comfort.</p>

                            <div class="authentication-form">
                                <form class="theme-form needs-validation" novalidate>
                                    <div class="row g-sm-4 g-3">
                                        <div class="col-sm-6">
                                            <label for="first" class="form-label">First Name</label>
                                            <div class="position-relative">
                                                <i class="iconsax" data-icon="user-2"></i>
                                                <input type="text" id="first" placeholder="Enter first name"
                                                    class="form-control" required>
                                            </div>
                                            <div class="invalid-feedback">Please enter your first name.</div>
                                        </div>
                                        <div class="col-sm-6">
                                            <label for="last" class="form-label">Last Name</label>
                                            <div class="position-relative">
                                                <i class="iconsax" data-icon="user-2"></i>
                                                <input type="text" id="last" placeholder="Enter last name"
                                                    class="form-control" required>
                                            </div>
                                            <div class="invalid-feedback">Please enter your last name.</div>
                                        </div>
                                        <div class="col-12">
                                            <label for="email" class="form-label">Email Address</label>
                                            <div class="position-relative">
                                                <i class="iconsax" data-icon="mail"></i>
                                                <input type="email" id="email" placeholder="Enter your email"
                                                    class="form-control" required>
                                            </div>
                                            <div class="invalid-feedback">Please enter a valid email address.</div>
                                        </div>
                                        <div class="col-12">
                                            <label for="password" class="form-label">Password</label>
                                            <div class="position-relative">
                                                <i class="iconsax" data-icon="lock-1"></i>
                                                <input type="password" id="password" placeholder="Enter your password"
                                                    class="form-control" required>
                                                <i class="ri-eye-line password-toggle"></i>
                                            </div>
                                            <div class="invalid-feedback">Please enter a password.</div>
                                        </div>
                                        <div class="col-12">
                                            <label for="confirm_password" class="form-label">Confirm Password</label>
                                            <div class="position-relative">
                                                <i class="iconsax" data-icon="lock-1"></i>
                                                <input type="password" id="confirm_password"
                                                    placeholder="Confirm your password" class="form-control" required>
                                                <i class="ri-eye-line password-toggle"></i>
                                            </div>
                                            <div class="invalid-feedback">Please confirm your password.</div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-check theme-checkbox m-0">
                                                <input class="checkbox_animated" type="checkbox" id="termsCheck"
                                                    required>
                                                <label class="form-check-label" for="termsCheck">I agree with the Terms
                                                    and Privacy Policy</label>
                                                <div class="invalid-feedback">You must agree before submitting.</div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <button type="submit" class="btn btn-submit w-100">Register Now</button>
                                        </div>
                                    </div>
                                </form>

                                <div class="divider">
                                    <span>Or sign up with</span>
                                </div>

                                <div class="social-links">
                                    <ul>
                                        <li class="twitter">
                                            <a href="https://twitter.com/" target="_blank">
                                                <i class="ri-twitter-x-fill"></i>
                                                <span>Twitter</span>
                                            </a>
                                        </li>
                                        <li class="fb">
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <i class="ri-facebook-fill"></i>
                                                <span>Facebook</span>
                                            </a>
                                        </li>
                                        <li class="instagram">
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <i class="ri-instagram-line"></i>
                                                <span>Instagram</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <p class="signup-text">Already have an account? <a href="sign-in.html">Sign in</a></p>

                                <p class="copyright">© 2026 Hazy. Redefining your walk, one step at a time. <br> Need
                                    help? Contact us: <a href="mailto:support@hazy.com">support@hazy.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>