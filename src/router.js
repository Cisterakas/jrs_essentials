import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Category from './components/Category.vue';
import About from './components/About.vue';
import Login from './components/Login.vue';
import Order from './components/Order.vue';
import Products from './components/Products.vue';
import Promo from './components/Promo.vue';
import Order2 from './components/Order2.vue';
import Order3 from './components/Order3.vue';
import Cart from './components/Cart.vue';
import Checkout from './components/Checkout.vue';
import AccountInfo from './components/AccountInfo.vue';
import ChangePass from './components/ChangePass.vue';
import ToPay from './components/ToPay.vue';
import ToShip from './components/ToShip.vue';
import ToReceive from './components/ToReceive.vue';
import ToRate from './components/ToRate.vue';
import AdminDasboard from './components/AdminDashboard.vue';
import AdminProducts from './components/AdminProducts.vue';
import AdminOrders from './components/AdminOrders.vue';
import AdminReview from './components/AdminReview.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/category', component: Category },
    { path: '/about', component: About },
    { path: '/login', component: Login, name: Login },
    { path: '/order/bleachpeel-soap', component: Order },
    { path: '/products', component: Products },
    { path: '/promo', component: Promo },
    { path: '/order/15in1', component: Order2 },
    { path: '/order/GlutaOatmealSButter', component: Order3 },
    { path: '/cart', component: Cart },
    { path: '/checkout', component: Checkout },
    { path: '/accntInfo', component: AccountInfo },
    { path: '/changePass', component: ChangePass },
    { path: '/toPay', component: ToPay },
    { path: '/toShip', component: ToShip},
    { path: '/toReceive', component: ToReceive},   
    { path: '/toRate', component: ToRate},  
    { path: '/adminDashboard', component: AdminDasboard},  
    { path: '/adminProducts', component: AdminProducts},  
    { path: '/adminOrder', component: AdminOrders}, 
    { path: '/adminReview', component: AdminReview}, 
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    
    scrollBehavior() {
        return { top: 0, left: 0 }
      }
});

export default router;