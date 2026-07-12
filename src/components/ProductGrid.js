import ProductCard from "./ProductCard";
import products from "@/data/products";

export default function ProductGrid() {
  return (
    <section className="px-8 py-20 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-black mb-10">New Arrivals</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}