 "use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import type { Product } from "@/api/products";
import { getProducts } from "@/api/products";
import ProductsGrid from "@/components/landing/products/ProductsGrid";
import ProductsToolbar from "@/components/landing/products/ProductsToolbar";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

type SortOption = "relevance" | "price-asc" | "price-desc" | "name-asc" | "name-desc";

export default function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState<SortOption>("relevance");
  const [products, setProducts] = useState<Product[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("loading");
  const searchParams = useSearchParams();

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelectedCategory(categoryParam || "all");
  }, [searchParams]);

  const loadProducts = useCallback(async () => {
    setStatus("loading");
    try {
      const data = await getProducts();
      setProducts(data);
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  }, []);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const categories = useMemo(() => {
    return Array.from(new Set(products.map((product) => product.category)));
  }, [products]);

  const visibleProducts = useMemo(() => {
    const baseList =
      selectedCategory === "all"
        ? products
        : products.filter((product) => product.category === selectedCategory);

    const sorted = [...baseList];
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
  }, [products, selectedCategory, sortBy]);

  return (
    <>
      <ProductsToolbar
        categories={categories}
        selectedCategory={selectedCategory}
        sortBy={sortBy}
        onCategoryChange={setSelectedCategory}
        onSortChange={setSortBy}
        products={products}
      />

      {status === "loading" && (
        <div className="flex flex-col items-center gap-3 py-16 text-sm uppercase tracking-wide text-muted-foreground">
          <Spinner size="lg" />
          Cargando productos...
        </div>
      )}

      {status !== "loading" && visibleProducts.length === 0 && (
        <div className="flex flex-col items-center gap-6 py-16 text-sm uppercase tracking-wide text-muted-foreground">
          <Spinner size="lg" />
          <Button onClick={loadProducts} variant="default">
            Intentar de nuevo
          </Button>
        </div>
      )}

      {visibleProducts.length > 0 && <ProductsGrid products={visibleProducts} />}
    </>
  );
}
