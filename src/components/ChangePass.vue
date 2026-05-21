<script setup>
import NavigationBar from './NavigationBar.vue'
import FooterBar from './Footer.vue'
import UserSidebar from './UserSidebar.vue'
import { ref } from 'vue'

const currentPassword = ref('')
const newPassword = ref('')
const confirmPassword = ref('')
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
              <h3 class="fw-bold text-success mb-4 pb-3 border-bottom" style="color: #224f34 !important;">Change Password</h3>
              
              <div class="form-container" style="max-width: 600px;">
                <div class="mb-4">
                  <label class="form-label text-muted fw-medium">Current Password</label>
                  <input type="password" class="form-control" v-model="currentPassword" placeholder="Enter current password">
                </div>
                
                <div class="mb-4">
                  <label class="form-label text-muted fw-medium">New Password</label>
                  <input type="password" class="form-control" v-model="newPassword" placeholder="Enter new password">
                </div>
                
                <div class="mb-5">
                  <label class="form-label text-muted fw-medium">Confirm New Password</label>
                  <input type="password" class="form-control" v-model="confirmPassword" placeholder="Re-enter new password">
                </div>
                
                <button class="btn btn-success save-btn px-5 py-3 fw-bold rounded shadow-sm">Update Password</button>
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

.form-control {
  border: 1px solid #dee2e6;
  padding: 12px 16px;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.form-control:focus {
  border-color: #224f34;
  box-shadow: 0 0 0 0.25rem rgba(34, 79, 52, 0.25);
}

.save-btn {
  background-color: #224f34;
  border-color: #224f34;
  transition: all 0.3s ease;
}

.save-btn:hover {
  background-color: #1a3c27;
  border-color: #1a3c27;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(34, 79, 52, 0.2) !important;
}
</style>