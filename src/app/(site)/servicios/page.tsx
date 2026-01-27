import Footer from "@/components/footer";
import FacialTreatment from "@/components/landing/services/FacialTreatment";
import BodyTreatment from "@/components/landing/services/BodyTreatment";
import Podologia from "@/components/landing/services/Podologia";

export default function Servicios() {
  return (
    <>
      <main className="min-h-screen pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 gap-6">
            <FacialTreatment />
            <BodyTreatment />
            <Podologia />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
