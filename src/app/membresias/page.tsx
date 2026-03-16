import type { Metadata } from "next";
import MembershipsSection from "@/components/landing/home/section6";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Membresías | Pretty Studio",
  description: "Conoce nuestros planes y membresías pensados en ti.",
};

export default function Membresias() {
  return (
    <>
      <div className="pt-24 min-h-screen flex flex-col">
        <MembershipsSection className="flex-1 bg-background pt-12 pb-20" />
      </div>
      <Footer />
    </>
  );
}
