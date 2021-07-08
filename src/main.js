import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueAxios from "vue-axios";
import axios from 'axios'
import {BASE_URL} from "@/main/config";
import router from './router'
import { AutoCompletePlugin } from '@syncfusion/ej2-vue-dropdowns';

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';


axios.defaults.baseURL = BASE_URL;

const app = createApp(App)
app.use(ElementPlus)
app.use(AutoCompletePlugin)
app.use(VueAxios, axios)
app.use(router)
app.mount('#app')


