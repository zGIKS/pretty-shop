import type { Metadata } from "next";
import { PackagesSection } from "@/components/services/packages-section";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Paquetes | Pretty Studio",
  description: "Aprovecha nuestras promociones exclusivas en paquetes de tratamiento.",
};

export default function Paquetes() {
  return (
    <>
        <div className="page-top pb-20 min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <PackagesSection />
        </div>
      </div>
      <Footer />
    </>
  );
}
