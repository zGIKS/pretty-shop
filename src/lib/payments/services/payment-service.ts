import { normalizePayment } from "../assemblers/payment-assembler";
import {
  ApiPayment,
  CreatePaymentPreferencePayload,
  CreatePaymentPreferenceResponse,
  Payment,
} from "../types";

const API_BASE = "/api/v1";

type PaymentRequestOptions = {
  signal?: AbortSignal;
  authToken?: string;
};

function getGatewayHost() {
  const host = process.env.NEXT_PUBLIC_API_GATEWAY;
  if (!host) {
    throw new Error("NEXT_PUBLIC_API_GATEWAY no está configurada.");
  }
  return host;
}

function buildUrl(path: string) {
  return new URL(`${API_BASE}${path}`, getGatewayHost()).toString();
}

async function parseErrorMessage(response: Response) {
  try {
    const data = (await response.json()) as { error?: string };
    if (data?.error) {
      return data.error;
    }
  } catch {
    // fall through
  }
  return "Ocurrió un error al comunicarse con el servidor.";
}

function buildAuthHeaders(token?: string, includeContentType = false) {
  const trimmedToken = token?.trim();
  if (!trimmedToken) {
    throw new Error("Token de autenticación no disponible. Inicia sesión de nuevo.");
  }

  const headers: Record<string, string> = {
    Authorization: `Bearer ${trimmedToken}`,
  };

  if (includeContentType) {
    headers["Content-Type"] = "application/json";
  }

  return headers;
}

export async function createPaymentPreference(
  payload: CreatePaymentPreferencePayload,
  { signal, authToken }: PaymentRequestOptions = {},
): Promise<CreatePaymentPreferenceResponse> {
  const response = await fetch(buildUrl("/payments"), {
    method: "POST",
    cache: "no-store",
    signal,
    headers: buildAuthHeaders(authToken, true),
    body: JSON.stringify({
      payer_email: payload.payerEmail,
      product_id: payload.productId,
      quantity: payload.quantity,
    }),
  });

  if (!response.ok) {
    const message = await parseErrorMessage(response);
    throw new Error(message);
  }

  return response.json();
}

export async function getPaymentById(
  id: string,
  { signal, authToken }: PaymentRequestOptions = {},
): Promise<Payment> {
  const response = await fetch(buildUrl(`/payments/${encodeURIComponent(id)}`), {
    cache: "no-store",
    signal,
    headers: buildAuthHeaders(authToken),
  });

  if (response.status === 404) {
    throw new Error("Pago no encontrado.");
  }

  if (!response.ok) {
    const message = await parseErrorMessage(response);
    throw new Error(message);
  }

  const data: ApiPayment = await response.json();
  return normalizePayment(data);
}
