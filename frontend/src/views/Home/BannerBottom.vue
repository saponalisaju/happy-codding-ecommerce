<template>
  <section class="banner-section">
    <div class="container">
      <div class="row g-4">

        <!-- ================= LEFT BANNER ================= -->
        <div class="col-lg-6">
          <div class="banner-card dark">

            <div class="banner-content">
              <span class="tag">Deals of the Day</span>

              <h2>Apple Watch Ultra 2</h2>

              <p>
                The most rugged and capable Apple Watch ever designed for athletes and adventurers.
              </p>

              <RouterLink to="/shop" class="btn btn-theme">
                <i class="ri-shopping-bag-3-line"></i>
                Shop Now
              </RouterLink>
            </div>

            <div class="banner-image">
              <img src="/assets/images/layout-7/banner/2.png" alt="watch" />
            </div>

          </div>
        </div>

        <!-- ================= RIGHT BANNER ================= -->
        <div class="col-lg-6">
          <div class="banner-card light">

            <div class="banner-content center">
              <span class="tag">Deals of the Day</span>

              <h2>iPhone 15 Pro</h2>

              <p>
                Forged in titanium and featuring the groundbreaking A17 Pro chip.
              </p>

              <RouterLink to="/shop" class="btn btn-theme">
                <i class="ri-shopping-bag-3-line"></i>
                Shop Now
              </RouterLink>
            </div>

            <div class="banner-image">
              <img src="/assets/images/layout-7/banner/3.png" alt="iphone" />
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>

/* ================= SECTION ================= */
.banner-section {
  padding: 50px 0;
}

/* ================= CARD BASE ================= */
.banner-card {
  position: relative;
  border-radius: 18px;
  overflow: hidden;
  padding: 30px;
  min-height: 260px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

/* DARK CARD */
.banner-card.dark {
  background: linear-gradient(135deg, #111, #2a2a2a);
  color: #fff;
}

/* LIGHT CARD */
.banner-card.light {
  background: #f6f6f6;
}

/* ================= CONTENT ================= */
.banner-content {
  max-width: 55%;
  z-index: 2;
}

.banner-content.center {
  text-align: left;
}

.tag {
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  opacity: 0.8;
  display: inline-block;
  margin-bottom: 10px;
}

.banner-content h2 {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 10px;
}

.banner-content p {
  font-size: 14px;
  line-height: 1.6;
  opacity: 0.85;
  margin-bottom: 15px;
}

/* ================= BUTTON ================= */
.btn-theme {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 18px;
  border-radius: 50px;
  background: #000;
  color: #fff;
  font-size: 14px;
  transition: 0.3s;
}

.banner-card.dark .btn-theme {
  background: #fff;
  color: #000;
}

.btn-theme:hover {
  transform: translateY(-2px);
}

/* ================= IMAGE ================= */
.banner-image {
  position: absolute;
  right: 20px;
  bottom: 0;
  width: 45%;
}

.banner-image img {
  width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
}

/* ================= HOVER EFFECT ================= */
.banner-card:hover .banner-image img {
  transform: scale(1.05);
  transition: 0.4s ease;
}

/* ================= RESPONSIVE ================= */
@media (max-width: 991px) {

  .banner-card {
    flex-direction: column;
    text-align: center;
    padding: 25px;
  }

  .banner-content {
    max-width: 100%;
  }

  .banner-image {
    position: relative;
    right: auto;
    bottom: auto;
    width: 70%;
    margin-top: 15px;
  }

  .banner-content h2 {
    font-size: 22px;
  }
}

@media (max-width: 576px) {
  .banner-image {
    width: 90%;
  }
}

</style>