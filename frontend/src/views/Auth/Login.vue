<template>
  <section class="authentication-section">
        <div class="container-fluid p-0">
            <div class="row g-0 align-items-center">
                <div class="col-lg-6">
                    <div class="authentication-image">
                        <img src="/assets/images/inner-pages/about-us/1.jpg" class="img-fluid" alt="">
                        <div class="testimonial-box-2">
                            <div class="swiper authentication-slider">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div class="testimonial-content">
                                            <p>“I've never worn shoes as comfortable as these. The support and style are
                                                unmatched. Perfect for my daily commute and evening walks!”</p>
                                            <h5>Sarah Jenkins</h5>
                                            <span>Fashion Enthusiast</span>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="testimonial-content">
                                            <p>“The attention to detail in these sneakers is incredible. They look
                                                premium and feel even better. The quality is truly top-tier!”</p>
                                            <h5>Marcus Thorne</h5>
                                            <span>Shoe Collector</span>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="testimonial-content">
                                            <p>“Finally, a brand that combines sustainability with exceptional design.
                                                These are my go-to shoes for every occasion from now on.”</p>
                                            <h5>Elena Rodriguez</h5>
                                            <span>Eco-conscious Buyer</span>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="testimonial-content">
                                            <p>“Fast shipping and amazing customer service. The fit is true to size and
                                                the materials feel incredibly durable. Highly recommended!”</p>
                                            <h5>David Miller</h5>
                                            <span>Loyal Customer</span>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="testimonial-content">
                                            <p>“Modern, sleek, and high-performance. I've been wearing mine for months
                                                and they still look brand new. Hazy is definitely the future!”</p>
                                            <h5>Jessica Wu</h5>
                                            <span>Verified Athlete</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-pagination"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="authentication-content">
                        <div class="authentication-wrap">
                            <h1>Login to Your Account</h1>
                            <p class="notify-text">Please enter your details to stay connected.</p>

                            <div class="authentication-form">
                                <form class="theme-form needs-validation" @submit.prevent="login" novalidate>
                                    <div class="row g-sm-4 g-3">
                                        <div class="col-12">
                                            <label for="email" class="form-label">Email Address</label>
                                            <div class="position-relative">
                                                <i class="iconsax" data-icon="mail"></i>
                                                <input type="email" id="email" placeholder="Enter your email"
                                                    class="form-control" v-model="user.email" required>
                                            </div>
                                            <div class="invalid-feedback">Please enter a valid email address.</div>
                                        </div>
                                        <div class="col-12">
                                            <label for="password" class="form-label">Password</label>
                                            <div class="position-relative">
                                                <i class="iconsax" data-icon="lock-1"></i>
                                                <input type="password" id="password" placeholder="Enter your password"
                                                    class="form-control" v-model="user.password" required>
                                                <i class="ri-eye-line password-toggle"></i>
                                            </div>
                                            <div class="invalid-feedback">Please enter your password.</div>
                                        </div>
                                        <div class="col-12">
                                            <div class="d-flex align-items-center justify-content-between">
                                                <div class="form-check theme-checkbox m-0">
                                                    <input class="checkbox_animated" type="checkbox"
                                                        id="flexCheckDefault">
                                                    <label class="form-check-label" for="flexCheckDefault">Remember
                                                        me</label>
                                                </div>
                                                <a href="forgot-password.html" class="forgot-link">Forgot password?</a>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <button :disabled="loading" type="submit" class="btn btn-submit w-100">{{ loading ? 'Logging in...' : 'Login Now' }}</button>
                                        </div>
                                    </div>
                                </form>

                                <div class="divider">
                                    <span>Or login with</span>
                                </div>

                                <div class="social-links">
                                    <ul>
                                        <li class="twitter">
                                            <router-link to="https://www.google.com/" target="_blank">
                                                <i class="ri-twitter-x-fill"></i>
                                                <span>Twitter</span>
                                            </router-link>
                                        </li>
                                        <li class="fb">
                                            <router-link to="https://www.facebook.com/" target="_blank">
                                                <i class="ri-facebook-fill"></i>
                                                <span>Facebook</span>
                                            </router-link>
                                        </li>
                                        <li class="instagram">
                                            <router-link to="https://www.apple.com/" target="_blank">
                                                <i class="ri-instagram-line"></i>
                                                <span>Instagram</span>
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                                <p class="signup-text">Don't have an account? <router-link to="/register">Sign up</router-link></p>
                                <p class="copyright">© 2026 Hazy. Redefining your walk, one step at a time. <br> Need
                                    help? Contact us: <router-link to="mailto:support@hazy.com">support@hazy.com</router-link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { LockClosedIcon } from '@heroicons/vue/24/solid'
import GuestLayout from "../../layouts/GuestLayout.vue"
import store from "@/store"
import router from "@/router"

const loading = ref(false)
const errorMsg = ref('')

const user = reactive({
  email: '',
  password: '',
  remember: false
})

const login = async () => {
  loading.value = true;
  errorMsg.value = '';

  try {
    const response = await store.dispatch('login', user);

    localStorage.setItem("token", response.token);
    localStorage.setItem("user", JSON.stringify(response.user));

    const loggedUser = response.user;

    if (loggedUser.is_admin === 1) {
      await router.replace({ name: 'admin.dashboard' });
    } else {
      await router.replace({ name: 'account.dashboard' });
    }

  } catch (error) {
    errorMsg.value =
      error.response?.data?.message || 'Login failed';
  } finally {
    loading.value = false;
  }
};

</script>