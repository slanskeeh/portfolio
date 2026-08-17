export const siteName = "Максим Герасименко";
export const siteTitle = "Максим Герасименко · Frontend Developer";
export const siteDescription =
  "Frontend developer. Сложные интерфейсы, админ-панели и сервисы с данными. React, Next.js, Vue, Nuxt. Портфолио Максима Герасименко.";

export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (explicit) return explicit;

  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL?.replace(/\/$/, "");
  if (production) return `https://${production}`;

  const preview = process.env.VERCEL_URL?.replace(/\/$/, "");
  if (preview) return `https://${preview}`;

  return "http://localhost:3000";
}
