<script setup>
import NavigationBar from './NavigationBar.vue';
import FooterBar from './Footer.vue';
import { store } from '../store';
</script>

<template>
  <div class="div">
    <NavigationBar />
    
    <div class="div-2">
      <div class="div-3">
        <h1 class="div-4">Our Products</h1>
        <p class="section-subtitle">Exquisite, handcrafted organic skincare formulated for your skin's natural radiance.</p>
        
        <!-- Modern, responsive CSS Grid for Catalog Products -->
        <div class="products-grid">
          <router-link 
            v-for="product in store.products" 
            :key="product.id"
            :to="'/order/' + product.slug" 
            :id="product.slug" 
            class="box"
          >
            <div class="image-wrapper">
              <img
                loading="lazy"
                :src="product.image"
                class="img"
                :alt="product.name"
              />
            </div>
            <div class="product-info">
              <h2 class="div-8">{{ product.name }}</h2>
              <div class="div-9">
                <div class="div-10">₱ {{ product.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</div>
                <div class="div-12">
                  <span class="rating-val">{{ product.rating?.toFixed(1) || '5.0' }}</span>
                  <span class="star-icon">★</span>
                </div>
              </div>
            </div>
          </router-link>
        </div>
        
        <router-link to="/" class="div-155">BACK TO HOME</router-link>
      </div>
    </div>
    
    <FooterBar />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

.div {
  justify-content: center;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  font-family: 'Poppins', sans-serif;
}

.div-2 {
  background: linear-gradient(
    180deg,
    #c4f0d6 3.14%,
    rgba(255, 255, 255, 0) 87.34%
  );
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 50px 80px;
  box-sizing: border-box;
}

@media (max-width: 991px) {
  .div-2 {
    padding: 30px 20px;
  }
}

.div-3 {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.div-4 {
  color: #224f34;
  font-size: 46px;
  font-weight: 700;
  margin: 0;
  text-align: center;
}

.section-subtitle {
  color: #555;
  font-size: 16px;
  text-align: center;
  margin: 10px 0 40px;
  max-width: 600px;
  line-height: 1.5;
}

/* Modern CSS Grid instead of hardcoded Builder columns */
.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  width: 100%;
  margin-bottom: 50px;
}

@media (max-width: 991px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (max-width: 580px) {
  .products-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

.box {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  text-decoration: none;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  border: 1px solid #eaeaea;
}

/* Premium Border Expansion Effects on Hover */
.box:before {
  position: absolute;
  content: '';
  left: 0;
  bottom: 0;
  height: 4px;
  width: 100%;
  border-bottom: 2px solid transparent;
  border-left: 2px solid transparent;
  box-sizing: border-box;
  transform: translateX(100%);
}

.box:after {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  border-top: 2px solid transparent;
  border-right: 2px solid transparent;
  box-sizing: border-box;
  transform: translateX(-100%);
}

.box:hover {
  box-shadow: 0 10px 25px rgba(34, 79, 52, 0.15);
  transform: translateY(-5px);
}

.box:hover:before {
  border-color: #224f34;
  height: 100%;
  transform: translateX(0);
  transition: 0.3s transform linear, 0.3s height linear 0.3s;
}

.box:hover:after {
  border-color: #224f34;
  height: 100%;
  transform: translateX(0);
  transition: 0.3s transform linear, 0.3s height linear 0.5s;
}

.image-wrapper {
  width: 100%;
  aspect-ratio: 1;
  background-color: #f7f7f7;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 15px;
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.box:hover .img {
  transform: scale(1.05);
}

.product-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.div-8 {
  color: #224f34;
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  text-transform: capitalize;
  line-height: 1.3;
  min-height: 46px; /* consistent height for alignment */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.div-9 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
}

.div-10 {
  color: #454545;
  font-size: 16px;
  font-weight: 600;
}

.div-12 {
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: #f9f4d4;
  padding: 2px 8px;
  border-radius: 20px;
}

.rating-val {
  color: #383838;
  font-size: 12px;
  font-weight: 600;
}

.star-icon {
  color: #f5d426;
  font-size: 12px;
}

.div-155 {
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 4px;
  background-color: #224f34;
  padding: 16px 40px;
  font-size: 15px;
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;
  margin-top: 20px;
}

.div-155:hover {
  background-color: #1a3c27;
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}
</style>