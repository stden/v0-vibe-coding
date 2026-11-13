import type { Course, RoadmapStep } from "@/lib/types"

export const courses: Course[] = [
  {
    id: "zerocoder",
    name: "VIBE-CODING и автономные агенты",
    provider: "Zerocoder",
    description:
      "За 4 недели без программирования создайте 12 AI-ассистентов, мини-сервисов и Telegram-ботов. Метод программирования, при котором вы описываете задачу на разговорном языке, а ИИ сам пишет код.",
    duration: "4 недели",
    projects: 12,
    topics: [
      "Основы вайб-кодинга",
      "Создание AI-ассистентов",
      "Разработка мини-сервисов",
      "Telegram-боты",
      "Автономные агенты",
    ],
    technologies: ["ChatGPT", "Claude", "n8n", "Telegram API"],
    link: "https://zerocoder.ru/vibe-coding",
  },
  {
    id: "profileschool",
    name: "Разработка с AI на практике для всех",
    provider: "Profile School",
    description:
      "Создавайте сайты, веб-сервисы, Telegram-ботов и AI-агентов без опыта программирования. Курс построен на практике: от генерации HTML/CSS до разработки автономных агентов с памятью и RAG.",
    duration: "10 занятий (12 недель доступа)",
    projects: 5,
    topics: [
      "Промптинг для LLM",
      "Генерация HTML/CSS",
      "Работа с GitHub",
      "ИИ-агенты (Cline, Cursor)",
      "Веб-сервисы с Next.js",
      "Telegram-боты на n8n",
      "RAG и память агентов",
      "Тестирование и безопасность",
    ],
    technologies: [
      "VS Code",
      "Cline",
      "Cursor",
      "Claude Code",
      "Next.js",
      "Supabase",
      "n8n",
      "Cloudflare",
      "LangGraph",
      "Playwright",
      "Vercel",
    ],
    price: "от 18 000 руб.",
    link: "https://www.profileschool.ru/category/ai/course_developing_with_ai_in_practice_for_all",
  },
  {
    id: "100vibecoding",
    name: "100 Vibe Coding",
    provider: "100 Vibe Coding",
    description:
      "Освойте искусство промптинга через 100 прогрессивных задач. Воплощайте идеи в реальные проекты, постепенно повышая сложность и осваивая новые техники работы с ИИ.",
    duration: "Самостоятельно",
    projects: 100,
    topics: ["Основы промптинга", "Прогрессивные задачи", "Реальные проекты", "Практика с ИИ"],
    technologies: ["ChatGPT", "Claude", "Gemini"],
  },
]

export const roadmap: RoadmapStep[] = [
  {
    week: 1,
    title: "Введение в разработку с ИИ",
    description: "Знакомство с LLM моделями, основы промптинга, настройка рабочего окружения",
    skills: [
      "Понимание работы LLM (GPT, Claude, Gemini)",
      "Написание эффективных промптов",
      "Установка VS Code и расширений",
      "Основы HTML/CSS",
    ],
    project: "Лендинг на GitHub Pages",
  },
  {
    week: 2,
    title: "Контроль версий и ИИ-агенты",
    description: "Git и GitHub, знакомство с ИИ-агентами для разработки (Cline, Cursor, Claude Code)",
    skills: ["Работа с Git и GitHub", "Использование Cline/Cursor", "API доступ к LLM", "Улучшение кода с ИИ"],
    project: "Улучшенный лендинг с SEO",
  },
  {
    week: 3,
    title: "Веб-приложения с ИИ",
    description: "Создание полноценных веб-сервисов с использованием Next.js и интеграцией LLM API",
    skills: ["Генерация UI в v0.dev", "Работа с Next.js", "Интеграция LLM API", "Деплой на Vercel"],
    project: "Веб-сервис с ИИ (YouTube Summary)",
  },
  {
    week: 4,
    title: "Базы данных и авторизация",
    description: "MCP (Model Context Protocol), Supabase, системы авторизации, тестирование",
    skills: ["Работа с MCP", "Supabase и базы данных", "Авторизация пользователей", "E2E тестирование с Playwright"],
    project: "Веб-сервис с авторизацией",
  },
  {
    week: 5,
    title: "No-code ИИ-агенты",
    description: "Создание Telegram-ботов через n8n, webhooks, интеграция с LLM",
    skills: ["Основы n8n", "Telegram Bot API", "Настройка webhooks", "Интеграция с ИИ"],
    project: "Telegram-бот с ИИ",
  },
  {
    week: 6,
    title: "Память агентов и RAG",
    description: "Добавление памяти ботам, RAG (Retrieval-Augmented Generation), Cloudflare",
    skills: ["Память ИИ-агентов", "RAG архитектура", "Cloudflare Auto RAG", "Работа с контекстом"],
    project: "Бот с памятью и RAG",
  },
  {
    week: 7,
    title: "Разработка агентов через код",
    description: "Фреймворки для ИИ-агентов (LangGraph, LlamaIndex), создание агентов с нуля",
    skills: ["LangGraph основы", "Архитектура агентов", "Инструменты для агентов", "Оркестрация"],
    project: "Кастомный ИИ-агент",
  },
  {
    week: 8,
    title: "Продвинутые агенты и MAS",
    description: "Мультиагентные системы, автономные агенты, облачное развертывание",
    skills: ["Мультиагентные системы", "Автономная работа", "Облачный деплой", "Мониторинг (Langfuse)"],
    project: "Автономная MAS система",
  },
]

export const tools = {
  editors: [
    { name: "VS Code", description: "Бесплатный редактор кода с расширениями для ИИ" },
    { name: "Cursor", description: "IDE с встроенным ИИ-ассистентом" },
    { name: "Cline", description: "Расширение VS Code для работы с ИИ-агентами" },
    { name: "Claude Code", description: "Терминальный ИИ-агент от Anthropic" },
  ],
  llm: [
    { name: "ChatGPT / GPT-4o", description: "Универсальная модель от OpenAI" },
    { name: "Claude Sonnet/Opus", description: "Модели от Anthropic с длинным контекстом" },
    { name: "Gemini Pro", description: "Модель от Google с мультимодальностью" },
    { name: "DeepSeek", description: "Открытая модель с сильным reasoning" },
  ],
  platforms: [
    { name: "v0.dev", description: "Генерация UI компонентов от Vercel" },
    { name: "Vercel", description: "Платформа для деплоя веб-приложений" },
    { name: "Supabase", description: "Backend-as-a-Service с базой данных и авторизацией" },
    { name: "n8n", description: "No-code платформа для автоматизации" },
    { name: "Cloudflare", description: "Облачная платформа с Auto RAG" },
    { name: "GitHub", description: "Хостинг репозиториев и GitHub Pages" },
  ],
  frameworks: [
    { name: "Next.js", description: "React-фреймворк для веб-приложений" },
    { name: "LangGraph", description: "Фреймворк для создания ИИ-агентов" },
    { name: "LlamaIndex", description: "Фреймворк для RAG приложений" },
    { name: "Playwright", description: "Инструмент для E2E тестирования" },
  ],
}
