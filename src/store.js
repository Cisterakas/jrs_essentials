import { reactive, computed } from 'vue';

// Load initial products list with exact names, prices, slugs, sizes, and images from Products.vue
const initialProducts = [
  {
    id: 1,
    name: "Bleachpeel Soap",
    slug: "bleachpeel-soap",
    price: 150.00,
    rating: 5.0,
    size: "135g",
    category: "soaps",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f925925d-c6ab-47b5-9a24-c8587ae36653?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&",
    directions: {
      face: "Wet the soap and run repeatedly unto hand to gather a small amount of lather. Using only the lather, apply lightly to face and neck in circular motion. DO NOT RUB. Natural exfoliating factor takes place upon skin contact. Rinse well, pat face with dry clean towel.",
      body: "Rinse the bar soap all over the body. Lather well for at least a minute. FOR SENSITIVE SKIN, lather for less than a minute and don’t scrub your body. Just let the natural extracts of the soap do the exfoliation.",
      break: "NEVER use different products on your skin all at once! Do a week rest if you are planning to switch to another product. Do this for your own safety."
    }
  },
  {
    id: 2,
    name: "15 in 1 Soap",
    slug: "15in1",
    price: 110.00,
    rating: 4.9,
    size: "135g",
    category: "soaps",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9e290445-9a45-4e32-8992-a9858a0ed088?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&",
    directions: {
      face: "Lather soap in hands, apply to face gently for 30 seconds. Rinse thoroughly.",
      body: "Massage lather over wet skin, leave on for 1-2 minutes for deep nourishment, then rinse.",
      break: "Rest skin for 3-5 days before switching products."
    }
  },
  {
    id: 3,
    name: "Gluta Oatmeal with Shea Butter & Avocado Oil",
    slug: "GlutaOatmealSButter",
    price: 100.00,
    rating: 4.8,
    size: "135g",
    category: "soaps",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c8a5f855-f3ab-41c7-bd3f-257ce9725b7a?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&",
    directions: {
      face: "Gently massage oatmeal lather onto face to allow mild, natural exfoliation.",
      body: "Lather over body, focusing on dry or rough patches. Rinse off completely.",
      break: "Avoid combining with acid peels simultaneously."
    }
  },
  {
    id: 4,
    name: "Glutamato with Grapeseed",
    slug: "Glutamato",
    price: 80.00,
    rating: 4.7,
    size: "135g",
    category: "soaps",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/aa921de8-944d-40f8-b6e6-f01542fa2d7e?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&",
    directions: {
      face: "Apply gentle lather in dynamic circular motions. Excellent anti-aging skin barrier wash.",
      body: "Massage into skin daily for glowing, grape-seed-infused skin rejuvenation.",
      break: "Keep bar dry in a draining soap dish to increase product life."
    }
  },
  {
    id: 5,
    name: "Gluta Oatmeal with Milk & Honey",
    slug: "GlutaOatmealMilkHoney",
    price: 100.00,
    rating: 5.0,
    size: "135g",
    category: "soaps",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ea24664c-1004-4c4d-a1dd-7492d7492c8b?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
  },
  {
    id: 6,
    name: "Glutamansi with Baking Soda",
    slug: "Glutamansi",
    price: 80.00,
    rating: 4.7,
    size: "135g",
    category: "soaps",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/a0c9eb3c-0f34-4ed5-974f-217fd5665d32?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
  },
  {
    id: 7,
    name: "Power Pink",
    slug: "powerPink",
    price: 110.00,
    rating: 4.8,
    size: "135g",
    category: "soaps",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/34e2ea98-ffdb-4ba9-8848-69ed6d196ff0?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
  },
  {
    id: 8,
    name: "Wonder Green",
    slug: "WonderGreen",
    price: 110.00,
    rating: 4.8,
    size: "135g",
    category: "soaps",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/2386671a-962f-4971-a307-eb5995d4a5cc?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
  },
  {
    id: 9,
    name: "Fresh Snow Lotion Combo",
    slug: "freshSnowLotion",
    price: 125.00,
    rating: 4.9,
    size: "200ml",
    category: "lotions",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f695f72d-6be6-4137-ae71-ff8e992d0079?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
  },
  {
    id: 10,
    name: "Assorted Body Scrubs 10pcs",
    slug: "AssortedBodyScrubs",
    price: 2000.00,
    rating: 5.0,
    size: "10pcs",
    category: "scrubs",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5b2a6e91-1c23-4946-b9f4-db65c33c19a9?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
  },
  {
    id: 11,
    name: "Blacked Soap",
    slug: "BlackedSoap",
    price: 130.00,
    rating: 5.0,
    size: "135g",
    category: "soaps",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/7a39404e-4a94-411c-9f67-5e3832976192?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
  },
  {
    id: 12,
    name: "Madre de Cacao",
    slug: "MadredeCacao",
    price: 20.00,
    rating: 5.0,
    size: "135g",
    category: "soaps",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/d1b22195-51a3-4fb7-90c8-22d652851276?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
  },
  {
    id: 13,
    name: "Gluta Oatmeal with Lavender",
    slug: "GlutaoatmealL",
    price: 120.00,
    rating: 4.9,
    size: "135g",
    category: "soaps",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/80df2da9-eeb2-419a-a442-d8ec2f05fb46?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
  },
  {
    id: 14,
    name: "Gluta Pink Soap",
    slug: "GlutaPinkSoap",
    price: 120.00,
    rating: 5.0,
    size: "135g",
    category: "soaps",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8f07c35c-86dd-43aa-847a-fb76fe5354f3?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
  },
  {
    id: 15,
    name: "Arbutin Soap",
    slug: "ArbutinSoap",
    price: 110.00,
    rating: 4.8,
    size: "135g",
    category: "soaps",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/2eccb109-aed1-4f6e-a99c-d18bda14de49?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
  },
  {
    id: 16,
    name: "Yellow Pop Soap",
    slug: "YellowPopSoap",
    price: 110.00,
    rating: 4.7,
    size: "135g",
    category: "soaps",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c8ea4406-723d-4ea4-a3ff-1789e1049c39?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
  },
  {
    id: 17,
    name: "Assorted Soaps 25pcs",
    slug: "Assortedsoaps",
    price: 1100.00,
    rating: 5.0,
    size: "25pcs",
    category: "soaps",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/61a8fcf8-928c-4699-9143-70cd3a33cdb8?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
  },
  {
    id: 18,
    name: "Espresso Coffee Body Scrub",
    slug: "EspressoCoffee",
    price: 210.00,
    rating: 4.9,
    size: "250g",
    category: "scrubs",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/72c27639-b7f1-4472-ba0d-f0efd75486ab?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
  },
  {
    id: 19,
    name: "Earthberry Strawberry Body Scrub",
    slug: "EarthberryStrawberry",
    price: 210.00,
    rating: 4.9,
    size: "250g",
    category: "scrubs",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/0ea5fc09-f6d9-49f2-8341-2395f213bb38?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
  },
  {
    id: 20,
    name: "Matcha Green Tea Body Scrub",
    slug: "MatchaGreenTea",
    price: 210.00,
    rating: 4.9,
    size: "250g",
    category: "scrubs",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6c2071bc-1b2d-4af6-b72d-d96f119823e0?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
  }
];

// Initial mock orders to allow immediate visual testing in admin and user screens
const initialOrders = [
  {
    id: "JRS-1001",
    customerName: "Josh Ley Estabas",
    email: "josh@gmail.com",
    address: "Brgy. San Jose, Cebu City",
    phone: "09171234567",
    items: [
      { id: 1, name: "Bleachpeel Soap", price: 150.00, quantity: 2 },
      { id: 2, name: "15 in 1 Soap", price: 110.00, quantity: 1 }
    ],
    subtotal: 410.00,
    shippingFee: 50.00,
    total: 460.00,
    paymentMethod: "GCASH",
    status: "Pending",
    date: "2026-05-21T09:30:00Z"
  },
  {
    id: "JRS-1002",
    customerName: "Sarah Thompson",
    email: "sarah.t@yahoo.com",
    address: "Greenhills, San Juan, Manila",
    phone: "09998765432",
    items: [
      { id: 10, name: "Assorted Body Scrubs 10pcs", price: 2000.00, quantity: 1 }
    ],
    subtotal: 2000.00,
    shippingFee: 50.00,
    total: 2050.00,
    paymentMethod: "UNIONBANK",
    status: "Shipped",
    date: "2026-05-20T14:45:00Z"
  }
];

// Create the global reactive state object
export const store = reactive({
  products: initialProducts,
  
  // Shopping Cart: array of items: { productId, quantity }
  cart: [],
  
  // Placed orders list
  orders: initialOrders,
  
  // User Session
  userSession: {
    isLoggedIn: false,
    email: "",
    name: "",
    role: "user" // 'user' or 'admin'
  },
  
  // Helper to fetch product by slug
  getProductBySlug(slug) {
    // Normalise any spaces or trailing whitespace in matching
    const normalized = slug.trim().toLowerCase().replace(/%20/g, "");
    return this.products.find(p => p.slug.trim().toLowerCase().replace(/\s/g, "") === normalized);
  },

  // Helper to fetch product by ID
  getProductById(id) {
    return this.products.find(p => p.id === Number(id));
  },

  // Cart Methods
  addToCart(productId, quantity = 1) {
    const existing = this.cart.find(item => item.productId === Number(productId));
    if (existing) {
      existing.quantity += Number(quantity);
    } else {
      this.cart.push({ productId: Number(productId), quantity: Number(quantity) });
    }
  },

  removeFromCart(productId) {
    this.cart = this.cart.filter(item => item.productId !== Number(productId));
  },

  updateCartQuantity(productId, quantity) {
    const item = this.cart.find(item => item.productId === Number(productId));
    if (item) {
      item.quantity = Math.max(0, Number(quantity));
      if (item.quantity === 0) {
        this.removeFromCart(productId);
      }
    }
  },

  clearCart() {
    this.cart = [];
  },

  // Computed Cart metrics
  get cartItems() {
    return this.cart.map(item => {
      const product = this.getProductById(item.productId);
      return {
        ...product,
        quantity: item.quantity,
        totalPrice: product ? product.price * item.quantity : 0
      };
    }).filter(item => item.id !== undefined);
  },

  get cartSubtotal() {
    return this.cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
  },

  get cartItemCount() {
    return this.cart.reduce((acc, item) => acc + item.quantity, 0);
  },

  // Checkout submissions
  placeOrder(customerDetails) {
    const orderId = "JRS-" + (1000 + this.orders.length + 1);
    const subtotal = this.cartSubtotal;
    const shippingFee = 50.00; // Flat standard shipping
    const total = subtotal + shippingFee;
    
    const newOrder = {
      id: orderId,
      customerName: `${customerDetails.firstName} ${customerDetails.lastName}`,
      email: customerDetails.email,
      address: `${customerDetails.address}, ${customerDetails.city}, ${customerDetails.country}`,
      phone: customerDetails.phone,
      items: this.cartItems.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity
      })),
      subtotal,
      shippingFee,
      total,
      paymentMethod: customerDetails.paymentMethod || "GCASH",
      status: "Pending",
      date: new Date().toISOString()
    };
    
    this.orders.unshift(newOrder);
    this.clearCart();
    return orderId;
  },

  // Authentications
  login(email, password, role = "user") {
    this.userSession.isLoggedIn = true;
    this.userSession.email = email;
    this.userSession.name = email.split('@')[0];
    this.userSession.role = role;
  },

  logout() {
    this.userSession.isLoggedIn = false;
    this.userSession.email = "";
    this.userSession.name = "";
    this.userSession.role = "user";
  },

  // Product Updates (Admin Dashboard)
  updateProductPrice(id, newPrice) {
    const product = this.getProductById(id);
    if (product) {
      product.price = Number(newPrice);
    }
  },

  updateProductDetails(id, updatedInfo) {
    const product = this.getProductById(id);
    if (product) {
      Object.assign(product, updatedInfo);
    }
  },

  addProduct(newProduct) {
    const nextId = this.products.reduce((max, p) => p.id > max ? p.id : max, 0) + 1;
    const item = {
      id: nextId,
      name: newProduct.name,
      slug: newProduct.name.toLowerCase().replace(/[^a-z0-9]/g, "-"),
      price: Number(newProduct.price),
      rating: 5.0,
      size: newProduct.size || "135g",
      category: newProduct.category || "soaps",
      image: newProduct.image || "https://cdn.builder.io/api/v1/image/assets/TEMP/c8a5f855-f3ab-41c7-bd3f-257ce9725b7a?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
    };
    this.products.push(item);
  },

  deleteProduct(id) {
    this.products = this.products.filter(p => p.id !== Number(id));
  }
});
