"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function OrderConfirmedPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-4xl mb-6"
        >
          ✓
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-black mb-2"
        >
          Order Placed Successfully!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-500 max-w-sm"
        >
          Thank you for shopping with Vestro. Your order will be delivered soon.
        </motion.p>

        <Link href="/">
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="mt-8 bg-black text-white px-10 py-4 rounded-full text-sm font-medium"
          >
            CONTINUE SHOPPING
          </motion.button>
        </Link>
      </div>

      <Footer />
    </main>
  );
}