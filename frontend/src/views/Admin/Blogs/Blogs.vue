<!-- src/views/Admin/Blogs/Blogs.vue -->

<script setup>
import { ref } from "vue";
import {
  PlusIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  TrashIcon,
  EyeIcon,
} from "@heroicons/vue/24/outline";

const search = ref("");

const blogs = ref([
  {
    id: 1,
    title: "Top Smart Watches in 2026",
    category: "Technology",
    status: "Published",
    author: "Admin",
    date: "15 May 2026",
    image: "/assets/images/blog/b1.jpg",
  },
  {
    id: 2,
    title: "Best Fashion Trends",
    category: "Fashion",
    status: "Draft",
    author: "Admin",
    date: "10 May 2026",
    image: "/assets/images/blog/b2.jpg",
  },
]);
</script>

<template>
  <div class="blog-page">

    <!-- HEADER -->
    <div class="page-header">
      <div>
        <h1 class="page-title">Blogs</h1>
        <p class="page-subtitle">
          Manage your blog posts, articles and publishing status.
        </p>
      </div>

      <RouterLink
        :to="{ name: 'admin.blogs.create' }"
        class="add-btn"
      >
        <PlusIcon class="icon" />
        Add New Blog
      </RouterLink>
    </div>

    <!-- FILTER -->
    <div class="filter-card">

      <div class="search-box">
        <MagnifyingGlassIcon class="search-icon" />

        <input
          v-model="search"
          type="text"
          placeholder="Search blogs..."
        />
      </div>

    </div>

    <!-- TABLE -->
    <div class="table-card">

      <table class="blog-table">

        <thead>
          <tr>
            <th>Blog</th>
            <th>Category</th>
            <th>Author</th>
            <th>Status</th>
            <th>Date</th>
            <th class="text-end">Actions</th>
          </tr>
        </thead>

        <tbody>

          <tr
            v-for="blog in blogs"
            :key="blog.id"
          >

            <!-- BLOG -->
            <td>
              <div class="blog-info">

                <img
                  :src="blog.image"
                  alt=""
                >

                <div>
                  <h4>{{ blog.title }}</h4>
                  <p>Blog ID: #{{ blog.id }}</p>
                </div>

              </div>
            </td>

            <!-- CATEGORY -->
            <td>
              <span class="category-badge">
                {{ blog.category }}
              </span>
            </td>

            <!-- AUTHOR -->
            <td>{{ blog.author }}</td>

            <!-- STATUS -->
            <td>
              <span
                class="status-badge"
                :class="blog.status.toLowerCase()"
              >
                {{ blog.status }}
              </span>
            </td>

            <!-- DATE -->
            <td>{{ blog.date }}</td>

            <!-- ACTION -->
            <td>

              <div class="action-buttons">

                <button class="action-btn view">
                  <EyeIcon class="action-icon" />
                </button>

                <RouterLink
                  :to="{
                    name: 'admin.blogs.edit',
                    params: { id: blog.id }
                  }"
                  class="action-btn edit"
                >
                  <PencilSquareIcon class="action-icon" />
                </RouterLink>

                <button class="action-btn delete">
                  <TrashIcon class="action-icon" />
                </button>

              </div>

            </td>

          </tr>

        </tbody>

      </table>

    </div>

  </div>
</template>

<style scoped>

.blog-page {
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
  flex-wrap: wrap;
}

.page-title {
  font-size: 30px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 6px;
}

.page-subtitle {
  color: #6b7280;
  font-size: 14px;
}

.add-btn {
  height: 46px;
  padding: 0 18px;
  border-radius: 12px;
  background: #4f46e5;
  color: white;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  font-weight: 600;
  transition: 0.2s;
}

.add-btn:hover {
  background: #4338ca;
}

.icon {
  width: 18px;
  height: 18px;
}

/* FILTER */

.filter-card {
  background: white;
  border-radius: 18px;
  padding: 20px;
  box-shadow: 0 2px 12px rgba(15, 23, 42, 0.06);
}

.search-box {
  width: 320px;
  position: relative;
}

.search-box input {
  width: 100%;
  height: 46px;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  padding: 0 16px 0 44px;
  outline: none;
}

.search-icon {
  width: 18px;
  height: 18px;
  color: #9ca3af;
  position: absolute;
  top: 14px;
  left: 14px;
}

/* TABLE */

.table-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(15, 23, 42, 0.06);
}

.blog-table {
  width: 100%;
  border-collapse: collapse;
}

.blog-table thead {
  background: #f8fafc;
}

.blog-table th {
  padding: 18px;
  font-size: 13px;
  font-weight: 700;
  color: #64748b;
  text-align: left;
}

.blog-table td {
  padding: 18px;
  border-top: 1px solid #f1f5f9;
}

.blog-info {
  display: flex;
  align-items: center;
  gap: 14px;
}

.blog-info img {
  width: 70px;
  height: 55px;
  border-radius: 12px;
  object-fit: cover;
}

.blog-info h4 {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 4px;
  color: #111827;
}

.blog-info p {
  font-size: 13px;
  color: #6b7280;
}

.category-badge {
  padding: 7px 12px;
  border-radius: 999px;
  background: #eef2ff;
  color: #4f46e5;
  font-size: 12px;
  font-weight: 600;
}

.status-badge {
  padding: 7px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
}

.status-badge.published {
  background: #dcfce7;
  color: #16a34a;
}

.status-badge.draft {
  background: #fef3c7;
  color: #d97706;
}

.action-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.action-btn {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  border: none;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: 0.2s;
}

.action-icon {
  width: 18px;
  height: 18px;
}

.view {
  background: #eff6ff;
  color: #2563eb;
}

.edit {
  background: #eef2ff;
  color: #4f46e5;
}

.delete {
  background: #fef2f2;
  color: #dc2626;
}

.action-btn:hover {
  transform: translateY(-2px);
}

@media (max-width: 768px) {

  .search-box {
    width: 100%;
  }

  .table-card {
    overflow-x: auto;
  }

  .blog-table {
    min-width: 900px;
  }
}

</style>