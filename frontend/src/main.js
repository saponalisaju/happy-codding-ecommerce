import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import store from './store'
import { CkeditorPlugin } from '@ckeditor/ckeditor5-vue'
import currencyUSD from './filters/currency.js'
import '@fortawesome/fontawesome-free/css/all.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(CkeditorPlugin)

app.config.globalProperties.$filters = {
  currencyUSD
}

app.mount('#app')