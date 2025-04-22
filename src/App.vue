<template>
  <div class="app-container bg-white min-h-screen flex flex-col">
    <!-- Header with Navigation -->
    <header class="header fixed w-full top-0 bg-gray-50 border-b border-gray-200 z-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between py-4">
        <!-- Logo -->
        <router-link to="/" class="flex items-center">
          <img src="@/assets/ROCO-7.png" alt="RocoX Logo" class="w-8 sm:w-10 animate-pulse" />
          <span class="ml-2 text-lg sm:text-xl font-bold text-gray-900">RocoX</span>
        </router-link>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-6">
          <router-link to="/" class="nav-link text-gray-600 hover:text-gray-900 hover:scale-105 transition-all duration-300">Home</router-link>
          <router-link to="/products" class="nav-link text-gray-600 hover:text-gray-900 hover:scale-105 transition-all duration-300">Products</router-link>
          <router-link to="/contact" class="nav-link text-gray-600 hover:text-gray-900 hover:scale-105 transition-all duration-300">Contact</router-link>
        </nav>

        <!-- Mobile Menu Toggle -->
        <button @click="menuOpen = !menuOpen" class="md:hidden text-gray-600 focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!menuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="menuOpen" class="md:hidden bg-gray-50 border-t border-gray-200">
        <nav class="flex flex-col items-center py-4 space-y-2">
          <router-link to="/" @click="menuOpen = false" class="nav-link text-gray-600 hover:text-gray-900 py-2">Home</router-link>
          <router-link to="/products" @click="menuOpen = false" class="nav-link text-gray-600 hover:text-gray-900 py-2">Products</router-link>
          <router-link to="/contact" @click="menuOpen = false" class="nav-link text-gray-600 hover:text-gray-900 py-2">Contact</router-link>
        </nav>
      </div>
    </header>

    <!-- Main Content -->
    <main class="main-content flex-1 pt-20">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="footer bg-gray-50 border-t border-gray-200 py-4 text-center">
      <p class="text-gray-600 text-sm">© 2025 RocoX. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      menuOpen: false,
    };
  },
};
</script>

<style scoped>
@import 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap';
@import 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css';

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.03); }
}

.animate-pulse { animation: pulse 2.5s ease-in-out infinite; }

.app-container { font-family: 'Inter', sans-serif; }
.nav-link { font-size: 1rem; font-weight: 500; }

@media (max-width: 640px) {
  .main-content { padding-top: 4.5rem; }
}
</style>