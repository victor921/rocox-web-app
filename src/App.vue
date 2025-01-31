<template>
  <div class="app-container">
    <!-- Header with Navigation -->
    <header class="header">
      <nav class="navbar">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/services" class="nav-link">Services</router-link>
        <router-link to="/products" class="nav-link">Products</router-link>
        <router-link to="/contact" class="nav-link">Contact Us</router-link>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="main-content">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="footer">
      <p>&copy; 2025 RocoX. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
/* General Layout */
.app-container {
  font-family: Arial, sans-serif;
  color: #333;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  background-color: #000;
  padding: 1rem 2rem;
}

.navbar {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #ffd700;
}

.main-content {
  flex: 1;
  padding: 2rem;
}

.footer {
  text-align: center;
  padding: 1rem 2rem;
  background-color: #000;
  color: #fff;
  font-size: 0.9rem;
}
</style>