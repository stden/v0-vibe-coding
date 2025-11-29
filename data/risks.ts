import { ShieldAlert, Bug, Lock, Database, Code2, Brain, AlertTriangle, Scale, TrendingDown, Users } from "lucide-react"
import type { Risk } from "@/lib/types"

export const securityRisks: Risk[] = [
  {
    icon: ShieldAlert,
    title: "Генерация уязвимого кода",
    description:
      "Около 40% кода GitHub Copilot содержит уязвимости. 45% ИИ-кода имеет классические уязвимости из OWASP Top 10.",
    severity: "critical",
  },
  {
    icon: Database,
    title: "SQL-инъекции и XSS",
    description:
      "LLM-код часто содержит уязвимости типа SQL-инъекции и межсайтового скриптинга (XSS) — классические векторы атак.",
    severity: "critical",
  },
  {
    icon: Lock,
    title: "Проблемы аутентификации",
    description:
      "Критические уязвимости в механизмах аутентификации, отсутствие CSRF-защиты и rate limiting для защиты от brute-force атак.",
    severity: "high",
  },
  {
    icon: Code2,
    title: "Небезопасная криптография",
    description: "Модели генерируют код с небезопасными параметрами: RSA-ключи < 2048 бит, режим шифрования AES ECB.",
    severity: "high",
  },
  {
    icon: AlertTriangle,
    title: "Утечка секретов",
    description:
      "Риск жёсткого кодирования паролей и API-ключей прямо в коде с последующей публикацией в открытых репозиториях.",
    severity: "critical",
  },
  {
    icon: Bug,
    title: "Prompt Injection",
    description:
      "ИИ-агенты, встроенные в продукты, уязвимы для инъекций запросов — атакующий может манипулировать поведением системы.",
    severity: "high",
  },
]

export const qualityRisks: Risk[] = [
  {
    icon: Code2,
    title: "Архитектурная слепота",
    description:
      "Вся логика, стили и структура смешаны в одном файле — проблемы поддержки, отладки и сопровождения проекта.",
    severity: "high",
  },
  {
    icon: TrendingDown,
    title: "Накопление техдолга",
    description:
      "Разработка ускоряется, но технический долг накапливается быстрее. Для масштабирования требуется стратегический рефакторинг.",
    severity: "medium",
  },
  {
    icon: AlertTriangle,
    title: "Иллюзия работоспособности",
    description: "Код кажется рабочим, но не обрабатывает граничные случаи и теряет важные проверки при итерациях.",
    severity: "high",
  },
  {
    icon: Brain,
    title: "Галлюцинации LLM",
    description:
      "Модели создают код, который выглядит логичным, но является некорректным или содержит вымышленную информацию.",
    severity: "medium",
  },
  {
    icon: Bug,
    title: "Регрессия при итерациях",
    description: "При исправлении ошибок LLM создаёт новые баги и теряет проверки из предыдущих версий кода.",
    severity: "high",
  },
  {
    icon: ShieldAlert,
    title: "Несоответствие замыслу",
    description:
      "Код поверхностно выглядит правильно, но не соответствует полному замыслу пользователя или является нежелательным.",
    severity: "medium",
  },
]

export const humanRisks: Risk[] = [
  {
    icon: Brain,
    title: "Чрезмерное доверие",
    description:
      "Разработчики демонстрируют высокую уверенность в безопасности ИИ-кода, несмотря на наличие уязвимостей.",
    severity: "critical",
  },
  {
    icon: Code2,
    title: "Непонимание кода",
    description:
      "Если разработчик не может объяснить код словами — он его не понял. Использование без понимания ведёт к проблемам.",
    severity: "high",
  },
  {
    icon: AlertTriangle,
    title: "Потеря контекста",
    description: "При заполнении контекстного окна агента модель «тупит», повторяет ошибки, теряет важные инструкции.",
    severity: "medium",
  },
  {
    icon: Users,
    title: "Ревью по инерции",
    description: "Код-ревьюеры принимают код за минуту, полагая что ИИ не ошибается, снимая с себя ответственность.",
    severity: "high",
  },
  {
    icon: Scale,
    title: "Лицензионные риски",
    description: "Модели могут генерировать фрагменты, идентичные коду с защищёнными лицензиями — риск судебных исков.",
    severity: "medium",
  },
  {
    icon: TrendingDown,
    title: "Снижение навыков новичков",
    description:
      "Генеративный ИИ расслабляет начинающих специалистов, которые теряют понимание промышленной разработки.",
    severity: "high",
  },
]
