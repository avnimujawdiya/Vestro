"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Toast from "./Toast";
import { useCart } from "@/context/CartContext";

export default function ProductDetail({ product }) {
  const [selectedSize, setSelectedSize] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size first!");
      return;
    }
    addToCart(product, selectedSize);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <main>
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 md:px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden bg-gray-100 aspect-[3/4]"
        >
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-xs text-gray-400 uppercase tracking-wide">{product.category}</p>
          <h1 className="text-3xl font-bold text-black mt-2">{product.name}</h1>
          <p className="text-xl font-semibold text-black mt-3">₹{product.price}</p>
          <p className="text-gray-500 mt-6 leading-relaxed">{product.description}</p>

          <div className="mt-8">
            <p className="text-sm font-medium text-black mb-3">Select Size</p>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-5 py-2 rounded-full text-sm border transition-colors ${
                    selectedSize === size
                      ? "bg-black text-white border-black"
                      : "border-gray-300 text-gray-700 hover:border-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleAddToCart}
            className="mt-10 w-full md:w-auto bg-black text-white px-10 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors"
          >
            ADD TO CART
          </motion.button>
        </motion.div>
      </section>

      <Footer />
      <Toast message={`${product.name} added to cart!`} show={showToast} />
    </main>
  );
}