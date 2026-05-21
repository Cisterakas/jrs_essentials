<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import NavigationBar from "./NavigationBar.vue";
import FooterBar from "./Footer.vue";
import { store } from "../store";

const router = useRouter();

// Settle active redirects if checkout is empty
onMounted(() => {
  if (store.cartItems.length === 0) {
    router.push('/products');
  }
});

const imageUrl = ref("");
const showSuccessModal = ref(false);
const generatedOrderId = ref("");

const form = ref({
  email: "",
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  postalCode: "",
  phone: "",
  country: "Philippines",
  paymentMethod: "GCASH"
});

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      imageUrl.value = reader.result;
    };
    reader.readAsDataURL(file);
  }
};

const handlePlaceOrder = () => {
  // Simple validations
  if (!form.value.email || !form.value.firstName || !form.value.lastName || !form.value.address || !form.value.phone) {
    alert("Please fill in all required fields (Email, First Name, Last Name, Address, and Phone Number) before placing your order.");
    return;
  }
  
  // Place the order via store
  const orderId = store.placeOrder(form.value);
  generatedOrderId.value = orderId;
  showSuccessModal.value = true;
};

const closeModal = () => {
  showSuccessModal.value = false;
  router.push('/toPay'); // Route to pay/order history tracking page
};
</script>

<template>
  <div class="page-wrapper">
    <NavigationBar />
    
    <main class="checkout-container">
      <div class="container">
        <div class="row g-4">
          <!-- Left Billing details -->
          <div class="col-12 col-lg-7">
            <div class="checkout-card p-4 p-md-5">
              
              <h3 class="section-heading mb-4">Contact Information</h3>
              <input 
                type="email" 
                class="form-control mb-3" 
                placeholder="Email Address" 
                v-model="form.email" 
                required
              />

              <div class="form-check mb-4">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="email-optin"
                />
                <label for="email-optin" class="form-check-label text-muted">Email me with exclusive news and product offers</label>
              </div>
              
              <h3 class="section-heading mt-5 mb-4">Shipping Address</h3>
              <div class="row g-3 mb-3">
                <div class="col-12 col-md-6">
                  <input 
                    type="text" 
                    class="form-control" 
                    placeholder="First Name" 
                    v-model="form.firstName" 
                    required 
                  />
                </div>
                <div class="col-12 col-md-6">
                  <input 
                    type="text" 
                    class="form-control" 
                    placeholder="Last Name" 
                    v-model="form.lastName" 
                    required 
                  />
                </div>
              </div>
              
              <input 
                type="text" 
                class="form-control mb-3" 
                placeholder="Street Address, Barangay, Unit #" 
                v-model="form.address" 
                required 
              />

              <div class="row g-3 mb-3">
                <div class="col-12 col-md-6">
                  <input 
                    type="text" 
                    class="form-control" 
                    placeholder="City / Municipality" 
                    v-model="form.city" 
                    required 
                  />
                </div>
                <div class="col-12 col-md-6">
                  <input 
                    type="text" 
                    class="form-control" 
                    placeholder="Postal code" 
                    v-model="form.postalCode" 
                  />
                </div>
              </div>
              
              <input 
                type="tel" 
                class="form-control mb-3" 
                placeholder="Phone Number" 
                v-model="form.phone" 
                required 
              />

              <input 
                type="text" 
                class="form-control mb-5 text-muted bg-light" 
                placeholder="Country" 
                v-model="form.country" 
                disabled
              />
              
              <h3 class="section-heading mb-3">Payment Method</h3>
              <p class="text-muted mb-4 fs-6">
                All transactions are secure and encrypted. Select your preferred payment channel below:
              </p>

              <!-- GCASH Payment Option -->
              <div class="payment-method-card" :class="{ active: form.paymentMethod === 'GCASH' }">
                <div class="form-check payment-radio-wrapper m-0">
                  <input
                    type="radio"
                    class="form-check-input"
                    id="gcash"
                    name="payment"
                    value="GCASH"
                    v-model="form.paymentMethod"
                  />
                  <label for="gcash" class="form-check-label payment-label">GCash (G-to-G Mobile Wallet)</label>
                </div>
                <div class="payment-details mt-3 pt-3 border-top" v-show="form.paymentMethod === 'GCASH'">
                  <strong>Wallet Name:</strong> Kimberly Ley Estabas<br />
                  <strong>Phone Number:</strong> 09772700065<br />
                  <p class="mt-2 text-muted small">
                    Please transfer the exact order amount to the GCash number above. Screenshot the successful transaction invoice receipt, upload it below as your proof, and place your order.
                  </p>
                  
                  <div class="uploader-container mt-3 p-3">
                    <label for="imageInput" class="btn btn-outline-success btn-sm m-0">
                      📁 Choose Payment Screenshot
                    </label>
                    <input
                      id="imageInput"
                      type="file"
                      accept="image/*"
                      @change="handleImageUpload"
                      class="d-none"
                    />
                    <div v-if="imageUrl" class="screenshot-preview-container mt-3 d-flex align-items-center gap-3">
                      <img :src="imageUrl" class="screenshot-thumbnail rounded" alt="Uploaded GCash receipt" />
                      <span class="text-success fw-bold small">✓ Receipt Attached Successfully</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- UNIONBANK Payment Option -->
              <div class="payment-method-card" :class="{ active: form.paymentMethod === 'UNIONBANK' }">
                <div class="form-check payment-radio-wrapper m-0">
                  <input
                    type="radio"
                    class="form-check-input"
                    id="unionbank"
                    name="payment"
                    value="UNIONBANK"
                    v-model="form.paymentMethod"
                  />
                  <label for="unionbank" class="form-check-label payment-label">Unionbank Bank Transfer</label>
                </div>
                <div class="payment-details mt-3 pt-3 border-top" v-show="form.paymentMethod === 'UNIONBANK'">
                  <strong>Account Name:</strong> Kimberly Ley Mejia Estabas<br />
                  <strong>Account Number:</strong> 9839182918<br />
                  <p class="mt-2 text-muted small mb-0">
                    Transfer payment to the Unionbank account number above. Keep a receipt for order validation.
                  </p>
                </div>
              </div>

              <!-- LANDBANK Payment Option -->
              <div class="payment-method-card" :class="{ active: form.paymentMethod === 'LANDBANK' }">
                <div class="form-check payment-radio-wrapper m-0">
                  <input
                    type="radio"
                    class="form-check-input"
                    id="landbank"
                    name="payment"
                    value="LANDBANK"
                    v-model="form.paymentMethod"
                  />
                  <label for="landbank" class="form-check-label payment-label">Landbank Transfer</label>
                </div>
                <div class="payment-details mt-3 pt-3 border-top" v-show="form.paymentMethod === 'LANDBANK'">
                  <strong>Account Name:</strong> Kimberly Ley Mejia Estabas<br />
                  <strong>Account Number:</strong> 9932567623<br />
                  <p class="mt-2 text-muted small mb-0">
                    Transfer payment to the Landbank account number above. Settle within 2 days.
                  </p>
                </div>
              </div>

              <!-- COD Payment Option -->
              <div class="payment-method-card" :class="{ active: form.paymentMethod === 'COD' }">
                <div class="form-check payment-radio-wrapper m-0">
                  <input
                    type="radio"
                    class="form-check-input"
                    id="cod"
                    name="payment"
                    value="COD"
                    v-model="form.paymentMethod"
                  />
                  <label for="cod" class="form-check-label payment-label">Cash on Delivery (COD)</label>
                </div>
                <div class="payment-details mt-3 pt-3 border-top" v-show="form.paymentMethod === 'COD'">
                  <p class="mt-2 text-muted small mb-0">
                    Pay in cash directly to our rider courier upon receiving your package at your doorstep. Standard shipping applies.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <!-- Right Order Summary -->
          <div class="col-12 col-lg-5">
            <div class="checkout-card summary-card p-4 p-md-5">
              <h3 class="section-heading border-bottom pb-3 mb-4">Your Order Summary</h3>
              
              <!-- Dynamic cart loop in checkout summary -->
              <div class="checkout-items-list mb-4">
                <div v-for="item in store.cartItems" :key="item.id" class="d-flex align-items-center mb-3 pb-3 border-bottom">
                  <img :src="item.image" class="checkout-item-img me-3 rounded" :alt="item.name" />
                  <div class="flex-grow-1">
                    <h6 class="mb-1 text-dark fw-bold">{{ item.name }}</h6>
                    <small class="text-muted">Size: {{ item.size }} | Qty: {{ item.quantity }}</small>
                  </div>
                  <div class="text-end">
                    <span class="text-success fw-bold">₱ {{ item.totalPrice.toLocaleString('en-US', { minimumFractionDigits: 2 }) }}</span>
                  </div>
                </div>
              </div>

              <!-- Totals -->
              <div class="checkout-totals bg-light p-4 rounded mb-4">
                <div class="d-flex justify-content-between mb-2 text-muted">
                  <span>Items Subtotal</span>
                  <span>₱ {{ store.cartSubtotal.toLocaleString('en-US', { minimumFractionDigits: 2 }) }}</span>
                </div>
                <div class="d-flex justify-content-between mb-3 text-muted">
                  <span>Shipping Fee</span>
                  <span>₱ 50.00</span>
                </div>
                <div class="d-flex justify-content-between pt-3 border-top border-secondary">
                  <strong class="fs-5 text-dark">Total Order Price</strong>
                  <strong class="fs-5 text-success">₱ {{ (store.cartSubtotal + 50.00).toLocaleString('en-US', { minimumFractionDigits: 2 }) }}</strong>
                </div>
              </div>
              
              <button @click="handlePlaceOrder" class="btn submit-order-btn w-100 py-3 fs-5 fw-bold text-uppercase">Place Order Securely</button>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Success Modal Overlay -->
    <Transition name="fade">
      <div v-if="showSuccessModal" class="modal-overlay">
        <div class="modal-card p-5">
          <div class="modal-success-icon mb-3">🎉</div>
          <h2 class="mb-3 text-success fw-bold">Order Placed Successfully!</h2>
          <p class="text-muted mb-2">Your Order Reference ID:</p>
          <div class="order-id-display mb-4">{{ generatedOrderId }}</div>
          <p class="text-muted mb-4 small">
            Thank you for shopping with JRS Essentials! Your order is currently being processed. If you chose a mobile wallet or bank transfer, please complete the payment and send the receipt screenshot to our social channels.
          </p>
          <button @click="closeModal" class="btn submit-order-btn w-100 py-2">View My Orders History</button>
        </div>
      </div>
    </Transition>

    <FooterBar />
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

.checkout-container {
  background: linear-gradient(180deg, #c2efd4 0%, rgba(255, 255, 255, 0) 87.34%);
  padding: 50px 0 100px;
  flex: 1;
}

.checkout-card {
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  height: 100%;
}

.summary-card {
  position: sticky;
  top: 90px;
}

.section-heading {
  color: #224f34;
  font-size: 24px;
  font-weight: 700;
}

.form-control {
  border: 1px solid #dee2e6;
  border-radius: 6px;
  padding: 12px 16px;
  font-size: 15px;
  color: #495057;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-control:focus {
  border-color: #224f34;
  box-shadow: 0 0 0 0.25rem rgba(34, 79, 52, 0.25);
}

.form-check-input:checked {
  background-color: #224f34;
  border-color: #224f34;
}

/* Payment Method Card */
.payment-method-card {
  border: 1px solid #eaeaea;
  border-radius: 8px;
  margin-bottom: 15px;
  padding: 18px;
  transition: all 0.3s ease;
  background-color: #fcfcfc;
}

.payment-method-card.active {
  border-color: #224f34;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(34, 79, 52, 0.08);
}

.payment-radio-wrapper {
  display: flex;
  align-items: center;
}

.form-check-input {
  width: 1.25em;
  height: 1.25em;
  margin-top: 0;
  margin-right: 12px;
  cursor: pointer;
}

.payment-label {
  font-size: 16px;
  font-weight: 600;
  color: #224f34;
  cursor: pointer;
  margin: 0;
}

/* Image Uploader */
.uploader-container {
  background-color: #f8f9fa;
  border: 1px dashed #224f34;
  border-radius: 8px;
}

.screenshot-thumbnail {
  width: 60px;
  height: 80px;
  object-fit: cover;
  border: 1px solid #dee2e6;
}

/* Order Summary Items */
.checkout-item-img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border: 1px solid #eaeaea;
}

.submit-order-btn {
  background-color: #224f34;
  color: #fff;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(34, 79, 52, 0.15);
}

.submit-order-btn:hover {
  background-color: #1a3c27;
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(34, 79, 52, 0.25);
}

/* Modal Styling */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
}

.modal-card {
  background-color: #fff;
  border-radius: 16px;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 20px 50px rgba(0,0,0,0.3);
  text-align: center;
}

.modal-success-icon {
  font-size: 64px;
  line-height: 1;
}

.order-id-display {
  background-color: #e8f5e9;
  color: #2e7d32;
  font-size: 24px;
  font-weight: 700;
  padding: 12px 24px;
  border-radius: 8px;
  border: 2px dashed #4caf50;
  display: inline-block;
  letter-spacing: 2px;
}

/* Transitions */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
