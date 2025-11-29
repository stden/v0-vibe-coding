import { Zap, Github, ExternalLink } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <span className="text-lg font-semibold tracking-tight">
                Vibe<span className="text-primary">Coding</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Образовательный ресурс о рисках использования ИИ для генерации кода в профессиональной разработке.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Ресурсы</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="https://owasp.org/Top10/"
                  target="_blank"
                  className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
                >
                  OWASP Top 10
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.nist.gov/cyberframework"
                  target="_blank"
                  className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
                >
                  NIST Cybersecurity
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link href="#security" className="hover:text-foreground transition-colors">
                  Риски безопасности
                </Link>
              </li>
              <li>
                <Link href="#quality" className="hover:text-foreground transition-colors">
                  Качество кода
                </Link>
              </li>
            </ul>
          </div>

          {/* Standards */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Стандарты безопасности</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>RSA ключи ≥ 2048 бит</li>
              <li>Избегать AES ECB режима</li>
              <li>Обязательный CSRF-токен</li>
              <li>Rate limiting для API</li>
              <li>Нет хардкода секретов</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">© 2025 VibeCoding Risks. Создано в образовательных целях.</p>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
