import type { LucideIcon } from "lucide-react"

export type Severity = "critical" | "high" | "medium"
export type AccentColor = "destructive" | "warning" | "primary"
export type PromptCategory = "websites" | "games" | "bots"

export interface Risk {
  icon: LucideIcon
  title: string
  description: string
  severity: Severity
}

export interface AIModel {
  icon: LucideIcon
  name: string
  tagline: string
  description: string
  strengths: string[]
  weaknesses: string[]
}

export interface Prompt {
  title: string
  prompt: string
  description: string
  tags: string[]
}

export interface NavLink {
  href: string
  label: string
}

export interface StatItem {
  value: number
  suffix: string
  label: string
  description: string
}

export interface TutorialStep {
  title: string
  description: string
}

export interface TutorialLesson {
  id: string
  number: number
  title: string
  duration: string
  description: string
  steps: TutorialStep[]
  tips: string[]
  codeExample?: string
}

export interface Course {
  id: string
  name: string
  provider: string
  description: string
  duration: string
  projects: number
  topics: string[]
  technologies: string[]
  price?: string
  link?: string
}

export interface RoadmapStep {
  week: number
  title: string
  description: string
  skills: string[]
  project?: string
}
