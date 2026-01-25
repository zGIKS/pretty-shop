import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex flex-col h-full">
      <Link href={`/productos/${product.id}`}>
        <div className="relative w-full overflow-hidden rounded-sm group">
          <Image
            src={product.image}
            alt={product.title}
            width={900}
            height={900}
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 100vw"
            className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      </Link>
      <div className="flex flex-col grow pt-3 space-y-2">
        <Link href={`/productos/${product.id}`}>
          <h3 className="text-lg font-semibold hover:underline">{product.title}</h3>
        </Link>
        <p className="text-sm text-muted-foreground">S/ {product.price}</p>
        <div className="mt-auto pt-2">
          <Button asChild size="sm" className="w-full">
            <Link href="https://wa.me/51943373233" target="_blank">
              Comprar
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
