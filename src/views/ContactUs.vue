<template>
    <div class="contact-us">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Fill out the form below to get in touch.</p>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="form.name" placeholder="Your Name" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="form.email" placeholder="Your Email" required />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" v-model="form.message" placeholder="Your Message" rows="5" required></textarea>
        </div>
        <button type="submit" class="btn-submit">Send Message</button>
      </form>
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
        // Log form data (replace with API call if needed)
        console.log("Form submitted:", this.form);
        alert("Thank you for contacting us! We'll get back to you soon.");
        this.form.name = '';
        this.form.email = '';
        this.form.message = '';
      },
    },
  };
  </script>
  
  <style scoped>
  .contact-us {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
    font-family: Arial, sans-serif;
  }
  
  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1rem;
    margin-bottom: 2rem;
    color: #555;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  
  label {
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
  
  input,
  textarea {
    padding: 0.8rem;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    outline: none;
    transition: border-color 0.2s;
  }
  
  input:focus,
  textarea:focus {
    border-color: #007bff;
  }
  
  .btn-submit {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    color: white;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .btn-submit:hover {
    background-color: #0056b3;
  }
  </style>