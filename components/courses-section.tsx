"use client"

import { useState } from "react"
import {
  GraduationCap,
  Clock,
  FolderKanban,
  ExternalLink,
  ChevronDown,
  Code,
  Wrench,
  Bot,
  Database,
  CheckCircle2,
  BookOpen,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { SectionHeader } from "@/components/ui/section-header"
import { courses, roadmap, tools } from "@/data/courses"
import { cn } from "@/lib/utils"

const TOOL_CATEGORIES = [
  { key: "editors", label: "Редакторы кода", icon: Code },
  { key: "llm", label: "LLM модели", icon: Bot },
  { key: "platforms", label: "Платформы", icon: Database },
  { key: "frameworks", label: "Фреймворки", icon: Wrench },
] as const

export function CoursesSection() {
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null)
  const [activeToolCategory, setActiveToolCategory] = useState<keyof typeof tools>("editors")

  return (
    <SectionWrapper id="courses">
      <SectionHeader title="Курсы и ресурсы" subtitle="Обучающие программы и инструменты для освоения вайб-кодинга" />

      {/* Courses Grid */}
      <div className="mb-16">
        <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <GraduationCap className="h-5 w-5 text-primary" />
          Обучающие курсы
        </h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card key={course.id} className="bg-card/50 border-border/50 hover:border-primary/30 transition-all">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                  <Badge variant="outline" className="text-xs">
                    {course.provider}
                  </Badge>
                  {course.price && (
                    <Badge className="bg-primary/20 text-primary border-0 text-xs">{course.price}</Badge>
                  )}
                </div>
                <CardTitle className="text-lg mt-2">{course.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-3">{course.description}</p>

                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <FolderKanban className="h-3.5 w-3.5" />
                    {course.projects} проектов
                  </span>
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-between text-xs"
                  onClick={() => setExpandedCourse(expandedCourse === course.id ? null : course.id)}
                >
                  Подробнее о курсе
                  <ChevronDown
                    className={cn("h-4 w-4 transition-transform", expandedCourse === course.id && "rotate-180")}
                  />
                </Button>

                {expandedCourse === course.id && (
                  <div className="space-y-3 pt-2 border-t border-border/50">
                    <div>
                      <p className="text-xs font-medium text-foreground mb-2">Темы:</p>
                      <div className="flex flex-wrap gap-1">
                        {course.topics.map((topic) => (
                          <Badge key={topic} variant="secondary" className="text-xs font-normal">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-foreground mb-2">Технологии:</p>
                      <div className="flex flex-wrap gap-1">
                        {course.technologies.slice(0, 8).map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs font-normal">
                            {tech}
                          </Badge>
                        ))}
                        {course.technologies.length > 8 && (
                          <Badge variant="outline" className="text-xs font-normal">
                            +{course.technologies.length - 8}
                          </Badge>
                        )}
                      </div>
                    </div>
                    {course.link && (
                      <Button asChild size="sm" className="w-full mt-2">
                        <a href={course.link} target="_blank" rel="noopener noreferrer">
                          Перейти к курсу
                          <ExternalLink className="h-3.5 w-3.5 ml-2" />
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Roadmap */}
      <div className="mb-16">
        <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          Дорожная карта обучения (8 недель)
        </h3>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border/50 -translate-x-1/2" />

          <div className="space-y-8">
            {roadmap.map((step, index) => (
              <div
                key={step.week}
                className={cn(
                  "relative flex flex-col md:flex-row gap-4",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
                )}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center z-10">
                  <span className="text-xs font-bold text-primary">{step.week}</span>
                </div>

                {/* Content card */}
                <div className={cn("ml-12 md:ml-0 md:w-[calc(50%-2rem)]", index % 2 === 0 ? "md:pr-8" : "md:pl-8")}>
                  <Card className="bg-card/50 border-border/50">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="text-xs">
                          Неделя {step.week}
                        </Badge>
                      </div>
                      <CardTitle className="text-base">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                      <div className="space-y-1.5">
                        {step.skills.map((skill) => (
                          <div key={skill} className="flex items-start gap-2 text-xs">
                            <CheckCircle2 className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
                            <span className="text-muted-foreground">{skill}</span>
                          </div>
                        ))}
                      </div>
                      {step.project && (
                        <div className="pt-2 border-t border-border/50">
                          <p className="text-xs">
                            <span className="font-medium text-foreground">Проект: </span>
                            <span className="text-primary">{step.project}</span>
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tools */}
      <div>
        <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <Wrench className="h-5 w-5 text-primary" />
          Инструменты вайб-кодера
        </h3>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {TOOL_CATEGORIES.map(({ key, label, icon: Icon }) => (
            <Button
              key={key}
              variant={activeToolCategory === key ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveToolCategory(key)}
              className="gap-2"
            >
              <Icon className="h-4 w-4" />
              {label}
            </Button>
          ))}
        </div>

        {/* Tools grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tools[activeToolCategory].map((tool) => (
            <Card key={tool.name} className="bg-card/50 border-border/50">
              <CardContent className="p-4">
                <h4 className="font-medium text-foreground mb-1">{tool.name}</h4>
                <p className="text-xs text-muted-foreground">{tool.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
