import { PaymentResultPage } from "@/components/payments/payment-result-page";

export default function PaymentFailurePage({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  return <PaymentResultPage variant="failure" searchParams={searchParams} />;
}
