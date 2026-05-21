<script setup>
import NavigationBar from './NavigationBar.vue'
import FooterBar from './Footer.vue'
import { ref, computed } from 'vue';

const counter = ref(1);
const unitPrice = 150;

const increment = () => {
  counter.value++;
};

const decrement = () => {
  if (counter.value > 1) {
    counter.value--;
  }
};

const deleteAll = () => {
  counter.value = 1;
};

const totalPrice = computed(() => {
  return unitPrice * counter.value;
});
</script>

<template>
  <div class="page-wrapper">
    <NavigationBar />
    
    <main class="promo-container">
      <div class="container py-5">
        
        <div class="row g-5 align-items-start">
          <!-- Left Column: Product Images -->
          <div class="col-12 col-lg-5">
            <div class="product-gallery">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2753ad40-3b82-4874-a2fb-67dc52b71655?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9"
                class="main-img mb-3 rounded shadow-sm w-100"
                alt="Bleachpeel Soap"
              />
              <div class="row g-2">
                <div class="col-4">
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/85ed6cb0-6235-4f01-aa26-4b83b1d2e6b5?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9" class="thumb-img rounded w-100 border" />
                </div>
                <div class="col-4">
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/de6ba6db-69e4-4ba0-8197-751d8769b854?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9" class="thumb-img rounded w-100 border" />
                </div>
                <div class="col-4">
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5dea5240-7322-490e-abfa-cb2b6c7ea0ac?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9" class="thumb-img rounded w-100 border" />
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Product Details -->
          <div class="col-12 col-lg-7">
            <div class="product-details ps-lg-4">
              <div class="d-flex align-items-center flex-wrap gap-2 mb-2">
                <h1 class="product-title m-0">Bleachpeel Soap</h1>
                <span class="text-muted fs-4">|</span>
                <span class="text-secondary fs-4 fw-medium">135g</span>
              </div>
              
              <div class="d-flex align-items-center justify-content-between border-bottom pb-3 mb-4">
                <div class="price-display fw-bold text-success">₱ {{ totalPrice.toLocaleString('en-US', { minimumFractionDigits: 2 }) }}</div>
                <div class="rating-display d-flex align-items-center gap-2">
                  <span class="fs-5 fw-bold text-dark">5.0</span>
                  <div class="stars text-warning fs-5">★★★★★</div>
                </div>
              </div>
              
              <!-- Quantity Selector -->
              <div class="quantity-section mb-4">
                <label class="fw-bold mb-2 d-block">Quantity:</label>
                <div class="d-flex align-items-center gap-3">
                  <button class="btn btn-outline-secondary qty-btn fw-bold fs-5" @click="decrement" :disabled="counter <= 1">-</button>
                  <span class="fs-5 fw-bold" style="min-width: 30px; text-align: center;">{{ counter }}</span>
                  <button class="btn btn-outline-secondary qty-btn fw-bold fs-5" @click="increment">+</button>
                  <button class="btn btn-light text-danger fw-bold ms-2" @click="deleteAll">x</button>
                </div>
              </div>
              
              <!-- Action Buttons -->
              <div class="d-flex gap-3 flex-column flex-sm-row mt-4">
                <button class="btn add-to-cart-btn flex-grow-1 py-3 fs-5 fw-bold">
                  <i class="fa fa-shopping-cart me-2"></i> Add To Cart
                </button>
                <button class="btn buy-now-btn flex-grow-1 py-3 fs-5 fw-bold">Buy Now</button>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Directions Section -->
      <div class="directions-section py-5 mt-5 bg-light">
        <div class="container">
          <h2 class="text-center fw-bold text-success mb-5">Direction to Use</h2>
          <div class="row g-4">
            <div class="col-12 col-md-4">
              <div class="card h-100 border-0 shadow-sm border-top-success">
                <div class="card-body p-4">
                  <h5 class="card-title fw-bold text-success mb-3">FACE WASHING</h5>
                  <p class="card-text text-muted mb-1">☑ Wet the soap and run repeatedly unto hand to gather a small amount of lather.</p>
                  <p class="card-text text-muted mb-1">☑ Using only the lather, apply lightly to face and neck in circular motion.</p>
                  <p class="card-text text-muted mb-1 fw-bold text-dark">☑ DO NOT RUB.</p>
                  <p class="card-text text-muted mb-1">☑ Natural exfoliating factor takes place upon skin contact.</p>
                  <p class="card-text text-muted">☑ Rinse well, pat face with dry clean towel.</p>
                </div>
              </div>
            </div>
            
            <div class="col-12 col-md-4">
              <div class="card h-100 border-0 shadow-sm border-top-success">
                <div class="card-body p-4">
                  <h5 class="card-title fw-bold text-success mb-3">BODY WASHING</h5>
                  <p class="card-text text-muted mb-1">☑ Rinse the bar soap all over the body.</p>
                  <p class="card-text text-muted mb-1">☑ Lather well for at least a minute.</p>
                  <p class="card-text text-muted mb-1 fw-bold text-dark">☑ FOR SENSITIVE SKIN, lather for less than a minute and don't scrub your body.</p>
                  <p class="card-text text-muted">☑ Just let the natural extracts of the soap do the exfoliation.</p>
                </div>
              </div>
            </div>
            
            <div class="col-12 col-md-4">
              <div class="card h-100 border-0 shadow-sm border-top-danger">
                <div class="card-body p-4">
                  <h5 class="card-title fw-bold text-danger mb-3">GIVE YOUR SKIN A BREAK!</h5>
                  <p class="card-text text-muted mb-1">☑ NEVER use different products on your skin all at once!</p>
                  <p class="card-text text-muted mb-1">☑ Do a week rest if you are planning to switch to another product.</p>
                  <p class="card-text text-muted">☑ Do this for your own safety.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Feedback Section -->
      <div class="container py-5 text-center">
        <p class="font-italic text-muted fs-5 mb-1" style="font-family: serif;">YOU GLOW GIRL!!</p>
        <h2 class="fw-bold text-success mb-5">Feedback Corner</h2>
        
        <div class="row g-4 text-start">
          <div class="col-12 col-md-4">
            <div class="card h-100 border-0 shadow-sm p-4">
              <div class="d-flex align-items-center gap-3 mb-3">
                <span class="fs-1 text-success fw-bold lh-1" style="font-family: serif;">“</span>
                <h5 class="fw-bold m-0">Emily Wilson</h5>
              </div>
              <p class="text-muted">The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the soap fits perfectly in my routine.</p>
            </div>
          </div>
          
          <div class="col-12 col-md-4">
            <div class="card h-100 border-0 shadow-sm p-4">
              <div class="d-flex align-items-center gap-3 mb-3">
                <span class="fs-1 text-success fw-bold lh-1" style="font-family: serif;">“</span>
                <h5 class="fw-bold m-0">Sarah Thompson</h5>
              </div>
              <p class="text-muted">I absolutely love the quality and organic formulation of the products. Customer service was outstanding, and I received my order quickly. Highly recommended!</p>
            </div>
          </div>
          
          <div class="col-12 col-md-4">
            <div class="card h-100 border-0 shadow-sm p-4">
              <div class="d-flex align-items-center gap-3 mb-3">
                <span class="fs-1 text-success fw-bold lh-1" style="font-family: serif;">“</span>
                <h5 class="fw-bold m-0">Olivia Martinez</h5>
              </div>
              <p class="text-muted">I had a great experience shopping on this website. The organic bars are refreshing and extremely soothing on sensitive skin. Highly satisfied!</p>
            </div>
          </div>
        </div>
        
        <div class="mt-5">
          <router-link to="/products" class="btn btn-success px-5 py-3 fw-bold rounded-pill shadow-sm text-uppercase tracking-wide">
            BACK TO PRODUCTS
          </router-link>
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
  background-color: #fff;
  font-family: 'Poppins', sans-serif;
}

.promo-container {
  background: linear-gradient(180deg, #c4f0d6 0%, rgba(255, 255, 255, 0) 87.34%);
  flex: 1;
}

.product-title {
  color: #224f34;
  font-size: 40px;
  font-weight: 700;
  line-height: 1.2;
}

.price-display {
  font-size: 36px;
}

.qty-btn {
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}

/* Action Buttons */
.add-to-cart-btn {
  background-color: #fff;
  border: 2px solid #224f34;
  color: #224f34;
  transition: all 0.3s ease;
}

.add-to-cart-btn:hover {
  background-color: #c2efd4;
  color: #224f34;
}

.buy-now-btn {
  background-color: #224f34;
  border: 2px solid #224f34;
  color: #fff;
  transition: all 0.3s ease;
}

.buy-now-btn:hover {
  background-color: #1a3c27;
  border-color: #1a3c27;
  color: #fff;
}

/* Directions Cards */
.border-top-success {
  border-top: 4px solid #224f34 !important;
}

.border-top-danger {
  border-top: 4px solid #d9534f !important;
}

.tracking-wide {
  letter-spacing: 1px;
}

/* Base text overrides for better alignment */
.text-success { color: #224f34 !important; }
.btn-success { background-color: #224f34; border-color: #224f34; }
.btn-success:hover { background-color: #1a3c27; border-color: #1a3c27; }
</style>