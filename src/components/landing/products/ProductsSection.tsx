"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { Product } from "@/lib/products";
import { productsCatalog } from "@/data/products";
import ProductsGrid from "@/components/landing/products/ProductsGrid";
import ProductsToolbar from "@/components/landing/products/ProductsToolbar";

export default function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [products] = useState<Product[]>(productsCatalog);
  const searchParams = useSearchParams();

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelectedCategory(categoryParam || "all");
  }, [searchParams]);

  const visibleProducts = useMemo(() => {
    let filtered =
      selectedCategory === "all"
        ? products
        : products.filter((p) => p.category === selectedCategory);

    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    return filtered;
  }, [products, selectedCategory, searchQuery]);

  return (
    <>
      <ProductsToolbar
        products={products}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {visibleProducts.length === 0 && (
        <div className="flex flex-col items-center gap-4 py-16 text-sm text-muted-foreground">
          <p className="uppercase tracking-wide">
            {searchQuery.trim()
              ? `Sin resultados para "${searchQuery}"`
              : "No hay productos disponibles."}
          </p>
        </div>
      )}

      {visibleProducts.length > 0 && <ProductsGrid products={visibleProducts} />}
    </>
  );
}
