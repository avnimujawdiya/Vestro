"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function RecommendedProducts({ currentProductId, category }) {
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    fetch(`/api/recommendations/${currentProductId}?category=${category}`)
      .then((res) => res.json())
      .then((data) => setRecommended(data));
  }, [currentProductId, category]);

  if (recommended.length === 0) return null;

  return (
    <section className="bg-white px-8 py-20 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-black mb-10">You Might Also Like</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {recommended.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <motion.div whileHover={{ y: -4 }} className="cursor-pointer">
              <div className="overflow-hidden rounded-xl bg-gray-100 aspect-[3/4]">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <p className="text-xs text-gray-400 uppercase mt-3">{product.category}</p>
              <p className="text-sm font-medium text-black mt-1">{product.name}</p>
              <p className="text-sm font-semibold text-black mt-1">₹{product.price}</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}