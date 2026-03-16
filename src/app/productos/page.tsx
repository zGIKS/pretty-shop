import Footer from "@/components/footer";
import ProductsSection from "@/components/landing/products/ProductsSection";
import { Suspense } from "react";

export default function Productos() {
  return (
    <>
        <main className="min-h-screen pb-16 page-top">
        <Suspense fallback={null}>
          <ProductsSection />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
