<script setup>
import NavigationBar from './NavigationBar.vue';
import FooterBar from './Footer.vue';
import { ref, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { store } from '../store';

const route = useRoute();
const router = useRouter();

// Retrieve the dynamic product based on slug
const product = computed(() => {
  const slug = route.params.slug;
  const found = store.getProductBySlug(slug);
  return found || store.products[0]; // fallback to first product if not found
});

const counter = ref(1);
const showToast = ref(false);

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

// Reset quantity when shifting products
watch(() => route.params.slug, () => {
  counter.value = 1;
});

// Dynamic Price based on counter
const totalPrice = computed(() => {
  return product.value ? product.value.price * counter.value : 0;
});

const addToCart = () => {
  if (product.value) {
    store.addToCart(product.value.id, counter.value);
    showToast.value = true;
    setTimeout(() => {
      showToast.value = false;
    }, 3000);
  }
};

const buyNow = () => {
  if (product.value) {
    store.addToCart(product.value.id, counter.value);
    router.push('/cart');
  }
};

// Fallback directions if not provided in store item
const defaultDirections = {
  face: "Wet the soap and run repeatedly unto hand to gather a small amount of lather. Using only the lather, apply lightly to face and neck in circular motion. DO NOT RUB. Natural exfoliating factor takes place upon skin contact. Rinse well, pat face with dry clean towel.",
  body: "Rinse the bar soap all over the body. Lather well for at least a minute. FOR SENSITIVE SKIN, lather for less than a minute and don’t scrub your body. Just let the natural extracts of the soap do the exfoliation.",
  break: "NEVER use different products on your skin all at once! Do a week rest if you are planning to switch to another product. Do this for your own safety."
};

const directions = computed(() => {
  return product.value?.directions || defaultDirections;
});
</script>

<template>
  <div class="div">
    <NavigationBar />
    
    <!-- Dynamic Toast Notification -->
    <Transition name="fade">
      <div v-if="showToast" class="toast-notification">
        <div class="toast-content">
          <span class="toast-icon">✓</span>
          <span>Added <strong>{{ counter }}x {{ product.name }}</strong> to your cart!</span>
        </div>
      </div>
    </Transition>

    <div class="div-3">
      <div class="div-4">
        <div class="div-5">
          <!-- Left Column: Product Images -->
          <div class="column">
            <div class="div-6">
              <img :src="product.image" class="img" :alt="product.name" />
              <div class="div-7">
                <div class="div-8">
                  <div class="column-2">
                    <img :src="product.image" class="img-2 thumb" />
                  </div>
                  <div class="column-3">
                    <img :src="product.image" class="img-3 thumb" />
                  </div>
                  <div class="column-4">
                    <img :src="product.image" class="img-4 thumb" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Product Info & Purchase Actions -->
          <div class="column-5">
            <div class="div-9">
              <div class="div-10">
                <div class="div-11">
                  <div class="div-12">{{ product.name }}</div>
                  <div class="div-13">|</div>
                  <div class="div-14">{{ product.size }}</div>
                </div>
                <div class="div-15">
                  <div class="div-16">₱ {{ totalPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</div>
                  <div class="div-17">
                    <div class="div-18">{{ product.rating?.toFixed(1) || '5.0' }}</div>
                    <div class="stars-list">
                      <span v-for="star in 5" :key="star" class="star-icon">★</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Quantity Selector -->
              <div class="quantity-section">
                <div class="qty-label">Quantity:</div>
                <div class="qty-controls">
                  <button class="item__remove qty-btn" @click="decrement" :disabled="counter <= 1">-</button>
                  <span class="qty-display">{{ counter }}</span>
                  <button class="item__add qty-btn" @click="increment">+</button>
                  <button class="item__delete qty-reset" @click="deleteAll" title="Reset quantity">x</button>
                </div>
              </div>

              <!-- Purchase Buttons -->
              <div class="div-31">
                <div class="div-32">
                  <button @click="addToCart" class="div-33 add-to-cart-btn">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4932dfa6-4cd9-4213-9f5e-355636d2c18a?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-13"
                    />
                    <div class="div-34">Add To Cart</div>
                  </button>
                  <button @click="buyNow" class="div-36 buy-now-btn">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Direction to Use Section -->
    <div class="div-37">
      <div class="div-38">Direction to Use</div>
      <div class="div-39">
        <div class="div-40">
          <div class="column-8">
            <div class="direction-card">
              <div class="direction-header">FACE WASHING</div>
              <div class="direction-text">{{ directions.face }}</div>
            </div>
          </div>
          <div class="column-9">
            <div class="direction-card">
              <div class="direction-header">BODY WASHING</div>
              <div class="direction-text">{{ directions.body }}</div>
            </div>
          </div>
          <div class="column-10">
            <div class="direction-card warn">
              <div class="direction-header">SKIN ADVICE</div>
              <div class="direction-text">{{ directions.break }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Feedback Corner -->
    <div class="div-45">
      <div class="div-46">YOU GLOW GIRL!!</div>
      <div class="div-47">Feedback Corner</div>
    </div>
    <div class="div-48">
      <div class="div-49">
        <div class="column-11">
          <div class="div-50">
            <div class="div-51">
              <div class="div-52">“</div>
              <div class="div-53">Emily Wilson</div>
            </div>
            <div class="div-54">
              The customer experience was exceptional from start to finish.
              The website is user-friendly, the checkout process was smooth,
              and the soap I ordered fits my skincare routine perfectly. I'm beyond satisfied!
            </div>
          </div>
        </div>
        <div class="column-12">
          <div class="div-55">
            <div class="div-56">
              <div class="div-57">“</div>
              <div class="div-58">Sarah Thompson</div>
            </div>
            <div class="div-59">
              I absolutely love the quality and organic formulation of the soaps I
              purchased from this website. Customer service was outstanding,
              and I received my order quickly. Highly recommended!
            </div>
          </div>
        </div>
        <div class="column-13">
          <div class="div-60">
            <div class="div-61">
              <div class="div-62">“</div>
              <div class="div-63">Olivia Martinez</div>
            </div>
            <div class="div-64">
              I had a great experience shopping on this website. The organic bars are
              refreshing and extremely soothing on sensitive skin. Highly satisfied!
            </div>
          </div>
        </div>
      </div>
    </div>

    <router-link to="/products" class="back">BACK TO PRODUCTS</router-link>

    <FooterBar />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');

.div {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  font-family: 'Poppins', sans-serif;
}

/* Dynamic Toast Styling */
.toast-notification {
  position: fixed;
  top: 90px;
  right: 20px;
  background-color: #224f34;
  color: #fff;
  padding: 16px 24px;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  z-index: 9999;
  font-family: 'Poppins', sans-serif;
  border-left: 5px solid #c2efd4;
}
.toast-content {
  display: flex;
  align-items: center;
  gap: 12px;
}
.toast-icon {
  background-color: rgba(255, 255, 255, 0.2);
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: bold;
}

/* Fade Transitions */
.fade-enter-active, .fade-leave-active {
  transition: all 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.back {
  color: var(--white, #fff);
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
  border-radius: 4px;
  background-color: #224f34;
  align-self: center;
  width: 280px;
  margin: 50px 0;
  padding: 16px;
  font: 600 15px Poppins, sans-serif;
  transition: all 0.3s ease;
  text-decoration: none;
}
.back:hover {
  background-color: #1a3c27;
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
}

.div-3 {
  background: linear-gradient(
    180deg,
    #c2efd4 0%,
    rgba(255, 255, 255, 0) 87.34%
  );
  width: 100%;
  padding: 40px 80px 100px;
  box-sizing: border-box;
}
@media (max-width: 991px) {
  .div-3 {
    padding: 20px 20px 60px;
  }
}
.div-4 {
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
}
.div-5 {
  gap: 40px;
  display: flex;
}
@media (max-width: 991px) {
  .div-5 {
    flex-direction: column;
    gap: 20px;
  }
}
.column {
  width: 45%;
}
@media (max-width: 991px) {
  .column {
    width: 100%;
  }
}
.div-6 {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.06);
  background-color: #fcfcfc;
}
.div-7 {
  width: 100%;
}
.div-8 {
  display: flex;
  gap: 15px;
}
.thumb {
  width: 100%;
  height: auto;
  border-radius: 6px;
  border: 1px solid #e2e2e2;
  cursor: pointer;
  transition: opacity 0.3s ease;
}
.thumb:hover {
  opacity: 0.8;
}
.column-2, .column-3, .column-4 {
  width: 33.33%;
}

.column-5 {
  width: 55%;
}
@media (max-width: 991px) {
  .column-5 {
    width: 100%;
  }
}
.div-9 {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-left: 20px;
}
@media (max-width: 991px) {
  .div-9 {
    padding-left: 0;
  }
}
.div-10 {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.div-11 {
  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
}
.div-12 {
  color: #224f34;
  font-size: 40px;
  font-weight: 700;
  line-height: 1.2;
}
@media (max-width: 991px) {
  .div-12 {
    font-size: 32px;
  }
}
.div-13 {
  color: #c0c0c0;
  font-size: 30px;
}
.div-14 {
  color: #666;
  font-size: 26px;
  font-weight: 500;
}
.div-15 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 20px;
}
.div-16 {
  color: #224f34;
  font-size: 36px;
  font-weight: 600;
}
.div-17 {
  display: flex;
  align-items: center;
  gap: 8px;
}
.div-18 {
  color: #454545;
  font-size: 20px;
  font-weight: 600;
}
.stars-list {
  color: #f5d426;
  font-size: 20px;
}

/* Quantity Section Styles */
.quantity-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.qty-label {
  color: #454545;
  font-size: 16px;
  font-weight: 600;
}
.qty-controls {
  display: flex;
  align-items: center;
  gap: 12px;
}
.qty-btn {
  background-color: #fff;
  border: 1px solid #ccc;
  width: 44px;
  height: 44px;
  font-size: 22px;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  color: #224f34;
}
.qty-btn:hover:not(:disabled) {
  background-color: #224f34;
  color: #fff;
  border-color: #224f34;
}
.qty-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.qty-display {
  font-size: 20px;
  font-weight: 600;
  min-width: 40px;
  text-align: center;
}
.qty-reset {
  background-color: #eee;
  border: none;
  width: 44px;
  height: 44px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 4px;
  color: #888;
  transition: all 0.2s ease;
}
.qty-reset:hover {
  background-color: #ffdddd;
  color: #d9534f;
}

/* Purchase Action Buttons */
.div-31 {
  margin-top: 15px;
}
.div-32 {
  display: flex;
  gap: 20px;
}
@media (max-width: 480px) {
  .div-32 {
    flex-direction: column;
    gap: 10px;
  }
}
.add-to-cart-btn {
  background-color: #fff;
  border: 2px solid #224f34;
  color: #224f34;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 28px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  flex: 1;
  transition: all 0.3s ease;
}
.add-to-cart-btn:hover {
  background-color: #c2efd4;
}
.img-13 {
  width: 20px;
}
.buy-now-btn {
  background-color: #224f34;
  border: 2px solid #224f34;
  color: #fff;
  padding: 16px 28px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  flex: 1;
  transition: all 0.3s ease;
}
.buy-now-btn:hover {
  background-color: #1a3c27;
}

/* Direction to Use Card Styles */
.div-37 {
  padding: 60px 80px;
  background-color: #f7f9f7;
}
@media (max-width: 991px) {
  .div-37 {
    padding: 40px 20px;
  }
}
.div-38 {
  font-size: 32px;
  font-weight: 700;
  color: #224f34;
  text-align: center;
  margin-bottom: 40px;
}
.div-39 {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
.div-40 {
  display: flex;
  gap: 30px;
}
@media (max-width: 991px) {
  .div-40 {
    flex-direction: column;
    gap: 20px;
  }
}
.column-8, .column-9, .column-10 {
  width: 33.33%;
}
@media (max-width: 991px) {
  .column-8, .column-9, .column-10 {
    width: 100%;
  }
}
.direction-card {
  background-color: #fff;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.03);
  height: 100%;
  border-top: 4px solid #224f34;
  box-sizing: border-box;
}
.direction-card.warn {
  border-top: 4px solid #d9534f;
}
.direction-header {
  font-size: 18px;
  font-weight: 700;
  color: #224f34;
  margin-bottom: 12px;
  letter-spacing: 0.5px;
}
.direction-card.warn .direction-header {
  color: #d9534f;
}
.direction-text {
  font-size: 15px;
  color: #555;
  line-height: 1.6;
}

/* Feedback Styling */
.div-45 {
  text-align: center;
  margin: 60px 0 30px;
}
.div-46 {
  font-family: 'Rufina', Georgia, serif;
  font-size: 20px;
  color: #666;
  font-style: italic;
}
.div-47 {
  font-size: 36px;
  font-weight: 700;
  color: #224f34;
  margin-top: 10px;
}
.div-48 {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 50px;
  padding: 0 40px;
  box-sizing: border-box;
}
@media (max-width: 991px) {
  .div-48 {
    padding: 0 20px;
  }
}
.div-49 {
  display: flex;
  gap: 30px;
}
@media (max-width: 991px) {
  .div-49 {
    flex-direction: column;
    gap: 20px;
  }
}
.column-11, .column-12, .column-13 {
  width: 33.33%;
}
@media (max-width: 991px) {
  .column-11, .column-12, .column-13 {
    width: 100%;
  }
}
.div-50, .div-55, .div-60 {
  background-color: #fff;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.04);
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.div-51, .div-56, .div-61 {
  display: flex;
  align-items: center;
  gap: 10px;
}
.div-52, .div-57, .div-62 {
  font-size: 48px;
  color: #224f34;
  line-height: 1;
  font-family: serif;
}
.div-53, .div-58, .div-63 {
  font-size: 18px;
  font-weight: 600;
  color: #333;
}
.div-54, .div-59, .div-64 {
  font-size: 15px;
  color: #666;
  line-height: 1.6;
}
</style>