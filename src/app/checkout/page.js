"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useCart();
  const router = useRouter();
  const [placing, setPlacing] = useState(false);
  const [form, setForm] = useState({
    name: "",
    address: "",
    city: "",
    pincode: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setPlacing(true);
    setTimeout(() => {
      clearCart();
      router.push("/order-confirmed");
    }, 1800);
  };

  if (cart.length === 0) {
    return (
      <main className="bg-white min-h-screen">
        <Navbar />
        <div className="min-h-[50vh] flex flex-col items-center justify-center gap-4">
          <p className="text-gray-500">Your cart is empty.</p>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      <section className="max-w-5xl mx-auto px-6 md:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Shipping Form */}
        <div>
          <h1 className="text-2xl font-bold text-black mb-8">Shipping Details</h1>

          <form onSubmit={handlePlaceOrder} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:border-black outline-none transition-colors"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              required
              value={form.address}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:border-black outline-none transition-colors"
            />
            <div className="flex gap-4">
              <input
                type="text"
                name="city"
                placeholder="City"
                required
                value={form.city}
                onChange={handleChange}
                className="w-1/2 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:border-black outline-none transition-colors"
              />
              <input
                type="text"
                name="pincode"
                placeholder="Pincode"
                required
                value={form.pincode}
                onChange={handleChange}
                className="w-1/2 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:border-black outline-none transition-colors"
              />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              value={form.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:border-black outline-none transition-colors"
            />

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={placing}
              className="w-full bg-black text-white py-4 rounded-full text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors mt-6 disabled:opacity-60"
            >
              {placing ? "Placing Order..." : `PLACE ORDER — ₹${cartTotal}`}
            </motion.button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-gray-50 rounded-2xl p-8 h-fit">
          <h2 className="text-lg font-bold text-black mb-6">Order Summary</h2>
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={`${item.id}-${item.size}`} className="flex gap-4 items-center">
                <img src={item.image} alt={item.name} className="w-16 h-20 object-cover rounded-lg bg-gray-200" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-black">{item.name}</p>
                  <p className="text-xs text-gray-400">Size: {item.size} · Qty: {item.quantity}</p>
                </div>
                <p className="text-sm font-semibold text-black">₹{item.price * item.quantity}</p>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-200 mt-6 pt-6 flex justify-between">
            <p className="text-base font-bold text-black">Total</p>
            <p className="text-base font-bold text-black">₹{cartTotal}</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}