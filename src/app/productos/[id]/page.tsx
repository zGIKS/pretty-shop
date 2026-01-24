"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { products } from "@/data/products";
import RelatedProducts from "@/components/landing/products/RelatedProducts";
import { Button } from "@/components/ui/button";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = use(params);
  const productId = parseInt(id);
  const product = products.find(p => p.id === productId);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Detalles del producto */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="relative w-full h-96 overflow-hidden rounded-sm">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
              <p className="text-lg text-muted-foreground mb-6">
                {product.description}
              </p>
              <p className="text-3xl mb-6">S/ {product.price}</p>
              <Button asChild size="lg" className="w-full md:w-auto">
                <Link href="https://wa.me/51943373233" target="_blank">
                  Comprar
                </Link>
              </Button>
            </div>
          </div>

          {/* Productos relacionados */}
          <RelatedProducts 
            currentProductIndex={productId}
            products={products}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
