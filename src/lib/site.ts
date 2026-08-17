export const siteName = "Максим Герасименко";
export const siteTitle = "Максим Герасименко · Frontend Developer";
export const siteDescription =
  "Frontend developer. Сложные интерфейсы, админ-панели и сервисы с данными. React, Next.js, Vue, Nuxt. Портфолио Максима Герасименко.";

function trimSlash(value: string) {
  return value.replace(/\/$/, "");
}

export function getBasePath() {
  const value = process.env.NEXT_PUBLIC_BASE_PATH?.trim();
  if (!value || value === "/") return "";
  return `/${value.replace(/^\/|\/$/g, "")}`;
}

export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return trimSlash(explicit);

  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL?.replace(/\/$/, "");
  if (production) return `https://${production}`;

  const preview = process.env.VERCEL_URL?.replace(/\/$/, "");
  if (preview) return `https://${preview}`;

  if (process.env.GITHUB_ACTIONS) {
    const owner = process.env.GITHUB_REPOSITORY_OWNER;
    const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
    if (owner && repo) {
      if (repo === `${owner}.github.io`) return `https://${owner}.github.io`;
      return `https://${owner}.github.io/${repo}`;
    }
  }

  return "http://localhost:3000";
}
