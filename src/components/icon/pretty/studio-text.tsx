import { cn } from "@/lib/utils"

import { prettyStudioFont } from "./fonts"

interface StudioTextProps {
  className?: string
  children?: string
  gradientFrom?: string
  gradientTo?: string
}

export function StudioText({
  className,
  children = "STUDIO",
  gradientFrom = "#E7BE76",
  gradientTo = "#8A6B3E",
}: StudioTextProps) {
  return (
    <span
      className={cn(
        "mt-0.5 block bg-clip-text leading-none tracking-[0.2em] text-transparent",
        prettyStudioFont.className,
        className
      )}
      style={{
        backgroundImage: `linear-gradient(180deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
      }}
    >
      {children}
    </span>
  )
}

export default StudioText
