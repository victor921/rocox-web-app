<template>
  <div class="contact-us-container bg-white min-h-screen flex items-center justify-center">
    <div class="contact-card bg-gray-50 p-8 sm:p-10 rounded-lg border border-gray-200 max-w-md w-full mx-4 animate-fade-in">
      <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Contact RocoX</h1>
      <p class="text-base sm:text-lg text-gray-600 mt-4 text-center">
        Let’s discuss how our <strong>automation</strong> and <strong>AI</strong> solutions can help you.
      </p>
      
      <form @submit.prevent="submitForm" class="mt-6 space-y-4">
        <div class="form-group">
          <label for="name" class="block text-sm font-semibold text-gray-700">Full Name</label>
          <input
            type="text"
            id="name"
            v-model="form.name"
            placeholder="Enter your name"
            required
            class="w-full mt-1 px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md focus:border-gray-600 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
          />
        </div>
        
        <div class="form-group">
          <label for="email" class="block text-sm font-semibold text-gray-700">Email Address</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            placeholder="Enter your email"
            required
            class="w-full mt-1 px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md focus:border-gray-600 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
          />
        </div>
        
        <div class="form-group">
          <label for="phone" class="block text-sm font-semibold text-gray-700">Phone Number</label>
          <input
            type="tel"
            id="phone"
            v-model="form.phone"
            placeholder="Enter your phone number"
            class="w-full mt-1 px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md focus:border-gray-600 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
          />
        </div>
        
        <div class="form-group">
          <label for="company" class="block text-sm font-semibold text-gray-700">Company Name</label>
          <input
            type="text"
            id="company"
            v-model="form.company"
            placeholder="Enter your company name"
            class="w-full mt-1 px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md focus:border-gray-600 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
          />
        </div>
        
        <div class="form-group">
          <label for="message" class="block text-sm font-semibold text-gray-700">Your Message</label>
          <textarea
            id="message"
            v-model="form.message"
            placeholder="Tell us about your needs..."
            rows="4"
            required
            class="w-full mt-1 px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md focus:border-gray-600 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
          ></textarea>
        </div>

        <div class="form-group flex items-start">
          <input
            type="checkbox"
            id="consent"
            v-model="form.consent"
            required
            class="mt-1 h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
          />
          <label for="consent" class="ml-2 text-sm text-gray-700">
            I consent to having this website store my submitted information for the purpose of responding to my inquiry.
            <span class="relative group text-gray-600 underline hover:text-gray-800 cursor-pointer">
              Privacy Policy
              <div class="absolute left-0 bottom-full mb-2 w-64 p-3 text-xs text-gray-800 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-20">
                <strong>RocoX Inc. Privacy Policy</strong><br>
                We collect your name, email, phone, company, and message solely to respond to your inquiry. Your information is stored securely and will not be shared with third parties. You may request deletion at any time. By submitting this form, you consent to this use of your data.
              </div>
            </span>.
          </label>
        </div>
        
        <button
          type="submit"
          :disabled="isSubmitting || !form.consent"
          class="w-full bg-gray-600 text-white px-6 py-3 rounded-md font-semibold hover:scale-105 transition-transform duration-300 disabled:opacity-50"
        >
          {{ isSubmitting ? 'Sending...' : 'Send Message' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        consent: false,
      },
      isSubmitting: false,
    };
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true;
      try {
        const response = await axios.post('/api/contact', this.form);
        console.log('Form submission response:', response.data);
        alert('Thank you for your message! We’ll get back to you soon.');
        this.form = { name: '', email: '', phone: '', company: '', message: '', consent: false };
      } catch (error) {
        console.error('Form submission error:', error);
        alert('An error occurred. Please try again later.');
      } finally {
        this.isSubmitting = false;
      }
    },
  },
};
</script>

<style scoped>
@import 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap';
@import 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css';

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in { animation: fadeIn 0.8s ease-out; }

.contact-us-container { font-family: 'Inter', sans-serif; }

@media (max-width: 640px) {
  .contact-card { padding: 1.5rem; }
}
</style>