import Footer from "@/components/footer";
import ContactInfo from "@/components/landing/contact/ContactInfo";

export default function Contacto() {
  return (
    <div className="flex min-h-screen flex-col pt-[calc(var(--site-header-offset)+var(--site-header-gap))]">
      <main className="flex-1 flex items-start lg:items-center justify-center pb-10">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <ContactInfo />
            <div className="bg-card rounded-xl border border-border overflow-hidden h-full min-h-130">
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
