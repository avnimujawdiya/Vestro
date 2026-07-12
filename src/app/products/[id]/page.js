import products from "@/data/products";
import ProductDetail from "@/components/ProductDetail";

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="p-20 text-center text-gray-500">Product not found.</div>;
  }

  return <ProductDetail product={product} />;
}