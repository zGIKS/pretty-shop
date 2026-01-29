import { Product, ProductQueryOptions, ApiProduct } from '../types';
import { normalizeProduct } from '../assemblers/product-assembler';

const API_BASE = "/api/v1";

type QueryParams = Record<string, string | number | undefined | null>;

const buildUrl = (path: string, params?: QueryParams) => {
  const url = new URL(`${API_BASE}${path}`, process.env.NEXT_PUBLIC_API_GATEWAY);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value != null && value !== "") {
        url.searchParams.set(key, String(value));
      }
    });
  }
  return url.toString();
};

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
  const response = await fetch(buildUrl(`/products/${encodeURIComponent(id)}`), {
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