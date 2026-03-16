"use client";

import Image from "next/image";
import Link from "next/link";

import { Product } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { getWhatsAppLink } from "@/lib/whatsapp";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const whatsappLink = getWhatsAppLink(`Hola, quiero comprar este producto: ${product.title}`);

  return (
    <Card className="h-full gap-0 overflow-hidden border-border/70 bg-card py-0 shadow-sm">
      <div className="group relative w-full overflow-hidden bg-muted/30">
        <Image
          src={product.image}
          alt={product.title}
          width={900}
          height={900}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 100vw"
          className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
      <CardContent className="flex grow flex-col space-y-2 p-5">
        <h3>{product.title}</h3>
        <p className="text-sm leading-6 text-muted-foreground">
          {product.description}
        </p>
      </CardContent>
      <CardFooter className="mt-auto p-5 pt-0">
        <Button asChild className="w-full">
          <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
            Comprar
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
