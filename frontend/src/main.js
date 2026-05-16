import { createApp, nextTick } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { CkeditorPlugin } from "@ckeditor/ckeditor5-vue";
import currencyUSD from "./filters/currency.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const app = createApp(App);

function runIconsax() {
  nextTick(() => {
    setTimeout(() => {
      if (window.init_iconsax) {
        window.init_iconsax();
      }
    }, 100);
  });
}
app.use(store); // ✅ FIX HERE
app.use(router);
app.use(CkeditorPlugin);

app.config.globalProperties.$filters = {
  currencyUSD,
};

app.mount("#app");
