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

export interface ApiProduct {
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

export interface ProductQueryOptions {
  limit?: number;
  offset?: number;
  category?: string;
  signal?: AbortSignal;
}