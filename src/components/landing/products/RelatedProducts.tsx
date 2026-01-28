import { useMemo } from "react";
import ProductCard from "@/components/landing/products/ProductCard";
import type { Product } from "@/api/products";

interface RelatedProductsProps {
  currentProductId: string;
  products: Product[];
  selectedCategory: string;
  sortBy: "relevance" | "price-asc" | "price-desc" | "name-asc" | "name-desc";
}

export default function RelatedProducts({
  currentProductId,
  products,
  selectedCategory,
  sortBy,
}: RelatedProductsProps) {
  // Obtener 4 productos relacionados excluyendo el actual, ordenados por id descendente
  const relatedProducts = useMemo(() => {
    let filtered = products.filter((product) => product.id !== currentProductId);

    if (selectedCategory !== "all") {
      filtered = filtered.filter((product) => product.category === selectedCategory);
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
      sorted.sort((a, b) => a.title.localeCompare(b.title));
      break;
  }

  return sorted.slice(0, 4);
}, [products, currentProductId, selectedCategory, sortBy]);

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
