<template>
  <div class="app-container bg-gray-950 min-h-screen flex flex-col font-inter text-gray-300">
    <header
      ref="headerRef"
      :class="[
        'fixed w-full top-0 left-0 z-50 transition-all duration-300 ease-in-out', // Base styles & transition
        // Adjusted: No pt-4 initially, apply background/effects only when scrolled
        isScrolled ? 'bg-gray-950/80 backdrop-blur-lg shadow-xl border-b border-gray-700/50' : ''
      ]"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div :class="['flex items-center justify-between transition-all duration-300 ease-in-out', isScrolled ? 'h-16' : 'h-28']">
          <router-link to="/" class="flex items-center flex-shrink-0 group" @click="closeMenu">
            <div
              :class="[
                'bg-white rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out',
                isScrolled ? 'w-14 h-14 p-1' : 'w-20 h-20 p-2'
              ]"
            >
              <img
                src="@/assets/ROCO-7.png"
                alt="RocoX Logo"
                class="object-contain w-full h-full"
              />
            </div>
          </router-link>

          <nav class="hidden md:flex items-center space-x-8">
            <router-link to="/" class="nav-link">Home</router-link>
            <router-link to="/products" class="nav-link">Client Portal</router-link>
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </nav>

          <div class="md:hidden">
            <button
              @click="menuOpen = !menuOpen"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800/60 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 transition"
              aria-controls="mobile-menu"
              :aria-expanded="menuOpen.toString()"
            >
              <span class="sr-only">Open main menu</span>
              <svg v-if="!menuOpen" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" /></svg>
              <svg v-else class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
        </div>
      </div>

      <Transition name="mobile-menu-slide">
        <div v-show="menuOpen" class="md:hidden absolute top-full left-0 w-full bg-gradient-to-b from-gray-900 to-gray-950 border-t border-gray-700/50 shadow-lg overflow-hidden" id="mobile-menu">
          <nav class="px-2 pt-4 pb-6 space-y-3">
            <router-link to="/" @click="closeMenu" class="mobile-nav-link">Home</router-link>
            <router-link to="/products" @click="closeMenu" class="mobile-nav-link">Client Portal</router-link>
            <router-link to="/contact" @click="closeMenu" class="mobile-nav-link">Contact</router-link>
          </nav>
        </div>
      </Transition>
    </header>

    <main class="main-content flex-1" :style="{ paddingTop: contentPaddingTop + 'px' }">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer class="bg-gray-900 border-t border-gray-800/50 py-12 px-6 lg:px-8">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div class="flex flex-col items-center md:items-start">
          <div class="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center p-1 mb-4">
            <img
              src="@/assets/ROCO-7.png" 
              alt="RocoX Logo"
              class="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
          <p class="text-gray-400 text-sm text-center md:text-left">© {{ new Date().getFullYear() }} RocoX Inc.<br>Intelligent Automation Solutions.</p>
        </div>
        <nav class="flex justify-center gap-6 md:gap-8" aria-label="Footer navigation">
          <router-link to="/" class="text-gray-400 hover:text-teal-400 transition-colors text-sm">Home</router-link>
          <router-link to="/products" class="text-gray-400 hover:text-teal-400 transition-colors text-sm">Client Portal</router-link>
          <router-link to="/contact" class="text-gray-400 hover:text-teal-400 transition-colors text-sm">Contact</router-link>
        </nav>
        <div class="flex justify-center md:justify-end gap-5">
          <a href="https://x.com/rocoxinc" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-teal-400 transition-colors" aria-label="RocoX on Twitter">
             <span class="sr-only">Twitter</span>
             <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <!-- <a href="#" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-teal-400 transition-colors" aria-label="RocoX on LinkedIn">
             <span class="sr-only">LinkedIn</span>
             <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a> -->
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

const menuOpen = ref(false)
const isScrolled = ref(false)
const headerRef = ref(null)

// Adjusted Heights in Pixels (corresponding to Tailwind classes)
const baseHeaderHeight = ref(112) // h-28 (7rem * 16px/rem)
const scrolledHeaderHeight = ref(64) // h-16 (4rem * 16px/rem)

const closeMenu = () => {
  menuOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const router = useRouter()
router.afterEach(() => {
  closeMenu()
  window.scrollTo(0, 0)
})

// Adjusted calculation for content padding top
const contentPaddingTop = computed(() => {
  // Use the actual header height based on scroll state
  return isScrolled.value ? scrolledHeaderHeight.value : baseHeaderHeight.value;
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll(); // Initial check
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
@import "tailwindcss";
.font-inter { font-family: 'Inter', sans-serif; }

/* Styles remain the same */
.nav-link {
  @apply text-base font-medium text-gray-300 hover:text-teal-300 transition-colors duration-200 relative py-2;
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    display: block;
    margin-top: 2px;
    right: 50%;
    background: theme('colors.teal.400');
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
  }
  &:hover::after {
    width: 100%;
    left: 0;
    right: auto;
  }
}

.nav-link.router-link-exact-active {
  @apply text-teal-400;
  &::after {
    width: 100%;
    left: 0;
    right: auto;
    background: theme('colors.teal.400');
  }
}

.mobile-nav-link {
  @apply block rounded-md px-4 py-3 text-base font-semibold text-gray-200 hover:bg-gray-800 hover:text-teal-300 transition-all duration-200;
}
.mobile-nav-link.router-link-exact-active {
  @apply bg-teal-600/20 text-teal-300;
}

.mobile-menu-slide-enter-active,
.mobile-menu-slide-leave-active {
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  max-height: 300px;
}
.mobile-menu-slide-enter-from,
.mobile-menu-slide-leave-to {
  opacity: 0;
  transform: translateY(-15px);
  max-height: 0;
}
.mobile-menu-slide-enter-to,
.mobile-menu-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
  max-height: 300px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.main-content {
  transition: padding-top 0.3s ease-in-out;
}
</style>