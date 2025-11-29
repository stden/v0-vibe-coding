import { cn } from "@/lib/utils"

interface FeatureListProps {
  title: string
  items: string[]
  variant: "positive" | "negative"
}

export function FeatureList({ title, items, variant }: FeatureListProps) {
  const colorClass = variant === "positive" ? "text-emerald-500" : "text-destructive"
  const dotClass = variant === "positive" ? "bg-emerald-500" : "bg-destructive"

  return (
    <div>
      <h4 className={cn("text-xs font-medium uppercase tracking-wider mb-2", colorClass)}>{title}</h4>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className={cn("h-1 w-1 rounded-full", dotClass)} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
