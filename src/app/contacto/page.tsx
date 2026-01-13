import Header from "@/components/header";
import Footer from "@/components/footer";
import ContactInfo from "@/components/ContactInfo";
import BusinessHours from "@/components/BusinessHours";

export default function Contacto() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-16 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl mx-auto space-y-4">
            <ContactInfo />
            <BusinessHours />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}