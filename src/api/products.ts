export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
  image: string;
  createdAt?: string;
  updatedAt?: string;
}

interface ApiProduct {
  id: string;
  title: string;
  description: string;
  price: number | string;
  quantity: number | string;
  category: string;
  image_url?: string;
  image?: string;
  created_at?: string;
  updated_at?: string;
}

import { PRODUCTS_API_BASE } from "@/lib/env";

const API_BASE = "/api/v1";

type QueryParams = Record<string, string | number | undefined | null>;

const buildUrl = (path: string, params?: QueryParams) => {
  const url = new URL(`${API_BASE}${path}`, "http://localhost:3000"); // or use window.location.origin
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value != null && value !== "") {
        url.searchParams.set(key, String(value));
      }
    });
  }
  return url.toString();
};

const normalizeProduct = (product: ApiProduct): Product => ({
  id: product.id,
  title: product.title,
  description: product.description,
  price: Number(product.price ?? 0),
  quantity: Number(product.quantity ?? 0),
  category: product.category ?? "General",
  image: product.image ?? product.image_url ?? "",
  createdAt: product.created_at,
  updatedAt: product.updated_at,
});

export interface ProductQueryOptions {
  limit?: number;
  offset?: number;
  category?: string;
  signal?: AbortSignal;
}

export async function getProducts(options?: ProductQueryOptions): Promise<Product[]> {
  const url = buildUrl("/products", {
    limit: options?.limit,
    offset: options?.offset,
    category: options?.category,
  });

  const response = await fetch(url, {
    signal: options?.signal,
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("No se pudieron cargar los productos.");
  }

  const data: ApiProduct[] = await response.json();
  return data.map(normalizeProduct);
}

export async function getProductById(id: string, signal?: AbortSignal): Promise<Product> {
  const response = await fetch(`${PRODUCTS_API_BASE}/products/${encodeURIComponent(id)}`, {
    signal,
    cache: "no-store",
  });

  if (response.status === 404) {
    throw new Error("Producto no encontrado.");
  }

  if (!response.ok) {
    throw new Error("No se pudo obtener el producto solicitado.");
  }

  const data: ApiProduct = await response.json();
  return normalizeProduct(data);
}