import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getPaymentById, type Payment } from "@/lib/payments";
import { CheckCircle2, Clock, XCircle } from "lucide-react";
import Link from "next/link";

type PaymentResultVariant = "success" | "failure" | "pending";

type PaymentResultPageProps = {
  variant: PaymentResultVariant;
  searchParams: Record<string, string | string[] | undefined>;
};

const VARIANT_CONFIG: Record<PaymentResultVariant, {
  title: string;
  description: string;
  accent: string;
  icon: typeof CheckCircle2 | typeof XCircle | typeof Clock;
}> = {
  success: {
    title: "Pago confirmado",
    description:
      "Tu pago fue aprobado y está listo para procesarse. Gracias por elegirnos.",
    accent: "text-emerald-500",
    icon: CheckCircle2,
  },
  failure: {
    title: "Pago rechazado",
    description:
      "Hubo un problema con el cobro. Puedes intentar nuevamente desde el catálogo.",
    accent: "text-destructive",
    icon: XCircle,
  },
  pending: {
    title: "Pago pendiente",
    description:
      "Mercado Pago aún no confirmó el pago. En cuanto haya novedades, actualiza esta página.",
    accent: "text-amber-500",
    icon: Clock,
  },
};

const getSearchParamValue = (value: string | string[] | undefined) => {
  if (!value) return undefined;
  return Array.isArray(value) ? value[0] : value;
};

const formatCurrency = (amount: number, currency: string) => {
  try {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency,
      maximumFractionDigits: 2,
    }).format(amount);
  } catch {
    return `${amount.toFixed(2)} ${currency}`;
  }
};

const formatDate = (iso?: string) => {
  if (!iso) return "—";
  const parsed = new Date(iso);
  if (Number.isNaN(parsed.valueOf())) {
    return "—";
  }
  return new Intl.DateTimeFormat("es-AR", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(parsed);
};

const renderPaymentDetails = (payment: Payment) => {
  const rows = [
    { label: "ID del pago", value: payment.id },
    { label: "Producto", value: payment.productTitle ?? "Información no disponible" },
    { label: "Cantidad", value: payment.quantity.toString() },
    { label: "Monto", value: formatCurrency(payment.amount, payment.currency) },
    { label: "Moneda", value: payment.currency },
    { label: "Estado actual", value: payment.status },
    { label: "ID de preferencia", value: payment.preferenceId || "—" },
    { label: "Creado", value: formatDate(payment.createdAt) },
    { label: "Actualizado", value: formatDate(payment.updatedAt) },
  ];

  return (
    <dl className="grid gap-4 sm:grid-cols-2">
      {rows.map((row) => (
        <div key={row.label} className="flex flex-col gap-1">
          <span className="text-xs uppercase tracking-wide text-muted-foreground">
            {row.label}
          </span>
          <span className="text-base font-semibold text-foreground">{row.value}</span>
        </div>
      ))}
    </dl>
  );
};

export async function PaymentResultPage({
  variant,
  searchParams,
}: PaymentResultPageProps) {
  const config = VARIANT_CONFIG[variant];
  const IconComponent = config.icon;
  const externalReference = getSearchParamValue(searchParams.external_reference);
  let payment: Payment | null = null;
  let error: string | null = null;

  if (!externalReference) {
    error = "No se recibió el identificador del pago (external_reference).";
  } else {
    try {
      payment = await getPaymentById(externalReference);
    } catch (err) {
      if (err instanceof Error) {
        error = err.message;
      } else {
        error = "No se pudo recuperar la información del pago.";
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-4xl space-y-6">
        <div className="flex flex-col gap-2 text-center">
          <p className={`text-sm font-semibold uppercase tracking-[0.3em] ${config.accent}`}>
            {variant === "success"
              ? "¡Pagado!"
              : variant === "failure"
              ? "Intento fallido"
              : "En revisión"}
          </p>
          <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
            {config.title}
          </h1>
          <p className="text-muted-foreground">{config.description}</p>
        </div>
        <Card className="space-y-4">
          <CardHeader className="items-center gap-4">
            <div className="rounded-2xl bg-muted/50 px-2 py-1 text-foreground">
              <IconComponent className="size-6" />
            </div>
            <div>
              <CardTitle className="text-lg">Resumen del pago</CardTitle>
              <CardDescription>
                {payment
                  ? `Preferencia ${payment.preferenceId || "sin ID"}`
                  : "La información aparecerá aquí en cuanto se valide el pago."}
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {error ? (
              <Alert variant="destructive" title="Error al recuperar el pago" description={error} />
            ) : payment ? (
              renderPaymentDetails(payment)
            ) : (
              <Alert
                title="Esperando detalles"
                description="Estamos confirmando el estado del pago. Vuelve a cargar esta página si ya autorizaste el cobro."
              />
            )}
            <div className="flex flex-wrap justify-between gap-3">
              <Button asChild>
                <Link href="/">Volver al catálogo</Link>
              </Button>
              {payment?.preferenceUrl ? (
                <Button asChild variant="outline">
                  <Link
                    href={payment.preferenceUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Ver preferencia en Mercado Pago
                  </Link>
                </Button>
              ) : null}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
