"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import SearchBar from "@/components/landing/products/SearchBar";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/products";

type SortOption = "relevance" | "price-asc" | "price-desc" | "name-asc" | "name-desc";

interface ProductsToolbarProps {
  products: Product[];
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
}

export default function ProductsToolbar({
  products,
  sortBy,
  onSortChange,
}: ProductsToolbarProps) {
  const [sortOpen, setSortOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setSortOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <SearchBar className="w-full md:max-w-md" products={products} />
      <div className="flex w-full items-center justify-between gap-2 md:w-auto md:gap-4">
        <div className="relative" ref={sortRef}>
          <Button
            variant="ghost"
            className="flex h-10 items-center gap-2 px-2 text-sm font-medium"
            onClick={() => setSortOpen((prev) => !prev)}
            type="button"
          >
            Ordenar
            {sortOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
          {sortOpen && (
            <div className="absolute right-0 top-full z-30 mt-2 w-60 rounded-xl border border-border bg-background shadow-lg">
              <div className="p-3">
                {[
                  { value: "relevance", label: "Relevancia" },
                  { value: "price-asc", label: "Precio: menor a mayor" },
                  { value: "price-desc", label: "Precio: mayor a menor" },
                  { value: "name-asc", label: "Nombre: A-Z" },
                  { value: "name-desc", label: "Nombre: Z-A" },
                ].map((option) => (
                  <label key={option.value} className="flex items-center gap-2 py-2 text-sm">
                    <input
                      type="radio"
                      name="sort"
                      value={option.value}
                      checked={sortBy === option.value}
                      onChange={() => onSortChange(option.value as SortOption)}
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
