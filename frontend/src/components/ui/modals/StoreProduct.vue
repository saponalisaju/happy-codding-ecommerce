<template>
    <div class="modal fade theme-modal share-modal" id="shareModal">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Share this product</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal">
                        <i class="ri-close-line"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <ul class="social-share">
                        <li>
                            <a href="https://www.facebook.com/" target="_blank" class="facebook">
                                <i class="ri-facebook-fill"></i>
                                <span>Facebook</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/" target="_blank" class="twitter">
                                <i class="ri-twitter-x-fill"></i>
                                <span>Twitter</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.whatsapp.com/" target="_blank" class="whatsapp">
                                <i class="ri-whatsapp-line"></i>
                                <span>WhatsApp</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://id.pinterest.com/" target="_blank" class="pinterest">
                                <i class="ri-pinterest-line"></i>
                                <span>Pinterest</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/" target="_blank" class="linkedin">
                                <i class="ri-linkedin-fill"></i>
                                <span>LinkedIn</span>
                            </a>
                        </li>
                    </ul>

                    <div class="copy-link-box theme-form">
                        <label class="form-label">Or copy link</label>
                        <div class="share-form">
                            <input type="text" class="form-control" value="https://nex-cart.com/product/series-5-pro"
                                readonly id="product-link">
                            <button class="btn copy-btn" onclick="copyLink()">
                                <i class="ri-file-copy-line"></i>
                                Copy
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>