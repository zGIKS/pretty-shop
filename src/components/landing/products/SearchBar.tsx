"use client";

import { useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import type { Product } from "@/lib/products";
import { getWhatsAppLink } from "@/lib/whatsapp";

interface SearchBarProps {
  className?: string;
  products?: Product[];
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onResultClick?: () => void;
}

export default function SearchBar({
  className = "",
  products = [],
  searchQuery,
  onSearchChange,
  onResultClick,
}: SearchBarProps) {
  const searchRef = useRef<HTMLDivElement>(null);

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const showResults = searchQuery.trim().length > 0;

  const searchResults = useMemo(() => {
    if (!normalizedQuery) return [];
    return products.filter(
      (product) =>
        product.title.toLowerCase().includes(normalizedQuery) ||
        product.description.toLowerCase().includes(normalizedQuery)
    );
  }, [normalizedQuery, products]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        onSearchChange("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onSearchChange]);

  const handleResultClick = () => {
    onSearchChange("");
    onResultClick?.();
  };

  return (
    <div className={`relative ${className}`} ref={searchRef}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
      <Input
        type="text"
        placeholder="Buscar productos..."
        className="pl-10"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      {showResults && searchResults.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-popover border rounded-lg shadow-lg max-h-96 overflow-y-auto z-50">
          {searchResults.map((product) => (
            <div key={product.id} className="flex items-center gap-3 p-3 border-b last:border-b-0">
              <Image
                src={product.image}
                alt={product.title}
                width={60}
                height={60}
                className="rounded object-cover"
              />
              <div className="flex-1">
                <h3 className="text-sm">{product.title}</h3>
                <p className="text-xs text-muted-foreground line-clamp-1">{product.description}</p>
                <p className="text-sm font-semibold text-foreground mt-1">S/ {product.price}</p>
              </div>
              <Button asChild size="sm">
                <Link
                  href={getWhatsAppLink(`Hola, quiero comprar este producto: ${product.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleResultClick}
                >
                  Comprar
                </Link>
              </Button>
            </div>
          ))}
        </div>
      )}

      {showResults && searchResults.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-popover border rounded-lg shadow-lg p-4 z-50">
          <p className="text-muted-foreground text-sm text-center">No se encontraron productos</p>
        </div>
      )}
    </div>
  );
}
