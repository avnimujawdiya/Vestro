"use client";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({ category = "All" }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const url = category === "All" ? "/api/products" : `/api/products?category=${category}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, [category]);

  return (
    <section id="products" className="relative px-8 pt-32 pb-20 max-w-7xl mx-auto overflow-hidden -mt-24">
      <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-200 blur-[150px] opacity-40 -top-20 right-0 -z-10" />
      <div className="absolute w-[450px] h-[450px] rounded-full bg-pink-200 blur-[150px] opacity-40 top-0 left-0 -z-10" />

      <h2 className="text-3xl font-bold text-black mb-10">
        {category === "All" ? "New Arrivals" : category}
      </h2>

      {loading ? (
        <p className="text-gray-400 text-sm">Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}