<script setup>
import { ref, onMounted } from 'vue'
import AdminSidebar from './AdminSidebar.vue'
import { store } from '../store'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'
import { Line, Doughnut } from 'vue-chartjs'

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

// Mock Data for Charts
const salesChartData = ref({
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Monthly Revenue (₱)',
      backgroundColor: 'rgba(34, 79, 52, 0.1)',
      borderColor: '#224f34',
      borderWidth: 2,
      pointBackgroundColor: '#2b9e59',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#224f34',
      fill: true,
      tension: 0.4,
      data: [65000, 59000, 80000, 81000, 56000, 95000, 110000]
    }
  ]
})

const salesChartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: function(context) {
          let label = context.dataset.label || '';
          if (label) { label += ': '; }
          if (context.parsed.y !== null) {
            label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'PHP' }).format(context.parsed.y);
          }
          return label;
        }
      }
    }
  },
  scales: {
    y: { beginAtZero: true, grid: { borderDash: [5, 5] } },
    x: { grid: { display: false } }
  }
})

const productChartData = ref({
  labels: ['Bleachpeel Soap', 'Glow Serum', 'Sunscreen SPF50', 'Toner', 'Night Cream'],
  datasets: [
    {
      backgroundColor: ['#224f34', '#2b9e59', '#38b000', '#70e000', '#9ef01a'],
      data: [45, 25, 15, 10, 5]
    }
  ]
})

const productChartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: 'right' }
  },
  cutout: '70%'
})

const metrics = ref({
  totalSales: '₱ 546,000.00',
  ordersPending: 24,
  activeUsers: 142,
  productsListed: store.products.length
})
</script>

<template>
  <div class="admin-wrapper container-fluid p-0">
    <div class="row g-0 flex-column flex-lg-row min-vh-100">
      
      <!-- Responsive Sidebar -->
      <div class="col-12 col-lg-2 p-0 bg-dark shadow-sm z-index-master">
        <AdminSidebar />
      </div>
      
      <!-- Main Dashboard Content -->
      <div class="col-12 col-lg-10 bg-light p-4 p-md-5 overflow-auto custom-content-height">
        
        <div class="d-flex justify-content-between align-items-center mb-5 border-bottom pb-3">
          <div>
            <h2 class="fw-bold text-dark m-0">Dashboard Overview</h2>
            <p class="text-muted m-0">Welcome back, Admin. Here is what's happening with your store today.</p>
          </div>
          <button class="btn btn-success px-4 py-2 fw-medium shadow-sm d-none d-md-block">
            <i class="fa fa-download me-2"></i> Export Report
          </button>
        </div>
        
        <!-- Metric Cards -->
        <div class="row g-4 mb-5">
          <div class="col-12 col-sm-6 col-xl-3">
            <div class="metric-card bg-white p-4 rounded shadow-sm border-start border-4 border-success h-100 d-flex flex-column justify-content-center">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <span class="text-muted fw-medium text-uppercase small tracking-wide">Total Sales</span>
                <div class="icon-box bg-success bg-opacity-10 text-success rounded p-2">
                  <i class="fa fa-money-bill-wave"></i>
                </div>
              </div>
              <h3 class="fw-bold text-dark m-0">{{ metrics.totalSales }}</h3>
              <small class="text-success fw-medium mt-2"><i class="fa fa-arrow-up"></i> 12.5% from last month</small>
            </div>
          </div>
          
          <div class="col-12 col-sm-6 col-xl-3">
            <div class="metric-card bg-white p-4 rounded shadow-sm border-start border-4 border-warning h-100 d-flex flex-column justify-content-center">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <span class="text-muted fw-medium text-uppercase small tracking-wide">Pending Orders</span>
                <div class="icon-box bg-warning bg-opacity-10 text-warning rounded p-2">
                  <i class="fa fa-shopping-bag"></i>
                </div>
              </div>
              <h3 class="fw-bold text-dark m-0">{{ metrics.ordersPending }}</h3>
              <small class="text-muted fw-medium mt-2">Requires immediate action</small>
            </div>
          </div>
          
          <div class="col-12 col-sm-6 col-xl-3">
            <div class="metric-card bg-white p-4 rounded shadow-sm border-start border-4 border-info h-100 d-flex flex-column justify-content-center">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <span class="text-muted fw-medium text-uppercase small tracking-wide">Active Users</span>
                <div class="icon-box bg-info bg-opacity-10 text-info rounded p-2">
                  <i class="fa fa-users"></i>
                </div>
              </div>
              <h3 class="fw-bold text-dark m-0">{{ metrics.activeUsers }}</h3>
              <small class="text-info fw-medium mt-2"><i class="fa fa-arrow-up"></i> 4.2% from last week</small>
            </div>
          </div>
          
          <div class="col-12 col-sm-6 col-xl-3">
            <div class="metric-card bg-white p-4 rounded shadow-sm border-start border-4 border-primary h-100 d-flex flex-column justify-content-center">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <span class="text-muted fw-medium text-uppercase small tracking-wide">Products Listed</span>
                <div class="icon-box bg-primary bg-opacity-10 text-primary rounded p-2">
                  <i class="fa fa-cubes"></i>
                </div>
              </div>
              <h3 class="fw-bold text-dark m-0">{{ metrics.productsListed }}</h3>
              <small class="text-muted fw-medium mt-2">All categories active</small>
            </div>
          </div>
        </div>
        
        <!-- Charts Section -->
        <div class="row g-4 mb-4">
          <div class="col-12 col-xl-8">
            <div class="chart-card bg-white p-4 rounded shadow-sm h-100">
              <div class="d-flex justify-content-between align-items-center mb-4">
                <h5 class="fw-bold text-dark m-0">Revenue Overview</h5>
                <select class="form-select form-select-sm w-auto bg-light border-0">
                  <option>This Year</option>
                  <option>Last 6 Months</option>
                  <option>This Month</option>
                </select>
              </div>
              <div class="chart-container" style="height: 350px;">
                <Line :data="salesChartData" :options="salesChartOptions" />
              </div>
            </div>
          </div>
          
          <div class="col-12 col-xl-4">
            <div class="chart-card bg-white p-4 rounded shadow-sm h-100 d-flex flex-column">
              <h5 class="fw-bold text-dark mb-4">Top Selling Products</h5>
              <div class="chart-container flex-grow-1 d-flex justify-content-center align-items-center" style="min-height: 250px;">
                <Doughnut :data="productChartData" :options="productChartOptions" />
              </div>
            </div>
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

/* On desktop, make the content area scrollable if sidebar is fixed */
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

.metric-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.metric-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.08) !important;
}

.icon-box {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

/* Custom scrollbar for webkit */
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