"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-b from-[#0a0118] via-[#0a0118] to-white overflow-hidden">
      
      {/* Glowing gradient blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[500px] h-[500px] rounded-full bg-purple-600 blur-[130px] opacity-40 top-[-150px] right-[-100px]"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], y: [0, 40, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[400px] h-[400px] rounded-full bg-pink-600 blur-[120px] opacity-30 bottom-[-100px] left-[-100px]"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[350px] h-[350px] rounded-full bg-blue-500 blur-[110px] opacity-25 top-1/3 left-1/2 -translate-x-1/2"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm tracking-[0.3em] text-purple-300 mb-4 uppercase"
        >
          New Season Collection
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ fontFamily: "'Playfair Display', serif" }}
          className="text-6xl md:text-8xl italic font-bold tracking-tight text-white leading-[0.95]"
        >
          Wear Your <br /> Story.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-gray-400 max-w-md mx-auto"
        >
          Curated fashion, accessories & lifestyle essentials — designed for how you actually live.
        </motion.p>

        <motion.a
          href="#products"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-10 bg-white text-black px-10 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-gray-200 transition-colors cursor-pointer"
        >
          SHOP NOW
        </motion.a>
      </div>
    </section>
  );
}