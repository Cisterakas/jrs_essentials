<script setup>
</script>

<template>
  <footer class="footer-container">
    <div class="footer-content">
      <!-- Logo Column -->
      <div class="footer-col brand-col">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/caabf288-3091-4a94-95ef-20fc2a468c49?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
          class="footer-logo"
          alt="JRS Essentials Logo"
        />
      </div>

      <!-- About Us Column -->
      <div class="footer-col about-col">
        <h4 class="footer-title">About US</h4>
        <p class="footer-text">
          At JRS Essentials, we're all about making your daily routine
          cleaner, greener, and healthier. We believe in the power of
          organic essentials to nourish your body and protect our planet.
          Our mission is simple: to provide you with high-quality organic
          products that you can trust.
        </p>
      </div>

      <!-- Contact Us Column -->
      <div class="footer-col contact-col">
        <h4 class="footer-title">CONTACT US</h4>
        
        <div class="contact-item">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/66f91f4f-91dd-4461-b6d2-70929fbc8c33?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
            class="contact-icon"
            alt="Email"
          />
          <span class="contact-text">jrsessentials@gmail.com</span>
        </div>
        
        <div class="contact-item">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe9af07d-d6e1-43c2-b2bb-f64960d32c85?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
            class="contact-icon"
            alt="Facebook"
          />
          <span class="contact-text">jrs Essentials</span>
        </div>
        
        <div class="contact-item">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c714efb4-9786-4c64-98f7-d6835dac4161?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
            class="contact-icon"
            alt="Instagram"
          />
          <span class="contact-text">jrs_Essentials</span>
        </div>
        
        <div class="contact-item">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/209223d2-3050-4fc6-87ef-f49edd278340?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
            class="contact-icon"
            alt="Phone"
          />
          <span class="contact-text">09983442810</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-container {
  background-color: #224f34;
  width: 100%;
  padding: 60px 20px;
  display: flex;
  justify-content: center;
}

.footer-content {
  width: 100%;
  max-width: 1400px;
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  gap: 40px;
}

.footer-col {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.brand-col {
  align-items: flex-start;
}

.footer-logo {
  width: 195px;
  max-width: 100%;
  height: auto;
  object-fit: contain;
}

.footer-title {
  color: #ffffff;
  text-transform: uppercase;
  font: 500 22px 'Roboto Slab', serif;
  margin: 0;
}

.footer-text {
  color: #c2efd4;
  font: 400 18px/1.6 'Poppins', sans-serif;
  margin: 0;
}

.contact-col {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 15px;
}

.contact-icon {
  width: 22px;
  height: 22px;
  object-fit: contain;
}

.contact-text {
  color: #c2efd4;
  font: 400 18px 'Poppins', sans-serif;
}

/* Tablet responsiveness */
@media (max-width: 991px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
  }
  .brand-col {
    grid-column: span 2;
    align-items: center;
    margin-bottom: 20px;
  }
}

/* Mobile responsiveness */
@media (max-width: 767px) {
  .footer-container {
    padding: 40px 20px;
  }
  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
    text-align: center;
  }
  .brand-col {
    grid-column: span 1;
  }
  .contact-col {
    align-items: center;
  }
}
</style>