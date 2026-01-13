"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Search, Package, Mail, Menu } from "lucide-react";
import { products } from "@/data/products";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<typeof products>([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Buscar productos
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  }, [searchQuery]);

  // Cerrar resultados al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 shadow-md backdrop-blur-sm bg-white/95">
      <header className="max-w-7xl mx-auto flex items-center justify-between p-6">
        <Link href="/">
          <Image src="/pretty.png" alt="Pretty Logo" width={50} height={16} />
        </Link>
        <div className="hidden md:flex items-center gap-4">
          <div className="relative" ref={searchRef}>
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              type="text"
              placeholder="Buscar productos..."
              className="pl-10 w-64"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => searchQuery.length > 0 && setShowResults(true)}
            />
            {showResults && searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border rounded-lg shadow-lg max-h-96 overflow-y-auto z-50">
                {searchResults.map((product) => (
                  <Link
                    key={product.id}
                    href={`/productos/${product.id}`}
                    className="flex items-center gap-3 p-3 hover:bg-gray-50 border-b last:border-b-0 transition-colors"
                    onClick={() => {
                      setShowResults(false);
                      setSearchQuery("");
                    }}
                  >
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={60}
                      height={60}
                      className="rounded object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm">{product.title}</h3>
                      <p className="text-xs text-gray-600 line-clamp-1">{product.description}</p>
                      <p className="text-sm font-bold text-pink-600 mt-1">${product.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
            {showResults && searchResults.length === 0 && searchQuery.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border rounded-lg shadow-lg p-4 z-50">
                <p className="text-gray-500 text-sm text-center">No se encontraron productos</p>
              </div>
            )}
          </div>
          <Button variant="ghost" className="flex items-center gap-2" asChild>
            <Link href="/productos">
              <Package size={20} />
              Productos
            </Link>
          </Button>
          <Button variant="ghost" className="flex items-center gap-2" asChild>
            <Link href="/contacto">
              <Mail size={20} />
              Contacto
            </Link>
          </Button>
        </div>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 mt-4 p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  type="text"
                  placeholder="Buscar productos..."
                  className="pl-10 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              {searchQuery.length > 0 && (
                <div className="max-h-64 overflow-y-auto">
                  {searchResults.length > 0 ? (
                    searchResults.map((product) => (
                      <Link
                        key={product.id}
                        href={`/productos/${product.id}`}
                        className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded transition-colors"
                        onClick={() => {
                          setOpen(false);
                          setSearchQuery("");
                        }}
                      >
                        <Image
                          src={product.image}
                          alt={product.title}
                          width={50}
                          height={50}
                          className="rounded object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-xs">{product.title}</h3>
                          <p className="text-sm font-bold text-pink-600">${product.price}</p>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p className="text-gray-500 text-sm text-center py-4">No se encontraron productos</p>
                  )}
                </div>
              )}
              <Button variant="ghost" className="w-full justify-start" onClick={() => setOpen(false)} asChild>
                <Link href="/productos">
                  <Package size={20} className="mr-2" />
                  Productos
                </Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start" onClick={() => setOpen(false)} asChild>
                <Link href="/contacto">
                  <Mail size={20} className="mr-2" />
                  Contacto
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </header>
    </div>
  );
}