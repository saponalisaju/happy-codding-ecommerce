<template>
    <div class="sub-header">
      <div class="container">

        <!-- Language & Currency -->
        <div class="sub-header-dropdown">

          <div class="d-flex align-items-center">
            <select class="form-select ps-0 w-auto border-0 bg-transparent">
              <option selected>English</option>
              <option>Spanish</option>
              <option>Arabic</option>
            </select>

            <div class="icon">
              <i class="fa-solid fa-angle-down"></i>
            </div>
          </div>

          <div class="d-flex align-items-center">
            <select class="form-select w-auto border-0 bg-transparent">
              <option selected>($) USD</option>
              <option>(€) EUR</option>
              <option>(¥) JPY</option>
              <option>(₹) INR</option>
            </select>

            <div class="icon">
              <i class="fa-solid fa-angle-down"></i>
            </div>
          </div>

        </div>

        <!-- Offer -->
        <p class="offer-text">
          Get 15% OFF on your first order.
          <RouterLink to="/shop" class="fw-semibold">
            Shop Now!
          </RouterLink>
        </p>

        <!-- Flash Sale -->
        <div class="flash-fire">
          <img
            src="/assets/images/gif/fire.gif"
            alt="Flash Sale"
          />

          <span>Flash Sale</span>
        </div>

      </div>
    </div>
</template>