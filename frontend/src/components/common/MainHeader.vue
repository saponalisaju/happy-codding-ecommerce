<template>
    <div class="style-7">
      <div class="container">

        <div class="header-wrapper">

          <!-- Mobile Toggle -->
          <button
            class="navbar-toggler d-lg-none d-block"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <svg class="navbar-toggler-icon">
              <use href="/assets/svg/sprite_icon.svg#menu-bar"></use>
            </svg>
          </button>

          <!-- Logo -->
          <RouterLink to="/" class="logo">

            <img
              class="img-fluid light custom-logo"
              src="/assets/images/logo/happy-logo.png"
              alt="Happy Buy"
            />

            <img
              class="img-fluid dark custom-logo"
              src="/assets/images/logo/logo-7-white.svg"
              alt="Happy Buy"
            />

          </RouterLink>

          <!-- Search -->
           <div class="search-input d-lg-block d-none position-relative">
                        <div class="d-flex">
                            <div class="dropdown-category">
                                <RouterLink to="/categories">
                                    Categories
                                    <i class="ri-arrow-down-s-line"></i>
                                </RouterLink>
                                <ul class="category-list">
                                    <li>
                                        <RouterLink to="/shop/mobile">Phone</RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink to="/shop/laptop">Laptop</RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink to="/shop/keyboard">Keyboard</RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink to="/shop/mouse">Mouse</RouterLink>
                                    </li>
                                </ul>
                            </div>
                            <i class="iconsax" data-icon="search-normal-2"></i>
                            <input type="text" class="main-search input-lg" placeholder="Search for product"
                                name="search-term" id="search-term">
                        </div>
                    </div>

          <!-- Contact -->
          <div class="contact-box d-md-block d-none">

            <div class="d-flex align-items-center">

              <div class="icon">
                <img
                  src="/assets/icon/contact.svg"
                  class="img-fluid"
                  alt="Contact"
                />
              </div>

              <div class="contact">
                <RouterLink to="/contact">
                  <h6>Contact Us</h6>
                </RouterLink>

                <p>Call us for any inquiry</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
</template>