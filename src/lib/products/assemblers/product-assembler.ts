import { Product, ApiProduct } from '../types';

export const normalizeProduct = (product: ApiProduct): Product => ({
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