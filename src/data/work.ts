export type WorkLink = {
  label: string;
  href: string;
};

export type WorkItem = {
  id: string;
  title: string;
  lead: string;
  tech: string[];
  live?: WorkLink;
  surfaces: string[];
  facts?: { label: string; value: string }[];
};

export const workItems: WorkItem[] = [
  {
    id: "shashlyk",
    title: "Шашлычный дом",
    lead: "Кафе в Волгодонске. Каталог, вход по SMS, профиль, бонусы, промокоды, лояльность, онлайн-заказ и статусы в реальном времени. Админка: каталог, категории, заведения, промокоды и проценты начисления бонусов. Собрал целиком, frontend и backend.",
    tech: ["React", "Next.js", "TypeScript", "SCSS", "PostgreSQL", "Selectel"],
    live: { label: "Открыть сайт", href: "https://shashlychniy-dom.ru/" },
    surfaces: ["Публичный сайт", "Админка"],
    facts: [
      { label: "роль", value: "Fullstack" },
      { label: "заказы", value: "realtime" },
      { label: "инфра", value: "Selectel" },
    ],
  },
  {
    id: "mosokna",
    title: "Московские окна",
    lead: "Сайт оконной компании. Упор на SEO и поисковую выдачу: структура страниц, индексация, скорость и вёрстка под органический трафик.",
    tech: ["React", "Next.js", "TypeScript", "SCSS Modules"],
    live: { label: "Открыть сайт", href: "https://mosokna.ru/" },
    surfaces: ["Публичный сайт", "SEO"],
    facts: [
      { label: "фокус", value: "SEO" },
      { label: "стек", value: "Next.js" },
      { label: "стили", value: "SCSS modules" },
    ],
  },
  {
    id: "panel",
    title: "Социологическая панель",
    lead: "Публичная панель опросов плюс внутренний конструктор: создание и редактирование опросов, статистика. В админке аналитика, пользователи, рассылки, кодировка и управление опросами.",
    tech: ["React", "TypeScript", "SCSS Modules"],
    live: {
      label: "Открыть панель",
      href: "https://xn--80aahicnbrfhudbbuvi6fza3ipc.xn--p1ai/",
    },
    surfaces: ["Публичная панель", "Конструктор опросов", "Админка"],
  },
  {
    id: "sarmat",
    title: "Сармат",
    lead: "Сайт охранной компании и админка: системы на объектах, посетители, кнопки безопасности, тревога и стримы с камер в реальном времени.",
    tech: ["Vue 3", "Pinia"],
    live: { label: "Открыть сайт", href: "https://sarmat-ohrana.ru/" },
    surfaces: ["Публичный сайт", "Админка", "Видеостримы"],
  },
  {
    id: "pokolenie",
    title: "Фонд «Поколение»",
    lead: "Сайт благотворительного фонда и админка: мероприятия, пользователи, досуговые центры, волонтёры, задачи, пресс-центр и аналитика.",
    tech: ["Vue 3", "Pinia"],
    live: { label: "Открыть сайт", href: "https://fondpokolenie.ru/" },
    surfaces: ["Публичный сайт", "Админка"],
  },
  {
    id: "flagman",
    title: "Флагман",
    lead: "Сайт застройщика жилых комплексов. Интерфейс, анимации, переходы между экранами и SEO.",
    tech: ["Nuxt", "Vue", "TypeScript"],
    live: { label: "Открыть сайт", href: "https://flagmankrd.ru/" },
    surfaces: ["Публичный сайт", "SEO", "Motion"],
    facts: [
      { label: "фокус", value: "motion" },
      { label: "поиск", value: "SEO" },
      { label: "стек", value: "Nuxt" },
    ],
  },
  {
    id: "cuba",
    title: "Pizza Cuba",
    lead: "Публичная витрина и админка. Интерфейс, общение с API и обработка заказов.",
    tech: ["Nuxt", "Vue", "TypeScript"],
    live: { label: "Открыть сайт", href: "https://pizza-cuba.ru/" },
    surfaces: ["Публичный сайт", "Админка"],
  },
];
