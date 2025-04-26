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

console.log(import.meta.env)
// Firebase configuration using environment variables/
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || import.meta.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || import.meta.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || import.meta.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || import.meta.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || import.meta.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID || import.meta.env.VUE_APP_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || import.meta.env.VUE_APP_FIREBASE_MEASUREMENT_ID
};
// Validate Firebase config
if (!firebaseConfig.apiKey || !firebaseConfig.projectId || !firebaseConfig.appId) {
    console.error('Firebase configuration is incomplete. Please check your environment variables.');
    throw new Error('Missing Firebase configuration');
}

// --- Create Vue App Instance ---
const vueApp = createApp(App)

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

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