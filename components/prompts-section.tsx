"use client"

import { useState } from "react"
import { Globe, Gamepad2, Bot, Copy, Check, Sparkles, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { SectionHeader } from "@/components/ui/section-header"
import { WarningBox } from "@/components/ui/warning-box"
import { cn } from "@/lib/utils"
import { prompts } from "@/data/prompts"
import type { Prompt, PromptCategory } from "@/lib/types"

const categories = [
  { id: "websites" as const, label: "Сайты", icon: Globe },
  { id: "games" as const, label: "Игры", icon: Gamepad2 },
  { id: "bots" as const, label: "Telegram-боты", icon: Bot },
]

function PromptCard({ prompt }: { prompt: Prompt }) {
  const [copied, setCopied] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(prompt.prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="group rounded-xl border border-border/50 bg-secondary/30 p-5 transition-all hover:border-primary/30 hover:bg-secondary/50">
      <div className="mb-3 flex items-start justify-between gap-4">
        <div>
          <h4 className="font-semibold text-foreground">{prompt.title}</h4>
          <p className="mt-1 text-sm text-muted-foreground">{prompt.description}</p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={copyToClipboard}
          className="shrink-0 text-muted-foreground hover:text-primary"
        >
          {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>
      <div className="mb-3 flex flex-wrap gap-2">
        {prompt.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
            {tag}
          </span>
        ))}
      </div>
      <div
        className={cn(
          "relative overflow-hidden rounded-lg bg-background/50 font-mono text-sm",
          expanded ? "max-h-none" : "max-h-32",
        )}
      >
        <pre className="overflow-x-auto p-4 text-muted-foreground whitespace-pre-wrap">{prompt.prompt}</pre>
        {!expanded && (
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background/90 to-transparent" />
        )}
      </div>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setExpanded(!expanded)}
        className="mt-2 w-full text-muted-foreground hover:text-foreground"
      >
        {expanded ? (
          <>
            <ChevronUp className="mr-1 h-4 w-4" /> Свернуть
          </>
        ) : (
          <>
            <ChevronDown className="mr-1 h-4 w-4" /> Развернуть
          </>
        )}
      </Button>
    </div>
  )
}

export function PromptsSection() {
  const [activeCategory, setActiveCategory] = useState<PromptCategory>("websites")

  return (
    <SectionWrapper id="prompts" withBorder className="bg-background">
      <SectionHeader
        title="Готовые запросы для ИИ-кодинга"
        subtitle="Проверенные промпты для создания сайтов, игр и Telegram-ботов. Скопируйте и используйте с любой ИИ-моделью."
        badge={
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            Лучшие промпты
          </div>
        }
      />
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            onClick={() => setActiveCategory(category.id)}
            className={cn("gap-2", activeCategory === category.id && "bg-primary text-primary-foreground")}
          >
            <category.icon className="h-4 w-4" />
            {category.label}
          </Button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {prompts[activeCategory].map((prompt) => (
          <PromptCard key={prompt.title} prompt={prompt} />
        ))}
      </div>
      <WarningBox
        title="Важно помнить"
        description="Эти промпты — отправная точка. Всегда проверяйте сгенерированный код на безопасность, тестируйте граничные случаи и проводите код-ревью. ИИ-генерируемый код требует такой же тщательной проверки, как и код, написанный человеком."
      />
    </SectionWrapper>
  )
}
