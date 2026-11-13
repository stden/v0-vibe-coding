"use client"

import { useEffect, useState } from "react"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { SectionHeader } from "@/components/ui/section-header"
import type { StatItem } from "@/lib/types"

const stats: StatItem[] = [
  { value: 40, suffix: "%", label: "кода Copilot", description: "содержит уязвимости" },
  { value: 45, suffix: "%", label: "ИИ-кода", description: "имеет OWASP Top 10" },
  { value: 2048, suffix: "", label: "бит RSA", description: "минимум для безопасности" },
  { value: 10, suffix: "x", label: "быстрее", description: "растёт техдолг" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value])

  return (
    <span className="tabular-nums">
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <SectionWrapper className="border-y border-border/50 bg-card/30 py-16">
      <SectionHeader title="Статистика рисков" subtitle="Данные исследований ИИ-генерируемого кода" />
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </div>
            <div className="mt-2 text-sm font-medium text-foreground">{stat.label}</div>
            <div className="mt-1 text-xs text-muted-foreground">{stat.description}</div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
