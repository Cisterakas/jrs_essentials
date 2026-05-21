<script setup>
import NavigationBar from './NavigationBar.vue'
import FooterBar from './Footer.vue'
import UserSidebar from './UserSidebar.vue'
import OrderTabs from './OrderTabs.vue'
import { store } from '../store'
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
                <div v-if="store.orders.length > 0" class="active-orders">
                  <!-- Active Orders List -->
                  <div v-for="order in store.orders" :key="order.id" class="order-item p-4 mb-3 border rounded">
                    <div class="d-flex justify-content-between align-items-center mb-3 pb-3 border-bottom">
                      <div class="fw-bold text-success">Order #{{ order.id }}</div>
                      <span class="badge bg-warning text-dark px-3 py-2">Pending Payment</span>
                    </div>
                    
                    <div class="order-details d-flex flex-column gap-2">
                      <div class="d-flex justify-content-between text-muted">
                        <span>Date Placed:</span>
                        <span>{{ order.date }}</span>
                      </div>
                      <div class="d-flex justify-content-between text-muted">
                        <span>Payment Method:</span>
                        <span class="fw-medium text-dark">{{ order.paymentMethod }}</span>
                      </div>
                      <div class="d-flex justify-content-between mt-2 pt-2 border-top">
                        <span class="fw-bold">Total Amount:</span>
                        <span class="fw-bold text-success fs-5">₱ {{ order.total.toLocaleString('en-US', { minimumFractionDigits: 2 }) }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div v-else class="empty-state text-center py-5 rounded bg-light border">
                  <div class="text-muted fs-5 mb-2">No pending payments</div>
                  <p class="text-muted small">When you place an order that requires payment, it will appear here.</p>
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

.order-item {
  background-color: #fcfcfc;
  transition: all 0.2s ease;
}

.order-item:hover {
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  border-color: #c2efd4 !important;
}
</style>