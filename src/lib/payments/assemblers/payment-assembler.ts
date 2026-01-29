import { ApiPayment, Payment } from "../types";

export function normalizePayment(data: ApiPayment): Payment {
  const amount = typeof data.amount === "string" ? Number(data.amount) : data.amount;
  const quantity = typeof data.quantity === "string" ? Number(data.quantity) : data.quantity;

  return {
    id: data.id,
    preferenceId: data.preference_id ?? "",
    preferenceUrl: data.preference_url ?? "",
    productId: data.product_id,
    productTitle: data.product_title,
    amount: Number.isFinite(amount) ? amount : 0,
    currency: data.currency,
    quantity: Number.isFinite(quantity) ? quantity : 0,
    status: data.status,
    createdAt: data.created_at,
    updatedAt: data.updated_at,
  };
}
