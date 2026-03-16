import Footer from "@/components/footer";
import ProductsSection from "@/components/landing/products/ProductsSection";
import { Suspense } from "react";

export default function Productos() {
  return (
    <>
      <main className="min-h-screen pb-16 pt-[calc(var(--site-header-offset)+var(--site-header-gap))]">
        <Suspense fallback={null}>
          <ProductsSection />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
