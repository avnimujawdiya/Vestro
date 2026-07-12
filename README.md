# 🛍️ Vestro — Full-Stack E-Commerce Storefront

A fully animated, AI-inspired e-commerce platform with a cinematic 3D intro, functional cart & checkout flow, and a custom backend API layer — built to feel like a real production shopping experience.

**Live Demo:** [Coming Soon]

---

## ✨ Features

### 🎨 Design & Animation
- **Cinematic Splash Screen** — Animated brand intro with 3D floating spheres (Three.js) and glowing gradient orbs
- **Premium Dark-to-Light Theme** — Seamless gradient transitions across every page
- **Animated Navigation** — Sticky glassmorphism navbar with smooth underline hover effects
- **Mobile Hamburger Menu** — Full-screen slide-in menu with staggered animations
- **Scroll-Triggered Animations** — Product cards fade in as they enter the viewport

### 🛒 Shopping Experience
- **Product Catalog** — 10 products across Men, Women, and Accessories categories
- **Category Filtering** — Filter products via navbar or footer links
- **Live Search** — Real-time product search overlay
- **Dynamic Product Pages** — Individual pages generated via Next.js dynamic routing
- **Shopping Cart** — Full cart management via React Context API (add/remove/update quantity)
- **Checkout Flow** — Shipping form → order summary → confirmation page
- **Toast Notifications** — Animated "Added to Cart" feedback

### 🤖 AI-Inspired Features
- **Smart Recommendations** — "You Might Also Like" section powered by a custom recommendation API
- **Visual Search** — Upload a photo and find color-matching products using canvas-based color extraction and distance matching

### ⚙️ Backend
- **Custom REST API** — Built with Next.js API Routes (`/api/products`, `/api/products/[id]`, `/api/recommendations/[id]`)
- **Category filtering at the API level** via query parameters
- **Client-side data fetching** across all product-related components

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 15** (App Router) | Frontend framework + API routes (backend) |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | UI animations & micro-interactions |
| **Three.js / React Three Fiber** | 3D floating shapes on splash screen |
| **React Context API** | Global cart state management |
| **Canvas API** | Client-side image color extraction (Visual Search) |

---

## 📁 Project Structure
vestro/
├── src/
│   ├── app/
│   │   ├── page.js                        → Homepage
│   │   ├── layout.js                      → Root layout, wraps app in CartProvider
│   │   ├── globals.css                    → Global styles + font imports
│   │   ├── api/
│   │   │   ├── products/
│   │   │   │   ├── route.js               → GET all products / filter by category
│   │   │   │   └── [id]/route.js          → GET single product by ID
│   │   │   └── recommendations/
│   │   │       └── [id]/route.js          → GET recommended products by category
│   │   ├── products/[id]/page.js          → Dynamic product detail route
│   │   ├── cart/page.js                   → Cart page
│   │   ├── checkout/page.js               → Checkout form + order summary
│   │   ├── order-confirmed/page.js        → Order confirmation page
│   │   └── visual-search/page.js          → Visual search page
│   │
│   ├── components/
│   │   ├── SplashScreen.js                → Animated intro with 3D shapes
│   │   ├── FloatingShapes.js              → Three.js floating sphere scene
│   │   ├── Navbar.js                      → Sticky nav + mobile menu + search trigger
│   │   ├── Hero.js                        → Homepage banner
│   │   ├── ProductCard.js                 → Individual product card
│   │   ├── ProductGrid.js                 → Fetches & renders products from API
│   │   ├── ProductDetail.js               → Full product detail layout
│   │   ├── RecommendedProducts.js         → Fetches related products from API
│   │   ├── SearchOverlay.js               → Live search modal
│   │   ├── Footer.js                      → Site footer with category links
│   │   └── Toast.js                       → Reusable toast notification
│   │
│   ├── context/
│   │   └── CartContext.js                 → Global cart state (add/remove/update/clear)
│   │
│   └── data/
│       ├── products.js                    → Product catalog (data source for API)
│       └── colorUtils.js                  → Color extraction & distance logic
│
├── public/
├── tailwind.config.js
├── next.config.mjs
└── package.json

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+

### Installation

```bash
git clone https://github.com/avnimujawdiya/vestro.git
cd vestro
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🎯 Key Implementation Details

- **API Architecture**: Built a lightweight REST API using Next.js Route Handlers, decoupling the frontend from static data — components fetch from `/api/*` endpoints instead of importing data directly, mirroring real-world client-server architecture.
- **Recommendation Logic**: The `/api/recommendations/[id]` endpoint filters the catalog by matching category and excludes the current product, simulating collaborative filtering behavior at a lightweight scale.
- **Visual Search**: Extracts the average RGB color of an uploaded image via the Canvas API, then computes Euclidean distance against pre-computed average colors of catalog images to rank visual similarity — a simplified alternative to embedding-based visual search (e.g. CLIP).
- **Dynamic Routing**: Product detail pages use Next.js's `[id]` convention with client-side fetching against the custom API.
- **State Management**: Cart state is managed globally via `CartContext.js`, avoiding prop drilling across Navbar, product pages, and checkout.
- **3D Graphics**: Splash screen uses React Three Fiber (`@react-three/fiber`) with `Float` and `MeshDistortMaterial` from `@react-three/drei` to render animated, liquid-like floating spheres.

---

## 📌 Future Improvements

- [ ] Persistent database (PostgreSQL) replacing the in-memory product catalog
- [ ] User authentication
- [ ] Real payment gateway integration (Razorpay/Stripe test mode)
- [ ] Order history & user accounts
- [ ] Embedding-based visual search using a vision model

---

## 👩‍💻 Author

Built by **Avni** — B.Tech CS (AI & Data Science) student, JECRC University

---

## 📄 License

This project is open source and available for learning purposes.