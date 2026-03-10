"use client";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const whatsappLink = getWhatsAppLink(`Hola, quiero comprar este producto: ${product.title}`);

  return (
    <div className="flex flex-col h-full">
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
      <div className="flex flex-col grow pt-3 space-y-2">
        <h3>{product.title}</h3>
        <p className="text-sm text-muted-foreground">S/ {product.price}</p>
        <div className="mt-auto pt-2">
          <Button asChild className="w-full">
            <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Comprar
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
