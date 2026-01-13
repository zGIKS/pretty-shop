import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BusinessHours() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Horarios de atención</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Lunes - Viernes</span>
            <span className="font-semibold">9:00 AM - 6:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Sábado</span>
            <span className="font-semibold">9:00 AM - 2:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Domingo</span>
            <span className="font-semibold">Cerrado</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}