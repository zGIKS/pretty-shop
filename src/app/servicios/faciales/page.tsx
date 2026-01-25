import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ServiciosFaciales() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            Tratamientos Faciales
          </h1>
          <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-2xl">
            Aquí puedes detallar tus tratamientos faciales, beneficios, precios
            y cómo agendar una cita.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

