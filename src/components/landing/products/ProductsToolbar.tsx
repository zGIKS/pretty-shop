"use client";

import SearchBar from "@/components/landing/products/SearchBar";
import type { Product } from "@/lib/products";

interface ProductsToolbarProps {
  products: Product[];
}

export default function ProductsToolbar({ products }: ProductsToolbarProps) {
  return (
    <div className="mx-auto mb-8 max-w-7xl px-4 sm:px-6 lg:px-8">
      <SearchBar className="w-full md:max-w-md" products={products} />
    </div>
  );
}
