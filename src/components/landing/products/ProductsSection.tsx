"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import ProductsGrid from "@/components/landing/products/ProductsGrid";
import ProductsToolbar from "@/components/landing/products/ProductsToolbar";

type SortOption = "relevance" | "price-asc" | "price-desc" | "name-asc" | "name-desc";

export default function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState<SortOption>("relevance");
  const searchParams = useSearchParams();

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
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    } else {
      setSelectedCategory("all");
    }
  }, [searchParams]);

  return (
    <>
      <ProductsToolbar
        categories={categories}
        selectedCategory={selectedCategory}
        sortBy={sortBy}
        onCategoryChange={setSelectedCategory}
        onSortChange={setSortBy}
      />
      <ProductsGrid products={visibleProducts} />
    </>
  );
}
