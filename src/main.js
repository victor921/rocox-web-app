// --- Core Vue Setup ---
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

// --- Tailwind CSS ---
import './assets/main.css' // Includes Tailwind directives and fonts

// --- AOS (Animate On Scroll) ---
import AOS from 'aos'
import 'aos/dist/aos.css'

// --- Firebase ---
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Replace with your actual Firebase config from Firebase Console
const firebaseConfig = {
    measurementId: "G-ZHMH585N3J"
  };

const vueApp = createApp(App)
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
// --- Create Vue App Instance ---

// --- Use Plugins ---
vueApp.use(createPinia())
vueApp.use(router)

// --- Initialize AOS ---
AOS.init({
  duration: 800,
  once: true,
  offset: 50,
  delay: 100,
  disable: 'false'
})

// --- Mount App ---
vueApp.mount('#app')