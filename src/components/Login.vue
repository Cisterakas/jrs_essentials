<template>
  <NavigationBar />
  <main class="background">
    <div :class="{ 'right-panel-active': isSignUp }" class="auth-container">
      
      <!-- Sign Up Panel -->
      <div class="form-container sign-up-container">
        <form @submit.prevent="handleRegister">
          <h1>Create Account</h1>
          <div class="social-container">
            <a href="#" class="social"><i class="fa fa-facebook fs-5"></i></a>
            <a href="#" class="social"><i class="fa fa-google-plus fs-5"></i></a>
            <a href="#" class="social"><i class="fa fa-linkedin fs-5"></i></a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" v-model="registerName" required />
          <input type="email" placeholder="Email" v-model="registerEmail" required />
          <input type="password" placeholder="Password" v-model="registerPassword" required />
          <button type="submit" class="auth-btn mt-3">Sign Up</button>
          
          <!-- Mobile Only Toggle -->
          <p class="mobile-toggle-text">Already have an account? <a href="#" @click.prevent="showSignIn">Sign In</a></p>
        </form>
      </div>

      <!-- Sign In Panel -->
      <div class="form-container sign-in-container">
        <form @submit.prevent="handleUserLogin">
          <h1>Sign in</h1>
          <div class="social-container">
            <a href="#" class="social"><i class="fa fa-facebook fs-5"></i></a>
            <a href="#" class="social"><i class="fa fa-google-plus fs-5"></i></a>
            <a href="#" class="social"><i class="fa fa-linkedin fs-5"></i></a>
          </div>
          <span>or use your account credentials</span>
          
          <input 
            type="email" 
            placeholder="Email (e.g., admin@jrs.com)" 
            v-model="loginEmail" 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            v-model="loginPassword" 
            required 
          />
          
          <a href="#" class="forgot-pass">Forgot your password?</a>
          
          <div class="login-actions-group">
            <button type="submit" class="auth-btn">Sign In</button>
            <button type="button" @click="handleAdminLogin" class="auth-btn admin-btn">Sign In As Admin</button>
          </div>
          
          <!-- Mobile Only Toggle -->
          <p class="mobile-toggle-text">Don't have an account? <a href="#" @click.prevent="showSignUp">Sign Up</a></p>
        </form>
      </div>

      <!-- Overlay Panel (Desktop Only) -->
      <div class="overlay-container d-none d-md-block">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us, please login with your personal info</p>
            <button class="ghost auth-btn-ghost" @click="showSignIn">Sign In</button>
          </div>
          <div class="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start a journey with us</p>
            <button class="ghost auth-btn-ghost" @click="showSignUp">Sign Up</button>
          </div>
        </div>
      </div>
      
    </div>
  </main>
</template>

<script setup>
import NavigationBar from './NavigationBar.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { store } from '../store';

const router = useRouter();
const isSignUp = ref(false);

const loginEmail = ref('');
const loginPassword = ref('');
const registerName = ref('');
const registerEmail = ref('');
const registerPassword = ref('');

const showSignUp = () => {
  isSignUp.value = true;
};

const showSignIn = () => {
  isSignUp.value = false;
};

const handleUserLogin = () => {
  if (!loginEmail.value || !loginPassword.value) return;
  const role = loginEmail.value.toLowerCase().includes('admin') ? 'admin' : 'user';
  store.login(loginEmail.value, loginPassword.value, role);
  
  if (role === 'admin') {
    router.push('/adminDashboard');
  } else {
    router.push('/accntInfo');
  }
};

const handleAdminLogin = () => {
  const email = loginEmail.value || 'admin@jrsessentials.com';
  store.login(email, 'admin123', 'admin');
  router.push('/adminDashboard');
};

const handleRegister = () => {
  if (!registerEmail.value || !registerName.value) return;
  store.login(registerEmail.value, registerPassword.value, 'user');
  store.userSession.name = registerName.value;
  router.push('/accntInfo');
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700,800');

.background {
  background: linear-gradient(180deg, rgba(194, 239, 212, 1.00) 0%, rgba(255, 255, 255, 0.00) 100%);
  min-height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  font-family: 'Montserrat', sans-serif;
}

* { box-sizing: border-box; }

h1 {
  font-weight: 800;
  margin: 0 0 10px;
  color: #224f34;
}

p {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  margin: 20px 0 30px;
}

span {
  font-size: 12px;
  color: #666;
  margin-bottom: 15px;
}

.forgot-pass {
  color: #666;
  font-size: 13px;
  text-decoration: none;
  margin: 15px 0;
  transition: color 0.2s ease;
}
.forgot-pass:hover { color: #224f34; }

/* Buttons */
.auth-btn {
  border-radius: 20px;
  border: 1px solid #2b9e59;
  background-color: #2b9e59;
  color: #FFFFFF;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 30px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
}

.auth-btn:hover {
  background-color: #227c45;
  border-color: #227c45;
  box-shadow: 0 4px 10px rgba(43, 158, 89, 0.2);
}

.admin-btn {
  background-color: #224f34;
  border-color: #224f34;
}
.admin-btn:hover {
  background-color: #153221;
  border-color: #153221;
}

.auth-btn-ghost {
  background-color: transparent;
  border: 2px solid #FFFFFF !important;
  color: #FFFFFF !important;
}
.auth-btn-ghost:hover {
  background-color: rgba(255,255,255,0.15);
  color: #FFFFFF !important;
}

.login-actions-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  margin-top: 10px;
}

/* Forms */
form {
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  height: 100%;
  text-align: center;
}

input {
  background-color: #f7f7f7;
  border: 1px solid #eaeaea;
  border-radius: 6px;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  outline: none;
  transition: all 0.2s ease;
}
input:focus {
  border-color: #2b9e59;
  background-color: #fff;
}

.social-container {
  margin: 15px 0;
  display: flex;
  gap: 10px;
}

.social {
  border: 1px solid #DDDDDD;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  color: #333;
  text-decoration: none;
  transition: all 0.2s ease;
}
.social:hover {
  border-color: #2b9e59;
  color: #2b9e59;
  background-color: #f9f9f9;
}

/* Layout Container */
.auth-container {
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.05);
  position: relative;
  overflow: hidden;
  width: 800px;
  max-width: 100%;
  min-height: 550px;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.auth-container.right-panel-active .sign-in-container {
  transform: translateX(100%);
}

.sign-up-container {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.auth-container.right-panel-active .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: show 0.6s;
}

@keyframes show {
  0%, 49.99% { opacity: 0; z-index: 1; }
  50%, 100% { opacity: 1; z-index: 5; }
}

/* Overlay Desktop */
.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}

.auth-container.right-panel-active .overlay-container {
  transform: translateX(-100%);
}

.overlay {
  background: linear-gradient(to right, #2b9e59, #224f34);
  color: #FFFFFF;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay h1, .overlay p {
  color: #FFFFFF !important;
}

.auth-container.right-panel-active .overlay {
  transform: translateX(50%);
}

.overlay-panel {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-left { transform: translateX(-20%); }
.auth-container.right-panel-active .overlay-left { transform: translateX(0); }
.overlay-right { right: 0; transform: translateX(0); }
.auth-container.right-panel-active .overlay-right { transform: translateX(20%); }

.mobile-toggle-text {
  display: none;
}

/* Mobile Responsive Override */
@media (max-width: 768px) {
  .auth-container {
    min-height: auto;
    display: flex;
    flex-direction: column;
  }
  
  .form-container {
    position: relative;
    width: 100%;
    height: auto;
    opacity: 1;
    transform: none !important;
    animation: none;
    z-index: 1;
  }
  
  form {
    padding: 40px 20px;
  }
  
  /* Hide the panel not currently active on mobile */
  .sign-up-container { display: none; }
  .auth-container.right-panel-active .sign-up-container { display: block; }
  .auth-container.right-panel-active .sign-in-container { display: none; }

  .mobile-toggle-text {
    display: block;
    margin-top: 25px;
    font-size: 14px;
    color: #666;
  }
  
  .mobile-toggle-text a {
    color: #2b9e59;
    font-weight: 600;
    text-decoration: none;
  }
}
</style>
