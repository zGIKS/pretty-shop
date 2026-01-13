import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={300}
          className="w-full h-48 object-cover"
        />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg">{product.title}</CardTitle>
        <CardDescription className="mt-2">{product.description}</CardDescription>
        <p className="text-xl font-bold mt-2">S/ {product.price}</p>
      </CardContent>
    </Card>
  );
}