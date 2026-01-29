export type PaymentStatus = "pending" | "approved" | "rejected" | "cancelled" | string;

export interface Payment {
  id: string;
  preferenceId: string;
  preferenceUrl: string;
  productId?: string;
  productTitle?: string;
  amount: number;
  currency: string;
  quantity: number;
  status: PaymentStatus;
  createdAt?: string;
  updatedAt?: string;
}

export interface ApiPayment {
  amount: number | string;
  currency: string;
  id: string;
  preference_id?: string;
  preference_url?: string;
  product_id?: string;
  product_title?: string;
  quantity: number | string;
  status: string;
  created_at?: string;
  updated_at?: string;
}

export interface CreatePaymentPreferencePayload {
  payerEmail: string;
  productId: string;
  quantity: number;
}

export interface CreatePaymentPreferenceResponse {
  amount: number;
  currency: string;
  id: string;
  preference_id: string;
  preference_url: string;
  product_title: string;
  public_key: string;
  quantity: number;
  status: string;
}
