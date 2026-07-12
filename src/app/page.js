import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

export default async function Home({ searchParams }) {
  const params = await searchParams;
  const category = params?.category || "All";

  return (
    <main>
      <Navbar />
      <Hero />
      <ProductGrid category={category} />
      <Footer />
    </main>
  );
}