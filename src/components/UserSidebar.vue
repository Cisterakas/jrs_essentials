<template>
  <div class="user-sidebar card border-0 shadow-sm p-4">
    <h4 class="fw-bold mb-4 text-dark">Account</h4>
    
    <div class="nav flex-column nav-pills gap-2">
      <router-link 
        to="/accntInfo" 
        class="nav-link fw-medium" 
        active-class="active bg-success text-white">
        Account Information
      </router-link>
      
      <router-link 
        to="/changePass" 
        class="nav-link fw-medium" 
        active-class="active bg-success text-white">
        Change Password
      </router-link>
      
      <!-- Special handling for Orders, keeping it active for any sub-route -->
      <router-link 
        to="/toPay" 
        class="nav-link fw-medium" 
        :class="{ 'active bg-success text-white': isOrdersActive }">
        Orders
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

// Keep the "Orders" tab highlighted if the user is on any order tracking page
const isOrdersActive = computed(() => {
  const orderPaths = ['/toPay', '/toShip', '/toReceive', '/toRate'];
  return orderPaths.includes(route.path);
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

.user-sidebar {
  font-family: 'Poppins', sans-serif;
  border-radius: 8px;
}

.nav-link {
  color: #555;
  border-radius: 6px;
  padding: 12px 16px;
  transition: all 0.2s ease;
}

.nav-link:hover:not(.active) {
  background-color: #f0fdf4;
  color: #224f34;
}

.nav-link.active {
  background-color: #224f34 !important;
  box-shadow: 0 4px 10px rgba(34, 79, 52, 0.2);
}
</style>
