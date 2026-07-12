"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart();
  const links = ["New Arrivals", "Men", "Women", "Accessories"];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative flex items-center justify-between px-6 md:px-8 py-5 border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50"
    >
      <Link href="/">
        <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-bold tracking-tight text-black cursor-pointer">
          VESTRO
        </motion.div>
      </Link>

      <div className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
        {links.map((item) => (
          <a key={item} href="#" className="relative hover:text-black transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[1.5px] after:bg-black after:transition-all hover:after:w-full">
            {item}
          </a>
        ))}
      </div>

      <div className="hidden md:flex items-center gap-5">
        <button className="text-sm font-medium hover:text-gray-500 transition-colors">
          Search
        </button>
        <Link href="/cart" className="text-sm font-medium hover:text-gray-500 transition-colors">
          <motion.span key={cartCount} initial={{ scale: 1.3 }} animate={{ scale: 1 }} className="inline-block">
            Cart ({cartCount})
          </motion.span>
        </Link>
      </div>

      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden flex flex-col gap-1.5 w-7 h-7 justify-center items-center z-50">
        <motion.span animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="w-6 h-[2px] bg-black block" />
        <motion.span animate={isOpen ? { opacity: 0 } : { opacity: 1 }} className="w-6 h-[2px] bg-black block" />
        <motion.span animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="w-6 h-[2px] bg-black block" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, x: "100%" }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: "100%" }} transition={{ duration: 0.4, ease: "easeInOut" }} className="md:hidden fixed top-0 right-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-8 z-40">
            {links.map((item, i) => (
              <motion.a key={item} href="#" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i + 0.2 }} onClick={() => setIsOpen(false)} className="text-2xl font-medium text-black">
                {item}
              </motion.a>
            ))}
            <div className="flex gap-6 mt-6 text-sm text-gray-500">
              <button onClick={() => setIsOpen(false)}>Search</button>
              <Link href="/cart" onClick={() => setIsOpen(false)}>
                Cart ({cartCount})
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}