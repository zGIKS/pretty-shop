import ProductCard from "@/components/ProductCard";
import { Product } from "@/data/products";

interface RelatedProductsProps {
  currentProductIndex: number;
  products: Product[];
}

export default function RelatedProducts({ currentProductIndex, products }: RelatedProductsProps) {
  // Obtener 4 productos aleatorios excluyendo el actual
  const relatedProducts = products
    .filter((product) => product.id !== currentProductIndex)
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

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
