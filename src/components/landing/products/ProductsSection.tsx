"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, ChevronUp, SlidersHorizontal } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/landing/products/ProductCard";
import SearchBar from "@/components/landing/products/SearchBar";
import { Button } from "@/components/ui/button";

type SortOption = "relevance" | "price-asc" | "price-desc" | "name-asc" | "name-desc";

export default function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState<SortOption>("relevance");
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(products.map((product) => product.category)));
    return unique;
  }, []);

  const visibleProducts = useMemo(() => {
    let filtered = products;

    if (selectedCategory !== "all") {
      filtered = products.filter((product) => product.category === selectedCategory);
    }

    const sorted = [...filtered];
    switch (sortBy) {
      case "price-asc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "name-desc":
        sorted.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }

    return sorted;
  }, [selectedCategory, sortBy]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setFilterOpen(false);
      }
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setSortOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <SearchBar className="w-full md:max-w-md" />
        <div className="flex w-full items-center justify-between gap-2 md:w-auto md:gap-4">
          <div className="relative" ref={filterRef}>
            <Button
              variant="ghost"
              className="flex h-10 items-center gap-2 px-2 text-sm font-medium"
              onClick={() => setFilterOpen((prev) => !prev)}
              type="button"
            >
              Filtrar
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
            {filterOpen && (
              <div className="absolute left-0 top-full z-30 mt-2 w-60 rounded-xl border border-border bg-background shadow-lg">
                <div className="p-3">
                  <label className="flex items-center gap-2 py-2 text-sm">
                    <input
                      type="radio"
                      name="category"
                      value="all"
                      checked={selectedCategory === "all"}
                      onChange={() => setSelectedCategory("all")}
                    />
                    Todas las categorías
                  </label>
                  {categories.map((category) => (
                    <label key={category} className="flex items-center gap-2 py-2 text-sm">
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={selectedCategory === category}
                        onChange={() => setSelectedCategory(category)}
                      />
                      {category}
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
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
                        onChange={() => setSortBy(option.value as SortOption)}
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
