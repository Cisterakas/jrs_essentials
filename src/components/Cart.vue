<script setup>
import NavigationBar from './NavigationBar.vue';
import FooterBar from './Footer.vue';
import { store } from '../store';
import { useRouter } from 'vue-router';

const router = useRouter();

const increment = (productId) => {
  const item = store.cart.find(i => i.productId === Number(productId));
  if (item) {
    store.updateCartQuantity(productId, item.quantity + 1);
  }
};

const decrement = (productId) => {
  const item = store.cart.find(i => i.productId === Number(productId));
  if (item && item.quantity > 1) {
    store.updateCartQuantity(productId, item.quantity - 1);
  } else {
    store.removeFromCart(productId);
  }
};

const deleteItem = (productId) => {
  store.removeFromCart(productId);
};

const clearAll = () => {
  store.clearCart();
};

const goToProducts = () => {
  router.push('/products');
};
</script>

<template>
  <div class="page-wrapper">
    <NavigationBar />
    
    <main class="cart-container">
      <div class="container">
        
        <div class="cart-card">
          <!-- Cart Header -->
          <div class="cart-header">
            <h1 class="cart-title">Shopping Cart</h1>
            <div class="cart-actions" v-if="store.cartItems.length > 0">
              <span class="cart-count">Items in cart: <strong>{{ store.cartItemCount }}</strong></span>
              <button @click="clearAll" class="btn btn-outline-danger btn-sm">Clear All</button>
            </div>
          </div>

          <!-- Empty State -->
          <div v-if="store.cartItems.length === 0" class="empty-state py-5 text-center">
            <img 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4932dfa6-4cd9-4213-9f5e-355636d2c18a?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&" 
              class="empty-icon mb-3" 
              alt="Empty Cart"
            />
            <h3 class="empty-title">Your shopping cart is empty</h3>
            <p class="empty-desc text-muted">Treat your skin to some organic essentials today!</p>
            <button @click="goToProducts" class="btn shop-now-btn mt-3">Start Shopping</button>
          </div>

          <!-- Active Cart List -->
          <div v-else class="cart-items-wrapper">
            
            <!-- Cart Items -->
            <div v-for="item in store.cartItems" :key="item.id" class="cart-item py-3 border-bottom">
              <div class="row align-items-center">
                <!-- Image & Name -->
                <div class="col-12 col-md-6 mb-3 mb-md-0 d-flex align-items-center gap-3">
                  <div class="item-img-wrapper flex-shrink-0">
                    <img :src="item.image" class="item-img" :alt="item.name" />
                  </div>
                  <div class="item-info">
                    <h5 class="item-name mb-2">{{ item.name }} <span class="text-muted fw-normal">| {{ item.size }}</span></h5>
                    
                    <!-- Mobile Quantity Controls -->
                    <div class="d-flex align-items-center gap-3 d-md-none">
                      <div class="qty-controls">
                        <button class="qty-btn" @click="decrement(item.id)">-</button>
                        <span class="qty-val">{{ item.quantity }}</span>
                        <button class="qty-btn" @click="increment(item.id)">+</button>
                      </div>
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/453c7b02-cab0-44bc-87b6-17f047db798b?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                        class="delete-icon"
                        @click="deleteItem(item.id)"
                        alt="Remove"
                      />
                    </div>
                  </div>
                </div>

                <!-- Desktop Quantity Controls -->
                <div class="col-6 col-md-3 d-none d-md-flex align-items-center justify-content-center gap-3">
                  <div class="qty-controls">
                    <button class="qty-btn" @click="decrement(item.id)">-</button>
                    <span class="qty-val">{{ item.quantity }}</span>
                    <button class="qty-btn" @click="increment(item.id)">+</button>
                  </div>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/453c7b02-cab0-44bc-87b6-17f047db798b?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                    class="delete-icon"
                    @click="deleteItem(item.id)"
                    alt="Remove"
                  />
                </div>

                <!-- Price & Total -->
                <div class="col-6 col-md-3 text-end d-flex flex-column align-items-end justify-content-center">
                  <div class="item-unit-price text-muted">₱ {{ item.price.toLocaleString('en-US', { minimumFractionDigits: 2 }) }} each</div>
                  <div class="item-total-price fw-bold">₱ {{ item.totalPrice.toLocaleString('en-US', { minimumFractionDigits: 2 }) }}</div>
                </div>
              </div>
            </div>

            <!-- Order Summary -->
            <div class="row justify-content-end mt-4">
              <div class="col-12 col-md-6 col-lg-5">
                <div class="summary-card p-4 rounded bg-light">
                  <div class="d-flex justify-content-between mb-2">
                    <span class="text-muted">Items Subtotal</span>
                    <span class="fw-medium">₱ {{ store.cartSubtotal.toLocaleString('en-US', { minimumFractionDigits: 2 }) }}</span>
                  </div>
                  <div class="d-flex justify-content-between mb-3">
                    <span class="text-muted">Shipping Fee</span>
                    <span class="fw-medium">₱ 50.00</span>
                  </div>
                  <hr>
                  <div class="d-flex justify-content-between align-items-center mt-3">
                    <span class="total-label fw-bold">Total Order Value</span>
                    <span class="total-value fw-bold">₱ {{ (store.cartSubtotal + 50.00).toLocaleString('en-US', { minimumFractionDigits: 2 }) }}</span>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        <!-- Bottom Checkout Bar -->
        <div v-if="store.cartItems.length > 0" class="checkout-bar row mt-4 gx-3">
          <div class="col-12 col-md-8 mb-3 mb-md-0">
            <input type="text" class="form-control checkout-note" placeholder="Add a Special Note or Request to Your Order...">
          </div>
          <div class="col-12 col-md-4">
            <router-link to="/checkout" class="btn checkout-btn w-100">Proceed to Checkout</router-link>
          </div>
        </div>

      </div>
    </main>

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

.cart-container {
  background: linear-gradient(180deg, #c2efd4 0%, rgba(255, 255, 255, 0) 87.34%);
  padding: 60px 0;
  flex: 1;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

.cart-card {
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.05);
  padding: 35px;
}

@media (max-width: 768px) {
  .cart-container { padding: 30px 0; }
  .cart-card { padding: 20px; }
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #eaeaea;
  padding-bottom: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 15px;
}

.cart-title {
  color: #224f34;
  font-size: 32px;
  font-weight: 700;
  margin: 0;
}

.cart-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

.cart-count {
  color: #666;
  font-size: 15px;
}

.btn-outline-danger {
  color: #d9534f;
  border: 1px solid #d9534f;
  background: transparent;
  padding: 6px 16px;
  border-radius: 6px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-outline-danger:hover {
  background-color: #d9534f;
  color: #fff;
}

/* Empty State */
.empty-icon {
  width: 100px;
  opacity: 0.4;
  filter: grayscale(1) sepia(1) hue-rotate(90deg);
}

.empty-title {
  color: #224f34;
  font-weight: 600;
}

.shop-now-btn {
  background-color: #224f34;
  color: #fff;
  padding: 12px 30px;
  border-radius: 6px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.shop-now-btn:hover {
  background-color: #1a3c27;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(34, 79, 52, 0.2);
}

/* Cart Items */
.item-img-wrapper {
  width: 90px;
  height: 90px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #eaeaea;
}

.item-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item-name {
  color: #224f34;
  font-weight: 600;
  font-size: 18px;
}

.qty-controls {
  display: inline-flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 6px;
  overflow: hidden;
}

.qty-btn {
  background: #f7f7f7;
  border: none;
  width: 36px;
  height: 36px;
  font-size: 18px;
  color: #224f34;
  cursor: pointer;
  transition: all 0.2s ease;
}

.qty-btn:hover {
  background-color: #224f34;
  color: #fff;
}

.qty-val {
  min-width: 30px;
  text-align: center;
  font-weight: 600;
  font-size: 15px;
}

.delete-icon {
  width: 24px;
  cursor: pointer;
  opacity: 0.6;
  transition: all 0.2s ease;
}

.delete-icon:hover {
  opacity: 1;
  transform: scale(1.1) rotate(5deg);
}

.item-unit-price { font-size: 14px; }
.item-total-price { color: #224f34; font-size: 18px; }

/* Order Summary */
.summary-card {
  background-color: #f8f9fa;
  border: 1px solid #eaeaea;
}

.total-label { color: #224f34; font-size: 18px; }
.total-value { color: #224f34; font-size: 22px; }

/* Checkout Bar */
.checkout-note {
  padding: 15px 20px;
  border: 1px solid #ccc;
  border-radius: 6px;
  transition: border-color 0.3s ease;
}

.checkout-note:focus {
  border-color: #224f34;
  box-shadow: 0 0 0 0.2rem rgba(34, 79, 52, 0.25);
}

.checkout-btn {
  background-color: #224f34;
  color: #fff;
  padding: 15px 20px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(34, 79, 52, 0.15);
}

.checkout-btn:hover {
  background-color: #1a3c27;
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(34, 79, 52, 0.25);
}
</style>