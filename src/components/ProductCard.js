"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -6 }}
        className="group cursor-pointer"
      >
        <div className="overflow-hidden rounded-2xl bg-gray-100 aspect-[3/4]">
          <motion.img
            src={product.image}
            alt={product.name}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mt-4 flex justify-between items-start">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide">{product.category}</p>
            <h3 className="text-sm font-medium text-black mt-1">{product.name}</h3>
          </div>
          <p className="text-sm font-semibold text-black">₹{product.price}</p>
        </div>
      </motion.div>
    </Link>
  );
}