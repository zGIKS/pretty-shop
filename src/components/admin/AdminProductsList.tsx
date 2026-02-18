"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Product } from "@/lib/products";

interface AdminProductsListProps {
  loading: boolean;
  products: Product[];
  isBusy: boolean;
  formatPrice: (value: number) => string;
  onEdit: (product: Product) => void;
  onDelete: (productId: string) => void;
}

export default function AdminProductsList({
  loading,
  products,
  isBusy,
  formatPrice,
  onEdit,
  onDelete,
}: AdminProductsListProps) {
  return (
    <Card className="border-0 bg-gradient-to-b from-card to-muted/40">
      <CardHeader className="border-b bg-card/80 backdrop-blur">
        <CardTitle className="text-2xl">Todos los productos</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        {loading ? (
          <p className="text-sm text-muted-foreground">Cargando...</p>
        ) : products.length === 0 ? (
          <p className="text-sm text-muted-foreground">No hay productos para mostrar.</p>
        ) : (
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
            {products.map((product) => (
              <article key={product.id} className="rounded-xl border bg-card p-4 shadow-sm">
                <div className="flex gap-4">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={88}
                    height={88}
                    className="h-20 w-20 rounded-lg border object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <h3 className="line-clamp-2 font-medium">{product.title}</h3>
                    <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{product.description}</p>
                    <p className="mt-2 text-sm font-semibold">{formatPrice(product.price)}</p>
                  </div>
                </div>

                <div className="mt-4 flex gap-2">
                  <Button type="button" size="sm" variant="outline" onClick={() => onEdit(product)} disabled={isBusy}>
                    Editar
                  </Button>
                  <Button
                    type="button"
                    size="sm"
                    variant="destructive"
                    onClick={() => onDelete(product.id)}
                    disabled={isBusy}
                  >
                    Borrar
                  </Button>
                </div>
              </article>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
