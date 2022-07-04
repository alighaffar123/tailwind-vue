import { createApp } from 'vue'
import router from "./router/router"
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from './App.vue'
import "./tailwind.css"
import VueApexCharts from "vue3-apexcharts"

library.add(fas);

createApp(App)
.component('fa', FontAwesomeIcon)
.use(router)
.use(VueApexCharts)
.mount('#app')
