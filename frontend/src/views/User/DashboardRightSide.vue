<template>
    <div class="tab-pane fade" id="earning-tab-pane">
                            <div class="dashboard-right-sidebar">
                                <div class="dashboard-inner-title">
                                    <h3>Earnings & Points</h3>
                                    <p>Track your rewards, referral bonuses, and loyalty points earned through your
                                        activities.</p>
                                </div>

                                <div class="membership-card">
                                    <div class="tier-info">
                                        <div class="tier-icon">
                                            <i class="ri-vip-crown-fill"></i>
                                        </div>
                                        <div class="tier-details">
                                            <h4>Current Tier</h4>
                                            <h2>Gold Member</h2>
                                        </div>
                                    </div>
                                    <div class="tier-progress">
                                        <div class="progress-label">
                                            <span>Tier Progress</span>
                                            <span class="percentage">80% to Platinum</span>
                                        </div>
                                        <div class="progress">
                                            <div class="progress-bar" style="width: 80%"></div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row g-sm-4 g-3">
                                    <div class="col-md-6">
                                        <div class="reward-stat-card">
                                            <div class="icon-box points">
                                                <i class="ri-coin-line"></i>
                                            </div>
                                            <div class="content-box">
                                                <h3>Total Points</h3>
                                                <h4>4,500 <small class="fs-6 text-muted fw-normal">Pts</small></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="reward-stat-card">
                                            <div class="icon-box earnings">
                                                <i class="ri-money-dollar-circle-line"></i>
                                            </div>
                                            <div class="content-box">
                                                <h3>Total Earnings</h3>
                                                <h4>$120.50</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="dashboard-right-sidebar">
                                <div class="reward-history-title">
                                    <h4>Reward History</h4>
                                    <a href="#rewardHistoryModal" data-bs-toggle="modal">View All</a>
                                </div>

                                <div class="points-history-list">
                                    <div class="history-item">
                                        <div class="left-content">
                                            <div class="date-box">
                                                <span>JAN</span>
                                                <span class="day">02</span>
                                            </div>
                                            <div class="info">
                                                <h5>Referral Bonus</h5>
                                                <p>Invited a new friend to join</p>
                                            </div>
                                        </div>
                                        <div class="right-content">
                                            <span class="amount text-success-color">+500</span>
                                            <span class="type">Points earned</span>
                                        </div>
                                    </div>

                                    <div class="history-item">
                                        <div class="left-content">
                                            <div class="date-box">
                                                <span>DEC</span>
                                                <span class="day">30</span>
                                            </div>
                                            <div class="info">
                                                <h5>Cashback on Order</h5>
                                                <p>Order #321456 completed</p>
                                            </div>
                                        </div>
                                        <div class="right-content">
                                            <span class="amount text-success-color">+$5.50</span>
                                            <span class="type">Earning added</span>
                                        </div>
                                    </div>

                                    <div class="history-item">
                                        <div class="left-content">
                                            <div class="date-box">
                                                <span>DEC</span>
                                                <span class="day">25</span>
                                            </div>
                                            <div class="info">
                                                <h5>Holiday Gift</h5>
                                                <p>Christmas special reward</p>
                                            </div>
                                        </div>
                                        <div class="right-content">
                                            <span class="amount text-success-color">+100</span>
                                            <span class="type">Points earned</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="order-tab-pane">
                            <div class="dashboard-right-sidebar">
                                <div class="dashboard-inner-title">
                                    <h3>My Orders</h3>
                                    <p>Keep track of all your past and current orders, including status updates and
                                        delivery tracking.</p>
                                </div>

                                <div class="order-box-container">
                                    <div class="order-card">
                                        <div class="order-number-date">
                                            <h4>Order #321456 <span>Jan 01, 2026</span></h4>
                                        </div>
                                        <div class="card-body">
                                            <div class="order-products">
                                                <div class="product-img">
                                                    <img src="../assets/images/product/fashion/1.png" alt="">
                                                </div>
                                                <div class="product-img">
                                                    <img src="../assets/images/product/fashion/2.png" alt="">
                                                </div>
                                                <div class="product-count">
                                                    +2 <span>Items</span>
                                                </div>
                                            </div>
                                            <div class="order-amount">
                                                <span class="label">Total Amount</span>
                                                <h3 class="price">$120.00</h3>
                                            </div>
                                        </div>
                                        <div class="card-footer">
                                            <span class="status-badge processing">Processing</span>
                                            <div class="btn-group">
                                                <a href="order-tracking.html" class="btn btn-track">
                                                    <i class="ri-truck-line"></i> Track Order
                                                </a>
                                                <a href="order-tracking.html" class="btn btn-view">
                                                    <i class="ri-eye-line"></i> Details
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="order-card">
                                        <div class="order-number-date">
                                            <h4>Order #321455 <span>Dec 28, 2025</span></h4>
                                        </div>
                                        <div class="card-body">
                                            <div class="order-products">
                                                <div class="product-img">
                                                    <img src="../assets/images/product/fashion/3.png" alt="">
                                                </div>
                                                <div class="product-count">
                                                    1 <span>Item</span>
                                                </div>
                                            </div>
                                            <div class="order-amount">
                                                <span class="label">Total Amount</span>
                                                <h3 class="price">$85.50</h3>
                                            </div>
                                        </div>
                                        <div class="card-footer">
                                            <span class="status-badge delivered">Delivered</span>
                                            <div class="btn-group">
                                                <a href="order-tracking.html" class="btn btn-view">
                                                    <i class="ri-refresh-line"></i> Reorder
                                                </a>
                                                <a href="order-tracking.html" class="btn btn-view">
                                                    <i class="ri-eye-line"></i> Details
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="order-card">
                                        <div class="order-number-date">
                                            <h4>Order #321450 <span>Dec 15, 2025</span></h4>
                                        </div>
                                        <div class="card-body">
                                            <div class="order-products">
                                                <div class="product-img">
                                                    <img src="../assets/images/product/fashion/4.png" alt="">
                                                </div>
                                                <div class="product-img">
                                                    <img src="../assets/images/product/fashion/5.png" alt="">
                                                </div>
                                                <div class="product-count">
                                                    +1 <span>Item</span>
                                                </div>
                                            </div>
                                            <div class="order-amount">
                                                <span class="label">Total Amount</span>
                                                <h3 class="price">$45.00</h3>
                                            </div>
                                        </div>
                                        <div class="card-footer">
                                            <span class="status-badge cancelled">Cancelled</span>
                                            <div class="btn-group">
                                                <a href="order-tracking.html" class="btn btn-view">
                                                    <i class="ri-eye-line"></i> Details
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="refund-tab-pane">
                            <div class="dashboard-right-sidebar">
                                <div class="dashboard-inner-title">
                                    <h3>Refund History</h3>
                                    <p>Monitor the status of your refund requests and view details of processed refunds
                                        for your returns.</p>
                                </div>

                                <div class="refund-list">
                                    <div class="refund-card">
                                        <div class="refund-header">
                                            <div class="refund-id">
                                                <div class="icon">
                                                    <i class="ri-history-line"></i>
                                                </div>
                                                <div class="id-details">
                                                    <h4>Request ID: <span>#REF-998</span></h4>
                                                    <p>Requested on 20 Dec, 2025</p>
                                                </div>
                                            </div>
                                            <div class="refund-status">
                                                <span class="status-badge refunded">Refunded</span>
                                            </div>
                                        </div>
                                        <div class="refund-body">
                                            <div class="product-info">
                                                <div class="product-img">
                                                    <img src="../assets/images/product/shoes/1.png" class="img-fluid"
                                                        alt="">
                                                </div>
                                                <div class="product-detail">
                                                    <h5>Urban Explorer Sneakers (Red)</h5>
                                                    <p>Order ID: #ORD-45812 <span>Qty: 1</span></p>
                                                </div>
                                            </div>
                                            <div class="refund-amount">
                                                <p>Refund Amount</p>
                                                <h4>$120.00</h4>
                                            </div>
                                        </div>
                                        <div class="refund-footer">
                                            <div class="payment-method">
                                                <i class="ri-wallet-3-line"></i>
                                                <span>Refunded to Hazy Wallet</span>
                                            </div>
                                            <div class="action-btns">
                                                <button class="btn btn-view"
                                                    onclick="location.href = 'product-page(circle).html';">
                                                    <i class="ri-eye-line"></i> View Details</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="refund-card">
                                        <div class="refund-header">
                                            <div class="refund-id">
                                                <div class="icon pending">
                                                    <i class="ri-time-line"></i>
                                                </div>
                                                <div class="id-details">
                                                    <h4>Request ID: <span>#REF-992</span></h4>
                                                    <p>Requested on 02 Jan, 2026</p>
                                                </div>
                                            </div>
                                            <div class="refund-status">
                                                <span class="status-badge pending">Pending</span>
                                            </div>
                                        </div>
                                        <div class="refund-body">
                                            <div class="product-info">
                                                <div class="product-img">
                                                    <img src="../assets/images/product/shoes/2.png" class="img-fluid"
                                                        alt="">
                                                </div>
                                                <div class="product-detail">
                                                    <h5>CloudWalk Sports Joggers</h5>
                                                    <p>Order ID: #ORD-45902 <span>Qty: 1</span></p>
                                                </div>
                                            </div>
                                            <div class="refund-amount">
                                                <p>Refund Amount</p>
                                                <h4>$40.00</h4>
                                            </div>
                                        </div>
                                        <div class="refund-footer">
                                            <div class="payment-method text-warning">
                                                <i class="ri-information-line"></i>
                                                <span>Under observation for quality check</span>
                                            </div>
                                            <div class="action-btns">
                                                <button class="btn btn-view"
                                                    onclick="location.href = 'product-page(circle).html';">
                                                    <i class="ri-eye-line"></i> View Details</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="refund-card">
                                        <div class="refund-header">
                                            <div class="refund-id">
                                                <div class="icon processing">
                                                    <i class="ri-refresh-line"></i>
                                                </div>
                                                <div class="id-details">
                                                    <h4>Request ID: <span>#REF-985</span></h4>
                                                    <p>Requested on 28 Dec, 2025</p>
                                                </div>
                                            </div>
                                            <div class="refund-status">
                                                <span class="status-badge processing">Processing</span>
                                            </div>
                                        </div>
                                        <div class="refund-body">
                                            <div class="product-info">
                                                <div class="product-img">
                                                    <img src="../assets/images/product/shoes/3.png" class="img-fluid"
                                                        alt="">
                                                </div>
                                                <div class="product-detail">
                                                    <h5>Legacy Leather Formal Shoes</h5>
                                                    <p>Order ID: #ORD-45781 <span>Qty: 1</span></p>
                                                </div>
                                            </div>
                                            <div class="refund-amount">
                                                <p>Refund Amount</p>
                                                <h4>$95.00</h4>
                                            </div>
                                        </div>
                                        <div class="refund-footer">
                                            <div class="payment-method">
                                                <i class="ri-bank-card-line"></i>
                                                <span>Refunding to Bank Account (**** 5241)</span>
                                            </div>
                                            <div class="action-btns">
                                                <button class="btn btn-view"
                                                    onclick="location.href = 'product-page(circle).html';">
                                                    <i class="ri-eye-line"></i> View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="address-tab-pane">
                            <div class="dashboard-right-sidebar">
                                <div class="address-section-wrapper">
                                    <div class="dashboard-welcome dashboard-inner-title">
                                        <h3>Saved Address</h3>
                                        <p>Manage your delivery addresses for a faster checkout experience.</p>
                                    </div>

                                    <div class="address-list-container">
                                        <div class="address-item-box">
                                            <div class="address-header">
                                                <div class="type-icon-box">
                                                    <i class="ri-home-4-line"></i>
                                                </div>
                                                <div class="address-info">
                                                    <div class="name-badge-group">
                                                        <h4>Kennedy Page</h4>
                                                        <span class="badge-type">Home</span>
                                                    </div>
                                                    <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                                                    <div class="contact-details">
                                                        <h5><i class="ri-phone-line"></i> (702) 555-0122</h5>
                                                        <h5><i class="ri-mail-line"></i> kennedy@example.com</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="address-actions">
                                                <button class="btn-action edit" data-bs-toggle="modal"
                                                    data-bs-target="#editAddressModal"><i class="ri-edit-line"></i>
                                                    Edit</button>
                                                <button class="btn-action delete" data-bs-toggle="modal"
                                                    data-bs-target="#removeAddressModal"><i
                                                        class="ri-delete-bin-line"></i> Remove</button>
                                            </div>
                                        </div>

                                        <div class="address-item-box">
                                            <div class="address-header">
                                                <div class="type-icon-box">
                                                    <i class="ri-building-line"></i>
                                                </div>
                                                <div class="address-info">
                                                    <div class="name-badge-group">
                                                        <h4>Kennedy Page</h4>
                                                        <span class="badge-type">Office</span>
                                                    </div>
                                                    <p>2821 Thornbrige Cir. Syracuse, Connecticut 35624</p>
                                                    <div class="contact-details">
                                                        <h5><i class="ri-phone-line"></i> (202) 555-0821</h5>
                                                        <h5><i class="ri-mail-line"></i> office.kp@example.com</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="address-actions">
                                                <button class="btn-action edit" data-bs-toggle="modal"
                                                    data-bs-target="#editAddressModal"><i class="ri-edit-line"></i>
                                                    Edit</button>
                                                <button class="btn-action delete" data-bs-toggle="modal"
                                                    data-bs-target="#removeAddressModal"><i
                                                        class="ri-delete-bin-line"></i> Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="dashboard-right-sidebar">
                                <div class="address-section-wrapper">
                                    <div class="dashboard-inner-title">
                                        <h3>Add New Address</h3>
                                        <p>Enter your details below to add a new delivery location.</p>
                                    </div>

                                    <form class="row g-sm-4 g-3">
                                        <div class="col-md-6">
                                            <div class="theme-form">
                                                <label for="first_name" class="form-label">First Name</label>
                                                <input type="text" class="form-control" id="first_name"
                                                    placeholder="e.g. John">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="theme-form">
                                                <label for="last_name" class="form-label">Last Name</label>
                                                <input type="text" class="form-control" id="last_name"
                                                    placeholder="e.g. Doe">
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="theme-form">
                                                <label for="company_name" class="form-label">Company Name
                                                    (Optional)</label>
                                                <input type="text" class="form-control" id="company_name"
                                                    placeholder="Enter Company Name">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="theme-form">
                                                <label for="country" class="form-label">Country</label>
                                                <select class="custom-slim-select" id="country" name="country">
                                                    <option selected disabled>Select Country</option>
                                                    <option>United States</option>
                                                    <option>Canada</option>
                                                    <option>United Kingdom</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="theme-form">
                                                <label for="city" class="form-label">City</label>
                                                <input type="text" class="form-control" id="city"
                                                    placeholder="Enter City">
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="theme-form">
                                                <label for="street_address" class="form-label">Street Address</label>
                                                <input type="text" class="form-control" id="street_address"
                                                    placeholder="Enter Street Address">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="theme-form">
                                                <label for="state" class="form-label">State</label>
                                                <select class="custom-slim-select slim-light" id="state" name="state">
                                                    <option selected disabled>Select State</option>
                                                    <option>California</option>
                                                    <option>New York</option>
                                                    <option>Texas</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="theme-form">
                                                <label for="zip_code" class="form-label">Zip Code</label>
                                                <input type="text" class="form-control" id="zip_code"
                                                    placeholder="Enter Zip Code">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="theme-form">
                                                <label for="phone" class="form-label">Phone</label>
                                                <input type="tel" class="form-control" id="phone"
                                                    placeholder="Enter Phone Number">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="theme-form">
                                                <label for="email" class="form-label">Email</label>
                                                <input type="email" class="form-control" id="email"
                                                    placeholder="Enter Email Address">
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <button type="submit" class="btn btn-theme-lg">Save Address</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="profile-tab-pane">
                            <div class="dashboard-right-sidebar profile-page-design p-0 border-0 bg-transparent">
                                <form class="profile-form-wrapper">
                                    <div class="row g-sm-4 g-3">
                                        <div class="col-12">
                                            <div class="profile-header-banner">
                                                <div class="cover-image"></div>
                                                <div class="profile-user-info">
                                                    <div class="profile-img-main">
                                                        <div class="profile-img-box">
                                                            <img src="../assets/images/user/profile.jpg"
                                                                id="profile-preview" class="img-fluid" alt="Profile">
                                                            <div class="edit-icon">
                                                                <label for="profile-img-upload">
                                                                    <i class="ri-pencil-line"></i>
                                                                </label>
                                                                <input type="file" id="profile-img-upload" hidden
                                                                    accept="image/*">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="user-details">
                                                        <h3>Kennedy Page</h3>
                                                        <h4>kennedy.page@gmail.com</h4>
                                                    </div>
                                                    <div class="profile-stats ms-md-auto">
                                                        <div class="stat-item">
                                                            <h5>125</h5>
                                                            <span>Total Orders</span>
                                                        </div>
                                                        <div class="stat-item">
                                                            <h5>500</h5>
                                                            <span>Total Points</span>
                                                        </div>
                                                        <div class="stat-item">
                                                            <h5>$150.00</h5>
                                                            <span>Wallet Balance</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xxl-7 col-xl-12 col-lg-7">
                                            <div class="profile-main-box dashboard-right-sidebar">
                                                <div class="dashboard-inner-title">
                                                    <h3>Personal Information</h3>
                                                </div>
                                                <div class="row g-sm-4 g-3">
                                                    <div class="col-md-6">
                                                        <div class="theme-form">
                                                            <label class="form-label" for="p_fname">First Name</label>
                                                            <input type="text" class="form-control" id="p_fname"
                                                                placeholder="First Name" value="Kennedy">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="theme-form">
                                                            <label class="form-label" for="p_lname">Last Name</label>
                                                            <input type="text" class="form-control" id="p_lname"
                                                                placeholder="Last Name" value="Page">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="theme-form">
                                                            <label class="form-label" for="p_phone">Phone Number</label>
                                                            <input type="tel" class="form-control" id="p_phone"
                                                                placeholder="Phone Number" value="(702) 555-0122">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="theme-form">
                                                            <label class="form-label" for="p_location">Location</label>
                                                            <input type="text" class="form-control" id="p_location"
                                                                placeholder="Location" value="Manchester, KY">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="theme-form">
                                                            <label class="form-label" for="p_bio">Bio</label>
                                                            <textarea class="form-control" id="p_bio"
                                                                placeholder="Enter Bio"
                                                                rows="4">Fashion enthusiast and sneaker collector.</textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xxl-5 col-xl-12 col-lg-5">
                                            <div class="profile-main-box dashboard-right-sidebar">
                                                <div class="dashboard-inner-title">
                                                    <h3>Login Details</h3>
                                                </div>
                                                <div class="row g-3">
                                                    <div class="col-12">
                                                        <div class="theme-form">
                                                            <label class="form-label" for="p_email">Email
                                                                Address</label>
                                                            <input type="email" class="form-control" id="p_email"
                                                                placeholder="Email Address"
                                                                value="kennedy.page@gmail.com">
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="theme-form">
                                                            <label class="form-label" for="p_current_password">Current
                                                                Password</label>
                                                            <input type="password" class="form-control"
                                                                id="p_current_password" placeholder="Current Password">
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="theme-form">
                                                            <label class="form-label" for="p_new_password">New
                                                                Password</label>
                                                            <input type="password" class="form-control"
                                                                id="p_new_password" placeholder="New Password">
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="theme-form">
                                                            <label class="form-label" for="p_confirm_password">Confirm
                                                                Password</label>
                                                            <input type="password" class="form-control"
                                                                id="p_confirm_password" placeholder="Confirm Password">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 text-end">
                                            <button class="btn theme-btn">Update Profile</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
</template>