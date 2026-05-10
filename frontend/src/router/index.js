import { createRouter, createWebHistory } from "vue-router";
import AppLayout from "../components/AppLayout.vue";
import Login from "../views/Login.vue";
import Dashboard from "../views/Admin/Dashboard.vue";
import Products from "../views/Admin/Products/Products.vue";
import AddToCart from "../views/Cart/AddToCart.vue";
import WishList from "../components/ui/modals/Wishlist.vue";
import Users from "../views/Users/Users.vue";
import Customers from "../views/Admin/Customers/Customers.vue";
import CustomerView from "../views/Admin/Customers/CustomerView.vue";
import Orders from "../views/Admin/Orders/Orders.vue";
import OrderView from "../views/Admin/Orders/OrderView.vue";
import RequestPassword from "../views/RequestPassword.vue";
import ResetPassword from "../views/ResetPassword.vue";
import NotFound from "../views/NotFound.vue";
import store from "../store";
import Report from "../views/Reports/Report.vue";
import OrdersReport from "../views/Reports/OrdersReport.vue";
import CustomersReport from "../views/Reports/CustomersReport.vue";
import ProductForm from "../views/Admin/Products/ProductForm.vue";
import Categories from "../views/Categories/Categories.vue";
import Register from "../views/Register.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../../src/pages/Home.vue"),
  },
  {
    path: "/shop",
    name: "Index7",
    component: () => import("../../src/pages/Index7.vue"),
  },
  {
    path: "/shop/infinite-scroll",
    name: "infinite-scroll",
    component: () => import("../../src/sections/shop/InfiniteScroll.vue"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("../../src/sections/home/Search.vue"),
  },
  {
    path: "/app",
    name: "app",
    redirect: "/app/dashboard",
    component: AppLayout,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "dashboard",
        name: "app.dashboard",
        component: Dashboard,
      },
      {
        path: "add-cart",
        name: "app.add-cart",
        component: AddToCart,
      },
      {
        path: "wish-list",
        name: "app.wish-list",
        component: WishList,
      },
      {
        path: "products",
        name: "app.products",
        component: Products,
      },
      {
        path: "categories",
        name: "app.categories",
        component: Categories,
      },
      {
        path: "products/create",
        name: "app.products.create",
        component: ProductForm,
      },
      {
        path: "products/:id",
        name: "app.products.edit",
        component: ProductForm,
        props: true,
      },
      {
        path: "users",
        name: "app.users",
        component: Users,
      },
      {
        path: "customers",
        name: "app.customers",
        component: Customers,
      },
      {
        path: "customers/:id",
        name: "app.customers.view",
        component: CustomerView,
      },
      {
        path: "orders",
        name: "app.orders",
        component: Orders,
      },
      {
        path: "orders/:id",
        name: "app.orders.view",
        component: OrderView,
      },
      {
        path: "report",
        name: "reports",
        component: Report,
        meta: {
          requiresAuth: true,
        },
        children: [
          {
            path: "orders/:date?",
            name: "reports.orders",
            component: OrdersReport,
          },
          {
            path: "customers/:date?",
            name: "reports.customers",
            component: CustomersReport,
          },
        ],
      },
    ],
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: {
      requiresGuest: true,
    },
  },
  
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      requiresGuest: true,
    },
  },
  {
    path: "/request-password",
    name: "requestPassword",
    component: RequestPassword,
    meta: {
      requiresGuest: true,
    },
  },
  {
    path: "/reset-password/:token",
    name: "resetPassword",
    component: ResetPassword,
    meta: {
      requiresGuest: true,
    },
  },
  {
    path: "/:pathMatch(.*)",
    name: "notfound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {

  const token = store.state.user.token;
  
  // 1. Not logged in → protect admin routes
  if (to.meta.requiresAuth && !token) {
    return { name: "login" };
  }

  console.log(store.state.user.token)
  console.log(store.state.user.data)

});

export default router;
