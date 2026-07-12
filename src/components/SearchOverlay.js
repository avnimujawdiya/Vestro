"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function SearchOverlay({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    if (isOpen && allProducts.length === 0) {
      fetch("/api/products")
        .then((res) => res.json())
        .then((data) => setAllProducts(data));
    }
  }, [isOpen, allProducts.length]);

  const filteredProducts = query.trim() === ""
    ? []
    : allProducts.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      );

  const handleClose = () => {
    setQuery("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-white z-[200] overflow-y-auto"
        >
          <div className="max-w-3xl mx-auto px-6 py-10">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold">Search Products</h2>
              <button onClick={handleClose} className="text-2xl text-gray-400 hover:text-black">
                ✕
              </button>
            </div>

            <input
              type="text"
              autoFocus
              placeholder="Search for shirts, jackets, bags..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full border-b-2 border-gray-200 focus:border-black outline-none text-lg py-3 transition-colors"
            />

            <div className="mt-8 space-y-4">
              {query.trim() !== "" && filteredProducts.length === 0 && (
                <p className="text-gray-400 text-sm">No products found for "{query}"</p>
              )}

              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  onClick={handleClose}
                  className="flex items-center gap-4 hover:bg-gray-50 p-3 rounded-xl transition-colors"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-20 object-cover rounded-lg bg-gray-100"
                  />
                  <div>
                    <p className="text-xs text-gray-400 uppercase">{product.category}</p>
                    <p className="text-sm font-medium text-black">{product.name}</p>
                    <p className="text-sm text-gray-600">₹{product.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}