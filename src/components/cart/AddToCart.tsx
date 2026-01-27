"use client";

import { useState } from "react";
import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Plus, Minus, Trash2, Check } from "lucide-react";
import { useCart } from "@/lib/cart/cart-context";

interface AddToCartProps {
  product: Product;
  size?: "sm" | "lg";
  className?: string;
}

export default function AddToCart({ product, size = "sm", className = "" }: AddToCartProps) {
  const { addItem } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  if (!addedToCart) {
    return (
      <Button
        size={size}
        className={`w-full ${size === "lg" ? "md:w-auto" : ""} ${className}`}
        onClick={() => setAddedToCart(true)}
      >
        Agregar al Carrito
      </Button>
    );
  }

  return (
    <div className={`flex items-center gap-2 ${size === "lg" ? "space-x-4" : ""}`}>
      <Button
        variant="outline"
        size={size}
        onClick={() => setAddedToCart(false)}
        aria-label="Eliminar producto"
      >
        <Trash2 className={`h-${size === "lg" ? "5" : "4"} w-${size === "lg" ? "5" : "4"}`} />
      </Button>
      <Button
        variant="outline"
        size={size}
        onClick={() => setQuantity(Math.max(1, quantity - 1))}
        aria-label="Disminuir cantidad"
      >
        <Minus className={`h-${size === "lg" ? "5" : "4"} w-${size === "lg" ? "5" : "4"}`} />
      </Button>
      <span className={`font-semibold ${size === "lg" ? "text-lg" : "text-sm"}`}>
        {quantity}
      </span>
      <Button
        variant="outline"
        size={size}
        disabled={quantity >= product.quantity}
        onClick={() => setQuantity(Math.min(product.quantity, quantity + 1))}
        aria-label="Aumentar cantidad"
      >
        <Plus className={`h-${size === "lg" ? "5" : "4"} w-${size === "lg" ? "5" : "4"}`} />
      </Button>
      <Button
        variant="secondary"
        size={size}
        onClick={() => {
          addItem(product, quantity);
          setAddedToCart(false);
          setQuantity(1);
        }}
        aria-label="Confirmar cantidad"
        className="px-3"
      >
        <Check className={`h-${size === "lg" ? "5" : "4"} w-${size === "lg" ? "5" : "4"}`} />
      </Button>
    </div>
  );
}
