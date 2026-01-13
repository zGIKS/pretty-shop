import ProductCard from "@/components/ProductCard";
import { Product } from "@/data/products";

interface RelatedProductsProps {
  currentProductIndex: number;
  products: Product[];
}

export default function RelatedProducts({ currentProductIndex, products }: RelatedProductsProps) {
  // Obtener 4 productos aleatorios excluyendo el actual
  const relatedProductsWithIndex = products
    .map((product, index) => ({ product, index }))
    .filter(({ index }) => index !== currentProductIndex)
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">También te puede interesar</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {relatedProductsWithIndex.map(({ product, index }) => (
          <ProductCard
            key={index}
            product={product}
            productId={index}
          />
        ))}
      </div>
    </div>
  );
}
