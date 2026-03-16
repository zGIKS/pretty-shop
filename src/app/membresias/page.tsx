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
      <div className="page-top min-h-screen flex flex-col bg-background">
        <MembershipsSection className="flex-1 bg-background pt-0 pb-20" />
      </div>
      <Footer />
    </>
  );
}
