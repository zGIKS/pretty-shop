import Header from "@/components/header";
import Footer from "@/components/footer";
import ProductsSection from "@/components/landing/products/ProductsSection";

export default function Productos() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-16">
        <ProductsSection />
      </main>
      <Footer />
    </>
  );
}
