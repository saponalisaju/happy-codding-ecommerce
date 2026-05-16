import { createRouter, createWebHistory } from "vue-router";
import store from "../store";

// Layouts
import MainLayout from "../layouts/MainLayout.vue";
import AdminLayout from "../layouts/AdminLayout.vue";
import UserLayout from "../layouts/UserLayout.vue";
import GuestLayout from "../layouts/GuestLayout.vue";
import Blogs from "@/views/Admin/Blogs/Blogs.vue";

// Public Views
const Home = () => import("@/views/Public/Home.vue");
const Shop = () => import("@/views/Public/Shop.vue");
const ContactUs = () => import("@/views/Public/ContactUs.vue");
const Search = () => import("@/views/Public/Search.vue");
const BlogsPage = () => import("@/views/Public/BlogsPage.vue");
const AboutUs = () => import("@/views/Public/AboutUs.vue");
const BlogDetails = () => import("@/views/Public/BlogDetails.vue");

// Auth
const Login = () => import("@/views/Auth/Login.vue");
const Register = () => import("@/views/Auth/Register.vue");
const RequestPassword = () => import("@/views/Auth/RequestPassword.vue");
const ResetPassword = () => import("@/views/Auth/ResetPassword.vue");

// Admin
const Dashboard = () => import("@/views/Admin/Dashboard.vue");

const BlogsAdmin = () => import("@/views/Admin/Blogs/Blogs.vue");

const BlogForm = () => import("@/views/Admin/Blogs/BlogForm.vue");

const Products = () => import("@/views/Admin/Products/Products.vue");

const ProductForm = () => import("@/views/Admin/Products/ProductForm.vue");

const Categories = () => import("@/views/Admin/Categories/Categories.vue");

const Orders = () => import("@/views/Admin/Orders/Orders.vue");

const Customers = () => import("@/views/Admin/Customers/Customers.vue");

const Users = () => import("@/views/Admin/Users/Users.vue");

const Reports = () => import("@/views/Admin/Reports/Reports.vue");

// User
const UserDashboard = () => import("@/views/User/UserDashboard.vue");

const UserOrders = () => import("@/views/User/UserOrders.vue");

const UserProfile = () => import("@/views/User/UserProfile.vue");

const Wishlist = () => import("@/views/User/Wishlist.vue");

// Cart
const Cart = () => import("@/views/Cart/Cart.vue");

// Not Found
const NotFound = () => import("@/views/NotFound.vue");

const routes = [
  // PUBLIC WEBSITE
  {
    path: "/",
    component: MainLayout,

    children: [
      {
        path: "",
        name: "home",
        component: Home,
      },

      {
        path: "shop",
        name: "shop",
        component: Shop,
      },

      {
        path: "search",
        name: "search",
        component: Search,
      },

      {
        path: "blogs",
        name: "blogs",
        component: BlogsPage,
      },

      {
        path: "blog/:slug",
        name: "blog.details",
        component: BlogDetails,
        props: true,
      },

      {
        path: "about",
        name: "about",
        component: AboutUs,
      },

      {
        path: "contact",
        name: "contact",
        component: ContactUs,
      },

      {
        path: "cart",
        name: "cart",
        component: Cart,
      },
    ],
  },

  // AUTH
  {
    path: "/",
    component: GuestLayout,

    children: [
      {
        path: "login",
        name: "login",
        component: Login,
        meta: {
          requiresGuest: true,
        },
      },

      {
        path: "register",
        name: "register",
        component: Register,
        meta: {
          requiresGuest: true,
        },
      },

      {
        path: "request-password",
        name: "requestPassword",
        component: RequestPassword,
      },

      {
        path: "reset-password/:token",
        name: "resetPassword",
        component: ResetPassword,
      },
    ],
  },

  // ADMIN
  {
    path: "/admin",

    component: AdminLayout,

    meta: {
      requiresAuth: true,
      requiresAdmin: true,
    },

    children: [
      {
        path: "dashboard",
        name: "admin.dashboard",
        component: Dashboard,
      },

      {
        path: "products",
        name: "admin.products",
        component: Products,
      },

      {
        path: "products/create",
        name: "admin.products.create",
        component: ProductForm,
      },

      {
        path: "products/:id",
        name: "admin.products.edit",
        component: ProductForm,
        props: true,
      },

      {
        path: "categories",
        name: "admin.categories",
        component: Categories,
      },

      {
        path: "orders",
        name: "admin.orders",
        component: Orders,
      },

      {
        path: "orders/:id",
        name: "admin.orders.view",
        component: () => import("../views/Admin/Orders/OrderView.vue"),
        props: true,
      },

      {
        path: "customers",
        name: "admin.customers",
        component: Customers,
      },
      {
        path: "users",
        name: "admin.users",
        component: Users,
      },
      {
        path: "reports",
        name: "admin.reports",
        component: Reports,
      },

      {
        path: "blogs",
        name: "admin.blogs",
        component: Blogs,
      },
      {
        path: "blogs/create",
        name: "admin.blogs.create",
        component: BlogForm,
      },
      {
        path: "blogs/:id",
        name: "admin.blogs.edit",
        component: BlogForm,
      },
    ],
  },

  // USER ACCOUNT
  {
    path: "/account",

    component: UserLayout,
    meta: {
      requiresAuth: true,
    },

    children: [
      {
        path: "dashboard",
        name: "account.dashboard",
        component: UserDashboard,
      },

      {
        path: "orders",
        name: "account.orders",
        component: UserOrders,
      },

      {
        path: "profile",
        name: "account.profile",
        component: UserProfile,
      },

      {
        path: "wishlist",
        name: "account.wishlist",
        component: Wishlist,
      },
    ],
  },

  // 404
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// ROUTE GUARD
router.beforeEach((to, from) => {
  console.log("Going to:", to.name);
  const token = localStorage.getItem("token");
  const currentUser = JSON.parse(localStorage.getItem("user") || "null");
  // LOGIN REQUIRED
  if (to.meta.requiresAuth && !token) {
    return {
      name: "login",
      query: {
        redirect: to.fullPath,
      },
    };
  }

  // ADMIN ONLY
  if (to.meta.requiresAdmin && currentUser?.is_admin !== 1) {
    return { name: "home" };
  }

  // GUEST ONLY
  if (to.meta.requiresGuest && token) {
    return currentUser?.is_admin === 1
      ? { name: "admin.dashboard" }
      : { name: "account.dashboard" };
  }

  return true;
});

/* ✅ AFTER PAGE RENDER */
router.afterEach(() => {
  setTimeout(() => {
    window.init_iconsax?.();
  }, 100);
});

export default router;
