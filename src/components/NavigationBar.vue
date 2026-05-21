<!-- NavigationBar.vue -->
<template>
  <nav class="navbar-container">
    <div class="nav-content">
      <router-link to="/" class="nav-logo-link">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d2e8db6-3bc1-4ebe-bdb7-27f924fa0645?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
          class="nav-logo"
          alt="JRS Essentials Logo"
        />
      </router-link>
      
      <div class="nav-actions">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/products" class="nav-link">Shop</router-link>
        
        <router-link to="/cart" class="nav-link nav-icon-link">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/89e840a4-5a8c-4a6d-adee-aa72786b3dd8?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
            class="cart-icon"
            alt="Cart"
          />
        </router-link>

        <router-link to="/login" class="nav-btn-login">Login</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>
.navbar-container {
  background-color: #c4f0d6;
  width: 100%;
  padding: 15px 20px;
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-content {
  width: 100%;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.nav-logo-link {
  display: flex;
  align-items: center;
}

.nav-logo {
  width: 180px;
  max-width: 100%;
  height: auto;
  object-fit: contain;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 25px;
  flex-wrap: wrap;
  justify-content: center;
}

.nav-link {
  color: #224f34;
  text-transform: uppercase;
  font: 500 18px Poppins, sans-serif;
  text-decoration: none;
  position: relative;
  padding: 5px 0;
  transition: all 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #224f34;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-icon-link::after {
  display: none;
}

.cart-icon {
  width: 28px;
  height: auto;
  transition: transform 0.2s ease;
}

.cart-icon:hover {
  transform: scale(1.1);
}

.nav-btn-login {
  color: #224f34;
  border: 2px solid #224f34;
  border-radius: 6px;
  padding: 8px 24px;
  text-transform: uppercase;
  font: 500 16px Poppins, sans-serif;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  transition: color 0.3s ease;
  z-index: 1;
}

.nav-btn-login::before {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  background: #224f34;
  transition: top 0.3s ease;
  z-index: -1;
}

.nav-btn-login:hover {
  color: #ffffff;
}

.nav-btn-login:hover::before {
  top: 0;
}

@media (max-width: 768px) {
  .nav-content {
    flex-direction: column;
    justify-content: center;
  }
  
  .nav-actions {
    width: 100%;
    justify-content: center;
    gap: 15px;
  }
  
  .nav-logo {
    width: 150px;
  }
  
  .nav-link {
    font-size: 16px;
  }
}
</style>