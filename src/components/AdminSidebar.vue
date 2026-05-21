<template>
  <div class="admin-sidebar bg-dark text-white p-3 p-lg-4">
    <div class="sidebar-header mb-3 mb-lg-5 d-flex align-items-center justify-content-between border-bottom border-secondary pb-3">
      <div>
        <h3 class="fw-bold m-0 text-success fs-4 fs-lg-3">JRS Admin</h3>
        <small class="text-muted d-none d-lg-block">Control Panel</small>
      </div>
      <!-- Mobile menu toggle button -->
      <button class="btn btn-outline-light d-lg-none" type="button" @click="isMobileMenuOpen = !isMobileMenuOpen">
        <i class="fa fa-bars"></i>
      </button>
    </div>
    
    <div class="nav-container flex-grow-1" :class="{ 'd-none d-lg-flex': !isMobileMenuOpen, 'd-flex flex-column': isMobileMenuOpen || true }">
      <div class="nav flex-column nav-pills gap-2 w-100">
        <router-link 
          to="/adminDashboard" 
          class="nav-link text-white d-flex align-items-center gap-3 py-2 py-lg-3" 
          active-class="active bg-success">
          <i class="fa fa-tachometer" aria-hidden="true"></i>
          <span>Dashboard</span>
        </router-link>
        
        <router-link 
          to="/adminProducts" 
          class="nav-link text-white d-flex align-items-center gap-3 py-2 py-lg-3" 
          active-class="active bg-success">
          <i class="fa fa-cube" aria-hidden="true"></i>
          <span>Products</span>
        </router-link>
        
        <router-link 
          to="/adminOrder" 
          class="nav-link text-white d-flex align-items-center gap-3 py-2 py-lg-3" 
          active-class="active bg-success">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          <span>Orders</span>
        </router-link>
        
        <router-link 
          to="/adminReview" 
          class="nav-link text-white d-flex align-items-center gap-3 py-2 py-lg-3" 
          active-class="active bg-success">
          <i class="fa fa-star" aria-hidden="true"></i>
          <span>Reviews</span>
        </router-link>
        
        <router-link 
          to="/adminTransaction" 
          class="nav-link text-white d-flex align-items-center gap-3 py-2 py-lg-3" 
          active-class="active bg-success">
          <i class="fa fa-credit-card" aria-hidden="true"></i>
          <span>Transactions</span>
        </router-link>
      </div>
      
      <div class="sidebar-footer mt-4 mt-lg-5 pt-3 border-top border-secondary w-100">
        <router-link to="/" class="btn btn-outline-light w-100 d-flex align-items-center justify-content-center gap-2">
          <i class="fa fa-sign-out" aria-hidden="true"></i>
          <span>Exit Admin</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

.admin-sidebar {
  font-family: 'Poppins', sans-serif;
  height: auto;
  transition: all 0.3s ease;
}

@media (min-width: 992px) {
  .admin-sidebar {
    min-height: 100vh;
    position: sticky;
    top: 0;
    display: flex !important;
    flex-direction: column !important;
  }
  
  .nav-container {
    display: flex !important;
    flex-direction: column !important;
  }
}

.nav-link {
  border-radius: 8px;
  transition: all 0.2s ease;
  font-weight: 500;
  opacity: 0.8;
  background-color: transparent !important;
  color: #fff !important;
  text-transform: capitalize !important;
}

.nav-link:hover:not(.active) {
  background-color: rgba(255, 255, 255, 0.1) !important;
  opacity: 1;
}

.nav-link.active {
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  opacity: 1;
  background-color: #198754 !important; /* Bootstrap success color */
}

/* Ensure FontAwesome icons have fixed width for alignment */
.nav-link i {
  width: 24px;
  text-align: center;
  font-size: 18px;
}
</style>
