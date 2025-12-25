import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const links = [
  { label: "Categorias", href: "/categorias" },
  { label: "Productos", href: "/productos" },
  { label: "Contactanos", href: "/contactanos" },
];

export default function Header() {
  return (
    <header className="border-b bg-background/80 backdrop-blur">
      <div className="container flex flex-col gap-3 py-3 md:flex-row md:items-center md:justify-between">
        <Link className="text-lg font-semibold tracking-tight" href="/">
          Pretty
        </Link>
        <nav className="flex flex-wrap items-center gap-2">
          {links.map((link) => (
            <Button key={link.label} asChild size="sm" variant="ghost">
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </nav>
        <div className="w-full md:w-auto">
          <label className="sr-only" htmlFor="site-search">
            Buscador
          </label>
          <Input
            id="site-search"
            placeholder="Que estas buscando"
            type="search"
            className="w-full md:w-64"
          />
        </div>
      </div>
    </header>
  );
}
