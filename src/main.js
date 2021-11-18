import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import "bootstrap/dist/css/bootstrap.min.css"
import Notifications from '@kyvg/vue3-notification'

import App from './App.vue'
import router from './router'
import store from './store'
import * as filters from "./service/service.filters.js";

const app = createApp(App);
app.config.globalProperties.$filters = filters;
app.use(store).use(router).use(VueAxios, axios).use(Notifications).mount('#app')