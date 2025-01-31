<template>
  <div class="app-container">
    <!-- Header with Navigation -->
    <header class="header">
      <div class="navbar">
        <router-link to="/" class="nav-link">ome</router-link>
        <router-link to="/products" class="nav-link">Products</router-link>
        <router-link to="/contact" class="nav-link">Contact Us</router-link>
      </div>
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
  font-family: 'Poppins', sans-serif;
  color: #333;
  background-color: #f4f7fc;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Header - Modern Transparent Nav */
.header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.9); /* Transparent White */
  backdrop-filter: blur(10px);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
  z-index: 1000;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.nav-link {
  color: #333;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #0056b3;
  text-decoration: underline;
}

/* Main Content */
.main-content {
  flex: 1;
  padding: 6rem 2rem 2rem; /* Adjusted padding to prevent overlap with fixed navbar */
}

/* Footer - Light & Elegant */
.footer {
  text-align: center;
  padding: 1rem 2rem;
  background-color: #fff;
  color: #555;
  font-size: 0.9rem;
  border-top: 1px solid #eaeaea;
}
</style>