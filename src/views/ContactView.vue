<template>
  <div class="contact-view py-24 sm:py-32 px-6 lg:px-8 bg-gray-950 text-gray-300">
    <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
      <div class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#14b8a6] to-[#3b82f6] opacity-15 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
    </div>

    <div class="mx-auto max-w-4xl text-center" data-aos="fade-up">
      <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl poppins">Get In Touch</h2>
      <p class="mt-4 text-lg leading-7 text-gray-400">
        Have questions or ready to start automating? Reach out to our team.
      </p>
    </div>

    <div class="mx-auto mt-16 max-w-xl sm:mt-20">
      <div v-if="submitStatus" :class="['mb-6 p-4 rounded-lg text-sm border', submitStatus === 'success' ? 'bg-teal-600/20 text-teal-200 border-teal-500/50' : 'bg-red-600/20 text-red-200 border-red-500/50']" data-aos="fade-in">
        {{ submitMessage }}
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-6" data-aos="fade-up" data-aos-delay="100">
        <div>
          <label for="name" class="sr-only">Full Name</label>
          <input type="text" id="name" name="name" v-model="formData.name" required :disabled="isSubmitting" placeholder="Full Name" class="form-input" autocomplete="name"/>
        </div>
        <div>
          <label for="email" class="sr-only">Email Address</label>
          <input type="email" id="email" name="email" v-model="formData.email" required :disabled="isSubmitting" placeholder="Email Address" class="form-input" autocomplete="email"/>
        </div>
        <div>
          <label for="phone" class="sr-only">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            v-model="formData.phone"
            :disabled="isSubmitting"
            placeholder="Phone Number (Optional)"
            class="form-input"
            autocomplete="tel"
          />
        </div>
         <div>
          <label for="company" class="sr-only">Company</label>
          <input type="text" id="company" name="company" v-model="formData.company" :disabled="isSubmitting" placeholder="Company Name (Optional)" class="form-input" autocomplete="organization"/>
        </div>
        <div>
          <label for="contact-method" class="sr-only">Preferred Contact Method</label>
          <select
            id="contact-method"
            name="contactMethod"
            v-model="formData.contactMethod"
            :disabled="isSubmitting"
            class="form-input"
          >
            <option value="" disabled selected>Select preferred contact</option>
            <option value="phone">Phone Call</option>
            <option value="text">Text Message</option>
            <option value="email">Email</option>
          </select>
        </div>
        <div>
          <label for="message" class="sr-only">Your Message</label>
          <textarea id="message" name="message" rows="4" v-model="formData.message" required :disabled="isSubmitting" placeholder="Your Message" class="form-input"></textarea>
        </div>
        <div class="flex items-start gap-x-3">
           <input type="checkbox" id="consent" name="consent" v-model="formData.consent" required :disabled="isSubmitting" class="h-4 w-4 mt-1 rounded border-gray-600 bg-gray-800 text-teal-500 focus:ring-teal-500 focus:ring-offset-gray-950 cursor-pointer" />
           <label for="consent" class="text-sm leading-6 text-gray-400 cursor-pointer">
            I agree to the RocoX
            <span class="relative group inline-block">
              <span class="font-semibold text-teal-400 hover:text-teal-300 cursor-pointer">Privacy Policy</span>
              <div class="absolute left-0 bottom-full mb-2 w-64 p-3 text-xs text-gray-200 bg-gray-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <strong>RocoX Inc. Privacy Policy</strong><br>
                We collect your name, email, phone, company, message, and consent solely to respond to your inquiry. Your data is stored securely and never shared. Request deletion anytime.
              </div>
            </span>.
          </label>
        </div>
        <div>
          <button
            type="submit"
            :disabled="isSubmitting || !formData.consent"
            class="btn btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed group"
          >
            <span v-if="!isSubmitting" class="flex items-center">
              Send Message <span class="ml-1 transition-transform duration-200 group-hover:translate-x-1">→</span>
            </span>
            <span v-else class="flex items-center justify-center">
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
// Assuming AOS is initialized globally or in App.vue

const formEndpoint = "https://formspree.io/f/xdkgowad"; // Your Formspree endpoint

const formData = reactive({
  name: '',
  email: '',
  phone: '',
  contactMethod: '',
  company: '',
  message: '',
  consent: false,
});

const isSubmitting = ref(false);
const submitStatus = ref(''); // 'success' or 'error'
const submitMessage = ref('');

const handleSubmit = async () => {
  // Basic check (HTML5 required handles most, but good practice)
  if (!formData.name || !formData.email || !formData.message || !formData.consent) {
    submitStatus.value = 'error';
    submitMessage.value = 'Please fill out all required fields and agree to the policy.';
    return;
  }

  isSubmitting.value = true;
  submitStatus.value = '';
  submitMessage.value = '';

  try {
    const response = await fetch(formEndpoint, {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        contactMethod: formData.contactMethod,
        company: formData.company,
        message: formData.message,
        consent: formData.consent,
        _subject: `RocoX Contact Form: ${formData.name}`,
      }),
    });

    if (response.ok) {
      submitStatus.value = 'success';
      submitMessage.value = 'Message sent! We\'ll be in touch soon.';
      Object.keys(formData).forEach(key => { formData[key] = (key === 'consent' ? false : ''); });
      formData.phone = '';
      formData.contactMethod = '';
    } else {
      const data = await response.json().catch(() => ({})); // Graceful error handling
      throw new Error(data?.errors?.map(e => e.message).join(', ') || `HTTP error ${response.status}`);
    }
  } catch (error) {
    console.error("Form submission error:", error);
    submitStatus.value = 'error';
    submitMessage.value = `Failed to send message. ${error.message || 'Please try again.'}`;
  } finally {
    isSubmitting.value = false;
  }
};
const poppins = ref('Poppins');
</script>

<style scoped>
@import "tailwindcss";
/* .poppins { font-family: 'Poppins', sans-serif; } */

.form-input {
  @apply block w-full rounded-md border-0 bg-white/5 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6 transition duration-200;
}
.form-input:-webkit-autofill,
.form-input:-webkit-autofill:hover,
.form-input:-webkit-autofill:focus,
.form-input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px theme('colors.gray.900') inset !important; /* Adjust autofill bg */
  -webkit-text-fill-color: theme('colors.white') !important;
  caret-color: theme('colors.white');
  border-radius: theme('borderRadius.md');
}

textarea.form-input {
    min-height: 120px; /* Ensure textarea has good height */
    resize: vertical; /* Allow vertical resize */
}

/* Button styles (assuming defined globally or in App.vue) */
.btn {
    @apply inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold leading-7 shadow-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2;
}
.btn-primary {
    @apply bg-gradient-to-r from-teal-500 to-blue-600 text-white hover:from-teal-600 hover:to-blue-700 hover:scale-[1.03] focus-visible:outline-teal-500;
}

</style>