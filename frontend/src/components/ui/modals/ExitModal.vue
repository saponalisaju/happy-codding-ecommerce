<template>
    <!-- Exit Modal Start -->
    <div class="modal fade exit-modal theme-modal" id="exitModal">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body p-0">
                    <div class="exit-wrapper">
                        <div class="exit-img-box">
                            <img src="/assets/images/newsletter-exit/7-2.jpg" class="img-fluid" alt="Limited Offer">
                            <div class="img-overlay"></div>
                        </div>
                        <div class="exit-content">
                            <button type="button" class="btn-close" data-bs-dismiss="modal">
                                <i class="ri-close-line"></i>
                            </button>
                            <div class="exit-header">
                                <span class="badge-text">Hey You</span>
                                <h2>Don't leave now!</h2>
                                <div class="coupon-box">
                                    <h3 class="coupon-code">OFFER68</h3>
                                    <p>Use this coupon code to get <span>68% off</span></p>
                                </div>
                            </div>

                            <div class="countdown-wrapper">
                                <div class="timer">
                                    <div class="time-unit">
                                        <span id="exit-min-1">0</span>
                                        <span id="exit-min-2">9</span>
                                    </div>
                                    <span class="divider">:</span>
                                    <div class="time-unit">
                                        <span id="exit-sec-1">5</span>
                                        <span id="exit-sec-2">9</span>
                                    </div>
                                </div>
                                <p class="timer-label">This coupon code expires in</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Exit Modal End -->
</template>