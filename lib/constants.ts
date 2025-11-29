export const SEVERITY_CONFIG = {
  critical: {
    badge: "Критический",
    badgeClass: "bg-destructive/20 text-destructive border-destructive/30",
    iconClass: "text-destructive bg-destructive/10",
  },
  high: {
    badge: "Высокий",
    badgeClass: "bg-accent/20 text-accent-foreground border-accent/30",
    iconClass: "text-accent bg-accent/10",
  },
  medium: {
    badge: "Средний",
    badgeClass: "bg-primary/20 text-primary border-primary/30",
    iconClass: "text-primary bg-primary/10",
  },
} as const

export const ACCENT_GRADIENT = {
  destructive: "from-destructive/20 to-transparent",
  warning: "from-accent/20 to-transparent",
  primary: "from-primary/20 to-transparent",
} as const

export const ACCENT_TITLE = {
  destructive: "text-destructive",
  warning: "text-accent",
  primary: "text-primary",
} as const

export const NAV_LINKS = [
  { href: "#models", label: "ИИ-модели" },
  { href: "#prompts", label: "Промпты" },
  { href: "#tutorial", label: "Учебник" },
  { href: "#courses", label: "Курсы" },
  { href: "#security", label: "Безопасность" },
  { href: "#quality", label: "Качество кода" },
  { href: "#human", label: "Человеческий фактор" },
] as const
