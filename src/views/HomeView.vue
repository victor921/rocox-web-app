<template>
  <div class="home-container bg-white min-h-screen">
    <!-- Hero Section -->
    <div class="hero relative bg-gray-50 py-16 px-4 sm:px-6 md:px-12 lg:py-20 overflow-hidden">
      <div class="absolute inset-0 opacity-5">
        <svg class="w-full h-full" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 300C200 350 400 250 720 300C1040 350 1240 250 1440 300" stroke="#9CA3AF" stroke-width="2" stroke-dasharray="10 10"/>
        </svg>
      </div>
      <div class="relative max-w-5xl mx-auto text-center animate-fade-in">
        <img class="logo mx-auto w-16 sm:w-20 animate-pulse" src="@/assets/ROCO-7.png" alt="Company Logo" />
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-4">
          Automate with <span class="text-gray-600">RocoX</span>
        </h1>
        <p class="text-base sm:text-lg text-gray-600 mt-4 max-w-xl mx-auto">
          Modern <strong>automation</strong> and <strong>AI-driven software</strong> to streamline your operations.
        </p>
        <div class="cta-buttons mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <router-link to="/products" class="btn primary bg-gray-600 text-white px-6 py-3 rounded-md font-semibold hover:scale-105 transition-transform duration-300">
            Discover Solutions
          </router-link>
          <router-link to="/contact" class="btn secondary bg-transparent border-2 border-gray-600 text-gray-600 px-6 py-3 rounded-md font-semibold hover:scale-105 transition-transform duration-300">
            Contact Us
          </router-link>
        </div>
      </div>
    </div>

    <!-- About Section -->
    <div class="about-section py-12 px-4 sm:px-6 md:px-12 bg-white">
      <div class="max-w-4xl mx-auto text-center animate-fade-in">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900">RocoX: Simplifying Operations</h2>
        <p class="text-base sm:text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          We deliver <strong>automation</strong> and <strong>AI-powered software</strong> to save time and enhance efficiency across your locations.
        </p>
      </div>
    </div>

    <!-- Key Features -->
    <div class="features py-12 px-4 sm:px-6 md:px-12 bg-gray-50">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 animate-fade-in">Our Expertise</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div class="feature-card bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md hover:scale-105 transition-all duration-300 animate-fade-in">
            <svg class="w-8 h-8 text-gray-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <h3 class="text-lg font-bold text-gray-900">Automation</h3>
            <p class="text-gray-600 mt-2">Consolidate files and workflows effortlessly.</p>
          </div>
          <div class="feature-card bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md hover:scale-105 transition-all duration-300 animate-fade-in">
            <svg class="w-8 h-8 text-gray-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <h3 class="text-lg font-bold text-gray-900">Custom Software</h3>
            <p class="text-gray-600 mt-2">Tailored solutions for your business needs.</p>
          </div>
          <div class="feature-card bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md hover:scale-105 transition-all duration-300 animate-fade-in">
            <svg class="w-8 h-8 text-gray-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <h3 class="text-lg font-bold text-gray-900">AI Insights</h3>
            <p class="text-gray-600 mt-2">Data-driven decisions with AI analytics.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Insights Section with Charts -->
    <div class="insights-section py-12 px-4 sm:px-6 md:px-12 bg-white">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 text-center animate-fade-in">Automation Results</h2>
        <p class="text-base sm:text-lg text-gray-600 mt-4 text-center max-w-2xl mx-auto">
          Track the impact of our file consolidation automation across your locations.
        </p>
        <div v-if="chartsFailed" class="text-center text-gray-600 mt-8">
          <svg class="mx-auto w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <p class="mt-2">Unable to load charts. Please try refreshing the page.</p>
        </div>
        <div v-else class="charts grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div class="chart-container bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 class="text-lg font-bold text-gray-900 mb-4">Time Saved per Location</h3>
            <canvas id="timeSavedChart"></canvas>
          </div>
          <div class="chart-container bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 class="text-lg font-bold text-gray-900 mb-4">Files Consolidated per Location</h3>
            <canvas id="filesConsolidatedChart"></canvas>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      chartsFailed: false,
    };
  },
  mounted() {
    // Function to initialize charts
    const initCharts = () => {
      if (typeof Chart === 'undefined') {
        console.error('Chart.js is not loaded. Ensure the CDN script is included in index.html.');
        this.chartsFailed = true;
        return false;
      }

      // Time Saved Bar Chart
      const timeSavedCtx = document.getElementById('timeSavedChart')?.getContext('2d');
      if (timeSavedCtx) {
        new Chart(timeSavedCtx, {
          type: 'bar',
          data: {
            labels: ['Caley Main', 'Caley Orlando', 'Miami Central'],
            datasets: [{
              label: 'Hours Saved',
              data: [120, 95, 80],
              backgroundColor: 'rgba(75, 85, 99, 0.5)',
              borderColor: 'rgba(75, 85, 99, 1)',
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'Hours Saved',
                  font: { size: 12 }
                },
                ticks: { font: { size: 10 } }
              },
              x: { ticks: { font: { size: 10 } } }
            },
            plugins: {
              legend: { display: false }
            }
          }
        });
      } else {
        console.error('Time Saved Chart canvas not found.');
        this.chartsFailed = true;
        return false;
      }

      // Files Consolidated Line Chart
      const filesConsolidatedCtx = document.getElementById('filesConsolidatedChart')?.getContext('2d');
      if (filesConsolidatedCtx) {
        new Chart(filesConsolidatedCtx, {
          type: 'line',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr'],
            datasets: [
              {
                label: 'Caley Main',
                data: [500, 600, 550, 620],
                borderColor: 'rgba(75, 85, 99, 1)',
                backgroundColor: 'rgba(75, 85, 99, 0.2)',
                fill: false,
                tension: 0.3
              },
              {
                label: 'Caley Orlando',
                data: [400, 450, 430, 480],
                borderColor: 'rgba(156, 163, 175, 1)',
                backgroundColor: 'rgba(156, 163, 175, 0.2)',
                fill: false,
                tension: 0.3
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'Files Consolidated',
                  font: { size: 12 }
                },
                ticks: { font: { size: 10 } }
              },
              x: { ticks: { font: { size: 10 } } }
            },
            plugins: {
              legend: {
                position: 'top',
                labels: { font: { size: 10 } }
              }
            }
          }
        });
      } else {
        console.error('Files Consolidated Chart canvas not found.');
        this.chartsFailed = true;
        return false;
      }
      return true;
    };

    // Retry chart initialization
    let attempts = 0;
    const maxAttempts = 5;
    const retryInterval = 500;

    const tryInitCharts = () => {
      if (initCharts()) {
        console.log('Charts initialized successfully.');
        this.chartsFailed = false;
      } else if (attempts < maxAttempts) {
        attempts++;
        console.warn(`Chart initialization attempt ${attempts} failed. Retrying in ${retryInterval}ms...`);
        setTimeout(tryInitCharts, retryInterval);
      } else {
        console.error('Failed to initialize charts after maximum attempts.');
        this.chartsFailed = true;
      }
    };

    // Initial attempt after DOM is ready
    this.$nextTick(() => setTimeout(tryInitCharts, 200));
  }
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
.home-container {
  font-family: 'Inter', sans-serif;
}

/* Hero Section */
.hero {
  min-height: 400px;
}

/* Chart Containers */
.chart-container {
  height: 250px;
}

/* Responsive Adjustments */
@media (max-width: 640px) {
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  .btn {
    width: 100%;
    max-width: 280px;
  }
  .charts {
    grid-template-columns: 1fr;
  }
  .chart-container {
    height: 200px;
  }
}
</style>