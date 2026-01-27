"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "@/lib/cart/cart-context";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { items, addItem, updateItemQuantity, removeItem } = useCart();
  const cartEntry = items.find((entry) => entry.product.id === product.id);
  const cartQuantity = cartEntry?.quantity ?? 0;

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
          {cartQuantity === 0 ? (
            <Button size="sm" className="w-full" onClick={() => addItem(product)}>
              Agregar al Carrito
            </Button>
          ) : (
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                size="sm"
                onClick={() => removeItem(product.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateItemQuantity(product.id, cartQuantity - 1)}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-sm">{cartQuantity}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateItemQuantity(product.id, cartQuantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
