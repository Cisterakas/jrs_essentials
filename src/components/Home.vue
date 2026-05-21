<script setup>
import NavigationBar from './NavigationBar.vue'
import FooterBar from './Footer.vue'
import { store } from '../store'
import { computed } from 'vue'

const bestSellers = computed(() => {
  return store.products.slice(0, 3);
});
</script>

<template>
  <div class="home-page-container">
    <NavigationBar />
    
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="row align-items-center flex-column-reverse flex-md-row">
          <div class="col-12 col-md-6 hero-text-col">
            <h1 class="hero-title">Discover and Elevate Your Beauty Essentials!</h1>
            <p class="hero-subtitle">
              Explore our handcrafted collection of luxurious beauty
              products and essentials designed to enhance your natural
              radiance.
            </p>
            <router-link to="/products" class="shop-now-btn">SHOP NOW</router-link>
          </div>
          <div class="col-12 col-md-6 hero-img-col">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/59ee4678-5942-4fe2-96c9-addd9acf49d1?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
              class="hero-image"
              alt="Beauty Essentials"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Best Selling Section -->
    <section class="best-selling-section">
      <div class="container text-center">
        <h2 class="section-title">Best selling</h2>
        <p class="section-subtitle">
          Discover the extraordinary with our meticulously crafted, organic soap
          collection designed to pamper your skin and elevate your bathing experience.
        </p>
        
        <div class="row g-4 mt-4">
          <div v-for="product in bestSellers" :key="product.id" class="col-12 col-md-4">
            <router-link :to="'/order/' + product.slug" class="product-card">
              <div class="product-img-wrapper">
                <img loading="lazy" :src="product.image" class="product-img" :alt="product.name" />
              </div>
              <div class="product-info">
                <h3 class="product-name">{{ product.name }} <span class="product-separator">|</span> <span class="product-size">{{ product.size }}</span></h3>
                <div class="product-footer">
                  <span class="product-price">₱ {{ product.price.toFixed(2) }}</span>
                  <div class="product-rating">
                    <span class="rating-value">{{ product.rating.toFixed(1) }}</span>
                    <span class="rating-star">★</span>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Promo / Stay Tuned Section -->
    <section class="promo-section">
      <div class="container">
        <div class="row align-items-center flex-column-reverse flex-md-row bg-white rounded shadow-sm promo-card-container">
          <div class="col-12 col-md-5 promo-img-col">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/620652fc-eeca-41ac-9073-924c1247bcac?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
              class="promo-image"
              alt="Hanging Diffuser"
            />
          </div>
          <div class="col-12 col-md-7 promo-text-col">
            <h2 class="promo-title">STAY TUNED!</h2>
            <p class="promo-desc">
              Introducing the latest addition to our JRS Essentials shop - the 
              <strong>Hanging Diffuser</strong>! Elevate your space with the soothing 
              aromas of essential oils in a chic and contemporary way. This unique 
              hanging diffuser not only disperses your favorite scents throughout 
              your home but also serves as a stylish decorative piece.
            </p>
            <div class="promo-countdown">
              <div class="countdown-box">
                <span class="cd-number">12</span>
                <span class="cd-label">Month</span>
              </div>
              <div class="countdown-box">
                <span class="cd-number">23</span>
                <span class="cd-label">Day</span>
              </div>
              <div class="countdown-box">
                <span class="cd-number">23</span>
                <span class="cd-label">Year</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Feedback Corner Section -->
    <section class="feedback-section">
      <div class="container text-center">
        <h2 class="section-title">Feedback Corner</h2>
        <div class="row g-4 mt-4">
          
          <div class="col-12 col-md-4">
            <div class="feedback-card">
              <div class="feedback-header">
                <span class="quote-mark">“</span>
                <h4 class="feedback-author">Gladys Abellana</h4>
              </div>
              <p class="feedback-text">
                The customer experience was exceptional from start to finish.
                The website is user-friendly, the checkout process was smooth,
                and the organic soaps I ordered are top-notch. I'm beyond
                satisfied with the quality and service!
              </p>
            </div>
          </div>
          
          <div class="col-12 col-md-4">
            <div class="feedback-card">
              <div class="feedback-header">
                <span class="quote-mark">“</span>
                <h4 class="feedback-author">Sarah Garcia</h4>
              </div>
              <p class="feedback-text">
                I absolutely love the quality and variety of organic soaps I
                purchased from this website. Customer service was outstanding,
                and I received my order quickly. Highly recommended for anyone
                looking for high-quality, natural skincare products!
              </p>
            </div>
          </div>
          
          <div class="col-12 col-md-4">
            <div class="feedback-card">
              <div class="feedback-header">
                <span class="quote-mark">“</span>
                <h4 class="feedback-author">Olivia Martinez</h4>
              </div>
              <p class="feedback-text">
                I had a great experience shopping on this website. The organic
                soaps I bought are not only fashionable but also incredibly
                comfortable for my skin. Highly satisfied with JRS Essentials'
                organic soap collection!
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>

    <FooterBar />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Roboto+Slab:wght@500;700&family=Rufina:wght@700&display=swap');

/* General Resets */
.home-page-container {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  font-family: 'Poppins', sans-serif;
}

.container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin: -10px;
}

.col-12 { width: 100%; padding: 10px; }
@media (min-width: 768px) {
  .col-md-4 { width: 33.333%; padding: 10px; }
  .col-md-5 { width: 41.666%; padding: 10px; }
  .col-md-6 { width: 50%; padding: 10px; }
  .col-md-7 { width: 58.333%; padding: 10px; }
  .flex-md-row { flex-direction: row !important; }
}
.flex-column-reverse { flex-direction: column-reverse; }
.align-items-center { align-items: center; }
.text-center { text-align: center; }
.g-4 { margin: -12px; }
.g-4 > * { padding: 12px; }
.mt-4 { margin-top: 1.5rem; }
.bg-white { background-color: #fff; }
.rounded { border-radius: 8px; }
.shadow-sm { box-shadow: 0 5px 20px rgba(0,0,0,0.05); }

/* Typography */
.section-title {
  color: #224f34;
  font-family: 'Roboto Slab', serif;
  font-weight: 700;
  font-size: 42px;
  margin-bottom: 15px;
}

.section-subtitle {
  color: #555;
  font-size: 18px;
  max-width: 700px;
  margin: 0 auto 40px;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .section-title { font-size: 32px; }
  .section-subtitle { font-size: 16px; margin-bottom: 25px; }
}

/* Hero Section */
.hero-section {
  background: linear-gradient(180deg, #c4f0d6 0%, rgba(255,255,255,0) 100%);
  padding: 60px 0 80px;
}

.hero-text-col {
  padding-right: 40px;
}

.hero-title {
  color: #224f34;
  font-family: 'Rufina', serif;
  font-size: 58px;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 20px;
}

.hero-subtitle {
  color: #224f34;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 40px;
}

.shop-now-btn {
  display: inline-block;
  background-color: #224f34;
  color: #fff;
  padding: 15px 40px;
  border-radius: 4px;
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
}

.shop-now-btn:hover {
  transform: translateY(-3px);
  background-color: #1b3d28;
  box-shadow: 0 10px 20px rgba(34, 79, 52, 0.2);
}

.hero-image {
  width: 100%;
  max-width: 500px;
  height: auto;
  object-fit: contain;
  margin: 0 auto;
  display: block;
}

@media (max-width: 768px) {
  .hero-section { padding: 30px 0 50px; text-align: center; }
  .hero-text-col { padding-right: 10px; margin-top: 30px; }
  .hero-title { font-size: 40px; }
  .hero-subtitle { font-size: 16px; margin-bottom: 30px; }
  .shop-now-btn { padding: 12px 30px; font-size: 16px; }
}

/* Best Selling Section */
.best-selling-section {
  padding: 60px 0;
}

.product-card {
  display: block;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 12px;
  padding: 15px;
  transition: box-shadow 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
  height: 100%;
  background: #fff;
}

.product-card:hover {
  box-shadow: 0 15px 30px rgba(0,0,0,0.08);
  border-color: #eaeaea;
  transform: translateY(-5px);
}

.product-img-wrapper {
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  aspect-ratio: 1;
  background: #f9f9f9;
  margin-bottom: 15px;
}

.product-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.product-card:hover .product-img {
  transform: scale(1.05);
}

.product-info {
  text-align: left;
}

.product-name {
  color: #224f34;
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.product-separator { color: #ccc; font-weight: 400; margin: 0 5px; }
.product-size { font-weight: 600; }

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-price {
  font-size: 18px;
  font-weight: 600;
  color: #454545;
}

.product-rating {
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: #f9f4d4;
  padding: 4px 10px;
  border-radius: 20px;
}

.rating-value {
  font-size: 13px;
  font-weight: 600;
  color: #383838;
}

.rating-star {
  color: #f5d426;
  font-size: 12px;
}

/* Promo Section */
.promo-section {
  padding: 60px 0;
  background-color: #f9f9f9;
}

.promo-card-container {
  padding: 40px;
}

.promo-img-col {
  text-align: center;
}

.promo-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 8px;
}

.promo-text-col {
  padding-left: 40px;
}

.promo-title {
  color: #224f34;
  font-family: 'Roboto Slab', serif;
  font-weight: 700;
  font-size: 45px;
  margin-bottom: 20px;
}

.promo-desc {
  font-size: 18px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 30px;
}

.promo-desc strong {
  font-weight: 700;
  color: #224f34;
}

.promo-countdown {
  display: flex;
  gap: 20px;
}

.countdown-box {
  background-color: #224f34;
  color: #fff;
  border-radius: 8px;
  width: 80px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 10px rgba(34, 79, 52, 0.3);
}

.cd-number { font-size: 30px; font-weight: 700; line-height: 1; margin-bottom: 5px; }
.cd-label { font-size: 14px; text-transform: uppercase; }

@media (max-width: 768px) {
  .promo-card-container { padding: 20px; }
  .promo-text-col { padding-left: 10px; margin-bottom: 30px; text-align: center; }
  .promo-title { font-size: 32px; }
  .promo-countdown { justify-content: center; }
}

/* Feedback Section */
.feedback-section {
  padding: 80px 0;
}

.feedback-card {
  background-color: rgba(196, 240, 214, 0.3);
  border-radius: 12px;
  padding: 30px 25px;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: background-color 0.3s ease;
  text-align: center;
}

.feedback-card:hover {
  background-color: rgba(196, 240, 214, 0.6);
}

.feedback-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 15px;
}

.quote-mark {
  font-size: 50px;
  color: #224f34;
  font-family: 'Roboto Slab', serif;
  line-height: 0.5;
  padding-top: 20px;
}

.feedback-author {
  color: #454545;
  font-size: 22px;
  font-weight: 600;
  margin: 0;
}

.feedback-text {
  color: #555;
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
  font-style: italic;
}
</style>