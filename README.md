# 🛍️ Vestro — Modern E-Commerce Storefront

A fully animated, responsive e-commerce frontend built to feel like a real production shopping experience — clean design, smooth micro-interactions, and functional cart management.

**Live Demo:** [Coming Soon]

---

## ✨ Features

- **Animated Navigation** — Sticky glassmorphism navbar with smooth underline hover effects
- **Mobile Hamburger Menu** — Full-screen slide-in menu with staggered link animations
- **Hero Section** — Staggered entrance animations for a premium first impression
- **Product Grid** — Scroll-triggered fade-in animations, hover lift & zoom effects
- **Dynamic Product Pages** — Individual product detail pages using Next.js dynamic routing
- **Size Selection** — Interactive size picker with active state styling
- **Shopping Cart** — Full cart functionality powered by React Context API:
  - Add to cart with size + quantity tracking
  - Increase/decrease quantity
  - Remove items
  - Real-time total price calculation
- **Toast Notifications** — Animated "Added to Cart" confirmation popup
- **Cart Icon Bounce** — Micro-animation on cart count update
- **Fully Responsive** — Optimized for mobile, tablet, and desktop

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 15** (App Router) | React framework, routing, rendering |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Animations & micro-interactions |
| **React Context API** | Global cart state management |

---

## 📁 Project Structure
vestro/
├── src/
│   ├── app/
│   │   ├── page.js                  → Homepage (Navbar, Hero, ProductGrid, Footer)
│   │   ├── layout.js                → Root layout, wraps app in CartProvider
│   │   ├── globals.css              → Global styles
│   │   ├── cart/
│   │   │   └── page.js              → Cart page (view/edit/remove items)
│   │   └── products/
│   │       └── [id]/
│   │           └── page.js          → Dynamic product detail route
│   │
│   ├── components/
│   │   ├── Navbar.js                → Sticky nav bar + mobile hamburger menu
│   │   ├── Hero.js                  → Homepage banner with animated text
│   │   ├── ProductCard.js           → Individual product card (grid item)
│   │   ├── ProductGrid.js           → Maps product data into ProductCard grid
│   │   ├── ProductDetail.js         → Full product detail page layout
│   │   ├── Footer.js                → Site footer with links
│   │   └── Toast.js                 → Reusable toast notification component
│   │
│   ├── context/
│   │   └── CartContext.js           → Global cart state (add/remove/update/count/total)
│   │
│   └── data/
│       └── products.js              → Product catalog (dummy data)
│
├── public/                          → Static assets
├── tailwind.config.js               → Tailwind configuration
├── next.config.mjs                  → Next.js configuration
└── package.json                     → Dependencies & scripts

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR-USERNAME/vestro.git

# Navigate into the project
cd vestro

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🎯 Key Implementation Details

- **Dynamic Routing**: Uses Next.js `[id]` folder convention to render individual product pages from a single template
- **State Management**: Cart state is managed globally via `CartContext.js` using React's `createContext` + `useContext`, avoiding prop drilling across Navbar, Product pages, and Cart page
- **Animations**: All animations built with Framer Motion — including `whileInView` for scroll-triggered effects, `AnimatePresence` for exit animations (mobile menu, toast), and `whileHover`/`whileTap` for interactive feedback
- **Component Architecture**: Each file kept under 200 lines, following single-responsibility principle — one component, one job

---

## 📌 Future Improvements

- [ ] Backend integration (real product database)
- [ ] User authentication
- [ ] Search & filter functionality
- [ ] Payment gateway integration
- [ ] Order history

---

## 👩‍💻 Author

Built by **Avni** — B.Tech CS (AI & Data Science) student, JECRC University

---

## 📄 License

This project is open source and available for learning purposes.
