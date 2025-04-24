import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ClientPortalView from '../views/ClientPortalView.vue'; // New name
import ContactView from '../views/ContactView.vue';
import PrivacyView from '../views/PrivacyView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/products', name: 'Client Portal', component: ClientPortalView }, // Updated path/name
  { path: '/contact', name: 'Contact', component: ContactView },
  { path: '/privacy', name: 'Privacy Policy', component: PrivacyView },
  // Add other routes like 404
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // Optional: Scroll behavior
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 }; // Scroll to top on new page load
    }
  },
});

export default router;