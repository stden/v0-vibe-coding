import { SectionWrapper } from "@/components/ui/section-wrapper"
import { SectionHeader } from "@/components/ui/section-header"
import { WarningBox } from "@/components/ui/warning-box"
import { FeatureList } from "@/components/ui/feature-list"
import { aiModels } from "@/data/ai-models"

function AIModelCard({ model }: { model: (typeof aiModels)[number] }) {
  const Icon = model.icon

  return (
    <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/50 p-6 transition-all hover:border-primary/30 hover:bg-card/80">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground">{model.name}</h3>
          <p className="text-sm text-primary/80">{model.tagline}</p>
        </div>
      </div>
      <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{model.description}</p>
      <div className="mt-5 grid grid-cols-2 gap-4">
        <FeatureList title="Сильные стороны" items={model.strengths} variant="positive" />
        <FeatureList title="Слабые стороны" items={model.weaknesses} variant="negative" />
      </div>
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/5 blur-3xl transition-all group-hover:bg-primary/10" />
    </div>
  )
}

export function AIModelsSection() {
  return (
    <SectionWrapper id="models" withBorder withBackground>
      <SectionHeader
        title="Популярные ИИ-модели для кодинга"
        subtitle="Обзор ведущих моделей, используемых для вайб-кодинга, их сильные и слабые стороны"
      />
      <div className="grid gap-6 md:grid-cols-2">
        {aiModels.map((model) => (
          <AIModelCard key={model.name} model={model} />
        ))}
      </div>
      <WarningBox
        title="Важно помнить"
        description="Все модели, независимо от мощности, подвержены рискам вайб-кодинга. Ни одна из них не гарантирует безопасный, поддерживаемый и корректный код без тщательной проверки человеком. Всегда проводите код-ревью и тестирование."
      />
    </SectionWrapper>
  )
}
