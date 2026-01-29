import { PaymentResultPage } from "@/components/payments/payment-result-page";

export default function PaymentSuccessPage({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  return <PaymentResultPage variant="success" searchParams={searchParams} />;
}
