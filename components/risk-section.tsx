import { SectionWrapper } from "@/components/ui/section-wrapper"
import { SectionHeader } from "@/components/ui/section-header"
import { RiskCard } from "@/components/risk-card"
import type { Risk, AccentColor } from "@/lib/types"

interface RiskSectionProps {
  id: string
  title: string
  subtitle: string
  risks: Risk[]
  accentColor: AccentColor
}

export function RiskSection({ id, title, subtitle, risks, accentColor }: RiskSectionProps) {
  return (
    <SectionWrapper id={id} accentColor={accentColor}>
      <SectionHeader title={title} subtitle={subtitle} accentColor={accentColor} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {risks.map((risk, index) => (
          <RiskCard
            key={index}
            icon={risk.icon}
            title={risk.title}
            description={risk.description}
            severity={risk.severity}
          />
        ))}
      </div>
    </SectionWrapper>
  )
}
