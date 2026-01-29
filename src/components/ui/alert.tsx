"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type AlertVariant = "default" | "destructive" | "success";

interface AlertProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  variant?: AlertVariant;
  title?: React.ReactNode;
  description?: React.ReactNode;
}

const variantStyles: Record<AlertVariant, string> = {
  default: "border border-border bg-background text-foreground",
  destructive:
    "border border-red-500 bg-red-50 text-red-700 dark:border-red-600 dark:bg-red-950/60 dark:text-red-200",
  success:
    "border border-green-400 bg-green-50 text-green-800 dark:border-green-500 dark:bg-emerald-950/60 dark:text-green-200",
};

export function Alert({ className, variant = "default", title, description, ...props }: AlertProps) {
  return (
    <div
      className={cn("rounded-lg p-4 text-sm", variantStyles[variant], className)}
      role="status"
      {...props}
    >
      {title ? (
        <div className="font-semibold text-base leading-snug text-foreground">
          {title}
        </div>
      ) : null}
      {description ? <div className="mt-1 leading-snug">{description}</div> : null}
    </div>
  );
}
