import type { ComponentType } from "react";
import { BodyTreatment } from "@/components/icon/body-treatment";
import { FacialTreatment } from "@/components/icon/facial-treatment";
import { FootTreatment } from "@/components/icon/foot-treatment";

export const categoryIcons: Record<string, ComponentType<{ className?: string }>> = {
  podologia: FootTreatment,
  "tratamientos-faciales": FacialTreatment,
  "tratamientos-corporales": BodyTreatment,
};
