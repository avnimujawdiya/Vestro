"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import products from "@/data/products";
import { getAverageColor, colorDistance } from "@/data/colorUtils";

export default function VisualSearchPage() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setUploadedImage(imageUrl);
    setLoading(true);
    setResults([]);

    const uploadedImg = new Image();
    uploadedImg.crossOrigin = "anonymous";
    uploadedImg.src = imageUrl;

    uploadedImg.onload = async () => {
      const uploadedColor = getAverageColor(uploadedImg);
      const scored = [];

      for (const product of products) {
        try {
          const productColor = await getProductColor(product.image);
          const distance = colorDistance(uploadedColor, productColor);
          scored.push({ ...product, distance });
        } catch (err) {
          console.log("Skipped image:", product.name);
        }
      }

      scored.sort((a, b) => a.distance - b.distance);
      setResults(scored.slice(0, 4));
      setLoading(false);
    };
  };

  const getProductColor = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = src;
      img.onload = () => resolve(getAverageColor(img));
      img.onerror = reject;
    });
  };

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      <section className="max-w-4xl mx-auto px-6 md:px-8 py-16 text-center">
        <h1 style={{ fontFamily: "'Playfair Display', serif" }} className="text-4xl italic font-bold text-black mb-3">
          Visual Search
        </h1>
        <p className="text-gray-500 mb-10">Upload a photo and we'll find similar-colored pieces from our collection.</p>

        <div
          onClick={() => fileInputRef.current.click()}
          className="border-2 border-dashed border-gray-300 rounded-2xl p-12 cursor-pointer hover:border-black transition-colors max-w-md mx-auto"
        >
          {uploadedImage ? (
            <img src={uploadedImage} alt="Uploaded" className="max-h-64 mx-auto rounded-xl" />
          ) : (
            <p className="text-gray-400 text-sm">Click to upload an image</p>
          )}
        </div>

        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageUpload}
          className="hidden"
        />

        {loading && (
          <p className="text-gray-400 text-sm mt-8 animate-pulse">Analyzing colors...</p>
        )}

        {results.length > 0 && (
          <div className="mt-16 text-left">
            <h2 className="text-xl font-bold text-black mb-8 text-center">Similar Matches</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {results.map((product) => (
                <Link key={product.id} href={`/products/${product.id}`}>
                  <motion.div whileHover={{ y: -4 }} className="cursor-pointer">
                    <div className="overflow-hidden rounded-xl bg-gray-100 aspect-[3/4]">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                    <p className="text-sm font-medium text-black mt-3">{product.name}</p>
                    <p className="text-sm text-gray-600">₹{product.price}</p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}