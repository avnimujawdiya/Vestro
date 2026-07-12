"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      
      {/* Background decorative circle */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.15 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute w-[600px] h-[600px] rounded-full bg-black blur-3xl top-[-200px] right-[-200px]"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm tracking-[0.3em] text-gray-500 mb-4 uppercase"
        >
          New Season Collection
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold tracking-tight text-black leading-[0.95]"
        >
          Wear Your <br /> Story.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-gray-500 max-w-md mx-auto"
        >
          Curated fashion, accessories & lifestyle essentials — designed for how you actually live.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 bg-black text-white px-10 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors"
        >
          SHOP NOW
        </motion.button>
      </div>
    </section>
  );
}