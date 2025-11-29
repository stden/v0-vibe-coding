import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Severity } from "@/lib/types"
import { SEVERITY_CONFIG } from "@/lib/constants"

interface RiskCardProps {
  icon: LucideIcon
  title: string
  description: string
  severity: Severity
}

export function RiskCard({ icon: Icon, title, description, severity }: RiskCardProps) {
  const config = SEVERITY_CONFIG[severity]

  return (
    <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur transition-all hover:border-border hover:bg-card/80 hover:shadow-lg">
      {/* Severity badge */}
      <div
        className={cn("absolute top-4 right-4 rounded-full border px-2 py-0.5 text-xs font-medium", config.badgeClass)}
      >
        {config.badge}
      </div>

      {/* Icon */}
      <div className={cn("mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg", config.iconClass)}>
        <Icon className="h-6 w-6" />
      </div>

      {/* Content */}
      <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>

      {/* Hover decoration */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-destructive transition-all duration-300 group-hover:w-full" />
    </div>
  )
}
