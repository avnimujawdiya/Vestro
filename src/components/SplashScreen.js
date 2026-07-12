"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingShapes from "./FloatingShapes";

export default function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[999] overflow-hidden bg-[#0a0118] flex items-center justify-center"
        >
          {/* Glowing gradient blobs */}
          <motion.div
            animate={{ scale: [1, 1.3, 1], x: [0, 40, 0], y: [0, -30, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[500px] h-[500px] rounded-full bg-purple-600 blur-[120px] opacity-40 top-[-100px] left-[-100px]"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], x: [0, -30, 0], y: [0, 40, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[450px] h-[450px] rounded-full bg-pink-600 blur-[120px] opacity-30 bottom-[-100px] right-[-100px]"
          />
          <motion.div
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[300px] h-[300px] rounded-full bg-blue-500 blur-[100px] opacity-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />

          {/* 3D Floating Shapes */}
          <FloatingShapes />

          {/* Logo Text */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.85, letterSpacing: "0.05em" }}
            animate={{ opacity: 1, scale: 1, letterSpacing: "0.35em" }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="relative z-10 text-white text-5xl md:text-7xl italic font-bold"
          >
            Vestro
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            className="absolute bottom-16 text-white/50 text-xs tracking-[0.3em] uppercase"
          >
            Wear Your Story
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}