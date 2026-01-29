"use client";

import { Check, Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ControlSize = "sm" | "lg";

interface QuantityControlsProps {
  quantity: number;
  size?: ControlSize;
  className?: string;
  disableDecrease?: boolean;
  disableIncrease?: boolean;
  onDecrease: () => void;
  onIncrease: () => void;
  onConfirm?: () => void;
  onRemove?: () => void;
}

export default function QuantityControls({
  quantity,
  size = "sm",
  className,
  disableDecrease = false,
  disableIncrease = false,
  onDecrease,
  onIncrease,
  onConfirm,
  onRemove,
}: QuantityControlsProps) {
  const iconSize = size === "lg" ? "h-5 w-5" : "h-4 w-4";
  const quantityClass = size === "lg" ? "text-lg" : "text-sm";

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {onRemove && (
        <Button
          variant="outline"
          size={size}
          onClick={onRemove}
          aria-label="Eliminar producto"
        >
          <Trash2 className={iconSize} />
        </Button>
      )}
      <Button
        variant="outline"
        size={size}
        onClick={onDecrease}
        disabled={disableDecrease}
        aria-label="Disminuir cantidad"
      >
        <Minus className={iconSize} />
      </Button>
      <span className={`font-semibold ${quantityClass}`}>{quantity}</span>
      <Button
        variant="outline"
        size={size}
        onClick={onIncrease}
        disabled={disableIncrease}
        aria-label="Aumentar cantidad"
      >
        <Plus className={iconSize} />
      </Button>
      {onConfirm && (
        <Button
          variant="secondary"
          size={size}
          onClick={onConfirm}
          aria-label="Confirmar cantidad"
          className="px-3"
        >
          <Check className={iconSize} />
        </Button>
      )}
    </div>
  );
}
