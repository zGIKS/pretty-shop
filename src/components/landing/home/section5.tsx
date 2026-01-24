import { ArrowRight } from "lucide-react";

export default function Section5() {
  const items = [
    "Cuidado de la piel",
    "Rostro",
    "Ojos",
    "Labios",
    "Accesorios de belleza",
  ];

  return (
    <section className="py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-6 md:gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Productos</h2>
          </div>
          <div className="divide-y">
            {items.map((item) => (
              <button
                key={item}
                type="button"
                className="w-full flex items-center justify-between py-4 text-base md:text-lg font-medium text-left hover:opacity-80 transition-opacity"
              >
                <span>{item}</span>
                <ArrowRight className="h-4 w-4" aria-hidden />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
