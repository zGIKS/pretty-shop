import Link from "next/link";
import { MapPin, Phone, Music, MessageCircle } from "lucide-react";
import PrettyIcon from "@/components/icon/pretty";

export default function Footer() {
  const servicios = [
    "Tratamientos Faciales",
    "Tratamientos Corporales",
    "Podología",
  ];

  const navegacion = [
    { label: "Servicios", href: "/servicios" },
    { label: "Productos", href: "/productos" },
    { label: "Contacto", href: "/contacto" },
  ];

  return (
    <footer className="bg-background text-foreground py-10 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_2.8fr] gap-8">
          <div className="flex items-start">
            <PrettyIcon className="h-16 w-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-3">Servicios</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {servicios.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Navegación</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {navegacion.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-foreground">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Contacto</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Galería Sta. Rosa 946</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <Link href="tel:+51943373233" className="hover:text-foreground">
                    +51 943 373 233
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Síguenos</h3>
              <div className="flex items-center gap-4 text-muted-foreground">
                <Link
                  href="https://tiktok.com/@pretty.podoestetica"
                  className="hover:text-foreground"
                >
                  <Music size={20} />
                </Link>
                <Link
                  href="https://wa.me/51943373233"
                  className="hover:text-foreground"
                >
                  <MessageCircle size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>© 2026 Pretty. Estética y podología.</div>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="hover:text-foreground">
              Términos y Condiciones
            </Link>
            <Link href="/privacy" className="hover:text-foreground">
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
