<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";

/* =========================
   BLOG DATA (API READY)
========================= */
const blogs = [
  {
    id: 1,
    title: "Case Diameter",
    description:
      "34mm Watches in this range are often categorized as petite or classic and can be ideal for dress watches.",
    image: "/assets/images/layout-4/b-1.jpg",
    icon: "diameter",
    type: "image",
  },
  {
    id: 2,
    title: "Strap / Dial Color",
    description:
      "The dial color impacts readability and style, from minimal white & black to striking tones.",
    image: "/assets/images/layout-4/b-2.jpg",
    icon: "material",
    type: "dark",
  },
  {
    id: 3,
    title: "Water Resistance",
    description:
      "Indicates the depth or pressure at which a watch can withstand water exposure.",
    image: "/assets/images/layout-4/b-3.jpg",
    icon: "watch",
    type: "image",
  },
];

/* =========================
   SPLIT FOR LAYOUT CONTROL
========================= */
const blogGrid = computed(() => blogs);
</script>

<template>
  <section class="blog-section">
    <div class="container-fluid p-0">
      <div class="row g-0">

        <div
          v-for="blog in blogGrid"
          :key="blog.id"
          class="col-xxl-4 col-sm-6"
        >

          <!-- IMAGE CARD -->
          <div v-if="blog.type === 'image'" class="blog-img-card">
            <img :src="blog.image" class="img-fluid w-100" />

            <RouterLink
              :to="{ name: 'blog.details', params: { id: blog.id } }"
              class="btn btn-primary"
            >
              View More
            </RouterLink>
          </div>

          <!-- DARK CARD -->
          <div v-else class="blog-dark-card">
            <div class="content">
              <h4>{{ blog.title }}</h4>
              <p>{{ blog.description }}</p>

              <RouterLink
                :to="{ name: 'blog.details', params: { id: blog.id } }"
                class="read-more"
              >
                Read More →
              </RouterLink>

              <svg class="icon">
                <use
                  :href="`/assets/svg/sprite_icon.svg#${blog.icon}`"
                ></use>
              </svg>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>

/* =========================
   SECTION
========================= */
.blog-section {
  overflow: hidden;
}

/* =========================
   IMAGE CARD
========================= */
.blog-img-card {
  position: relative;
  overflow: hidden;
}

.blog-img-card img {
  transition: 0.4s ease;
}

.blog-img-card:hover img {
  transform: scale(1.05);
}

.blog-img-card .btn {
  position: absolute;
  bottom: 20px;
  left: 20px;
}

/* =========================
   DARK CARD
========================= */
.blog-dark-card {
  background: #111827;
  color: #fff;
  height: 100%;
  padding: 30px;
  display: flex;
  align-items: center;
  position: relative;
}

.blog-dark-card h4 {
  font-size: 18px;
  margin-bottom: 10px;
}

.blog-dark-card p {
  font-size: 14px;
  opacity: 0.8;
}

.read-more {
  display: inline-block;
  margin-top: 10px;
  color: #60a5fa;
  font-weight: 500;
  text-decoration: none;
}

.icon {
  position: absolute;
  bottom: 15px;
  right: 15px;
  width: 40px;
  height: 40px;
  opacity: 0.2;
}

/* =========================
   RESPONSIVE
========================= */
@media (max-width: 768px) {
  .blog-dark-card {
    padding: 20px;
  }
}

</style>