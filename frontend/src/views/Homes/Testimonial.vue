<template>
  <section class="testimonial-section section-b-space">
    <div class="container">

      <!-- TITLE -->
      <div class="title-flex title-b-space">
        <h3 class="title">Testimonials</h3>

        <RouterLink class="title-link" to="/testimonials" name="view-all">
          View All
          <svg>
            <use href="/assets/svg/sprite_icon.svg#right-arrow"></use>
          </svg>
        </RouterLink>
      </div>

      <!-- SWIPER -->
      <Swiper
        class="grocery-testimonial"
        :slides-per-view="1"
        :space-between="20"
        :breakpoints="{
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 }
        }"
        :autoplay="{ delay: 3000 }"
        loop
      >

        <SwiperSlide v-for="item in testimonials" :key="item.id">
          <div class="testimonial-box style-1">

            <!-- TOP -->
            <div class="top-panel">

              <div class="user-info">
                <div class="user-img">
                  <img :src="item.image" class="img-fluid" alt="user" />
                </div>

                <div class="user-name">
                  <h4>{{ item.name }}</h4>
                  <span>{{ item.date }}</span>
                </div>
              </div>

              <svg>
                <use href="/assets/svg/sprite_icon.svg#quote"></use>
              </svg>

            </div>

            <!-- CONTENT -->
            <p class="content">
              {{ item.message }}
            </p>

          </div>
        </SwiperSlide>

      </Swiper>

    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    date: "May 10, 2026",
    image: "/assets/images/user/1.png",
    message:
      "I absolutely love shopping at this grocery store! The variety of fresh produce is outstanding and delivery is always on time."
  },
  {
    id: 2,
    name: "Sarah Smith",
    date: "May 12, 2026",
    image: "/assets/images/user/2.png",
    message:
      "Amazing experience! Easy checkout and great product quality. Highly recommended."
  },
  {
    id: 3,
    name: "Alex Brown",
    date: "May 15, 2026",
    image: "/assets/images/user/3.png",
    message:
      "Best online grocery service I have used. Very fast and reliable."
  }
];
</script>