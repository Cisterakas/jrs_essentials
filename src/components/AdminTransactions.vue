<script setup>
import AdminSidebar from './AdminSidebar.vue'
import { store } from '../store'
import { ref, computed } from 'vue'

const filterMethod = ref('All Methods')

const filteredTransactions = computed(() => {
  if (filterMethod.value === 'All Methods') return store.orders
  return store.orders.filter(o => o.paymentMethod === filterMethod.value)
})
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
            <h2 class="fw-bold text-dark m-0">Transaction History</h2>
            <p class="text-muted m-0">Validate GCash and Bank Transfer receipts uploaded by customers.</p>
          </div>
          <button class="btn btn-outline-success fw-medium shadow-sm d-flex align-items-center gap-2">
            <i class="fa fa-file-excel-o"></i> Export Log
          </button>
        </div>
        
        <!-- Transactions Data Table -->
        <div class="card border-0 shadow-sm rounded-3 overflow-hidden">
          <div class="card-header bg-white border-bottom p-4 d-flex justify-content-between align-items-center">
            <h5 class="m-0 fw-bold text-dark">Recent Transactions</h5>
            <div class="input-group" style="max-width: 300px;">
              <span class="input-group-text bg-light border-end-0"><i class="fa fa-filter text-muted"></i></span>
              <select v-model="filterMethod" class="form-select bg-light border-start-0 ps-0">
                <option>All Methods</option>
                <option>GCash</option>
                <option>Credit Card</option>
                <option>PayPal</option>
                <option>COD</option>
              </select>
            </div>
          </div>
          
          <div class="table-responsive">
            <table class="table table-hover align-middle mb-0">
              <thead class="table-light text-muted small text-uppercase tracking-wide">
                <tr>
                  <th scope="col" class="ps-4 py-3">Order Ref</th>
                  <th scope="col" class="py-3">Date</th>
                  <th scope="col" class="py-3">Method</th>
                  <th scope="col" class="py-3 text-end">Amount</th>
                  <th scope="col" class="pe-4 py-3 text-center">Receipt Proof</th>
                </tr>
              </thead>
              <tbody class="border-top-0">
                <tr v-for="order in filteredTransactions" :key="order.id">
                  <td class="ps-4 py-3 fw-bold text-dark">
                    #{{ order.id }}
                  </td>
                  <td class="py-3 text-muted">
                    {{ order.date }}
                  </td>
                  <td class="py-3">
                    <span class="badge bg-light text-dark border px-2 py-1"><i class="fa fa-money me-1"></i> {{ order.paymentMethod }}</span>
                  </td>
                  <td class="py-3 fw-bold text-success text-end">
                    ₱ {{ order.total.toLocaleString('en-US', { minimumFractionDigits: 2 }) }}
                  </td>
                  <td class="pe-4 py-3 text-center">
                    <button v-if="order.paymentMethod !== 'COD'" class="btn btn-sm btn-outline-primary px-3 rounded-pill" title="View Uploaded Receipt">
                      <i class="fa fa-image me-1"></i> View Receipt
                    </button>
                    <span v-else class="text-muted small fst-italic">Cash on Delivery</span>
                  </td>
                </tr>
                
                <tr v-if="filteredTransactions.length === 0">
                  <td colspan="5" class="text-center py-5 text-muted">
                    <i class="fa fa-file-invoice-dollar fs-2 mb-3 d-block opacity-50"></i>
                    No transactions found for the selected method.
                  </td>
                </tr>
              </tbody>
            </table>
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