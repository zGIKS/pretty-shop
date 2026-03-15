"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { Product } from "@/lib/products";
import { getProducts } from "@/lib/products";
import ProductsGrid from "@/components/landing/products/ProductsGrid";
import ProductsToolbar from "@/components/landing/products/ProductsToolbar";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

export default function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("loading");
  const searchParams = useSearchParams();

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelectedCategory(categoryParam || "all");
  }, [searchParams]);

  const loadProducts = async () => {
    setStatus("loading");
    try {
      const data = await getProducts();
      setProducts(data);
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadProducts();
  }, []);

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

      {status === "loading" && (
        <div className="flex flex-col items-center gap-3 py-16 text-sm uppercase tracking-wide text-muted-foreground">
          <Spinner size="lg" />
          Cargando productos...
        </div>
      )}

      {status === "error" && (
        <div className="flex flex-col items-center gap-4 py-16 text-sm text-muted-foreground">
          <p className="uppercase tracking-wide">No se pudieron cargar los productos.</p>
          <Button onClick={loadProducts} variant="default">
            Intentar de nuevo
          </Button>
        </div>
      )}

      {status === "idle" && visibleProducts.length === 0 && (
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
