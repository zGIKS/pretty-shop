import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ServiceTreatmentCardProps = {
  name: string;
  description: string;
};

export function ServiceTreatmentCard({
  name,
  description,
}: ServiceTreatmentCardProps) {
  return (
    <Card className="h-full border-border bg-muted/30 py-0">
      <CardHeader className="p-5 pb-3">
        <CardTitle className="text-lg leading-6 tracking-tight">{name}</CardTitle>
      </CardHeader>
      <CardContent className="p-5 pt-0">
        <p className="text-sm leading-6 text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
