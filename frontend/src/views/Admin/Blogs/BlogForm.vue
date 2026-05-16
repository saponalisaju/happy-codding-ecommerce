<!-- src/views/Admin/Blogs/BlogForm.vue -->

<script setup>
import { ref } from "vue";
import {
  PhotoIcon,
} from "@heroicons/vue/24/outline";

const form = ref({
  title: "",
  category: "",
  status: "draft",
  image: "",
  short_description: "",
  content: "",
  seo_title: "",
  seo_description: "",
});
</script>

<template>
  <div class="blog-form-page">

    <!-- HEADER -->
    <div class="page-header">
      <div>
        <h1>Create Blog</h1>
        <p>Create and publish professional blog articles.</p>
      </div>

      <button class="publish-btn">
        Publish Blog
      </button>
    </div>

    <div class="form-grid">

      <!-- LEFT -->
      <div class="left-side">

        <!-- BASIC -->
        <div class="card-box">

          <h3 class="card-title">
            Blog Information
          </h3>

          <div class="form-group">
            <label>Blog Title</label>

            <input
              v-model="form.title"
              type="text"
              placeholder="Enter blog title"
            />
          </div>

          <div class="form-group">
            <label>Short Description</label>

            <textarea
              rows="4"
              v-model="form.short_description"
              placeholder="Enter short description"
            ></textarea>
          </div>

          <div class="form-group">
            <label>Blog Content</label>

            <textarea
              rows="12"
              v-model="form.content"
              placeholder="Write your blog content..."
            ></textarea>
          </div>

        </div>

        <!-- SEO -->
        <div class="card-box">

          <h3 class="card-title">
            SEO Settings
          </h3>

          <div class="form-group">
            <label>SEO Title</label>

            <input
              type="text"
              v-model="form.seo_title"
              placeholder="SEO title"
            />
          </div>

          <div class="form-group">
            <label>SEO Description</label>

            <textarea
              rows="4"
              v-model="form.seo_description"
              placeholder="SEO description"
            ></textarea>
          </div>

        </div>

      </div>

      <!-- RIGHT -->
      <div class="right-side">

        <!-- IMAGE -->
        <div class="card-box">

          <h3 class="card-title">
            Featured Image
          </h3>

          <label class="upload-box">

            <PhotoIcon class="upload-icon" />

            <span>Upload Blog Image</span>

            <input type="file" hidden />

          </label>

        </div>

        <!-- SETTINGS -->
        <div class="card-box">

          <h3 class="card-title">
            Publish Settings
          </h3>

          <div class="form-group">
            <label>Category</label>

            <select v-model="form.category">
              <option value="">Select Category</option>
              <option>Technology</option>
              <option>Fashion</option>
              <option>Lifestyle</option>
            </select>
          </div>

          <div class="form-group">
            <label>Status</label>

            <select v-model="form.status">
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<style scoped>

.blog-form-page {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* HEADER */

.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.page-header h1 {
  font-size: 30px;
  font-weight: 700;
  color: #111827;
}

.page-header p {
  color: #6b7280;
  margin-top: 6px;
}

.publish-btn {
  height: 48px;
  padding: 0 20px;
  border: none;
  border-radius: 12px;
  background: #4f46e5;
  color: white;
  font-weight: 600;
  cursor: pointer;
}

/* GRID */

.form-grid {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 24px;
}

/* CARD */

.card-box {
  background: white;
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 2px 12px rgba(15,23,42,0.06);
  margin-bottom: 24px;
}

.card-title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 22px;
  color: #111827;
}

/* FORM */

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  color: #374151;
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 14px 16px;
  outline: none;
  transition: 0.2s;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  border-color: #4f46e5;
}

/* UPLOAD */

.upload-box {
  height: 220px;
  border: 2px dashed #d1d5db;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}

.upload-icon {
  width: 42px;
  height: 42px;
  color: #6b7280;
}

.upload-box span {
  color: #6b7280;
  font-weight: 500;
}

/* RESPONSIVE */

@media (max-width: 1024px) {

  .form-grid {
    grid-template-columns: 1fr;
  }
}

</style>