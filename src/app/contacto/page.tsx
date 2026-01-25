import Header from "@/components/header";
import Footer from "@/components/footer";
import ContactInfo from "@/components/landing/contact/ContactInfo";

export default function Contacto() {
  return (
    <div className="h-screen flex flex-col">
      <Header fixed={false} />
      <main className="flex-1 flex items-start lg:items-center justify-center pt-6 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <ContactInfo />
            <div className="bg-white rounded-xl border border-border overflow-hidden h-full min-h-130">
              <iframe
                title="Mapa de ubicación"
                src="https://www.google.com/maps?&q=Galeria%20Santa%20Rosa%2C%20Surquillo%2C%20Lima%2C%20Peru&output=embed"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
