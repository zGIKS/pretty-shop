import { useMemo } from "react";
import ProductCard from "@/components/landing/products/ProductCard";
import type { Product } from "@/lib/products";

interface RelatedProductsProps {
  currentProductId: string;
  products: Product[];
  selectedCategory: string;
}

export default function RelatedProducts({
  currentProductId,
  products,
  selectedCategory,
}: RelatedProductsProps) {
  // Obtener 4 productos relacionados excluyendo el actual, ordenados alfabéticamente.
  const relatedProducts = useMemo(() => {
    let filtered = products.filter((product) => product.id !== currentProductId);

    if (selectedCategory !== "all") {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    const sorted = [...filtered].sort((a, b) => a.title.localeCompare(b.title));

    return sorted.slice(0, 4);
  }, [products, currentProductId, selectedCategory]);

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">También te puede interesar</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}
