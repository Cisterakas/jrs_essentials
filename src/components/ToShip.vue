<script setup>
import NavigationBar from './NavigationBar.vue'
import FooterBar from './Footer.vue'
import UserSidebar from './UserSidebar.vue'
import OrderTabs from './OrderTabs.vue'
</script> 

<template>
  <div class="page-wrapper">
    <NavigationBar/>
    
    <main class="dashboard-container">
      <div class="container py-5">
        <div class="row g-4">
          
          <!-- Sidebar -->
          <div class="col-12 col-lg-3">
            <UserSidebar />
          </div>
          
          <!-- Main Content -->
          <div class="col-12 col-lg-9">
            <div class="dashboard-card card border-0 shadow-sm p-4 p-md-5">
              
              <OrderTabs />
              
              <div class="orders-list mt-4">
                <div class="empty-state text-center py-5 rounded bg-light border">
                  <div class="text-muted fs-5 mb-2">No orders to ship</div>
                  <p class="text-muted small">Orders that are paid and waiting for courier pickup will appear here.</p>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </main>
    
    <FooterBar/>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
  background-color: #fff;
}

.dashboard-container {
  background: linear-gradient(180deg, #c2efd4 0%, rgba(255, 255, 255, 0) 87.34%);
  flex: 1;
}

.dashboard-card {
  border-radius: 12px;
  min-height: 500px;
}
</style>