import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ServiceTreatmentCardProps = {
  name: string;
  price: string;
  description: string;
};

export function ServiceTreatmentCard({
  name,
  price,
  description,
}: ServiceTreatmentCardProps) {
  const isEvaluation = price
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .includes("evaluacion");

  return (
    <Card className="h-full border-border bg-muted/30 py-0">
      <CardHeader className="p-5 pb-3">
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="text-lg leading-6 tracking-tight">
            {name}
          </CardTitle>
          <span
            className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
              isEvaluation
                ? "bg-secondary text-secondary-foreground"
                : "bg-primary/10 text-primary"
            }`}
          >
            {price}
          </span>
        </div>
      </CardHeader>
      <CardContent className="p-5 pt-0">
        <p className="text-sm leading-6 text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
