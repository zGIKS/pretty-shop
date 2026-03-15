import * as React from "react"

import { cn } from "@/lib/utils"

interface FlowerProps extends React.ComponentProps<"svg"> {
  gradientFrom?: string
  gradientTo?: string
}

export function Flower({
  className,
  gradientFrom = "#E6BD7B",
  gradientTo = "#806944",
  ...props
}: FlowerProps) {
  const gradientId = React.useId()

  return (
    <svg
      viewBox="0 0 193 126"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-8 w-auto text-primary", className)}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M66.8564 121.387L84.5 125.5L79.237 121.952C54.3298 105.161 37.9913 78.335 34.5 48.5L33.5111 48.0637C22.953 43.4057 11.5399 41 0 41C1.77444 79.7418 29.0868 112.582 66.8564 121.387Z"
        fill={`url(#${gradientId}-left-outer)`}
      />
      <path
        d="M125.644 121.387L108 125.5L113.263 121.952C138.17 105.161 154.509 78.335 158 48.5L158.989 48.0637C169.547 43.4057 180.96 41 192.5 41C190.726 79.7418 163.413 112.582 125.644 121.387Z"
        fill={`url(#${gradientId}-right-outer)`}
      />
      <path
        d="M87.5 121.5L71.5204 109.02C40.8739 85.084 31.078 43.011 48 8C56.3227 13.6594 64.2305 19.9061 71.6631 26.6924L72 27C60.183 56.5425 64.4447 90.0913 83.2726 115.741L87.5 121.5Z"
        fill={`url(#${gradientId}-left-inner)`}
      />
      <path
        d="M105 121.5L120.98 109.02C151.626 85.084 161.422 43.011 144.5 8C136.177 13.6594 128.269 19.9061 120.837 26.6924L120.5 27C132.317 56.5425 128.055 90.0913 109.227 115.741L105 121.5Z"
        fill={`url(#${gradientId}-right-inner)`}
      />
      <path
        d="M103.978 113.63L96.5 123.5L88.746 113.465C77.2412 98.5769 71 80.2927 71 61.477C71 41.7728 77.8436 22.6803 90.3611 7.46294L96.5 0L102.365 7.27201C114.747 22.6264 121.5 41.7572 121.5 61.4825C121.5 80.3103 115.347 98.6221 103.978 113.63Z"
        fill={`url(#${gradientId}-center)`}
      />
      <defs>
        <linearGradient id={`${gradientId}-left-outer`} x1="42.25" y1="41" x2="42.25" y2="125.5" gradientUnits="userSpaceOnUse">
          <stop offset="0.283654" stopColor={gradientFrom} />
          <stop offset="1" stopColor={gradientTo} />
        </linearGradient>
        <linearGradient id={`${gradientId}-right-outer`} x1="150.25" y1="41" x2="150.25" y2="125.5" gradientUnits="userSpaceOnUse">
          <stop offset="0.283654" stopColor={gradientFrom} />
          <stop offset="1" stopColor={gradientTo} />
        </linearGradient>
        <linearGradient id={`${gradientId}-left-inner`} x1="53.25" y1="8" x2="53.25" y2="121.5" gradientUnits="userSpaceOnUse">
          <stop offset="0.283654" stopColor={gradientFrom} />
          <stop offset="1" stopColor={gradientTo} />
        </linearGradient>
        <linearGradient id={`${gradientId}-right-inner`} x1="139.25" y1="8" x2="139.25" y2="121.5" gradientUnits="userSpaceOnUse">
          <stop offset="0.283654" stopColor={gradientFrom} />
          <stop offset="1" stopColor={gradientTo} />
        </linearGradient>
        <linearGradient id={`${gradientId}-center`} x1="96.25" y1="0" x2="96.25" y2="123.5" gradientUnits="userSpaceOnUse">
          <stop offset="0.283654" stopColor={gradientFrom} />
          <stop offset="1" stopColor={gradientTo} />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Flower
