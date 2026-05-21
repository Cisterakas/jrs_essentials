<template>
  <div class="order-tabs-container">
    <h3 class="fw-bold text-success mb-4" style="color: #224f34 !important;">Orders</h3>
    
    <!-- Mobile optimized scrolling tabs -->
    <div class="nav nav-pills custom-tabs mb-4 flex-nowrap overflow-auto pb-2">
      <router-link 
        to="/toPay" 
        class="nav-link custom-tab" 
        active-class="active">
        To Pay
      </router-link>
      
      <router-link 
        to="/toShip" 
        class="nav-link custom-tab" 
        active-class="active">
        To Ship
      </router-link>
      
      <router-link 
        to="/toReceive" 
        class="nav-link custom-tab" 
        active-class="active">
        To Receive
      </router-link>
      
      <router-link 
        to="/toRate" 
        class="nav-link custom-tab" 
        active-class="active">
        To Rate
      </router-link>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

.order-tabs-container {
  font-family: 'Poppins', sans-serif;
}

.custom-tabs::-webkit-scrollbar {
  height: 4px;
}

.custom-tabs::-webkit-scrollbar-thumb {
  background-color: #c2efd4;
  border-radius: 4px;
}

.custom-tab {
  color: #555;
  font-weight: 500;
  padding: 12px 24px;
  border-radius: 6px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  margin-right: 12px;
  white-space: nowrap;
  transition: all 0.2s ease;
}

.custom-tab:hover:not(.active) {
  border-color: #2b9e59;
  color: #2b9e59;
}

.custom-tab.active {
  background-color: #224f34 !important;
  color: #fff !important;
  border-color: #224f34;
  box-shadow: 0 4px 10px rgba(34, 79, 52, 0.2);
}
</style>
