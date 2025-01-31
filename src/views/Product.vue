<template>
    <div class="product">
      <h1>Our Products</h1>
      <p>Discover the innovative solutions we’ve built to simplify business processes.</p>
      <div class="product-card">
        <h2>Caley Insurance Automation</h2>
        <p>
          This product automates policy statements for Caley Insurance, consolidating them by location. It also includes 
          interactive dashboards to provide detailed insights and analytics.
        </p>
        <a href="https://cas.rocox.co" target="_blank" class="btn-visit">Visit CAS</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Product",
  };
  </script>
  
  <style scoped>
  .product {
    max-width: 800px;
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
  
  .product-card {
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1.5rem;
    text-align: left;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .product-card h2 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 0.8rem;
  }
  
  .product-card p {
    color: #555;
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  
  .btn-visit {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  .btn-visit:hover {
    background-color: #0056b3;
  }
  </style>