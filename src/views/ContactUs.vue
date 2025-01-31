<template>
  <div class="contact-us-container">
    <div class="contact-card">
      <h1>Contact Us</h1>
      <p>We’d love to hear from you! Fill out the form below, and we’ll get back to you as soon as possible.</p>
      
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Full Name</label>
          <input type="text" id="name" v-model="form.name" placeholder="Enter your name" required />
        </div>
        
        <div class="form-group">
          <label for="email">Email Address</label>
          <input type="email" id="email" v-model="form.email" placeholder="Enter your email" required />
        </div>
        
        <div class="form-group">
          <label for="message">Your Message</label>
          <textarea id="message" v-model="form.message" placeholder="Type your message here..." rows="5" required></textarea>
        </div>
        
        <button type="submit" class="btn-submit">Send Message</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    submitForm() {
      console.log("Form submitted:", this.form);
      alert("Thank you for reaching out! We will get back to you shortly.");
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    },
  },
};
</script>

<style scoped>
/* Background & Centering */
.contact-us-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #007bff, #0056b3);
  padding: 2rem;
}

/* Contact Card */
.contact-card {
  background: white;
  padding: 2.5rem;
  border-radius: 10px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 500px;
  text-align: center;
  animation: fadeIn 0.5s ease-in-out;
}

h1 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 0.5rem;
}

p {
  font-size: 1rem;
  color: #555;
  margin-bottom: 1.5rem;
}

/* Form Styling */
.form-group {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333;
}

input, textarea {
  padding: 0.9rem;
  font-size: 1rem;
  border: 2px solid #ddd;
  border-radius: 6px;
  outline: none;
  transition: border-color 0.3s;
}

input:focus, textarea:focus {
  border-color: #007bff;
  box-shadow: 0px 0px 5px rgba(0, 123, 255, 0.5);
}

/* Submit Button */
.btn-submit {
  padding: 0.9rem 1.5rem;
  font-size: 1rem;
  color: white;
  background: linear-gradient(to right, #007bff, #0056b3);
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease-in-out, transform 0.2s;
}

.btn-submit:hover {
  background: linear-gradient(to right, #0056b3, #003d82);
  transform: scale(1.05);
}

/* Fade-in Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>