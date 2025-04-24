<template>
  <div class="home-view overflow-x-hidden">
    <section class="relative isolate min-h-screen flex items-center justify-center text-center px-6 py-24 sm:py-32 lg:px-8 overflow-hidden bg-gray-950">
      <div class="absolute inset-0 -z-10 overflow-hidden">
        <div class="aurora-overlay"></div>
      </div>

      <div class="relative z-10 max-w-3xl mx-auto" data-aos="fade-up">
        <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl font-poppins leading-tight">
          Transform Your Business with RocoX AI Automation
        </h1>
        <p class="mt-6 text-lg leading-8 text-gray-300 max-w-xl mx-auto">
          RocoX provides cutting-edge AI and automation software to streamline your complex workflows, boost efficiency, and drive growth.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <router-link to="/products" class="btn btn-primary">Explore Platform</router-link>
          <router-link to="/contact" class="btn btn-secondary group">
            Get In Touch <span class="ml-1 transition-transform duration-200 group-hover:translate-x-1">→</span>
          </router-link>
        </div>
      </div>
    </section>

    <section class="py-20 sm:py-28 bg-gray-900 px-6 lg:px-8">
      <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div data-aos="fade-right">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl font-poppins">Overcome Operational Bottlenecks</h2>
          <p class="mt-6 text-lg leading-7 text-gray-400">
            Manual data handling, disconnected systems, and repetitive tasks drain resources and hinder scalability. RocoX targets these pain points directly.
          </p>
          <ul class="mt-6 space-y-3 text-gray-300">
            <li class="flex items-start">
              <svg class="flex-shrink-0 w-5 h-5 text-teal-400 mt-1 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
              Eliminate manual data entry errors and delays.
            </li>
            <li class="flex items-start">
              <svg class="flex-shrink-0 w-5 h-5 text-teal-400 mt-1 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
              Consolidate data from disparate sources seamlessly.
            </li>
            <li class="flex items-start">
              <svg class="flex-shrink-0 w-5 h-5 text-teal-400 mt-1 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
              Gain real-time visibility and actionable insights.
            </li>
          </ul>
        </div>
        <div class="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-2xl" data-aos="fade-left">
          <div class="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-blue-600/20 flex items-center justify-center">
            <svg class="w-24 h-24 text-gray-600 opacity-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
          </div>
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1484&q=80" alt="Abstract team collaboration" class="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity"/>
        </div>
      </div>
    </section>

    <section class="py-20 sm:py-28 bg-gray-950 px-6 lg:px-8 relative overflow-hidden">
      <div class="absolute inset-0 -z-10 h-full w-full bg-gray-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] opacity-30"></div>

      <div class="relative z-10 max-w-6xl mx-auto text-center">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl font-poppins mb-4" data-aos="fade-up">Why Choose RocoX?</h2>
        <p class="text-lg leading-7 text-gray-400 mb-16 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Our platform combines powerful automation with intelligent insights tailored for your success.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="feature-card" data-aos="fade-up" data-aos-delay="200">
            <div class="icon-wrapper bg-teal-500/10 text-teal-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 class="mt-6 text-xl font-semibold text-white font-poppins">Boost Efficiency</h3>
            <p class="mt-2 text-gray-400">Automate hours of manual work, freeing up your team for high-value tasks.</p>
          </div>
          <div class="feature-card" data-aos="fade-up" data-aos-delay="300">
            <div class="icon-wrapper bg-blue-500/10 text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" /><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" /></svg>
            </div>
            <h3 class="mt-6 text-xl font-semibold text-white font-poppins">AI-Driven Insights</h3>
            <p class="mt-2 text-gray-400">Leverage intelligent analytics for smarter decisions and performance tracking.</p>
          </div>
          <div class="feature-card" data-aos="fade-up" data-aos-delay="400">
            <div class="icon-wrapper bg-purple-500/10 text-purple-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <h3 class="mt-6 text-xl font-semibold text-white font-poppins">Secure & Reliable</h3>
            <p class="mt-2 text-gray-400">Built with enterprise-grade security and robust data pipelines you can trust.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 sm:py-28 bg-gray-900 px-6 lg:px-8 text-center">
      <div class="max-w-4xl mx-auto" data-aos="zoom-in">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl font-poppins">Ready to Transform Your Operations?</h2>
        <p class="mt-6 text-lg leading-7 text-gray-400">
          Let's discuss how RocoX can tailor an automation strategy for your specific needs.
        </p>
        <div class="mt-10">
          <router-link to="/contact" class="btn btn-primary btn-lg">Request a Consultation</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
</script>

<style scoped>
.poppins { @apply font-poppins; }

/* Aurora Background Effect */
.aurora-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 30% 20%, rgba(20, 184, 166, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 70% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%);
  filter: blur(60px);
  opacity: 0.7;
  animation: aurora-float 15s ease-in-out infinite alternate;
}

@keyframes aurora-float {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(5px, -10px) scale(1.05); }
}

/* Buttons */
.btn {
  @apply inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold leading-7 shadow-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2;
}
.btn-lg { @apply px-8 py-4; }

.btn-primary {
  @apply bg-gradient-to-r from-teal-500 to-blue-600 text-white hover:from-teal-600 hover:to-blue-700 hover:scale-[1.03] focus-visible:outline-teal-500;
}
.btn-secondary {
  @apply text-teal-300 ring-1 ring-inset ring-teal-400/50 hover:ring-teal-300 hover:bg-teal-400/10 focus-visible:outline-teal-400;
}

/* Feature Card Styling */
.feature-card {
  @apply bg-gray-900/50 border border-gray-800/70 rounded-xl p-8 text-center transition-all duration-300 hover:bg-gray-800/80 hover:border-teal-500/50 hover:scale-[1.02];
}
.icon-wrapper {
  @apply w-16 h-16 rounded-full inline-flex items-center justify-center mx-auto;
  svg { @apply w-8 h-8; }
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .home-view h1 { @apply text-4xl sm:text-5xl; }
  .home-view h2 { @apply text-2xl sm:text-3xl; }
  .btn-lg { @apply px-6 py-3 text-sm; }
}
</style>