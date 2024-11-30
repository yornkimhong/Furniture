import './assets/input.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from "aos";
import "aos/dist/aos.css";
const app = createApp(App)

app.use(router)
AOS.init({
  duration: 2000, 
  once: true, 
});
app.mount('#app')
