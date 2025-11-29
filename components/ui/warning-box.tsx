import { Sparkles } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface WarningBoxProps {
  title: string
  description: string
  icon?: LucideIcon
}

export function WarningBox({ title, description, icon: Icon = Sparkles }: WarningBoxProps) {
  return (
    <div className="mt-10 rounded-xl border border-amber-500/30 bg-amber-500/5 p-5">
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-500/10">
          <Icon className="h-4 w-4 text-amber-500" />
        </div>
        <div>
          <h4 className="font-medium text-amber-500">{title}</h4>
          <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}
