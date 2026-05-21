<script setup>
import AdminSidebar from './AdminSidebar.vue'
import { store } from '../store'
import { ref, computed } from 'vue'

const searchQuery = ref('')
const filterStatus = ref('All')

// Mock adding a status property to orders if they don't have one
store.orders.forEach(order => {
  if (!order.status) order.status = 'Pending'
})

const filteredOrders = computed(() => {
  let result = store.orders

  if (filterStatus.value !== 'All') {
    result = result.filter(o => o.status === filterStatus.value)
  }

  if (searchQuery.value) {
    result = result.filter(o => o.id.toString().includes(searchQuery.value))
  }

  return result
})

const processOrder = (id) => {
  const order = store.orders.find(o => o.id === id)
  if (order && order.status === 'Pending') {
    order.status = 'Shipped'
  }
}
</script>

<template>
  <div class="admin-wrapper container-fluid p-0">
    <div class="row g-0 flex-column flex-lg-row min-vh-100">
      
      <!-- Responsive Sidebar -->
      <div class="col-12 col-lg-2 p-0 bg-dark shadow-sm z-index-master">
        <AdminSidebar />
      </div>
      
      <!-- Main Content -->
      <div class="col-12 col-lg-10 bg-light p-4 p-md-5 overflow-auto custom-content-height">
        
        <div class="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom flex-wrap gap-3">
          <div>
            <h2 class="fw-bold text-dark m-0">Orders Management</h2>
            <p class="text-muted m-0">Review pending orders, update shipping statuses, and track fulfillment.</p>
          </div>
          <div class="btn-group shadow-sm">
            <button @click="filterStatus = 'All'" :class="['btn btn-outline-secondary', { active: filterStatus === 'All' }]">All</button>
            <button @click="filterStatus = 'Pending'" :class="['btn btn-outline-secondary', { active: filterStatus === 'Pending' }]">Pending</button>
            <button @click="filterStatus = 'Shipped'" :class="['btn btn-outline-secondary', { active: filterStatus === 'Shipped' }]">Shipped</button>
          </div>
        </div>
        
        <!-- Orders Data Table -->
        <div class="card border-0 shadow-sm rounded-3 overflow-hidden">
          <div class="card-header bg-white border-bottom p-4 d-flex justify-content-between align-items-center">
            <h5 class="m-0 fw-bold text-dark">Recent Orders ({{ store.orders.length }})</h5>
            <div class="input-group" style="max-width: 300px;">
              <span class="input-group-text bg-light border-end-0"><i class="fa fa-search text-muted"></i></span>
              <input type="text" v-model="searchQuery" class="form-control bg-light border-start-0 ps-0" placeholder="Search Order ID...">
            </div>
          </div>
          
          <div class="table-responsive">
            <table class="table table-hover align-middle mb-0">
              <thead class="table-light text-muted small text-uppercase tracking-wide">
                <tr>
                  <th scope="col" class="ps-4 py-3">Order ID</th>
                  <th scope="col" class="py-3">Date</th>
                  <th scope="col" class="py-3">Payment Info</th>
                  <th scope="col" class="py-3">Status</th>
                  <th scope="col" class="pe-4 py-3 text-end">Action</th>
                </tr>
              </thead>
              <tbody class="border-top-0">
                <tr v-for="order in filteredOrders" :key="order.id">
                  <td class="ps-4 py-3 fw-bold text-dark">
                    #{{ order.id }}
                  </td>
                  <td class="py-3 text-muted">
                    {{ order.date }}
                  </td>
                  <td class="py-3">
                    <div class="d-flex flex-column">
                      <span class="fw-bold text-success">₱ {{ order.total.toLocaleString('en-US', { minimumFractionDigits: 2 }) }}</span>
                      <small class="text-muted"><i class="fa fa-credit-card me-1"></i> {{ order.paymentMethod }}</small>
                    </div>
                  </td>
                  <td class="py-3">
                    <span v-if="order.status === 'Pending'" class="badge bg-warning text-dark border border-warning px-3 py-2 rounded-pill">Pending</span>
                    <span v-else class="badge bg-success text-white px-3 py-2 rounded-pill">Shipped</span>
                  </td>
                  <td class="pe-4 py-3 text-end">
                    <button v-if="order.status === 'Pending'" @click="processOrder(order.id)" class="btn btn-sm btn-outline-success px-3 fw-medium" title="Process Order">
                      Process
                    </button>
                    <button v-else class="btn btn-sm btn-outline-secondary px-3 fw-medium" disabled>
                      Processed
                    </button>
                  </td>
                </tr>
                
                <tr v-if="filteredOrders.length === 0">
                  <td colspan="5" class="text-center py-5 text-muted">
                    <i class="fa fa-box-open fs-2 mb-3 d-block opacity-50"></i>
                    No active orders found matching criteria.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div class="card-footer bg-white border-top p-3 d-flex justify-content-between align-items-center">
            <span class="text-muted small">Showing all {{ store.orders.length }} orders</span>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

.admin-wrapper {
  font-family: 'Poppins', sans-serif;
}

@media (min-width: 992px) {
  .custom-content-height {
    height: 100vh;
  }
}

.z-index-master {
  z-index: 1040;
}

.tracking-wide {
  letter-spacing: 1px;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
::-webkit-scrollbar-thumb {
  background: #c2efd4; 
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #2b9e59; 
}
</style>