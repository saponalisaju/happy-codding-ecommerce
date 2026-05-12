<template>
  <!-- Banner Section Start -->
  <section class="banner-section section-b-space">
    <div class="container">
      <div class="row g-sm-4 g-3">

        <div class="col-lg-6">
          <div class="banner-box style-1 style-4">

            <img
              src="/assets/images/layout-4/bg-img.jpg"
              class="img-fluid img banner-bg"
              alt=""
            />

            <div class="banner-content p-left-bottom">
              <div>
                <span>New Smart Watch</span>
                <h3>Get 20% OFF on your First Order</h3>
                <a href="shop-page(left-sidebar).html" class="btn theme-btn d-inline-block">
                  Shop New
                </a>
              </div>
            </div>

            <div class="banner-img">
              <img
                src="/assets/images/product/watch/1.png"
                class="img-fluid banner-product"
                alt=""
              />
            </div>

          </div>
        </div>

        <div class="col-lg-6">
          <div class="banner-box style-1 style-4">

            <img
              src="/assets/images/layout-4/bg-img.jpg"
              class="img-fluid img banner-bg"
              alt=""
            />

            <div class="banner-content p-left-bottom">
              <div>
                <span>Get 10% OFF on First Order</span>
                <h3>Buy Smart and Luxury Watch Today!</h3>
                <a href="shop-page(left-sidebar).html" class="btn theme-btn d-inline-block">
                  Shop New
                </a>
              </div>
            </div>

            <div class="banner-img">
              <img
                src="/assets/images/product/watch/2.png"
                class="img-fluid banner-product"
                alt=""
              />
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* 🔥 FIX: prevent image cut + overflow issue */

/* background image fix */
.banner-box {
  position: relative;
  overflow: hidden;
}

/* background image should fully cover */
.banner-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* product image fix (main issue solved here) */
.banner-img {
  position: absolute;
  right: 0;
  bottom: 0;
  height: 100%;
  display: flex;
  align-items: flex-end;
}

/* prevent cutting top/bottom */
.banner-product {
  max-height: 90%;
  width: auto;
  object-fit: contain;
  display: block;
}

/* responsive safety */
@media (max-width: 991px) {
  .banner-product {
    max-height: 70%;
  }
}
</style>