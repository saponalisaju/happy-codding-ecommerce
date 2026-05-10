<template>
    <div class="modal fade newsletter-modal theme-modal" id="newsletterModal">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body p-0">
                    <div class="newsletter-wrapper">
                        <div class="newsletter-img-box">
                            <img src="/assets/images/newsletter-exit/7-1.jpg" class="img-fluid hover-effect"
                                alt="Special Offer">
                        </div>
                        <div class="newsletter-content">
                            <button type="button" class="btn-close" data-bs-dismiss="modal">
                                <i class="ri-close-line"></i>
                            </button>
                            <div class="newsletter-header">
                                <span>Get 20% Off</span>
                                <h2>Join Our Newsletter</h2>
                                <p>Subscribe to our newsletter and be the first to know about new arrivals, sales and
                                    exclusive offers.</p>
                            </div>
                            <form class="newsletter-form needs-validation" novalidate>
                                <div class="form-group input-wrap">
                                    <div class="position-relative">
                                        <i class="iconsax" data-icon="mail"></i>
                                        <input type="email" class="form-control" placeholder="Enter your email address"
                                            required>
                                    </div>
                                    <div class="invalid-feedback">Please provide a valid email.</div>
                                </div>
                                <button type="submit" class="btn-submit">Subscribe Now <i
                                        class="ri-arrow-right-long-line"></i></button>
                            </form>
                            <div class="newsletter-footer">
                                <div class="theme-checkbox">
                                    <input class="checkbox_animated" type="checkbox" id="newsletter-no-show">
                                    <label class="form-check-label" for="newsletter-no-show">Don't show this popup
                                        again</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>