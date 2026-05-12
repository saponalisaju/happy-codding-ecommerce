<template>
    <section class="user-dashboard-section section-b-space">
        <div class="container">
            <div class="row">
                <div class="col-xxl-3 col-xl-4">
                    <div class="dashboard-sidebar">
                        <button class="btn sidebar-close d-xl-none">Close Menu <i class="ri-close-line"></i></button>
                        <div class="profile-info">
                            <div class="profile-image">
                                <img src="../assets/images/user/profile.jpg" class="img-fluid" alt="">
                            </div>
                            <div class="profile-detail">
                                <h3>Kennedy Page</h3>
                                <h4 >kennedy.page@gmail.com</h4>
                            </div>
                        </div>
                        <ul class="nav nav-tabs dashboard-nav-tab" id="myTab">
                            <li class="nav-item">
                                <button class="nav-link active" id="dashboard-tab" data-bs-toggle="tab"
                                    data-bs-target="#dashboard-tab-pane">
                                    <i class="ri-home-line"></i> Dashboard
                                </button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link" id="notification-tab" data-bs-toggle="tab"
                                    data-bs-target="#notification-tab-pane">
                                    <i class="ri-notification-3-line"></i> Notifications
                                </button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link" id="bank-tab" data-bs-toggle="tab"
                                    data-bs-target="#bank-tab-pane">
                                    <i class="ri-bank-line"></i> Bank Details
                                </button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link" id="wallet-tab" data-bs-toggle="tab"
                                    data-bs-target="#wallet-tab-pane">
                                    <i class="ri-wallet-line"></i> My Wallet
                                </button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link" id="earning-tab" data-bs-toggle="tab"
                                    data-bs-target="#earning-tab-pane">
                                    <i class="ri-coin-line"></i> Earnings & Points
                                </button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link" id="order-tab" data-bs-toggle="tab"
                                    data-bs-target="#order-tab-pane">
                                    <i class="ri-shopping-bag-line"></i> My Orders
                                </button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link" id="refund-tab" data-bs-toggle="tab"
                                    data-bs-target="#refund-tab-pane">
                                    <i class="ri-history-line"></i> Refund History
                                </button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link" id="address-tab" data-bs-toggle="tab"
                                    data-bs-target="#address-tab-pane">
                                    <i class="ri-map-pin-line"></i> Saved Address
                                </button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link" id="profile-tab" data-bs-toggle="tab"
                                    data-bs-target="#profile-tab-pane">
                                    <i class="ri-user-line"></i> Profile
                                </button>
                            </li>
                        </ul>
                        <div class="logout-btn">
                            <a href="index.html" class="btn"><i class="ri-logout-box-line"></i> Log Out</a>
                        </div>
                    </div>
                </div>

                <div class="col-xxl-9 col-xl-8">
                    <button class="filter-button theme-btn btn"><i class="ri-equalizer-2-line"></i> Filter Menu</button>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="dashboard-tab-pane">
                            <div class="dashboard-right-sidebar">
                                <div class="dashboard-welcome">
                                    <h3>Welcome Back Kennedy Page</h3>
                                    <p>From your account dashboard you can view your recent orders, manage your shipping
                                        and billing addresses, and edit your password and account details. Keep track of
                                        your activities and stay updated with your latest profile information.</p>
                                </div>

                                <div class="dashboard-welcome-box">
                                    <div class="row g-0">
                                        <div class="col-xxl-4 col-xl-6 col-lg-4 col-sm-6">
                                            <div class="dashboard-card" data-tab="notification-tab">
                                                <div class="card-image">
                                                    <svg>
                                                        <use xlink:href="https://themes.pixelstrap.net/hazy/assets/svg/user-dashboard.svg#notification">
                                                        </use>
                                                    </svg>
                                                </div>
                                                <div class="card-content">
                                                    <h3>Notifications</h3>
                                                    <p>Stay updated with real-time alerts about your orders, exclusive
                                                        offers, and important account activity.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xxl-4 col-xl-6 col-lg-4 col-sm-6">
                                            <div class="dashboard-card" data-tab="bank-tab">
                                                <div class="card-image">
                                                    <svg>
                                                        <use xlink:href="https://themes.pixelstrap.net/hazy/assets/svg/user-dashboard.svg#bankDetails">
                                                        </use>
                                                    </svg>
                                                </div>
                                                <div class="card-content">
                                                    <h3>Bank Details</h3>
                                                    <p>Securely manage your bank account information for seamless
                                                        refunds and direct transactions.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xxl-4 col-xl-6 col-lg-4 col-sm-6">
                                            <div class="dashboard-card" data-tab="wallet-tab">
                                                <div class="card-image">
                                                    <svg>
                                                        <use xlink:href="https://themes.pixelstrap.net/hazy/assets/svg/user-dashboard.svg#wallet"></use>
                                                    </svg>
                                                </div>
                                                <div class="card-content">
                                                    <h3>My Wallet</h3>
                                                    <p>Check your wallet balance, review transaction history, and manage
                                                        your payment credits easily.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xxl-4 col-xl-6 col-lg-4 col-sm-6">
                                            <div class="dashboard-card" data-tab="earning-tab">
                                                <div class="card-image">
                                                    <svg>
                                                        <use xlink:href="https://themes.pixelstrap.net/hazy/assets/svg/user-dashboard.svg#earningsPoint">
                                                        </use>
                                                    </svg>
                                                </div>
                                                <div class="card-content">
                                                    <h3>Earnings & Points</h3>
                                                    <p>Track your loyalty points and earnings from referrals or cashback
                                                        rewards in one place.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xxl-4 col-xl-6 col-lg-4 col-sm-6">
                                            <div class="dashboard-card" data-tab="order-tab">
                                                <div class="card-image">
                                                    <svg>
                                                        <use xlink:href="https://themes.pixelstrap.net/hazy/assets/svg/user-dashboard.svg#order"></use>
                                                    </svg>
                                                </div>
                                                <div class="card-content">
                                                    <h3>My Orders</h3>
                                                    <p>View your order history, track active shipments, and manage
                                                        returns or cancellations effortlessly.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xxl-4 col-xl-6 col-lg-4 col-sm-6">
                                            <div class="dashboard-card" data-tab="refund-tab">
                                                <div class="card-image">
                                                    <svg>
                                                        <use xlink:href="https://themes.pixelstrap.net/hazy/assets/svg/user-dashboard.svg#refund">
                                                        </use>
                                                    </svg>
                                                </div>
                                                <div class="card-content">
                                                    <h3>Refund History</h3>
                                                    <p>Monitor the status of your refund requests and view details of
                                                        all processed reimbursements.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xxl-4 col-xl-6 col-lg-4 col-sm-6">
                                            <div class="dashboard-card" data-tab="address-tab">
                                                <div class="card-image">
                                                    <svg>
                                                        <use xlink:href="https://themes.pixelstrap.net/hazy/assets/svg/user-dashboard.svg#address"></use>
                                                    </svg>
                                                </div>
                                                <div class="card-content">
                                                    <h3>Saved Address</h3>
                                                    <p>Manage your shipping and billing addresses to ensure faster and
                                                        accurate delivery for all orders.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xxl-4 col-xl-6 col-lg-4 col-sm-6">
                                            <div class="dashboard-card" data-tab="profile-tab">
                                                <div class="card-image">
                                                    <svg>
                                                        <use xlink:href="https://themes.pixelstrap.net/hazy/assets/svg/user-dashboard.svg#profileDetails">
                                                        </use>
                                                    </svg>
                                                </div>
                                                <div class="card-content">
                                                    <h3>Profile Details</h3>
                                                    <p>Update your personal information, including your name, email, and
                                                        phone number.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="notification-tab-pane">
                            <div class="dashboard-right-sidebar notification-sidebar">
                                <div class="dashboard-inner-title">
                                    <h3>Notification</h3>
                                    <p>Stay Update With Your Latest Notifications</p>
                                </div>

                                <div class="notification-content">
                                    <div class="notification-group">
                                        <h4 class="group-title">Today</h4>
                                        <div class="notification-box-wrapper">
                                            <div class="notification-box unread">
                                                <div class="notification-detail">
                                                    <div>
                                                        <h5>Order Placed Successfully</h5>
                                                        <p>Your order #321456 has been successfully placed and is
                                                            currently being processed by our team. You will receive a
                                                            confirmation email shortly with order details.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="notification-box">
                                                <div class="notification-detail">
                                                    <div>
                                                        <h5>Flash Sale Alert! ⚡</h5>
                                                        <p>Extravagant savings await! Get up to 50% off on all premium
                                                            sneakers this weekend only. Grab your pair before they're
                                                            gone and save big on top brands.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="notification-box">
                                                <div class="notification-detail">
                                                    <div>
                                                        <h5>New Arrival: The Modern Footwear</h5>
                                                        <p>Elevate your style with our latest range of handcrafted
                                                            leather shoes, now available in all sizes and colors.
                                                            Explore the premium quality and find your perfect fit today.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="notification-box">
                                                <div class="notification-detail">
                                                    <div>
                                                        <h5>Payment Confirmed</h5>
                                                        <p>We've successfully received your payment for order #321456.
                                                            Your order status has been updated to processing, and our
                                                            team is preparing it for shipment.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="notification-box unread">
                                                <div class="notification-detail">
                                                    <div>
                                                        <h5>Wallet Top-up Successful</h5>
                                                        <p>Successfully added $50.00 to your Hazy account wallet. You
                                                            can use this balance for your next purchase, making your
                                                            checkout experience faster and more convenient.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="notification-group">
                                        <h5 class="group-title">Yesterdays</h5>
                                        <div class="notification-box-wrapper">
                                            <div class="notification-box unread">
                                                <div class="notification-detail">
                                                    <div>
                                                        <h5>Order Shipped 🚚</h5>
                                                        <p>Great news! Your order #321450 has been dispatched and is
                                                            currently on its way to your delivery address. You can track
                                                            your shipment's real-time progress through our tracking
                                                            portal to see exactly when it will arrive at your doorstep.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="notification-box">
                                                <div class="notification-detail">
                                                    <div>
                                                        <h5>Share Your Feedback</h5>
                                                        <p>How was your experience with the "SkyRunner Blue" sneakers?
                                                            We would love to hear your thoughts on the comfort, fit, and
                                                            style. Rate your purchase today and earn 10 extra loyalty
                                                            points towards your next discount!</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="notification-box">
                                                <div class="notification-detail">
                                                    <div>
                                                        <h5>Back In Stock!</h5>
                                                        <p>The "Urban Explorer" boots you were eyeing are finally now
                                                            back in stock in all popular sizes. Since these are
                                                            high-demand items, stocks are limited and expected to sell
                                                            out quickly. Hurry and grab yours before they're gone again!
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="bank-tab-pane">
                            <div class="dashboard-right-sidebar">
                                <div class="dashboard-inner-title">
                                    <h3>Bank Details</h3>
                                    <p>Manage your bank accounts and payment methods for seamless transactions and
                                        faster payouts.</p>
                                </div>

                                <div class="row g-sm-4 g-3">
                                    <div class="col-xxl-6 col-lg-12 col-md-6">
                                        <div class="payment-card">
                                            <div class="card-head">
                                                <div class="bank-info">
                                                    <div class="bank-icon">
                                                        <i class="ri-bank-line"></i>
                                                    </div>
                                                    <div class="bank-name">
                                                        <h4>HDFC Bank</h4>
                                                        <span>Primary Account</span>
                                                    </div>
                                                </div>
                                                <div class="dropdown">
                                                    <button class="btn" type="button" data-bs-toggle="dropdown">
                                                        <i class="ri-more-2-fill"></i>
                                                    </button>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item" href="#editCardModal"
                                                                data-bs-toggle="modal"><i class="ri-edit-line"></i> Edit
                                                                Account</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item text-danger" href="#removeCardModal"
                                                                data-bs-toggle="modal"><i
                                                                    class="ri-delete-bin-line"></i> Remove</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <ul class="card-details">
                                                <li class="detail-item">
                                                    <h5>Account Number <span>**** **** 5241</span></h5>
                                                </li>
                                                <li class="detail-item">
                                                    <h5>IFSC Code <span>HDFC0001234</span></h5>
                                                </li>
                                                <li class="detail-item">
                                                    <h5>Holder Name <span>John Doe</span></h5>
                                                </li>
                                                <li class="detail-item">
                                                    <h5>Status <span class="badge badge-success-color">Verified</span>
                                                    </h5>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="col-xxl-6 col-lg-12 col-md-6">
                                        <div class="payment-card">
                                            <div class="card-head">
                                                <div class="bank-info">
                                                    <div class="bank-icon bank-bg-content-color">
                                                        <i class="ri-bank-line"></i>
                                                    </div>
                                                    <div class="bank-name">
                                                        <h4>ICICI Bank</h4>
                                                        <span class="secondary">Secondary Account</span>
                                                    </div>
                                                </div>
                                                <div class="dropdown">
                                                    <button class="btn btn-sm" type="button" data-bs-toggle="dropdown">
                                                        <i class="ri-more-2-fill"></i>
                                                    </button>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item" href="#editCardModal"
                                                                data-bs-toggle="modal"><i class="ri-edit-line"></i> Edit
                                                                Account</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item text-danger" href="#removeCardModal"
                                                                data-bs-toggle="modal"><i
                                                                    class="ri-delete-bin-line"></i> Remove</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <ul class="card-details">
                                                <li class="detail-item">
                                                    <h5>Account Number <span>**** **** 9874</span></h5>
                                                </li>
                                                <li class="detail-item">
                                                    <h5>IFSC Code <span>ICIC0005678</span></h5>
                                                </li>
                                                <li class="detail-item">
                                                    <h5>Holder Name <span>John Doe</span></h5>
                                                </li>
                                                <li class="detail-item">
                                                    <h5>Status <span class="badge badge-star">Pending Review</span></h5>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="dashboard-right-sidebar">
                                <div class="dashboard-inner-title">
                                    <h3>Add New Bank Account</h3>
                                    <p>Fill out the form below to add a new bank account for secure payments.</p>
                                </div>
                                <form>
                                    <div class="row g-3">
                                        <div class="col-12">
                                            <div class="theme-form">
                                                <label class="form-label" for="bankName">Bank Name</label>
                                                <input type="text" class="form-control" id="bankName"
                                                    placeholder="e.g. Bank of America">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="theme-form">
                                                <label class="form-label" for="accountNumber">Account Number</label>
                                                <input type="text" class="form-control" id="accountNumber"
                                                    placeholder="Enter Account Number">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="theme-form">
                                                <label class="form-label" for="ifscCode">Routing IFSC Code</label>
                                                <input type="text" class="form-control" id="ifscCode"
                                                    placeholder="Enter Code">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="theme-form">
                                                <label class="form-label" for="branchName">Branch Name</label>
                                                <input type="text" class="form-control" id="branchName"
                                                    placeholder="e.g. Broadway Branch">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="theme-form">
                                                <label class="form-label" for="accountType">Account Type</label>
                                                <select class="form-select form-control" id="accountType">
                                                    <option selected disabled>Select Account Type</option>
                                                    <option value="savings">Savings Account</option>
                                                    <option value="current">Current Account</option>
                                                    <option value="business">Business Account</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="theme-form">
                                                <label class="form-label" for="holderName">Account Holder Name</label>
                                                <input type="text" class="form-control" id="holderName"
                                                    placeholder="Enter Holder Name">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="theme-form">
                                                <label class="form-label" for="swiftCode">Swift BIC Code
                                                    (Optional)</label>
                                                <input type="text" class="form-control" id="swiftCode"
                                                    placeholder="Enter Swift Code">
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="theme-form">
                                                <div class="custom-checkbox">
                                                    <input class="checkbox_animated" type="checkbox" value=""
                                                        id="primaryAccount">
                                                    <label class="form-check-label text-content"
                                                        for="primaryAccount">Set as primary bank account for
                                                        payouts</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 mt-4">
                                            <button class="btn theme-btn" type="submit">Save Bank Details <i
                                                    class="ri-save-line"></i></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="wallet-tab-pane">
                            <div class="dashboard-right-sidebar">
                                <div class="dashboard-inner-title">
                                    <h3>My Wallet</h3>
                                    <p>View your current balance, add funds, and check your transaction history all in
                                        one place.</p>
                                </div>
                                <div class="row g-sm-4 g-3">
                                    <div class="col-xxl-6">
                                        <div class="wallet-card-box">
                                            <div class="wallet-detail">
                                                <span>Total Balance</span>
                                                <h2>$1,250.00</h2>
                                                <div class="wallet-btn-group">
                                                    <button class="btn"><i class="ri-add-line"></i>Add Money</button>
                                                    <button class="btn"><i
                                                            class="ri-download-line"></i>Withdraw</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xxl-6">
                                        <div class="row g-3 h-sm-100">
                                            <div class="col-sm-6 h-sm-100">
                                                <div class="stat-card credit-card">
                                                    <div class="stat-icon success">
                                                        <i class="ri-arrow-left-down-line"></i>
                                                    </div>
                                                    <div class="stat-content">
                                                        <h3>Total Credit</h3>
                                                        <h4>$500.00</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-6 h-sm-100">
                                                <div class="stat-card debit-card">
                                                    <div class="stat-icon danger">
                                                        <i class="ri-arrow-right-up-line"></i>
                                                    </div>
                                                    <div class="stat-content">
                                                        <h3>Total Debit</h3>
                                                        <h4>$150.00</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="dashboard-right-sidebar">
                                <div class="reward-history-title">
                                    <h4 class="mb-0">Recent Transactions</h4>
                                    <a href="#transactionHistoryModal" data-bs-toggle="modal">View All</a>
                                </div>
                                <div class="transaction-list">
                                    <div class="transaction-item">
                                        <div class="transaction-info">
                                            <div class="icon credit">
                                                <i class="ri-wallet-3-line"></i>
                                            </div>
                                            <div class="details">
                                                <h5>Wallet Top-up</h5>
                                                <p>02 Jan, 2026 • 10:30 AM</p>
                                            </div>
                                        </div>
                                        <div class="transaction-amount">
                                            <h5 class="plus">+$200.00</h5>
                                            <span class="status completed">Completed</span>
                                        </div>
                                    </div>

                                    <div class="transaction-item">
                                        <div class="transaction-info">
                                            <div class="icon debit">
                                                <i class="ri-shopping-bag-line"></i>
                                            </div>
                                            <div class="details">
                                                <h5>Order #321456</h5>
                                                <p>01 Jan, 2026 • 04:15 PM</p>
                                            </div>
                                        </div>
                                        <div class="transaction-amount">
                                            <h5 class="minus">-$85.00</h5>
                                            <span class="status completed">Completed</span>
                                        </div>
                                    </div>

                                    <div class="transaction-item">
                                        <div class="transaction-info">
                                            <div class="icon credit">
                                                <i class="ri-refund-2-line"></i>
                                            </div>
                                            <div class="details">
                                                <h5>Refund Received</h5>
                                                <p>30 Dec, 2025 • 11:20 AM</p>
                                            </div>
                                        </div>
                                        <div class="transaction-amount">
                                            <h5 class="plus">+$45.00</h5>
                                            <span class="status pending">Pending</span>
                                        </div>
                                    </div>

                                    <div class="transaction-item">
                                        <div class="transaction-info">
                                            <div class="icon debit">
                                                <i class="ri-bank-card-line"></i>
                                            </div>
                                            <div class="details">
                                                <h5>Bank Transfer</h5>
                                                <p>28 Dec, 2025 • 09:45 AM</p>
                                            </div>
                                        </div>
                                        <div class="transaction-amount">
                                            <h5 class="minus">-$150.00</h5>
                                            <span class="status completed">Completed</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>