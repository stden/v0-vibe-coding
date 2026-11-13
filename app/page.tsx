import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { RiskSection } from "@/components/risk-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AIModelsSection } from "@/components/ai-models-section"
import { PromptsSection } from "@/components/prompts-section"
import { TutorialSection } from "@/components/tutorial-section"
import { CoursesSection } from "@/components/courses-section"
import { securityRisks, qualityRisks, humanRisks, ethicalRisks } from "@/data/risks"

export default function VibeCodingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <StatsSection />
        <AIModelsSection />
        <PromptsSection />
        <TutorialSection />
        <CoursesSection />
        <RiskSection
          id="security"
          title="Риски безопасности"
          subtitle="Уязвимости и угрозы в ИИ-генерируемом коде"
          risks={securityRisks}
          accentColor="destructive"
        />
        <RiskSection
          id="quality"
          title="Качество кода и техдолг"
          subtitle="Архитектурные проблемы и накопление технического долга"
          risks={qualityRisks}
          accentColor="warning"
        />
        <RiskSection
          id="human"
          title="Человеческий фактор"
          subtitle="Риски, связанные с управлением и поведением разработчиков"
          risks={humanRisks}
          accentColor="primary"
        />
        <RiskSection
          id="ethical"
          title="Этические и общие риски"
          subtitle="Высокие ставки, авторские права и непредсказуемость ИИ-агентов"
          risks={ethicalRisks}
          accentColor="destructive"
        />
      </main>
      <Footer />
    </div>
  )
}
