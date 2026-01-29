import { PaymentResultPage } from "@/components/payments/payment-result-page";

export default function PaymentPendingPage({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  return <PaymentResultPage variant="pending" searchParams={searchParams} />;
}
