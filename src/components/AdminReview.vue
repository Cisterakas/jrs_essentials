<script setup>
import AdminSidebar from './AdminSidebar.vue'
import { ref } from 'vue'

const reviews = ref([
  {
    id: 1,
    author: 'Emily Wilson',
    product: 'Bleachpeel Soap',
    rating: 5,
    text: "The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the soap I ordered fits my skincare routine perfectly.",
    status: 'pending'
  },
  {
    id: 2,
    author: 'Sarah Thompson',
    product: 'Glow Serum',
    rating: 4,
    text: "I absolutely love the quality and organic formulation of the products I purchased from this website. Customer service was outstanding, and I received my order quickly. Highly recommended!",
    status: 'pending'
  },
  {
    id: 3,
    author: 'Olivia Martinez',
    product: 'Sunscreen SPF50',
    rating: 5,
    text: "I had a great experience shopping on this website. The organic bars are refreshing and extremely soothing on sensitive skin. Highly satisfied!",
    status: 'pending'
  }
])

const moderateReview = (id, action) => {
  if(action === 'trash' && confirm('Delete this review permanently?')) {
    reviews.value = reviews.value.filter(r => r.id !== id)
  } else if (action === 'approve') {
    const rev = reviews.value.find(r => r.id === id)
    if(rev) rev.status = 'approved'
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
            <h2 class="fw-bold text-dark m-0">Customer Reviews</h2>
            <p class="text-muted m-0">Monitor and moderate product reviews and feedback.</p>
          </div>
          <button class="btn btn-outline-success fw-medium shadow-sm d-flex align-items-center gap-2">
            <i class="fa fa-filter"></i> Filter Ratings
          </button>
        </div>
        
        <!-- Reviews Grid -->
        <div class="row g-4">
          
          <div v-for="review in reviews" :key="review.id" class="col-12 col-md-6 col-xl-4">
            <div class="card border-0 shadow-sm h-100" :class="{'opacity-75': review.status === 'approved'}">
              <div class="card-body p-4">
                <div class="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <h5 class="fw-bold m-0 text-dark">{{ review.author }}</h5>
                    <small class="text-muted">{{ review.product }}</small>
                  </div>
                  <div class="text-warning fs-6">
                    {{ '★'.repeat(review.rating) }}{{ '☆'.repeat(5 - review.rating) }}
                  </div>
                </div>
                <p class="text-muted mb-4">"{{ review.text }}"</p>
                <div class="d-flex justify-content-end gap-2 pt-3 border-top">
                  <button @click="moderateReview(review.id, 'trash')" class="btn btn-sm btn-light text-danger" title="Delete"><i class="fa fa-trash"></i></button>
                  <button v-if="review.status === 'pending'" @click="moderateReview(review.id, 'approve')" class="btn btn-sm btn-success fw-medium">Approve</button>
                  <button v-else class="btn btn-sm btn-outline-secondary fw-medium" disabled>Approved</button>
                </div>
              </div>
            </div>
          </div>
          
          <div v-if="reviews.length === 0" class="col-12 text-center py-5 text-muted">
            <i class="fa fa-check-circle fs-1 mb-3 d-block text-success"></i>
            All reviews have been moderated.
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