"use client";
import { useState, useEffect } from "react";
import ProductDetail from "@/components/ProductDetail";

export default function ProductPage({ params }) {
  const [product, setProduct] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      const { id } = await params;
      const res = await fetch(`/api/products/${id}`);

      if (!res.ok) {
        setNotFound(true);
        return;
      }

      const data = await res.json();
      setProduct(data);
    }
    fetchProduct();
  }, [params]);

  if (notFound) {
    return <div className="p-20 text-center text-gray-500">Product not found.</div>;
  }

  if (!product) {
    return <div className="p-20 text-center text-gray-400">Loading...</div>;
  }

  return <ProductDetail product={product} />;
}