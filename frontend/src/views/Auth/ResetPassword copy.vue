<template>
     <section class="authentication-section">
        <div class="container-fluid p-xl-0">
            <div class="row g-lg-0 g-sm-4 g-3 align-items-center">
                <div class="col-lg-6">
                    <div class="authentication-image">
                        <img src="../assets/images/inner-pages/about-us/1.jpg" class="img-fluid bg-img" alt="">
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
                                </div>
                                <div class="swiper-pagination"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="authentication-content">
                        <div class="authentication-wrap">
                            <h1>Reset Your Password</h1>
                            <p class="notify-text">Create a new, strong password to secure your account.</p>

                            <div class="authentication-form">
                                <form class="theme-form needs-validation" action="https://themes.pixelstrap.net/hazy/template/sign-in.html" novalidate>
                                    <div class="row g-sm-4 g-3">
                                        <div class="col-12">
                                            <label for="new-password" class="form-label">New Password</label>
                                            <div class="position-relative">
                                                <i class="iconsax" data-icon="lock-1"></i>
                                                <input type="password" id="new-password"
                                                    placeholder="Enter new password" class="form-control" required>
                                                <i class="ri-eye-line password-toggle"></i>
                                            </div>
                                            <div class="invalid-feedback">Please enter a new password.</div>
                                        </div>
                                        <div class="col-12">
                                            <label for="confirm-new-password" class="form-label">Confirm New
                                                Password</label>
                                            <div class="position-relative">
                                                <i class="iconsax" data-icon="lock-1"></i>
                                                <input type="password" id="confirm-new-password"
                                                    placeholder="Confirm new password" class="form-control" required>
                                                <i class="ri-eye-line password-toggle"></i>
                                            </div>
                                            <div class="invalid-feedback">Please confirm your new password.</div>
                                        </div>
                                        <div class="col-12">
                                            <button type="submit" class="btn btn-submit w-100">Reset Password</button>
                                        </div>
                                    </div>
                                </form>

                                <p class="copyright mt-4">© 2026 Hazy. Redefining your walk, one step at a time. <br>
                                    Need help? Contact us: <a href="mailto:support@hazy.com">support@hazy.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>