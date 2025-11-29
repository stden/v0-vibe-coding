import { AlertTriangle, ArrowDown } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-destructive/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-destructive/30 bg-destructive/10 px-4 py-2 text-sm text-destructive">
            <AlertTriangle className="h-4 w-4" />
            <span>Критические риски при разработке</span>
          </div>

          {/* Title */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
            <span className="text-foreground">Вайб-Кодинг:</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-destructive to-primary bg-clip-text text-transparent">
              Риски и Реальность
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Метод разработки, при котором ИИ генерирует код на основе описания на естественном языке. Несмотря на
            скорость создания прототипов, этот подход несёт серьёзные риски.
          </p>

          {/* CTA */}
          <Link
            href="#security"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
          >
            Изучить риски
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </Link>
        </div>

        {/* Code snippet decoration */}
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="overflow-hidden rounded-xl border border-border/50 bg-card/50 backdrop-blur">
            <div className="flex items-center gap-2 border-b border-border/50 bg-secondary/30 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-destructive/60" />
              <div className="h-3 w-3 rounded-full bg-accent/60" />
              <div className="h-3 w-3 rounded-full bg-green-500/60" />
              <span className="ml-2 text-xs text-muted-foreground font-mono">vibe-prompt.txt</span>
            </div>
            <div className="p-4 font-mono text-sm">
              <p className="text-muted-foreground">
                <span className="text-primary">{">"}</span> Сделай мне приложение для управления пользователями
              </p>
              <p className="mt-2 text-muted-foreground">
                <span className="text-accent">{">"}</span> Добавь авторизацию и базу данных
              </p>
              <p className="mt-2 text-muted-foreground">
                <span className="text-destructive">{">"}</span> Пусть работает{" "}
                <span className="text-destructive">// ← Здесь начинаются проблемы</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
