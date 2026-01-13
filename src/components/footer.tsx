import Link from "next/link";
import { Music, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background text-foreground py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Navigation */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-4 md:mb-0">
            <Link href="#productos" className="hover:text-muted-foreground">
              Productos
            </Link>
            <Link href="#contacto" className="hover:text-muted-foreground">
              Contacto
            </Link>
          </div>

          {/* Legal and Social */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-4 md:mb-0">
              <Link href="#terms" className="hover:text-muted-foreground text-sm">
                Términos y Condiciones
              </Link>
              <Link href="#privacy" className="hover:text-muted-foreground text-sm">
                Política de Privacidad
              </Link>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <Link href="https://tiktok.com/@pretty.podoestetica" className="hover:text-muted-foreground">
                <Music size={24} />
              </Link>
              <Link href="https://wa.me/51943373233" className="hover:text-muted-foreground">
                <MessageCircle size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 text-muted-foreground">
          © Pretty All Rights Reserved
        </div>
      </div>
    </footer>
  );
}