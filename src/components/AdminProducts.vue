<script setup>
import AdminSidebar from './AdminSidebar.vue'
import { store } from '../store'
import { ref, computed } from 'vue'

const searchQuery = ref('')

const filteredProducts = computed(() => {
  if (!searchQuery.value) return store.products
  const query = searchQuery.value.toLowerCase()
  return store.products.filter(p => 
    p.name.toLowerCase().includes(query) || 
    p.slug.toLowerCase().includes(query)
  )
})

const deleteProduct = (id) => {
  if(confirm('Are you sure you want to delete this product?')) {
    store.products = store.products.filter(p => p.id !== id)
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
            <h2 class="fw-bold text-dark m-0">Products Management</h2>
            <p class="text-muted m-0">View, edit, and manage your store's inventory.</p>
          </div>
          <button class="btn btn-success fw-medium shadow-sm d-flex align-items-center gap-2">
            <i class="fa fa-plus"></i> Add New Product
          </button>
        </div>
        
        <!-- Products Data Table -->
        <div class="card border-0 shadow-sm rounded-3 overflow-hidden">
          <div class="card-header bg-white border-bottom p-4 d-flex justify-content-between align-items-center">
            <h5 class="m-0 fw-bold text-dark">Active Inventory ({{ store.products.length }})</h5>
            <div class="input-group" style="max-width: 300px;">
              <span class="input-group-text bg-light border-end-0"><i class="fa fa-search text-muted"></i></span>
              <input type="text" v-model="searchQuery" class="form-control bg-light border-start-0 ps-0" placeholder="Search products...">
            </div>
          </div>
          
          <div class="table-responsive">
            <table class="table table-hover align-middle mb-0">
              <thead class="table-light text-muted small text-uppercase tracking-wide">
                <tr>
                  <th scope="col" class="ps-4 py-3">Product Name</th>
                  <th scope="col" class="py-3">Size/Variation</th>
                  <th scope="col" class="py-3">Price</th>
                  <th scope="col" class="py-3 text-center">Rating</th>
                  <th scope="col" class="pe-4 py-3 text-end">Actions</th>
                </tr>
              </thead>
              <tbody class="border-top-0">
                <tr v-for="product in filteredProducts" :key="product.id">
                  <td class="ps-4 py-3">
                    <div class="d-flex align-items-center gap-3">
                      <img :src="product.image" class="rounded border shadow-sm product-thumb" :alt="product.name" />
                      <div>
                        <h6 class="m-0 fw-bold text-dark">{{ product.name }}</h6>
                        <small class="text-muted">ID: {{ product.slug }}</small>
                      </div>
                    </div>
                  </td>
                  <td class="py-3">
                    <span class="badge bg-light text-dark border fw-medium px-2 py-1">{{ product.size }}</span>
                  </td>
                  <td class="py-3 fw-bold text-success">
                    ₱ {{ product.price.toLocaleString('en-US', { minimumFractionDigits: 2 }) }}
                  </td>
                  <td class="py-3 text-center">
                    <div class="d-flex align-items-center justify-content-center gap-1">
                      <i class="fa fa-star text-warning small"></i>
                      <span class="fw-medium">{{ product.rating?.toFixed(1) || '5.0' }}</span>
                    </div>
                  </td>
                  <td class="pe-4 py-3 text-end">
                    <div class="btn-group shadow-sm rounded">
                      <button class="btn btn-sm btn-outline-secondary px-3" title="Edit">
                        <i class="fa fa-pencil"></i>
                      </button>
                      <button @click="deleteProduct(product.id)" class="btn btn-sm btn-outline-danger px-3" title="Delete">
                        <i class="fa fa-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                
                <tr v-if="filteredProducts.length === 0">
                  <td colspan="5" class="text-center py-5 text-muted">
                    <i class="fa fa-inbox fs-2 mb-3 d-block opacity-50"></i>
                    No products found matching your search.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div class="card-footer bg-white border-top p-3 d-flex justify-content-between align-items-center">
            <span class="text-muted small">Showing all {{ store.products.length }} products</span>
            <ul class="pagination pagination-sm m-0">
              <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
              <li class="page-item active"><a class="page-link bg-success border-success" href="#">1</a></li>
              <li class="page-item disabled"><a class="page-link" href="#">Next</a></li>
            </ul>
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

.product-thumb {
  width: 48px;
  height: 48px;
  object-fit: cover;
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