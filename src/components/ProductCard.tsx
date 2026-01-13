import Image from "next/image";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="space-y-3">
      <div className="relative w-full h-64 overflow-hidden rounded-sm">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover"
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{product.description}</p>
        <p className="text-sm font-semibold mt-2">S/ {product.price}</p>
      </div>
    </div>
  );
}