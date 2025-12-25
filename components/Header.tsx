import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const links = [
  { label: "Categorías", href: "/categorias" },
  { label: "Productos", href: "/productos" },
  { label: "Contáctanos", href: "/contactanos" },
];

export default function Header() {
  return (
    <header className="border-b bg-background/80 backdrop-blur">
      <div className="container flex flex-wrap items-center gap-3 py-2 md:h-20 md:flex-nowrap md:py-0">
        <div className="flex flex-wrap items-center gap-4">
          <Link className="text-xl font-semibold tracking-tight" href="/">
            Pretty
          </Link>
          <nav className="flex flex-wrap items-center gap-1">
            {links.map((link) => (
              <Button key={link.label} asChild size="default" variant="ghost">
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
          </nav>
        </div>
        <div className="ml-auto w-full md:w-64">
          <label className="sr-only" htmlFor="site-search">
            Buscar
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="site-search"
              placeholder="¿Qué estás buscando?"
              type="search"
              className="w-full pl-10"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
