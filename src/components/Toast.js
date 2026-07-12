"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function Toast({ message, show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 50, x: "-50%" }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 left-1/2 bg-black text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg z-[100]"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}