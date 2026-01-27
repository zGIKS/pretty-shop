"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "@/lib/cart/cart-context";

export default function CartPage() {
  const { items, totalItems, totalPrice, updateItemQuantity, removeItem, clearCart } = useCart();

  const hasItems = items.length > 0;

  return (
    <main className="min-h-screen pt-32 pb-16 bg-background px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.5em] text-muted-foreground">Carrito</p>
            <h1 className="text-3xl font-semibold text-foreground">Tu pedido</h1>
          </div>
          <div className="text-sm text-muted-foreground">
            {totalItems} artículo{totalItems === 1 ? "" : "s"}
          </div>
        </div>

        {!hasItems ? (
          <div className="rounded-3xl border border-border bg-card p-10 text-center">
            <p className="text-lg font-semibold text-foreground mb-2">Tu carrito está vacío</p>
            <p className="text-sm text-muted-foreground mb-4">Explora nuestros productos y agrégalos al carrito.</p>
            <Button asChild variant="outline">
              <Link href="/productos">Ver productos</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.product.id} className="flex flex-col gap-3 rounded-3xl border border-border bg-card p-4 sm:flex-row sm:items-center">
                  <div className="relative h-28 w-full overflow-hidden rounded-2xl border bg-muted sm:w-32">
                    <Image
                      src={item.product.image}
                      alt={item.product.title}
                      fill
                      sizes="128px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold">{item.product.title}</p>
                      <p className="text-sm text-muted-foreground">
                        S/ {(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.product.description}</p>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateItemQuantity(item.product.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="font-semibold">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateItemQuantity(item.product.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeItem(item.product.id)}
                        aria-label={`Eliminar ${item.product.title}`}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 rounded-3xl border border-border bg-card p-6">
              <div className="flex flex-row flex-nowrap items-center justify-between text-sm text-muted-foreground">
                <span className="whitespace-nowrap">Total artículos</span>
                <span className="whitespace-nowrap">{totalItems}</span>
              </div>
              <div className="flex flex-row flex-nowrap items-center justify-between text-2xl font-semibold">
                <span className="whitespace-nowrap">Total</span>
                <span className="whitespace-nowrap">S/ {totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex gap-3">
                <Button className="flex-1">Proceder al pago</Button>
                <Button variant="ghost" className="flex-1" onClick={clearCart}>
                  Vaciar carrito
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
