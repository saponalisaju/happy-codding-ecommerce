<template>
    <section class="checkout-section sb-space">
        <div class="container">
            <div class="row gy-4">
                <div class="col-lg-7">
                    <div class="left-side-box">
                        <div class="checkout-box">
                            <form class="theme-form row g-sm-4 g-3">
                                <div class="col-md-6">
                                    <label for="first" class="form-label">First Name <span>*</span></label>
                                    <input id="first" type="text" class="form-control" placeholder="Enter First Name">
                                </div>
                                <div class="col-md-6">
                                    <label for="last" class="form-label">Last Name <span>*</span></label>
                                    <input id="last" type="text" class="form-control" placeholder="Enter Last Name">
                                </div>
                                <div class="col-12">
                                    <label for="company" class="form-label">Company Name (optional)</label>
                                    <input id="company" type="text" class="form-control"
                                        placeholder="Enter Company Name">
                                </div>
                                <div class="col-12">
                                    <label for="country" class="form-label">Country Region <span>*</span></label>
                                    <select id="country"></select>
                                </div>
                                <div class="col-12">
                                    <label for="street" class="form-label">Street + House Number <span>*</span></label>
                                    <input id="street" type="text" class="form-control mb-3"
                                        placeholder="Street and house number...">
                                    <input type="text" class="form-control"
                                        placeholder="Apartment, suite, unit, etc. (optional)">
                                </div>
                                <div class="col-12">
                                    <label class="form-label" for="zip">ZIP Code <span>*</span></label>
                                    <input id="zip" type="text" class="form-control" placeholder="Enter ZIP Code">
                                </div>
                                <div class="col-12">
                                    <label class="form-label" for="city">City <span>*</span></label>
                                    <input id="city" type="text" class="form-control" placeholder="Enter City">
                                </div>
                                <div class="col-12">
                                    <label class="form-label" for="phone">Phone (optional)</label>
                                    <input id="phone" type="tel" class="form-control" placeholder="Enter Phone Number">
                                </div>
                                <div class="col-12">
                                    <label class="form-label" for="email">Email Address <span>*</span></label>
                                    <input id="email" type="email" class="form-control"
                                        placeholder="Enter Email Address">
                                </div>
                                <div class="col-12">
                                    <div class="theme-checkbox checkout-checkbox">
                                        <input class="checkbox_animated" type="checkbox" id="newsletter">
                                        <label class="form-check-label" for="newsletter">Yes, please send me news and
                                            exclusive offers via email. I expressly consent to the receipt & processing
                                            of my data and know that I can unsubscribe at any time without any
                                            problems.</label>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div class="checkout-create-box">
                            <div class="checkout-box">
                                <div class="theme-checkbox checkout-checkbox mb-3">
                                    <input class="checkbox_animated" type="checkbox" id="createAccount" checked>
                                    <label class="form-check-label" for="createAccount">Create a customer
                                        account?</label>
                                </div>
                                <div class="theme-form row gy-3">
                                    <div class="col-12">
                                        <label class="form-label">Account Username <span>*</span></label>
                                        <input type="text" class="form-control" placeholder="Username...">
                                    </div>
                                    <div class="col-12">
                                        <label class="form-label">Create Account Password <span>*</span></label>
                                        <input type="password" class="form-control" placeholder="Password...">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="checkout-box mt-sm-4 mt-2">
                            <div class="theme-checkbox checkout-checkbox">
                                <input class="checkbox_animated" type="checkbox" id="differentAddress">
                                <label class="form-check-label" for="differentAddress">Ship to a different
                                    address?</label>
                            </div>
                        </div>

                        <div class="checkout-box mt-sm-4 mt-2">
                            <div class="theme-form">
                                <label class="form-label">Order Notes (optional)</label>
                                <textarea class="form-control" rows="3"
                                    placeholder="Notes about your order, e.g. special instructions for delivery..."></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-5">
                    <div class="right-side">
                        <div class="summary-title">
                            <h3>Your Product</h3>
                        </div>
                        <div class="order-summary-box">
                            <div class="table-responsive">
                                <table class="table summary-table">
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Subtotal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="summary-product">
                                                    <div class="item-img">
                                                        <img src="../assets/images/product/bag/1.png" alt=""
                                                            class="img-fluid">
                                                        <span class="badge">
                                                            <i class="ri-discount-percent-fill"></i>
                                                        </span>
                                                    </div>
                                                    <div class="item-details">
                                                        <h4>Classic Leather Bag</h4>
                                                        <ul class="category-list">
                                                            <li>Quantity: <span>1</span></li>
                                                            <li>Category: <span>Bag</span></li>
                                                            <li>Size: <span>M</span></li>
                                                            <li>Color: <span>Brown</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="price">120,00$</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="summary-product">
                                                    <div class="item-img">
                                                        <img src="../assets/images/product/shoes/1.png" alt=""
                                                            class="img-fluid">
                                                        <span class="badge">
                                                            <i class="ri-discount-percent-fill"></i>
                                                        </span>
                                                    </div>
                                                    <div class="item-details">
                                                        <h4>Sporty Running Shoes</h4>
                                                        <ul class="category-list">
                                                            <li>Quantity: <span>1</span></li>
                                                            <li>Category: <span>Shoes</span></li>
                                                            <li>Size: <span>42</span></li>
                                                            <li>Color: <span>Blue</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="price">85,50$</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="summary-product">
                                                    <div class="item-img">
                                                        <img src="../assets/images/product/watch/1.png" alt=""
                                                            class="img-fluid">
                                                        <span class="badge">
                                                            <i class="ri-discount-percent-fill"></i>
                                                        </span>
                                                    </div>
                                                    <div class="item-details">
                                                        <h4>Elegant Gold Watch</h4>
                                                        <ul class="category-list">
                                                            <li>Quantity: <span>1</span></li>
                                                            <li>Category: <span>Watch</span></li>
                                                            <li>Size: <span>Regular</span></li>
                                                            <li>Color: <span>Gold</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="price">250,00$</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="summary-product">
                                                    <div class="item-img">
                                                        <img src="../assets/images/product/fashion/1.png" alt=""
                                                            class="img-fluid">
                                                        <span class="badge">
                                                            <i class="ri-discount-percent-fill"></i>
                                                        </span>
                                                    </div>
                                                    <div class="item-details">
                                                        <h4>Modern Canvas Jacket</h4>
                                                        <ul class="category-list">
                                                            <li>Quantity: <span>1</span></li>
                                                            <li>Category: <span>Fashion</span></li>
                                                            <li>Size: <span>L</span></li>
                                                            <li>Color: <span>Olive</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="price">110,00$</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <ul class="summary-list">
                                <li>
                                    <span>Subtotal</span>
                                    <span>565,50$</span>
                                </li>
                                <li>
                                    <span>VAT</span>
                                    <span>39,58$</span>
                                </li>
                                <li>
                                    <span>Shipping</span>
                                    <span>Standard: 0$</span>
                                </li>
                                <li class="total">
                                    <span>Total Amount:</span>
                                    <span>605,08$</span>
                                </li>
                            </ul>
                            <div class="summary-title">
                                <h3>Payment options</h3>
                            </div>
                            <div class="payment-methods-box">
                                <div class="payment-options">
                                    <div class="payment-item ">
                                        <div class="theme-checkbox">
                                            <input class="radiobox_animated" type="radio" name="payment" id="paypal"
                                                checked>
                                            <label class="form-check-label" for="paypal">
                                                Paypal <img src="../assets/images/payment/paypal.png" alt=""
                                                    class="payment-logo">
                                            </label>
                                        </div>
                                        <div class="payment-description">
                                            <h3>What is PayPal?</h3>
                                            <p>Pay with PayPal. If you don't have a PayPal account, you can also
                                                pay with your credit card.</p>
                                        </div>
                                    </div>
                                    <div class="payment-item theme-checkbox">
                                        <input class="radiobox_animated" type="radio" name="payment" id="stripe">
                                        <label class="form-check-label" for="stripe">Credit Card (Stripe) <img
                                                src="../assets/images/payment/stripe.png" alt=""
                                                class="payment-logo"></label>
                                    </div>
                                    <div class="payment-item theme-checkbox">
                                        <input class="radiobox_animated" type="radio" name="payment" id="sofort">
                                        <label class="form-check-label" for="sofort">Sofort <img
                                                src="../assets/images/payment/sofort.png" alt=""
                                                class="payment-logo"></label>
                                    </div>
                                    <div class="payment-item theme-checkbox">
                                        <input class="radiobox_animated" type="radio" name="payment" id="vorkasse">
                                        <label class="form-check-label" for="vorkasse">Prepayment</label>
                                    </div>
                                </div>

                                <div class="legal-checks">
                                    <div class="theme-checkbox">
                                        <input class="checkbox_animated" type="checkbox" id="terms">
                                        <label class="form-check-label" for="terms">I have read and accepted the <a
                                                href="#termsModal" data-bs-toggle="modal">T&Cs</a>. *</label>
                                    </div>
                                    <div class="theme-checkbox">
                                        <input class="checkbox_animated" type="checkbox" id="privacy">
                                        <label class="form-check-label" for="privacy">I have read and accepted the <a
                                                href="#privacyModal" data-bs-toggle="modal">Privacy Policy</a> *</label>
                                    </div>
                                    <div class="theme-checkbox">
                                        <input class="checkbox_animated" type="checkbox" id="revocation">
                                        <label class="form-check-label" for="revocation">I have read and accepted the <a
                                                href="#cancellationModal" data-bs-toggle="modal">Cancellation Policy</a>
                                            *</label>
                                    </div>
                                </div>

                                <button class="btn place-btn">Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>