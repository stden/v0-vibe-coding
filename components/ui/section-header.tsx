import type React from "react"
import { cn } from "@/lib/utils"
import type { AccentColor } from "@/lib/types"
import { ACCENT_TITLE } from "@/lib/constants"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  accentColor?: AccentColor
  badge?: React.ReactNode
  className?: string
}

export function SectionHeader({ title, subtitle, accentColor, badge, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 text-center", className)}>
      {badge}
      <h2
        className={cn(
          "text-2xl font-semibold sm:text-3xl",
          accentColor ? ACCENT_TITLE[accentColor] : "text-foreground",
        )}
      >
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  )
}
