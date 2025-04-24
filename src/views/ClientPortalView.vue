<template>
  <div class="client-portal-view py-24 sm:py-32 px-6 lg:px-8 bg-gray-950 text-gray-300 min-h-[calc(100vh-var(--header-height))]">
    <section class="max-w-5xl mx-auto mb-16 md:mb-24 text-center md:text-left md:flex md:items-center md:justify-between" data-aos="fade-down">
      <div>
        <h1 class="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl font-poppins">
          Client Portal
        </h1>
        <p class="mt-4 text-lg leading-7 text-gray-400">
          Welcome back! Access your Caley Insurance automation tools and insights.
        </p>
      </div>
      <div class="mt-8 md:mt-0 flex-shrink-0 flex justify-center md:justify-end">
        <div class="w-48 h-16 backdrop-blur-sm rounded-lg flex items-center justify-center p-2">
          <img src="@/assets/caley_logo.png" alt="Caley Insurance" >
        </div>
      </div>
    </section>

    <section class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="action-card primary-action" data-aos="fade-up">
          <div class="icon-wrapper bg-gradient-to-br from-teal-500 to-blue-600 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" /></svg>
          </div>
          <h3 class="mt-6 text-xl font-semibold text-white font-poppins">Access Your Platform</h3>
          <p class="mt-2 text-gray-400 text-sm">Log in to manage file uploads, monitor pipelines, and view dashboards.</p>
          <a href="https://cas.rocox.co" target="_blank" rel="noopener noreferrer" class="mt-6 btn btn-secondary w-full justify-center">
            Go to Platform <span class="ml-1">→</span>
          </a>
        </div>

        <div class="action-card" data-aos="fade-up" data-aos-delay="100">
          <div class="icon-wrapper bg-purple-500/10 text-purple-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h15.75c.621 0 1.125.504 1.125 1.125v6.75c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 19.875v-6.75zM12 18.75h.008v.008H12v-.008z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 15h.008v.008H12v-.008zM12 11.25h.008v.008H12V11.25zM12 7.5h.008v.008H12V7.5zM6 6h12v1.5H6V6zM3 3.75A1.125 1.125 0 014.125 2.625h15.75A1.125 1.125 0 0121 3.75v.75H3v-.75z" /></svg>
          </div>
          <h3 class="mt-6 text-xl font-semibold text-white font-poppins">View Reports</h3>
          <p class="mt-2 text-gray-400 text-sm">Access generated reports and performance analytics.</p>
          <button disabled class="mt-6 btn btn-secondary-disabled w-full justify-center opacity-60 cursor-not-allowed">
            View Reports (Soon)
          </button>
        </div>

        <div class="action-card" data-aos="fade-up" data-aos-delay="200">
          <div class="icon-wrapper bg-gray-600/20 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L1.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.25 12l2.846.813a4.5 4.5 0 01-3.09 3.09L15 18.75l-.813-2.846a4.5 4.5 0 013.09-3.09L18.25 12zM9 5.25l.813 2.846a4.5 4.5 0 013.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 01-3.09 3.09L9 18.75l-.813-2.846a4.5 4.5 0 01-3.09-3.09L1.25 12l2.846-.813a4.5 4.5 0 013.09-3.09L9 5.25z" /></svg>
          </div>
          <h3 class="mt-6 text-xl font-semibold text-white font-poppins">Get Support</h3>
          <p class="mt-2 text-gray-400 text-sm">Need help? Contact our dedicated support team.</p>
          <router-link to="/contact?source=client" class="mt-6 btn btn-secondary w-full justify-center">
            Contact Support
          </router-link>
        </div>
      </div>
    </section>

    <section class="max-w-4xl mx-auto mt-16 md:mt-24" data-aos="fade-up">
      <h2 class="text-2xl font-semibold text-white text-center mb-8 font-poppins">Your Accomplishments</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div class="bg-gray-900/60 border border-gray-800/70 rounded-lg p-6 text-center" data-aos="fade-up" data-aos-delay="100">
          <p class="text-3xl font-bold text-teal-400">{{ display.policiesProcessed.toLocaleString() }}+</p>
          <p class="mt-2 text-gray-400">Policies Automated</p>
        </div>
        <div class="bg-gray-900/60 border border-gray-800/70 rounded-lg p-6 text-center" data-aos="fade-up" data-aos-delay="200">
          <p class="text-3xl font-bold text-teal-400">{{ display.hoursSaved.toLocaleString() }}+</p>
          <p class="mt-2 text-gray-400">Hours Saved Monthly</p>
        </div>
        <div class="bg-gray-900/60 border border-gray-800/70 rounded-lg p-6 text-center" data-aos="fade-up" data-aos-delay="300">
          <p class="text-3xl font-bold text-teal-400">{{ display.locationsManaged }}</p>
          <p class="mt-2 text-gray-400">Locations Managed</p>
        </div>
        <div class="bg-gray-900/60 border border-gray-800/70 rounded-lg p-6 text-center" data-aos="fade-up" data-aos-delay="400">
          <p class="text-3xl font-bold text-teal-400">{{ display.accuracy }}%</p>
          <p class="mt-2 text-gray-400">Data Accuracy</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, reactive, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const clientName = computed(() => route.params.clientName || 'Valued Client')

// Target values (raw numbers)
const targets = {
  policiesProcessed: 5000,
  hoursSaved: 200,
  locationsManaged: 5,
  accuracy: 99.9
}

// Display values (for animation)
const display = reactive({
  policiesProcessed: ref(0),
  hoursSaved: ref(0),
  locationsManaged: ref(0),
  accuracy: ref(0)
})

function animateValue(key, end, duration = 1500, suffix = '') {
  const start = 0
  const range = end - start
  const startTime = performance.now()
  function step(now) {
    const progress = Math.min((now - startTime) / duration, 1)
    const value = start + range * progress
    display[key] = key === 'accuracy'
      ? value.toFixed(1)
      : Math.floor(value)
    if (progress < 1) {
      requestAnimationFrame(step)
    } else {
      display[key] = key === 'accuracy'
        ? end.toFixed(1)
        : end
    }
  }
  requestAnimationFrame(step)
}

onMounted(() => {
  animateValue('policiesProcessed', targets.policiesProcessed, 2000, '+')
  animateValue('hoursSaved', targets.hoursSaved, 2000, '+')
  animateValue('locationsManaged', targets.locationsManaged, 2000, '')
  animateValue('accuracy', targets.accuracy, 2000, '%')
})
</script>

<style scoped>
@import "tailwindcss";
/* .poppins { @apply font-poppins; } */

/* Ensure view takes up space below header */
.client-portal-view {
  min-height: calc(100vh - 80px);
}
@media (min-width: 768px) {
  .client-portal-view {
    min-height: calc(100vh - 80px);
  }
}

/* Buttons */
.btn {
  @apply inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold leading-6 shadow-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:cursor-not-allowed;
}
.btn-primary {
  @apply bg-gradient-to-r from-teal-500 to-blue-600 text-white hover:from-teal-600 hover:to-blue-700 hover:scale-[1.03] focus-visible:outline-teal-500;
}
.btn-secondary {
  @apply text-teal-300 ring-1 ring-inset ring-teal-400/50 hover:ring-teal-300 hover:bg-teal-400/10 focus-visible:outline-teal-400;
}
.btn-secondary-disabled {
  @apply text-gray-500 ring-1 ring-inset ring-gray-600;
}

/* Action Card Styling */
.action-card {
  @apply bg-gray-900/50 border border-gray-800/70 rounded-xl p-6 text-left transition-all duration-300 flex flex-col;
  min-height: 280px;
}
.action-card:hover {
  @apply bg-gray-800/80 border-teal-500/50 scale-[1.02];
}
.action-card.primary-action {
  @apply bg-gradient-to-br from-gray-900 via-gray-900 to-teal-900/30 border-teal-600/30;
}
.icon-wrapper {
  @apply w-12 h-12 rounded-lg flex items-center justify-center mb-4;
  svg {
    @apply w-6 h-6;
  }
}
.action-card p {
  flex-grow: 1;
}
.action-card .btn {
  margin-top: auto;
}
</style>