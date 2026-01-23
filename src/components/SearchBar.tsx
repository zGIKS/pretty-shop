"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { products } from "@/data/products";

interface SearchBarProps {
  className?: string;
  onResultClick?: () => void;
}

export default function SearchBar({ className = "", onResultClick }: SearchBarProps) {
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

  const handleResultClick = () => {
    setShowResults(false);
    setSearchQuery("");
    onResultClick?.();
  };

  return (
    <div className={`relative ${className}`} ref={searchRef}>
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      <Input
        type="text"
        placeholder="Buscar productos..."
        className="pl-10"
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
              onClick={handleResultClick}
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
  );
}
