"use client"

import { useState } from "react"
import { BookOpen, Clock, ChevronDown, ChevronRight, Lightbulb, Code, CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { SectionHeader } from "@/components/ui/section-header"
import { tutorialLessons } from "@/data/tutorial"
import type { TutorialLesson } from "@/lib/types"

function LessonCard({ lesson }: { lesson: TutorialLesson }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="border-border/50 bg-card/50 transition-all hover:border-primary/30 hover:bg-card/80">
      <CardHeader className="cursor-pointer select-none" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-lg font-bold text-primary">
              {lesson.number}
            </div>
            <div className="space-y-1">
              <CardTitle className="text-lg">{lesson.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{lesson.description}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="hidden shrink-0 sm:flex">
              <Clock className="mr-1 h-3 w-3" />
              {lesson.duration}
            </Badge>
            {isExpanded ? (
              <ChevronDown className="h-5 w-5 text-muted-foreground" />
            ) : (
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            )}
          </div>
        </div>
      </CardHeader>

      {isExpanded && (
        <CardContent className="space-y-6 border-t border-border/50 pt-6">
          {/* Steps */}
          <div className="space-y-4">
            <h4 className="flex items-center gap-2 font-semibold">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Шаги
            </h4>
            <div className="space-y-3">
              {lesson.steps.map((step, index) => (
                <div key={index} className="flex gap-3 rounded-lg bg-secondary/30 p-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-medium text-primary">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-medium">{step.title}</p>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div className="space-y-3">
            <h4 className="flex items-center gap-2 font-semibold">
              <Lightbulb className="h-4 w-4 text-accent" />
              Советы
            </h4>
            <ul className="space-y-2">
              {lesson.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          {/* Code Example */}
          {lesson.codeExample && (
            <div className="space-y-3">
              <h4 className="flex items-center gap-2 font-semibold">
                <Code className="h-4 w-4 text-primary" />
                Пример
              </h4>
              <pre className="overflow-x-auto rounded-lg bg-secondary/50 p-4 text-sm">
                <code className="text-muted-foreground">{lesson.codeExample}</code>
              </pre>
            </div>
          )}
        </CardContent>
      )}
    </Card>
  )
}

export function TutorialSection() {
  return (
    <SectionWrapper id="tutorial">
      <SectionHeader icon={BookOpen} title="Учебник" subtitle="Пошаговое руководство по безопасному вайб-кодингу" />
      <div className="space-y-4">
        {tutorialLessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </SectionWrapper>
  )
}
