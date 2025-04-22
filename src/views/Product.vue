<template>
  <div class="products-container bg-white min-h-screen">
    <!-- Hero Section -->
    <section class="hero relative bg-gray-50 py-16 px-4 sm:px-6 md:px-12 lg:py-20 overflow-hidden">
      <div class="absolute inset-0 opacity-5">
        <svg class="w-full h-full" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 300C200 350 400 250 720 300C1040 350 1240 250 1440 300" stroke="#9CA3AF" stroke-width="2" stroke-dasharray="10 10"/>
        </svg>
      </div>
      <div class="relative max-w-5xl mx-auto text-center animate-fade-in">
        <img src="@/assets/caley_logo.png" alt="Company Logo" class="mx-auto w-16 sm:w-20 animate-pulse" />
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-4">
          Automation & AI Solutions
        </h1>
        <p class="text-base sm:text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Empower your business with seamless <strong>file consolidation</strong>, real-time processing, and <strong>AI-driven insights</strong>.
        </p>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features py-12 px-4 sm:px-6 md:px-12 bg-white">
      <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 animate-fade-in">Key Features</h2>
      <div class="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div class="feature-card bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md hover:scale-105 transition-all duration-300 animate-fade-in">
          <svg class="w-8 h-8 text-gray-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
          <h3 class="text-lg font-bold text-gray-900">File Processing</h3>
          <p class="text-gray-600 mt-2">Drag-and-drop interface with automated validation for statements.</p>
        </div>
        <div class="feature-card bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md hover:scale-105 transition-all duration-300 animate-fade-in">
          <svg class="w-8 h-8 text-gray-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
          </svg>
          <h3 class="text-lg font-bold text-gray-900">Database Integration</h3>
          <p class="text-gray-600 mt-2">Securely manage records with automated pipelines.</p>
        </div>
        <div class="feature-card bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md hover:scale-105 transition-all duration-300 animate-fade-in">
          <svg class="w-8 h-8 text-gray-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01m-.01 4h.01" />
          </svg>
          <h3 class="text-lg font-bold text-gray-900">Automated Pipelines</h3>
          <p class="text-gray-600 mt-2">Real-time data processing with live tracking.</p>
        </div>
        <div class="feature-card bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md hover:scale-105 transition-all duration-300 animate-fade-in">
          <svg class="w-8 h-8 text-gray-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <h3 class="text-lg font-bold text-gray-900">AI Insights</h3>
          <p class="text-gray-600 mt-2">Smart analytics for performance optimization.</p>
        </div>
        <div class="feature-card bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md hover:scale-105 transition-all duration-300 animate-fade-in">
          <svg class="w-8 h-8 text-gray-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0-1.1.9-2 2-2s2 .9 2 2-2 4-2 4m-2-4c0-1.1-.9-2-2-2s-2 .9-2 2 2 4 2 4m4-8h4m-4 12h4M4 7h4m-4 12h4M3 3l18 18" />
          </svg>
          <h3 class="text-lg font-bold text-gray-900">Secure Authentication</h3>
          <p class="text-gray-600 mt-2">Google OAuth2 for authorized access.</p>
        </div>
        <div class="feature-card bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md hover:scale-105 transition-all duration-300 animate-fade-in">
          <svg class="w-8 h-8 text-gray-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10h6m-6-10h6M5 7h14a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2z" />
          </svg>
          <h3 class="text-lg font-bold text-gray-900">User Dashboard</h3>
          <p class="text-gray-600 mt-2">Intuitive UI for process management.</p>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="how-it-works py-12 px-4 sm:px-6 md:px-12 bg-gray-50">
      <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 animate-fade-in">How It Works</h2>
      <div class="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div class="step bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 animate-fade-in">
          <svg class="w-8 h-8 text-gray-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
          <h3 class="text-lg font-bold text-gray-900">Upload Files</h3>
          <p class="text-gray-600 mt-2">Drag and drop statements for processing.</p>
        </div>
        <div class="step bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 animate-fade-in">
          <svg class="w-8 h-8 text-gray-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          </svg>
          <h3 class="text-lg font-bold text-gray-900">Run Pipelines</h3>
          <p class="text-gray-600 mt-2">Automate data extraction and storage.</p>
        </div>
        <div class="step bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 animate-fade-in">
          <svg class="w-8 h-8 text-gray-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <h3 class="text-lg font-bold text-gray-900">Validate & Monitor</h3>
          <p class="text-gray-600 mt-2">Track logs and statuses in real-time.</p>
        </div>
        <div class="step bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 animate-fade-in">
          <svg class="w-8 h-8 text-gray-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <h3 class="text-lg font-bold text-gray-900">Analyze Results</h3>
          <p class="text-gray-600 mt-2">Use AI analytics for decision-making.</p>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta py-12 px-4 sm:px-6 md:px-12 bg-gray-50">
      <div class="max-w-5xl mx-auto text-center animate-fade-in">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900">Transform Your Workflow</h2>
        <p class="text-base sm:text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Contact us to streamline your <strong>automation</strong> and leverage <strong>AI</strong> for efficiency.
        </p>
        <div class="cta-buttons mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <router-link to="/contact" class="btn-primary bg-gray-600 text-white px-6 py-3 rounded-md font-semibold hover:scale-105 transition-transform duration-300">
            Contact Us
          </router-link>
          <a href="https://cas.rocox.co" target="_blank" class="btn-secondary bg-transparent border-2 border-gray-600 text-gray-600 px-6 py-3 rounded-md font-semibold hover:scale-105 transition-transform duration-300">
            Access Your Site
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Products",
};
</script>

<style scoped>
/* Import Tailwind CSS and Google Fonts */
@import 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap';
@import 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css';

/* Custom Animations */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.03); }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}

.animate-pulse {
  animation: pulse 2.5s ease-in-out infinite;
}

/* Custom Styles */
.products-container {
  font-family: 'Inter', sans-serif;
}

/* Responsive Adjustments */
@media (max-width: 640px) {
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  .btn-primary, .btn-secondary {
    width: 100%;
    max-width: 280px;
  }
  .features-grid, .steps {
    grid-template-columns: 1fr;
  }
}
</style>