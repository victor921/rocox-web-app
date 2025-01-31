<template>
  <div class="home-container">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">Welcome to <span class="brand-name">RocoX</span></h1>
        <p class="hero-subtitle">
          Simplifying your business with <strong>Software</strong> and <strong>Automation</strong>.
        </p>
        <router-link to="/services" class="cta-button">Explore Our Services</router-link>
      </div>
    </section>

    <!-- About Section -->
    <section class="about">
      <div class="container">
        <h2>About Us</h2>
        <p>
          At <span class="brand-name">RocoX</span>, we craft software and automation solutions that streamline operations and drive efficiency, empowering businesses to reach their goals.
        </p>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services">
      <div class="container">
        <h2>Our Expertise</h2>
        <div class="service-cards">
          <div class="service-card">
            <h3>Custom Software</h3>
            <p>We design bespoke software tailored to your unique requirements.</p>
          </div>
          <div class="service-card">
            <h3>Automation Solutions</h3>
            <p>Streamline processes and save time with intelligent automation.</p>
          </div>
          <div class="service-card">
            <h3>Data Insights</h3>
            <p>Make informed decisions with actionable data analytics.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact">
      <div class="container">
        <h2>Get in Touch</h2>
        <p>
          Ready to transform your business? Contact us today for a consultation.
        </p>
        <router-link to="/contact" class="cta-button">Contact Us</router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
/* General Styles */
.home-container {
  font-family: "Arial", sans-serif;
  color: #333;
  background-color: #f9f9f9;
  line-height: 1.6;
  margin: 0;
  padding: 0;
}

/* Hero Section */
.hero {
  text-align: center;
  padding: 4rem 1.5rem;
  background-color: #fff;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #000;
}

.brand-name {
  color: #555;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: #777;
  margin: 1rem 0;
}

.cta-button {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.8rem 1.5rem;
  background-color: #333;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #555;
}

/* About Section */
.about {
  padding: 3rem 1.5rem;
  background-color: #f9f9f9;
  text-align: center;
}

.about h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #000;
}

.about p {
  font-size: 1.1rem;
  color: #555;
}

/* Services Section */
.services {
  padding: 3rem 1.5rem;
  background-color: #fff;
  text-align: center;
}

.services h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #000;
}

.service-cards {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.service-card {
  background-color: #f9f9f9;
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 300px;
  text-align: center;
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  border-color: #333;
}

.service-card h3 {
  font-size: 1.4rem;
  color: #000;
  margin-bottom: 1rem;
}

.service-card p {
  color: #555;
  font-size: 1rem;
}

/* Contact Section */
.contact {
  padding: 3rem 1.5rem;
  background-color: #f9f9f9;
  text-align: center;
}

.contact h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #000;
}

.contact p {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 1.5rem;
}

.contact .cta-button {
  background-color: #000;
}

.contact .cta-button:hover {
  background-color: #555;
}
</style>