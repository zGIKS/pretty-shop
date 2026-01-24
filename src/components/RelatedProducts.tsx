import { useMemo } from "react";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/data/products";

interface RelatedProductsProps {
  currentProductIndex: number;
  products: Product[];
}

export default function RelatedProducts({ currentProductIndex, products }: RelatedProductsProps) {
  // Obtener 4 productos relacionados excluyendo el actual, ordenados por id descendente
  const relatedProducts = useMemo(() => {
    return products
      .filter((product) => product.id !== currentProductIndex)
      .sort((a, b) => b.id - a.id)
      .slice(0, 4);
  }, [products, currentProductIndex]);

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
