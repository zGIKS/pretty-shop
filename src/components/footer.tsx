import Link from "next/link";
import { MapPin, Phone, Music, MessageCircle, Instagram } from "lucide-react";
import Pretty from "@/components/icon/pretty/pretty";
import {
  INSTAGRAM_HREF,
  PHONE_DISPLAY,
  PHONE_TEL_HREF,
  WHATSAPP_HREF,
  TIKTOK_HREF,
} from "@/lib/contact";

export default function Footer() {
  const servicios = [
    { label: "Tratamientos Faciales", href: "/servicios/tratamientos-faciales" },
    {
      label: "Tratamientos Corporales",
      href: "/servicios/tratamientos-corporales",
    },
    { label: "Podología", href: "/servicios/podologia" },
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
            <Pretty
              size="lg"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-3">Servicios</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {servicios.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-foreground">
                      {item.label}
                    </Link>
                  </li>
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
                  <Link href={PHONE_TEL_HREF} className="hover:text-foreground">
                    {PHONE_DISPLAY}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Síguenos</h3>
              <div className="flex items-center gap-4 text-muted-foreground">
                <Link
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground"
                >
                  <MessageCircle size={20} />
                </Link>
                <Link
                  href={TIKTOK_HREF}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground"
                >
                  <Music size={20} />
                </Link>
                <Link
                  href={INSTAGRAM_HREF}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground"
                >
                  <Instagram size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>© 2026 Pretty Studio. Estética y podología.</div>
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
