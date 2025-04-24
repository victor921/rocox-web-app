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
    apiKey: "AIzaSyA1A4Qv-LRp7ytDv-At6lFtWNeGx_apH9c",
    authDomain: "rocox-136c9.firebaseapp.com",
    projectId: "rocox-136c9",
    storageBucket: "rocox-136c9.firebasestorage.app",
    messagingSenderId: "39493534751",
    appId: "1:39493534751:web:542c196511d920516a812a",
    measurementId: "G-ZHMH585N3J"
  };

const app = createApp(App)
// Initialize Firebase
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// --- Create Vue App Instance ---

// --- Use Plugins ---
app.use(createPinia())
app.use(router)

// --- Initialize AOS ---
AOS.init({
  duration: 800,
  once: true,
  offset: 50,
  delay: 100,
  disable: 'mobile', // Disable animations on mobile (<768px)
})

// --- Mount App ---
app.mount('#app')