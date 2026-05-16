<template>
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
</template>