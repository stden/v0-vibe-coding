import type React from "react"
import { cn } from "@/lib/utils"
import type { AccentColor } from "@/lib/types"
import { ACCENT_GRADIENT } from "@/lib/constants"

interface SectionWrapperProps {
  id?: string
  children: React.ReactNode
  className?: string
  accentColor?: AccentColor
  withBorder?: boolean
  withBackground?: boolean
}

export function SectionWrapper({
  id,
  children,
  className,
  accentColor,
  withBorder = false,
  withBackground = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-20 sm:py-28",
        withBorder && "border-t border-border/50",
        withBackground && "bg-card/20",
        className,
      )}
    >
      {accentColor && (
        <div className={cn("absolute inset-0 -z-10 bg-gradient-to-b opacity-30", ACCENT_GRADIENT[accentColor])} />
      )}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}
