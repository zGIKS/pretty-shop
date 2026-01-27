"use client";

import { notFound } from "next/navigation";
import { use, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Footer from "@/components/footer";
import { products } from "@/data/products";
import RelatedProducts from "@/components/landing/products/RelatedProducts";
import SearchBar from "@/components/landing/products/SearchBar";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, SlidersHorizontal } from "lucide-react";
import AddToCart from "@/components/cart/AddToCart";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = use(params);
  const productId = parseInt(id);
  const product = products.find(p => p.id === productId);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState<"relevance" | "price-asc" | "price-desc" | "name-asc" | "name-desc">(
    "relevance"
  );
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);

  const categories = useMemo(() => {
    return Array.from(new Set(products.map((item) => item.category)));
  }, []);

  if (!product) {
    notFound();
  }

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
      <main className="min-h-screen pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
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
                          name="detail-category"
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
                            name="detail-category"
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
                            name="detail-sort"
                            value={option.value}
                            checked={sortBy === option.value}
                            onChange={() =>
                              setSortBy(
                                option.value as
                                  | "relevance"
                                  | "price-asc"
                                  | "price-desc"
                                  | "name-asc"
                                  | "name-desc"
                              )
                            }
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
          {/* Detalles del producto */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="relative w-full overflow-hidden rounded-sm">
              <Image
                src={product.image}
                alt={product.title}
                width={1200}
                height={1200}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
              <p className="text-lg text-muted-foreground mb-6">
                {product.description}
              </p>
              <p className="text-3xl mb-2">S/ {product.price}</p>
              <p className="text-sm text-muted-foreground mb-6">
                Disponible: {product.quantity} unidades
              </p>
              <AddToCart product={product} size="lg" />
            </div>
          </div>

          {/* Productos relacionados */}
          <RelatedProducts 
            currentProductIndex={productId}
            products={products}
            selectedCategory={selectedCategory}
            sortBy={sortBy}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
