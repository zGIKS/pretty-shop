"use client";

import { Clock } from "lucide-react";
import { useState, useEffect } from "react";

export default function ContactHours() {
  const [currentStatus, setCurrentStatus] = useState<{ date: string; time: string; isOpen: boolean } | null>(null);

  useEffect(() => {
    const updateStatus = () => {
      // Get current time in Peruvian timezone
      const now = new Date();
      const peruTime = new Date(now.toLocaleString("en-US", {timeZone: "America/Lima"}));

      const day = peruTime.getDay(); // 0 = Sunday, 1 = Monday, etc.
      const hours = peruTime.getHours();
      const minutes = peruTime.getMinutes();

      const isSunday = day === 0;
      const isOpen = !isSunday && hours >= 10 && (hours < 19 || (hours === 19 && minutes === 0));

      const dateString = peruTime.toLocaleDateString("es-PE", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      const timeString = peruTime.toLocaleTimeString("es-PE", {
        hour: "2-digit",
        minute: "2-digit",
      });

      setCurrentStatus({ date: `Hoy ${dateString}`, time: timeString, isOpen });
    };

    updateStatus();
    const interval = setInterval(updateStatus, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border-t border-border pt-4">
      <div className="flex items-start gap-3">
        <Clock className="h-5 w-5 mt-0.5 text-primary" />
        <div className="w-full space-y-2">
          <div className="font-semibold">Horarios</div>
          {currentStatus && (
            <div className="flex items-center justify-between text-sm text-muted-foreground gap-3">
              <span className="flex-1 min-w-0">{currentStatus.date}</span>
              <div className="text-right whitespace-nowrap">
                <span className="text-muted-foreground">{currentStatus.time}</span>
                <span className="text-muted-foreground"> - </span>
                <span
                  className={
                    currentStatus.isOpen
                      ? "text-green-600 font-semibold"
                      : "text-red-600 font-semibold"
                  }
                >
                  {currentStatus.isOpen ? "Abierto" : "Cerrado"}
                </span>
              </div>
            </div>
          )}
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
