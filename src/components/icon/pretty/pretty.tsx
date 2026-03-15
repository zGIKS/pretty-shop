import { cn } from "@/lib/utils"

import Flower from "./flower"
import PrettyText from "./pretty-text"
import StudioText from "./studio-text"

interface PrettyProps {
  className?: string
  iconClassName?: string
  prettyClassName?: string
  studioClassName?: string
  size?: "xs" | "sm" | "md" | "lg"
  title?: string
  subtitle?: string
  gradientFrom?: string
  gradientTo?: string
}

const sizeStyles = {
  xs: {
    icon: "h-[0.9rem]",
    pretty: "text-[0.9rem]",
    studio: "text-[0.225rem] tracking-[0.18em]",
  },
  sm: {
    icon: "h-[1.1rem]",
    pretty: "text-[1.1rem]",
    studio: "text-[0.275rem] tracking-[0.18em]",
  },
  md: {
    icon: "h-[1.5rem]",
    pretty: "text-[1.5rem]",
    studio: "text-[0.375rem] tracking-[0.16em]",
  },
  lg: {
    icon: "h-[2rem]",
    pretty: "text-[2rem]",
    studio: "text-[0.5rem] tracking-[0.16em]",
  },
} as const

export function Pretty({
  className,
  iconClassName,
  prettyClassName,
  studioClassName,
  size = "sm",
  title = "Pretty",
  subtitle = "STUDIO",
  gradientFrom = "#E7BE76",
  gradientTo = "#8A6B3E",
}: PrettyProps) {
  const styles = sizeStyles[size]

  return (
    <div
      className={cn("flex flex-col items-center text-center", className)}
      aria-label={`${title} ${subtitle}`}
    >
      <Flower
        className={cn("w-auto", styles.icon, iconClassName)}
        gradientFrom={gradientFrom}
        gradientTo={gradientTo}
      />
      <PrettyText
        className={cn(styles.pretty, prettyClassName)}
        gradientFrom={gradientFrom}
        gradientTo={gradientTo}
      >
        {title}
      </PrettyText>
      <StudioText
        className={cn(styles.studio, studioClassName)}
        gradientFrom={gradientFrom}
        gradientTo={gradientTo}
      >
        {subtitle}
      </StudioText>
    </div>
  )
}

export default Pretty
