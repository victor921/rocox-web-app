<template>
  <div class="products-container">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <img src="@/assets/caley_logo.png" alt="Company Logo" class="company-logo" />
        <h1>Our Cutting-Edge Automation Solutions</h1>
        <p>Empowering insurance companies with seamless automation, real-time data processing, and secure cloud integrations.</p>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <h2>Key Features</h2>
      <div class="features-grid">
        <div class="feature-card">
          <i class="fas fa-file-upload"></i>
          <h3>File Submission & Processing</h3>
          <p>Upload and process statements effortlessly with our drag-and-drop interface, automatic validation, and error checking.</p>
        </div>

        <div class="feature-card">
          <i class="fas fa-database"></i>
          <h3>Database Integration</h3>
          <p>Update and manage insurance records securely through an automated backend pipeline.</p>
        </div>

        <div class="feature-card">
          <i class="fas fa-tasks"></i>
          <h3>Automated Pipelines</h3>
          <p>Trigger and monitor data processing pipelines in real-time with live status tracking.</p>
        </div>

        <div class="feature-card">
          <i class="fas fa-chart-line"></i>
          <h3>AI-Powered Insights</h3>
          <p>Generate smart recommendations and analytics to optimize performance and identify trends.</p>
        </div>

        <div class="feature-card">
          <i class="fas fa-lock"></i>
          <h3>Secure Authentication</h3>
          <p>Google OAuth2-based authentication ensures only authorized users access critical data.</p>
        </div>

        <div class="feature-card">
          <i class="fas fa-users"></i>
          <h3>User-Friendly Dashboard</h3>
          <p>Monitor and manage processes effortlessly with an intuitive, modern UI.</p>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="how-it-works">
      <h2>How It Works</h2>
      <div class="steps">
        <div class="step">
          <i class="fas fa-upload"></i>
          <h3>1. Upload Files</h3>
          <p>Drag and drop or select insurance statement files for automated processing.</p>
        </div>
        <div class="step">
          <i class="fas fa-cogs"></i>
          <h3>2. Run Pipelines</h3>
          <p>Trigger pre-configured pipelines for seamless data extraction, transformation, and storage.</p>
        </div>
        <div class="step">
          <i class="fas fa-check-circle"></i>
          <h3>3. Validate & Monitor</h3>
          <p>Check real-time logs, error reports, and completion statuses from your dashboard.</p>
        </div>
        <div class="step">
          <i class="fas fa-chart-pie"></i>
          <h3>4. Analyze Results</h3>
          <p>Leverage AI-powered analytics and insights to enhance decision-making.</p>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta">
      <h2>Experience Automation Like Never Before</h2>
      <p>Get in touch with us to streamline your insurance statement processing and business workflows.</p>
      <div class="cta-buttons">
        <router-link to="/contact" class="btn-primary">Contact Us</router-link>
        <a href="https://cas.rocox.co" target="_blank" class="btn-secondary">Access Your Site</a>
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
/* General Styles */
.products-container {
  font-family: "Arial", sans-serif;
  text-align: center;
  color: #333;
  padding-bottom: 3rem;
}

/* Hero Section */
.hero {
  background: linear-gradient(to right, #0056b3, #007bff);
  color: white;
  padding: 3rem 1rem;
}

.hero-content {
  max-width: 800px;
  margin: auto;
}

.company-logo {
  width: 150px;
  margin-bottom: 1rem;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
}

/* Features Section */
.features {
  padding: 3rem 1rem;
}

.features h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  max-width: 1100px;
  margin: auto;
}

.feature-card {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-card i {
  font-size: 2.5rem;
  color: #007bff;
  margin-bottom: 1rem;
}

/* How It Works */
.how-it-works {
  background: #f8f9fa;
  padding: 3rem 1rem;
}

.how-it-works h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.steps {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  max-width: 900px;
  margin: auto;
}

.step {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 220px;
}

.step i {
  font-size: 2.5rem;
  color: #007bff;
  margin-bottom: 1rem;
}

/* Call to Action */
.cta {
  background: linear-gradient(to right, #007bff, #0056b3);
  color: white;
  padding: 3rem 1rem;
  text-align: center;
}

.cta h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.cta p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.btn-primary,
.btn-secondary {
  padding: 1rem 2rem;
  border-radius: 5px;
  font-size: 1.2rem;
  text-decoration: none;
  transition: background 0.3s;
}

.btn-primary {
  background: white;
  color: #007bff;
}

.btn-primary:hover {
  background: #f0f0f0;
}

.btn-secondary {
  background: #ffcc00;
  color: #333;
}

.btn-secondary:hover {
  background: #e6b800;
}
</style>