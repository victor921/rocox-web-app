<template>
  <div class="home-container">
    <!-- Hero Section -->
    <div class="hero">
      <img class="logo" src="@/assets/ROCO-7.png" alt="Company Logo" />
      <h1>Welcome to <span class="highlight">RocoX</span></h1>
      <p class="subtitle">Innovating with <strong>Automation</strong> & <strong>Custom Software</strong> to enhance your business efficiency.</p>

      <div class="cta-buttons">
        <router-link to="/products" class="btn primary">Our Products</router-link>
        <router-link to="/contact" class="btn secondary">Get in Touch</router-link>
      </div>
    </div>

    <!-- About Section -->
    <div class="about-section">
      <h2>About Rocox</h2>
      <p>We specialize in cutting-edge **automation** and **custom software development** to streamline your business operations.</p>
      <p>Our solutions range from **data automation**, **business intelligence**, **workflow automation**, and **custom AI integrations** to help businesses scale efficiently.</p>
    </div>

    <!-- Key Features -->
    <div class="features">
      <div class="feature-card">
        <h3>Process Automation</h3>
        <p>We automate your manual workflows to save time and resources.</p>
      </div>
      <div class="feature-card">
        <h3>Custom Software</h3>
        <p>Tailor-made software solutions to fit your business needs.</p>
      </div>
      <div class="feature-card">
        <h3>AI-Powered Insights</h3>
        <p>Integrate **AI-driven** analytics to make informed business decisions.</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
/* General Layout */
.home-container {
  text-align: center;
  padding: 50px 20px;
  color: #333;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #003366, #005bb5);
  padding: 100px 20px;
  border-radius: 12px;
  color: white;
  position: relative;
}

.logo {
  width: 140px; /* Bigger logo */
  height: auto;
  margin-bottom: 20px;
}

.hero h1 {
  font-size: 2.8rem;
  font-weight: bold;
}

.highlight {
  color: #ffcc00;
}

.subtitle {
  font-size: 1.2rem;
  margin-top: 15px;
  opacity: 0.9;
}

/* CTA Buttons */
.cta-buttons {
  margin-top: 25px;
}

.btn {
  text-decoration: none;
  padding: 14px 26px;
  font-size: 1.1rem;
  border-radius: 8px;
  display: inline-block;
  margin: 10px;
  font-weight: bold;
  transition: all 0.3s ease;
}

.primary {
  background: #ffcc00;
  color: #003366;
}

.primary:hover {
  background: #ffb300;
}

.secondary {
  background: white;
  color: #005bb5;
  border: 2px solid #005bb5;
}

.secondary:hover {
  background: #005bb5;
  color: white;
}

/* About Section */
.about-section {
  margin-top: 60px;
  padding: 40px 20px;
  background: #f9f9f9;
  border-radius: 12px;
}

.about-section h2 {
  color: #003366;
  font-size: 2rem;
}

.about-section p {
  font-size: 1.1rem;
  color: #555;
  margin: 10px 0;
}

/* Features Section */
.features {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
  flex-wrap: wrap;
}

.feature-card {
  background: white;
  border-radius: 12px;
  padding: 25px;
  width: 300px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.feature-card h3 {
  margin-bottom: 10px;
  color: #005bb5;
}

.feature-card p {
  font-size: 1rem;
  opacity: 0.8;
}

.feature-card:hover {
  transform: translateY(-5px);
}

/* Footer */
footer {
  margin-top: 50px;
  font-size: 0.9rem;
  color: #666;
}
</style>