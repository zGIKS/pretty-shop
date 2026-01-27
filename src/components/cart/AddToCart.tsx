"use client";

import { useState } from "react";
import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart/cart-context";
import QuantityControls from "@/components/cart/QuantityControls";

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
    <QuantityControls
      quantity={quantity}
      size={size}
      className={className}
      disableDecrease={quantity <= 1}
      disableIncrease={quantity >= product.quantity}
      onDecrease={() => setQuantity(Math.max(1, quantity - 1))}
      onIncrease={() => setQuantity(Math.min(product.quantity, quantity + 1))}
      onConfirm={() => {
        addItem(product, quantity);
        setAddedToCart(false);
        setQuantity(1);
      }}
      onRemove={() => setAddedToCart(false)}
    />
  );
}
