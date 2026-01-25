import { Clock } from "lucide-react";

export default function ContactHours() {
  return (
    <div className="border-t border-border pt-4">
      <div className="flex items-start gap-3">
        <Clock className="h-5 w-5 mt-0.5 text-primary" />
        <div className="w-full space-y-2">
          <div className="font-semibold">Horarios</div>
          <div className="flex items-center justify-between text-muted-foreground">
            <span>Lunes - Sábado</span>
            <span>10:00 AM - 7:00 PM</span>
          </div>
          <div className="flex items-center justify-between text-muted-foreground">
            <span>Domingo</span>
            <span>Cerrado</span>
          </div>
        </div>
      </div>
    </div>
  );
}
