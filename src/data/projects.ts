export type ProjectStatus = "ok" | "warn" | "idle";

export const adminRows = [
  { id: "ORD-2041", client: "Northwind", status: "ok" as ProjectStatus, amount: "124 800 ₽", eta: "2ч" },
  { id: "ORD-2042", client: "Helix Ops", status: "warn" as ProjectStatus, amount: "86 400 ₽", eta: "6ч" },
  { id: "ORD-2043", client: "Kite Lab", status: "ok" as ProjectStatus, amount: "54 200 ₽", eta: "1ч" },
  { id: "ORD-2044", client: "Orbit", status: "idle" as ProjectStatus, amount: "19 000 ₽", eta: "н/д" },
  { id: "ORD-2045", client: "Harbor", status: "ok" as ProjectStatus, amount: "241 000 ₽", eta: "4ч" },
];

export const projects = [
  {
    id: "admin",
    title: "Admin Dashboard",
    lead: "Админка с фильтрами, таблицей и живыми графиками.",
    tech: ["React", "TypeScript", "RTK", "SCSS"],
  },
  {
    id: "analytics",
    title: "Analytics Platform",
    lead: "Аналитика: метрики, серии, динамические срезы.",
    tech: ["Next.js", "TypeScript", "Zustand", "Tailwind"],
  },
  {
    id: "saas",
    title: "SaaS Platform",
    lead: "Сервисный UI со сложными состояниями и адаптивными экранами.",
    tech: ["React", "Next.js", "TypeScript"],
  },
  {
    id: "motion",
    title: "Interactive Web Experience",
    lead: "Интерфейс про motion, отклик и визуальный ритм.",
    tech: ["React", "CSS", "TypeScript"],
  },
] as const;
