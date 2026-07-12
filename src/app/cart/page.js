"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <main>
        <Navbar />
        <div className="min-h-[50vh] flex flex-col items-center justify-center gap-4">
          <p className="text-gray-500">Your cart is empty.</p>
          <Link href="/" className="text-sm underline">Continue Shopping</Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <section className="max-w-4xl mx-auto px-6 md:px-8 py-12">
        <h1 className="text-2xl font-bold mb-8">Your Cart</h1>

        <div className="space-y-6">
          {cart.map((item) => (
            <div key={`${item.id}-${item.size}`} className="flex gap-4 items-center border-b border-gray-100 pb-6">
              <img src={item.image} alt={item.name} className="w-24 h-28 object-cover rounded-xl bg-gray-100" />
              
              <div className="flex-1">
                <h3 className="text-sm font-medium text-black">{item.name}</h3>
                <p className="text-xs text-gray-400 mt-1">Size: {item.size}</p>
                <p className="text-sm font-semibold text-black mt-2">₹{item.price}</p>

                <div className="flex items-center gap-3 mt-3">
                  <button
                    onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                    className="w-7 h-7 border border-gray-300 rounded-full text-sm hover:border-black"
                  >
                    -
                  </button>
                  <span className="text-sm">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                    className="w-7 h-7 border border-gray-300 rounded-full text-sm hover:border-black"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item.id, item.size)}
                className="text-xs text-gray-400 hover:text-red-500 transition-colors"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-between items-center">
          <p className="text-lg font-semibold">Total: ₹{cartTotal}</p>
          <Link href="/checkout" className="bg-black text-white px-10 py-4 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
            CHECKOUT
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}