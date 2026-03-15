import { cn } from "@/lib/utils"

import { prettyScriptFont } from "./fonts"

interface PrettyTextProps {
  className?: string
  children?: string
  gradientFrom?: string
  gradientTo?: string
}

export function PrettyText({
  className,
  children = "Pretty",
  gradientFrom = "var(--logo-gradient-start)",
  gradientTo = "var(--logo-gradient-end)",
}: PrettyTextProps) {
  return (
    <span
      className={cn(
        "mt-1 block bg-clip-text px-1 text-transparent leading-[0.9]",
        prettyScriptFont.className,
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

export default PrettyText
